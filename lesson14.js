//class


// BASE
// class User {
//
//     age = 23 //свойство класса. Заносятся в экзепляр - User
//     someFunc = () => {}
//     someFunc2 = function () {}
//
//     constructor(name) {  //специальный метод конструктор
//         this.name = name
//     }
//     sayHi() {
//         console.log(this.name)  // методы заносятся в прототип - User.prototype
//     }
// }
// const user = new User("Alex")
// console.log(user)

/*
User.prototype.sayHi = function() {
    console.log(this.name)
}*/


// ========== NOT CLEAN SUGAR ==========
//1  [[isClassConstructor]] ---> can not call class without new - это гарантирует нам, что не будет пробме с this

// class Test {}
//
// Test() // this --> undefined ---> window
// new Test () //this --> window


// 2 string repr

// class Test {} //type function
// function User () {}
//
// console.log(Test)
// console.log(User)


// 3 inside class ---> use strind

// 4 все методы класса являются неперечисляемыми (смотреть дескрипторы свойств (enumerable))


// ============ static =========== - записывает свойство или метод в сам класс

/*class Test {
    static defaultName = "Default"
    static hi = function (){}
}

const test = new Test()

console.log(test.defaultName) // undefined

    function User (){
    User.defaultName = "Default"
        User.hi = function (){}

    }
    console.log(User)*/


// class User {
//     static MAX_NAME_LENGTH = 20
//     static validateUserName = (name) => {
//         if(name.left > USer.MAX_NAME_LENGTH){
//             throw new Error('Invaid name')}
//     }
//
//     constructor(name){
//        User.validateUserName(name)
//         this.name = name
//     }
// }
//
// const alex = new User("Alex") //{name: 'Alex'}
//
//
// class TodoApi {
//     static getTodos(){}
//     static deleteTodo(id){}
// }
//
// TodoApi.getTodos()
// TodoApi.deleteTodo()


// ========== PRIVATE FIELD ==========
//
// class User {
//     #name; // гарантирует, что никто снаружи не сможет обратиться
//
//     constructor(name) {
//         this.#name = name
//     }
//
//     getName() {
//         return this.#name
//     }
//     setName(value){
//         return this.#name = value
//     }
//     get name() {  //тоже самое, что и сверху
//         return this.#name
//     }
//
//     set name(value){
//         return this.#name = value
//     }
// }
//
// const alex = new User("Alex")
//
// // console.log(alex.#name) -- Error
// // console.log(alex.getName())
// // alex.setName("New name")
//
// console.log(
//     alex.name
// )
// alex.name = "New name"
// console.log(
//     alex.name
// )


//__proto__ - это функция

// ========== EXTENDS ========

// function Car() {}
// Car.prototype.run = function () {
//     console.log(this.model + '' + 'running')
// }
//
// function Ford(model){
//     this.model = model
// }
// Ford.prototype.fordRun = function (){
//     console.log('Ford run')
// }
// Ford.prototype.__proto__ = Car.prototype //объединяет два
//
// const mondeo = new Ford( 'Mondeo')
//
// mondeo.fordRun()
// mondeo.run()


/*class Car {
    static WHEELS_COUNT = 4
    run() {
        console.log('Car running')
    }
}

class Ford extends Car { //Ford наследует все, что есть у Car - 1) Ford.prototype.__proto__ = Car.prototype 2) Ford.prototype = Car
    fordRun() {
        console.log('Ford running')
    }
}

console.log(Ford.WHEELS_COUNT)*/


// ======== super ======


class Car {
    constructor(name) {
        //this = {}
        //return this
        this.name = name
        console.log('Car constructor')
    }

    showModel() {
        console.log(this.name)
    }
}

class Ford extends Car {
    constructor(name) {
        //console.log('Fors constructor before super')
        super(name) //вызывается constructor класса Car - создает экземпляр
        //console.log('Fors constructor after super')
        //console.log(this)
    }
    showModel() {
        super.showModel()
    }
}


class Opel extends Car {
    constructor(name) {
        super(name) //вызывается constructor класса Car - создает экземпляр
    }
    showModel() {
        super.showModel()
    }
}

const ford = new Ford('Mondeo')
console.log(ford)

new Opel('Opel')

// в JS наследование множественное
// super работает только на один уровень --> super.super - error




const arr =[
    class{
    constructor(n) {this.name = n}
},
    class{
        constructor(n) {this.name = n}
    }]

arr.forEach(c => {
    const e = new c("Hello")
    console.log(e)
})