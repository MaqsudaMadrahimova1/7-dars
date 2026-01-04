
1-misol

class Person{
    constructor(name,age){
        this.name = name
        this.age = age 
    }
    greet(){
        return { 
        name:this.name,
        age:this.age
        };
    }
}
let info = new Person("Kimsan",25)
console.log(info.greet());


//2-misol

// class BankAccount {
//     constructor(initialBalance) {
//         this.balance = initialBalance;
//     }
//     deposit(amount) {
//         this.balance += amount;
//         console.log(`${amount}  qo'shildi. Joriy balans: ${this.balance}`);
//     }
//     withdraw(amount) {
//      if (amount > this.balance) {
//      console.log("Pul yo'q minusga girmidi.");
//     } else {
//     this.balance -= amount;
//     console.log(`${amount}  yechildi. Qolgan balans: ${this.balance}`);
//  }
//  }
// }
// const myAccount = new BankAccount(1000);
// myAccount.deposit(500);   
// myAccount.withdraw(200);  
// myAccount.withdraw(2000);  




//3-misol

// class Rectangle{
//     constructor(width,height){
//         this.width = width
//         this.height = height

//     }
//     area(){
//         let yuza = this.width * this.height
//         return yuza;
//     }
//     perimeter(){
//         let per = 2*(this.width + this.height)
//         return per;
//     }
// }
// const rectangle1 = new Rectangle(3,4)
// console.log(rectangle1.area());


//4-misol

// class Student{
//     constructor(name,id,grades){
//         this.name = name 
//         this.id = id
//         this.grades = grades
//     }
// calculateAverange(){
//     let sum = this.grades.reduce((a, b) => a + b);
//     return sum / this.grades.length;
//     }
// }

// const student1 = new Student ("Kimxon",390,[4,5,5,4]);
// console.log(student1.calculateAverange());


//5-misol

// class Clock {
//     displayTime() {
//       const now = new Date();
//       return now.toLocaleTimeString();
//     }
//   }
  
//   let clock = new Clock();
  
//   setInterval(() => {
//     console.log(clock.displayTime());
//   }, 1000);
  
  


//6-misol

// class Employee{
//     constructor(name,position,salary){
//         this.name = name
//         this.position = position
//         this.salary = salary
//     }
//     giveRaise(pul){
//     this.salary += pul;
//     return this.salary
//     }
// }
// let employee1 = new Employee("Hari","dasturchi",2000)
// employee1.giveRaise(100)
// console.log(employee1.salary);

//7-misol

// class Order{
//    constructor(h=[]) {
//     this.items = h
//    }
//    addItems(name,price){
//    this.items.push([name,price])
//    }
//    removeItems(name){
//     for (let i = 0; i < this.items.length; i++) {
//      if (this.items[i][0] === name) {
//     this.items.splice(i, 1);
//             break; 
//  }
//  }
// }
//    print() {
//     for (let i of this.items) {
//       console.log(i[0] + " - " + i[1]);
//     }
//   }
//    calculatorTotal() {
//     let total = 0;
//     for (let i of this.items) {
//       total += i[1];
//     }
//     return total;
//   }

// }
// const order1 = new Order();
// order1.addItems("Sinhao",10)
// order1.addItems("Kanxe",9)
// // order1.print()
// order1.removeItems("Sinhao")
// order1.print()
// console.log(order1.calculatorTotal());





//8-misol

// class Calculator{
//     constructor(a,b){
//         this.a = a
//         this.b = b
//     }
//     add(){
//     let q = this.a + this.b
//     return q;
//     }
//     subtract(){
//     let k = this.a - this.b
//     return k;  
//     }
//     multiply(){
//     let m = this.a * this.b
//     return m;
//     }
//     divide(){
//     let d = this.a / this.b
//     return d;
//     }

// }
// let calculator1 = new Calculator(6,4)
// console.log(calculator1.multiply());


//9-misol

// class Stack{
//     constructor(w = []){
//         this.items = w
//     }
//     push(m){
//         this.items.push(m);
//     }
//     pop(){
//         return this.items.pop();
//     }
//     isEmpty(){
//        return this.items.length === 0;
//     }
//     print(){
//         console.log(this.items);
        
//     }
     
// }
// let stack1 = new Stack([6,5,3])
// stack1.push(8)
// stack1.print()
// console.log(stack1.isEmpty());





//10-misol

// class Vehicle{
//    constructor(speed,comfort){
//     this.speed = speed
//     this.comfort = comfort
//    }
// }
// class Car extends Vehicle{
//     constructor(speed,comfort,fuel){
//         super(speed,comfort)
//         this.fuel = fuel
//     }
// }
// let newCar = new Car(300,"salon","gasoline")
// console.log(newCar);
