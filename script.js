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


/* Завдання 2.
Реалізуйте клас MyString, який матиме наступні методи: 
метод reverse(), який параметром приймає рядок, 
    а повертає її в перевернутому вигляді, 
метод ucFirst(), який параметром приймає рядок, 
    а повертає цю ж рядок, зробивши її першу букву заголовної 
та метод ucWords(), який приймає рядок 
    і робить капіталізації першої літери кожного слова цього рядка.
 */

 class MyString{
    constructor(text){
        this.text = text
    }
    reverse(text){
        // let reverseString = "";
        // for (let i = text.length - 1; i >= 0; i--) {
        //     reverseString += text[i];
        // }
        // return reverseString;
        return text.split("").reverse().join("");
    }
    ucFirst(text){
        return text.charAt(0).toUpperCase() + text.slice(1);
    }
    ucWords(text){
        // let ucWordsStr = text.toLowerCase().split(' ');
        // for (let i = 0; i < ucWordsStr.length; i++) {
        //     ucWordsStr[i] = ucWordsStr[i].charAt(0).toUpperCase() + ucWordsStr[i].substring(1);     
        // }
        // return ucWordsStr.join(' '); 
        return text.toLowerCase().split(' ').map(word => word.charAt(0).toUpperCase()+word.slice(1)).join(' ');
    }

 }

console.log('Завдання 2');

const str = new MyString();

console.log(str.reverse('IVAN')); //виведе 'NAVI'
console.log(str.ucFirst('arsenal')); //виведе 'Arsenal'
console.log(str.ucWords('arsenal arsenal arsenal')); //виведе 'Arsenal Arsenal Arsenal'
