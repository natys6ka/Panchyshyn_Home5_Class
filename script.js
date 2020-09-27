/* Завдання 1.
Реалізуйте клас Worker(Працівник), 
який буде мати такі властивості: firstName(ім'я), secondName (прізвище), 
rate(ставка за день роботи), days(кількість відпрацьованих днів). 
Також клас повинен мати метод getSalary(), який буде виводити зарплату працівника. 
Зарплата - це множення ставки rate на кількість відпрацьованих днів days.
 */

 class Worker{
    constructor (firstName, secondName, rate, days){
        this.firstName = firstName, 
        this.secondName = secondName, 
        this.rate = rate, 
        this.days = days
     }
     getSalary() {
        return (`Зарплата ${this.secondName} ${this.firstName} - ` + (this.rate * this.days)) 
     }
 }

 console.log(`Завдання 1`)
const worker = new Worker('Ivan', 'Ivanov', 10, 31);
console.log(worker.firstName); // виведе 'Ivan'
console.log(worker.secondName); //виведе 'Ivanov'
console.log(worker.rate); //виведе 10
console.log(worker.days); //виведе 31
console.log(worker.getSalary()); //виведе 310 - тобто 10*31
