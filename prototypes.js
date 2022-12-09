//prototypes - предшественник

//----------Example 1 ----------
/*
const a ={
    name: 'a',
    showName() {
        console.log(this.name)
    }
}

const b = {
    name: 'b',
    //[[Prototype]]: a
}
b.__proto__ = a //с помощью прото, у объекта мы можем просетать скрытое свойство
//a является прототипом объекта b. JS сначала ищет свойство у метода b и если свойста нет, то ищет в прототипе.
console.log(b)
b.showName()*/

//----------Example 2 ----------

// const baseUser = {
//     baseAge: 18
// }
//
// const user = {
//     defaultNick: "defaultUser"
// }
// user.__proto__ = baseUser
//
// const alex = {
//     name: 'Alex'
// }
//
// alex.__proto__ = user
// baseUser.__proto__ = null //указать тут alex нельзя, так как получится зацикливание
//
// console.log(alex.baseAge)

//----------Example 3 ----------

/*
const arr = () => {}
function User () {}
const User = {
    prototype: {
        constructor: User
    }
}
function bar () {}
const bar = {
    prototype: {
        constructor: bar
    }
}

console.dir(arr)
console.dir(User)
console.dir(bar)
//все функции имеют свойство prototype с свойством constructor, который равен ссылке на эту же функцию
*/

//----------Example 4 ----------

// const userPrototype = {} // User.protoType //{constructor: userCreator
/*


function UserCreator(name, age){
    // const newUser = {}   --> this = {}

    this.name = name
    this.age = age

/!*    newUser.__proto__ = userPrototype*!/
    //return newUser --> return this
}

UserCreator.prototype.showName = function (){
    console.log(this.name) // this - то что слева от точки
}

const hanna = new UserCreator("Hanna", 23) //hanna.__proto__ = UserCreator.prototype
const alex = new UserCreator("Alex", 29) //alex.__proto__ = UserCreator.prototype
//alex.__proto__ --->{constructor: UserCreator.prototype, showName: F} <--- UserCreator.prototype
// const john = userCreator("John", 27)

hanna.showName()
alex.showName()
// john.showName()*/

//----------Example 5 ----------
//X.__proto__ === XConstructor.prototype
// X.__proto__ ---> {constructor: } <--- XConstructor.prototype


const a = {} // undefined
a.__proto__ === Object.prototype // true
(() => {}).__proto__ === Function.prototype //true
("Hello").__proto__ === String.prototype // true
true.__proto__ === Boolean.prototype // true
Object.__proto__ === Function.prototype //true
Function.__proto__ === Function.prototype //true
Array.prototype.__proto__ === Object.prototype //true
Function.prototype.__proto__ === Object.prototype //true
Object.prototype.__proto__ === null //true
[].propertyIsEnumerable() // false [].__proto__ ===> Array.prototype.__proto__ ---> Object.prototype.

Object.prototype.hello = "Hello"
true.hello // "Hello"
(() => {}).hello //"Hello"
("Hello").hello // "Hello"

//----------Example 6 ----------
// function User() {}
//
// const alex = new User()  //{}.__proto__ --> {constructor: User} <-- User.prototype
// const hanna = new alex.constructor() //--> new User()

//----------Example 7 ----------
function User() {}
const alex = new User()
alex.__proto__ === User.prototype // true
User.prototype.__proto__ === Object.prototype // true
