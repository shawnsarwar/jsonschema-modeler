require("json-editor");
require("jquery");
require("selectize");

window.Mark = require("markup-js");

function translateSchema(schema, path = ""){
    console.log("path", path);
    for(var key in schema) {
        var node = schema[key]
        console.log("node", node)
        if (!schema.hasOwnProperty(key)){continue;}
        if (isObject(node) || isArray(node)){
            console.log('down into', key, node);
            translateSchema(node, path+"/"+key);
        }
        else{
            console.log("terminal", node);
        }
    };
}


function isObject(obj) {
  return obj !== null && typeof obj === 'object';
}

function isArray(obj){
  return obj !== null && typeof obj === 'array';
}



window.translateSchema = translateSchema;

