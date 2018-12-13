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

gotsCallMaybe(result.body[0].expression.expressions[2], "" + 2 + " " + 2);

