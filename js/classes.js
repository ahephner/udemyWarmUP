//classes are like containers you can define functions and vars in and then use them other places

class animal {
    //this is a method which is a function in a class

    constructor(name, species){
        //property or variable in a method
        //this returns the parameter without it if you cl dog outside of the class there is nothing
        this.name = name;
        this.species = species.toLowerCase();
        //dont need to take in a parameter
        this.height = 25;  
    }

    speak(){
        console.log('woof');
    }
    //overwrite constructor properity
    newName(name){
        this.name = name;
    }
    //return value in a class
    heightToCM(){
        return this.height *  2.54; 
    }
}

var dog = new animal('jake', 'DOG'); 
//notice weight just assigned
console.log(dog);
dog.speak(); 

dog.newName('joey');
console.log(dog);


console.log(dog.heightToCM());
