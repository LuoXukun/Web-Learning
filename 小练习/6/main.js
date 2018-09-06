// a.name = name1 b.name = name2;

function obj(name){
    //(1)
    if(name) {
        var obj = {};
        obj.name = name;
        return obj;
    }
}
//obj.(2) = "name2";
obj.prototype.name = "name2";
var a = obj("name1");
console.log(a.name);
var b = new obj;

console.log(b.name);