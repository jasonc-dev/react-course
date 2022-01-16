// primitives: number string boolean
// More complex types: arrays, objects
// function types, parameters

// primitives

// let age: number = 24;
let age: number;
age = 12.1212;

let userName: string;
userName = "Max";

let isInstructor: boolean;
isInstructor: true;

// More complex types

let hobbies: string[];
hobbies = ["sports", "cooking"];

type Person = { name: string; age: number }; // object type definition

let person: Person;

person = {
  name: "max",
  age: 32,
};

// let people: {
//   name: string;
//   age: number;
// }[]; // [] = store an array of such objects

let people: Person[];

// Type inference

// let course = "React = The Complete Guide";
// course = 123124; // by default typescript infers as many types as possible. do not have to explicitly state.

let course: string | number = "React = The Complete Guide";
course = 12314;

// Functions & types

function add(a: number, b: number) {
  return a + b;
}

function print(value: any) {
  console.log(value);
}

// Generics

function insertAtBeginning<T>(array: T[], value: T) {
  const newArray = [value, ...array];
  return newArray;
}

const demoArray = [1, 2, 3];

const updatedArray = insertAtBeginning(demoArray, -1); // [-1, 1, 2, 3]
insertAtBeginning(["a", "b", "c"], "d");

// updatedArray[0].split(""); // split is not a method on the number
