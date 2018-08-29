var object = { b: { c: 4 }, d: [{ e: 5 }, { e: 6 }] }; 

console.log(parse(object, 'b.c')== 4 )//true 
console.log(parse(object, 'd[0].e')== 5 )//true 
console.log(parse(object, 'd.0.e')== 5 )//true 
console.log(parse(object, 'd[1].e')== 6 )//true 
console.log(parse(object, 'd.1.e')== 6 )//true 
console.log(parse(object, 'f')== 'undefined' )//true

function parse(obj, str) {
    str.replace('[', '.').replace(']', '').split('.').map(function(item) {
        obj = obj[item];    
    })
    return obj || 'undefined';
}