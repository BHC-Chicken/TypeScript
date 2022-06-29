// boolean
let isDone: boolean = false;
isDone = true;
console.log(typeof isDone);
let isOk: Boolean = true;

// number
let decimal: number = 6; // 10진수
let hex:number = 0xf00d; // 16진수
let binary:number = 0b1010; // 2진수
let octal: number = 0o744; // 8진수
let notANumber: number = NaN; // NaN
let underScoreNum: number = 1_000_000; // 언더바를 통해 알아보기 쉽게 표현가능

//string
let myName: string = "Mark";
myName = 'mark'; // 작은 따옴표 큰 따옴표 상관없음.
let fullName: string = 'HyeonCheol Park';
let age: number = 25;

let sentence: string = `Hello, My name is ${fullName}.
I'll be ${age + 1} years old next year.`;

console.log(sentence);

// Symbol
// 프리미티브 타입의 값을 담아서 사용
// 고유하고 수정불가능한 값으로 만듦
// 주로 접근을 제어하는데 쓰는 경우가 많음
console.log(Symbol('foo')===Symbol('foo')); // false
const sym = Symbol();
const obj = {
    [sym]: "value",
};

obj[sym]

// Undefined & null
// let MyName: string = null; // strictNullChecks: ture 일 경우 불가
let v: void = undefined;
let union: string | null = null; // string 과 null 둘 다 가능
union = "Mark";
