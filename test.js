var esprima = require('esprima')
var fs = require('fs');

//var data = fs.readFileSync('lib-bundle-62c0d04982.js');
var data = fs.readFileSync('tok.js');
var result = esprima.parseScript(data.toString(), {range: true});

function gotsCallMaybe(expression, strm) {
    if(expression.type == "CallExpression" && expression.callee.type == "Identifier" && expression.callee.name == "define") {
        console.info("define " + expression.arguments[0].raw  + " " + expression.range);
    }else{
        console.info(strm + " " + expression.type + " " + expression.range);
    }
}

for(var i = 0; i < result.body.length; i++) {
    if(result.body[i].type == "ExpressionStatement") {
        if(result.body[i].expression.type == "SequenceExpression") {
            var expressions = result.body[i].expression.expressions;
            for(var j = 0; j < expressions.length; j++) {
                gotsCallMaybe(expressions[j], "" + i + " " + j);
            }
        }else{
            gotsCallMaybe(result.body[i], ""+i);
        }
    }else{
        console.info(i + " " + result.body[i].type + " " + result.body[i].range);
    }
}
