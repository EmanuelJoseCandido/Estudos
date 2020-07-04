class Pessoa{
    constructor(){
        this.name;
        this.age;
        this.sex;
        this.yearBorn;
    }

    calculatAge(){
        var age = new Date();
        this.age = age.getFullYear() - this.yearBorn;
    }

    addName(name){
        this.name = name;
    }
    addYearBorn(yearBorn){
        this.yearBorn = yearBorn;
    }

    addSex(sex){
        this.sex = sex;
    }

    showAge(){
        if(this.age != null)
            console.log(this.age);
    }

    showName(){
        if(this.name.length != 0)
            console.log(this.name);
    }

    showSex(){
        if(this.sex.length != 0)
            console.log(this.sex);
    }

    showDetails(){
        console.log(`Mr.: ${this.name}`); 
        console.log(`Sex: ${this.sex}`);
        console.log(`Age: ${this.age}`);
        if(this.age > 17){
            if(this.sex === "Masculino"){
                console.log(`Your give 5000 Akz for get in party.`);
            }
            else if(this.sex === "Femenino"){
                console.log(`Your give 2500 Akz for get in party.`);
            }
            else{
                console.log('Your Sex not exist.');
            }
        }
        else{
            console.log('You can\'t get in, you have small age.');
        }
    }
}

var myPessoa = new Pessoa();

myPessoa.addName('Emanuel');
myPessoa.addYearBorn(2005);
myPessoa.addSex("Masculino");
myPessoa.calculatAge();

myPessoa.showDetails();
