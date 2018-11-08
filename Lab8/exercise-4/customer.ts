export class Customer {
    private firstName: string;
    private lastName: string;
    private age: number;


    constructor(firstName: string, lastName: string, age: number){
        this.firstName = firstName;
        this.lastName = lastName;
        this.age = age;
    }

    public greeter(){
        console.log(`Hello\nFirst Name: ${this.firstName}\nLast Name:  ${this.lastName}\nAge:  ${this.age}`);
    }

    public GetAge(){
        console.log(`Called GetAge() function\nAge: ${this.age}`);
    }


}