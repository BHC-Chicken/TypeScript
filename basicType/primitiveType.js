"use strict";
// boolean
let isDone = false;
isDone = true;
console.log(typeof isDone);
let isOk = true;
// number
let decimal = 6; // 10진수
let hex = 0xf00d; // 16진수
let binary = 0b1010; // 2진수
let octal = 0o744; // 8진수
let notANumber = NaN; // NaN
let underScoreNum = 1000000; // 언더바를 통해 알아보기 쉽게 표현가능
//string
let myName = "Mark";
myName = 'mark'; // 작은 따옴표 큰 따옴표 상관없음.
let fullName = 'HyeonCheol Park';
let age = 25;
let sentence = `Hello, My name is ${fullName}.
I'll be ${age + 1} years old next year.`;
console.log(sentence);
// Symbol
// 프리미티브 타입의 값을 담아서 사용
// 고유하고 수정불가능한 값으로 만듦
// 주로 접근을 제어하는데 쓰는 경우가 많음
console.log(Symbol('foo') === Symbol('foo')); // false
const sym = Symbol();
const obj = {
    [sym]: "value",
};
obj[sym];
// Undefined & null
// let MyName: string = null; // strictNullChecks: ture 일 경우 불가
let v = undefined;
let union = null; // string 과 null 둘 다 가능
union = "Mark";
// object
// create by object literal
const person1 = { name: 'Park', age: 25 };
// person1 is not "object" type.
// person1 is "{name: 'Park', age: 25}" type
// create by object.create
const person2 = Object.create({ name: 'Park', age: 25 });
// primitive type 이 아닌 것을 나타내고 싶을때 사용
// not number, string, boolean, bigint, symbol, null, or undefined
let obj1 = {};
obj1 = { name: 'Park' };
// Array
// 원래 JS에서 array는 객체
let list = [1, 2, 3];
//let list: Array<number> = [1,2,3];
// Tuple
let x;
x = ["hello", 25];
// x=[10,"hello"]; 불가능
// x[2] = "world" 튜플이 두자리 이므로 3번쨰 부터는 undefind 이므로 사용 불가
// any
// 최대한 쓰지 않는게 좋음.
function returnAny(message) {
    console.log(message);
}
const any1 = returnAny("리턴은 아무거나 가능");
any1.toString();
// const aNumber: number = maybe;
if (maybe === true) {
    const aBoolean = maybe;
    // const aString: string = maybe; 불가능
}
if (typeof maybe === 'string') {
    const aString = maybe;
    // const aBoolean: boolean = maybe; 불가능
}
// any 보다 type-safe 한 타입
// 컴파일러가 타입을 추론할 수 있게끔 타입의 유형을 좁힘
// 타입을 확정해주지 않으면 다른 곳에 할당 할 수없고 사용할 수 없다.
// 사용 전에 데이터의 일부 유형의 검사를 수행해야 함을 알리는 API에 사용 할 수 있음.
// never
function error(message) {
    throw new Error(message);
}
function fail() {
    return error('failed');
}
function infiniteLoop() {
    while (true) {
    }
}
if (typeof a !== 'string') {
    a;
}
// void
// undefined 만 void에 할당가능.
function returnVoid(message) {
    console.log(message);
    return undefined;
}
const r = returnVoid('리턴이 없음');
