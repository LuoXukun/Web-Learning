function Animal(){}

Animal.prototype.leg=4;

Animal.prototype.tail=true;

var animal=new Animal();

function Cat(){}

Cat.prototype=animal;

Cat.prototype.name='cat';

Cat.prototype.getInfo=function(){

     return "Animal's name:"+this.name+",number of leg:"+this.leg+",has tail:"+Boolean(this.tail);

};

var cat=new Cat();

var a = cat.getInfo();
 console.log(a);