const person = {
   name: "Paola",
   age: 17,
   greet1:()=> {console.log(person.name)},
   greet2: function() {
      console.log(this.name);
   }

}

person.greet1()
person.greet2()
