Compile your TypeScript code: You can compile your TypeScript code into JavaScript using the tsc command. Run the following command to compile your TypeScript file:

tsc myFile.ts
This will generate a JavaScript file with the same name as your TypeScript file.

TABLE OF CONTENTS/TOPICS
Fundamentals
1.How to compile typescript
2.Static typing
3.Functions and Interfaces
4.Classes
5.Classes and Inheritance
6.Generics 
7.Namespaces
8.Enums

Advanced Topics:
Type Declarations, Type Inference, Advanced types, Modules, Type Compatibility, Declaration Merging, Type Assertion and Decorators.

Other Advanced Topics:
1. Async/await
2. Iterators and Generators
3. Type guards using ‘in’ and ‘typeof’
4. Discriminated unions
5. Type narrowing with nullish coalescing and optional chaining operators (?? and ?.)
6. Non-null assertion operator (!)
7. ‘never’ type
8. ‘keyof ‘and ‘typeof’ operator
9. Global types
10. Namespace merging
11. Ambient declarations
12. Type erasure
13. Type assertions with ‘as const’
14. The ‘declare’ keyword
15. Decorator composition
16. The ‘abstract’ keyword
17. The ‘public’, ‘private’, and ‘protected’ access modifiers
18. Advanced class features such as abstract classes, constructor parameter properties, and index signatures for classes.
19. Type Guards (a technique for narrowing down the type of a variable)
20. Intersection Types (a way of combining multiple types into a single type)
21. Type Queries (a way of extracting the type of a variable as a type)
22. Polymorphic this types (a way of defining methods on a class that return the type of the class itself)
23. String Literal Types (a way of defining types that only allow a specific string value)
24. Numeric Literal Types (a way of defining types that only allow a specific numeric value)
25. Readonly Properties (a way of marking certain properties of an object as read-only)
26. Index Signatures (a way of defining the shape of an object with dynamic keys)
27. Conditional types
28. Mapped Types
29. Union Types
30. keyof and Lookup types
31. String literal types
32. Numeric literal types
33. Type aliases
34. Function overloads
35. Mixins


~~~~~~~~~~~~~~~~~~~~~~~~~~~~
Static Typing like c++
let num: number = 42;
let string: string = "I am a string";

------------------------
Functions 
Functions in TypeScript work the same way as they do in JavaScript, but with the added benefit of static typing. You can define the type of the parameters and return value of a function using the same syntax as defining the type of a variable:


function add(x: number, y: number): number {
  return x + y;
}
------------------------
Interfaces
Interfaces allow you to define a contract for an object. They specify the names and types of the properties that an object should have. For example, you can define an interface for a person like this:

    interface Person {
    name: string;
    age: number;
    email?: string; //optional properties
    address?: string; 
    }

    let person: Person = {
        name: 'Alice',
        age: 30,
    };
-----------------------------------
Classes 
Classes allow you to define object blueprints with properties and methods. They are a way of organizing and encapsulating code. For example, you can define a class for a person like this:
  
  class Person {
    name: string;
    age: number;
  
    constructor(name: string, age: number) {
      this.name = name;
      this.age = age;
    }
  
    greet() {
      console.log(`Hello, my name is ${this.name} and I'm ${this.age} years old.`);
    }
  }
This class defines a person with a name property of type string, an age property of type number, and a greet method. You can create an instance of this class like this:
  
  let person = new Person('Alice', 30);
  person.greet(); // Output: "Hello, my name is Alice and I'm 30 years

  --------------------------------------
Classes and Inheritance
Classes and inheritance work in TypeScript in the same way as they do in other object-oriented programming languages. You can define a class using the class keyword, and then use the extends keyword to create a subclass that inherits from the parent class. Here's an example:
  
  
  class Animal {
    name: string;
  
    constructor(name: string) {
      this.name = name;
    }
  
    move(distance: number = 0) {
      console.log(`${this.name} moved ${distance}m.`);
    }
  }
  
  class Dog extends Animal {
    bark() {
      console.log('Woof!');
    }
  }
  
  const dog = new Dog('Rover');
  dog.move(10); // Output: Rover moved 10m.
  dog.bark(); // Output: Woof!
In this example, we define a Animal class with a name property and a move method. We then create a Dog subclass that extends Animal and adds a bark method. We create a new instance of Dog, and then call the move and bark methods.

---------------------
Generics
Generics allow you to create reusable code that can work with a variety of types. You can use generics to create functions or classes that can work with any type, without having to specify the type in advance. Here's an example:

function identity<T>(arg: T): T {
  return arg;
}

const str = identity<string>('Hello, world!'); // Output: Hello, world!
const num = identity<number>(42); // Output: 42
In this example, we define a generic function called identity that takes a single argument of type T and returns the same type. We then call the function twice, once with a string argument and once with a number argument. The TypeScript compiler infers the types based on the arguments we pass in.

-------------------------------
Namespaces (like in c++)
provide a way to group related code together and avoid naming collisions. In TypeScript, you can define a namespace using the namespace keyword and then use dot notation to access its members. Here's an example:

namespace MyNamespace {
  export const myVariable = 42;

  export function myFunction() {
    console.log('Hello, world!');
  }

  export class MyClass {
    // class definition here
  }
}

console.log(MyNamespace.myVariable); // Output: 42
MyNamespace.myFunction(); // Output: "Hello, world!"
const myInstance = new MyNamespace.MyClass(); // create instance of MyClass
In this example, we define a namespace called MyNamespace that contains a variable, a function, and a class. We use the export keyword to make these members available outside of the namespace. We then access these members using dot notation, and create an instance of the MyClass class.

----------------------------------
ENUMS

Enums,a set of named constants, short for enumerations, are a way of giving friendly names to sets of numeric values in TypeScript.
They make it easier to document intent or create a set of distinct cases.
Enums are defined using the enum keyword followed by the name of the enum.
The values of an enum can be any numeric value, including negative numbers.
By default, the first value of an enum is assigned the value of 0, and each subsequent value is incremented by 1. However, you can manually assign values to each enum member.
Enum members can also have string values, but in this case, you have to manually assign values to each member.
Here's an example of how to define an enum:

enum Color {
  Red,
  Green,
  Blue
}
In this example, we define an enum called Color with three members: Red, Green, and Blue. Since we didn't manually assign values to the members, Red is assigned the value 0, Green is assigned the value 1, and Blue is assigned the value 2.

You can also assign custom values to each enum member, like this:


enum Color {
  Red = 1,
  Green = 2,
  Blue = 4
}
In this example, we assign custom values to each member of the Color enum.

You can use enums in switch statements, like this:

let color = Color.Green;

switch (color) {
  case Color.Red:
    console.log("The color is red");
    break;
  case Color.Green:
    console.log("The color is green");
    break;
  case Color.Blue:
    console.log("The color is blue");
    break;
  default:
    console.log("Unknown color");
    break;
}
In this example, we use a switch statement to check the value of the color variable and output a message depending on its value.

-----------------------------------------
Type Declarations (used to define the shape of objects from external libraries or modules)

-Type declarations are used to define the shape of objects or modules from external libraries or modules, which TypeScript can then use to provide better type checking and editor support.

-Type declarations typically come in the form of .d.ts files (declarations files), which are separate from the implementation code and provide only type information.

-Type declarations can be written by hand, generated from source code using tools like dts-gen, or downloaded from external sources like DefinitelyTyped, a repository of type definitions for popular libraries.

-Type declarations can define interfaces, types, classes, enums, namespaces, and more, depending on the structure of the external code being declared.

-Type declarations can also provide additional information like function overloads, optional properties, readonly properties, and more, to help TypeScript catch more errors and provide better autocompletion and documentation.

-Overall, type declarations are an important part of using TypeScript effectively, especially when working with external code. They allow TypeScript to provide better type checking and editor support, which can save time and prevent bugs in your code.
-----------------------------------------
Type Inference (TypeScript's ability to infer types based on context)

-Type inference is a feature of TypeScript that allows the compiler to automatically determine the type of a variable based on its usage.

-This means that you don't always need to explicitly annotate the type of a variable or function parameter, TypeScript will try to infer it for you.

-Type inference can make your code cleaner and more concise, as you don't need to repeat type information that TypeScript can already deduce.

-Type inference works by examining the value assigned to a variable or passed as a function argument and using that information to deduce its type.

-For example, if you assign a number to a variable, TypeScript will infer that the variable is of type number.

-Similarly, if you pass an array of strings to a function that expects an array of strings, TypeScript will infer that the argument is of type string[].

-Type inference is not foolproof, and there are cases where it may not be able to deduce the correct type. In these cases, you may need to explicitly annotate the type.

-To disable type inference and require explicit type annotations for all variables, you can set the noImplicitAny compiler option to true.

-Type inference is one of the key features that sets TypeScript apart from JavaScript and makes it a powerful tool for catching bugs and improving code quality.
-----------------------------------------
ADVANCED types (such as union types, intersection types, type guards, type aliases, and more)

an overview of advanced types in TypeScript:

Union Types: Union types allow you to specify that a value can be one of several types. You use the "|" symbol to separate the types. For example, a variable could be of type string or number:

let variable: string | number;
Intersection Types: Intersection types allow you to combine multiple types into a single type. You use the "&" symbol to combine types. For example, a variable could be of type Person & Serializable:

interface Person {
  name: string;
  age: number;
}

interface Serializable {
  serialize(): string;
}

let variable: Person & Serializable;
Type Guards: Type guards allow you to check the type of a variable at runtime. This is useful when you have a union type and want to perform a different action depending on the actual type of the variable. For example, you could use an if statement to check if a variable is a string:

function isString(variable: string | number): variable is string {
  return typeof variable === "string";
}

let variable: string | number;

if (isString(variable)) {
  console.log("The variable is a string.");
} else {
  console.log("The variable is a number.");
}
Type Aliases: Type aliases allow you to create a new name for an existing type. This is useful when you have a complex type that you want to simplify. For example, you could create a type alias for a function that takes a string and returns a number:

type StringToNumberFunc = (str: string) => number;

let func: StringToNumberFunc;
Conditional Types: Conditional types allow you to create types that depend on other types. This is useful when you want to create a type that changes based on the type of a variable. For example, you could create a type that checks if a variable is an array and returns the type of the array:

type ArrayType<T> = T extends Array<infer U> ? U : never;

let variable: string[] = ["hello", "world"];
let variableType: ArrayType<typeof variable>; // variableType is string
Mapped Types: Mapped types allow you to create a new type by mapping over the properties of an existing type. This is useful when you want to create a new type that is similar to an existing type but with some modifications. For example, you could create a new type that makes all properties of an existing type optional:

type Optional<T> = {
  [P in keyof T]?: T[P];
};

interface Person {
  name: string;
  age: number;
}

let optionalPerson: Optional<Person> = {};
These are just a few examples of the advanced types available in TypeScript. By using these types, you can create more complex and powerful type systems that help catch errors at compile-time and make your code more maintainable.
-----------------------------------------
Modules in Typescript

Syntax:
To define a module, you can use the export keyword to expose the code you want to be available to other parts of your program. For example, if you have a file called math.ts that exports a function called add, you would use the following syntax:

// math.ts
export function add(a: number, b: number): number {
  return a + b;
}
To use the add function in another file, you would use the import statement:

// main.ts
import { add } from './math';

console.log(add(2, 3)); // Output: 5
Note that you can also use export default to export a single default value from a module, which can be imported without braces:

// math.ts
export default function add(a: number, b: number): number {
  return a + b;
}

// main.ts
import add from './math';

console.log(add(2, 3)); // Output: 5
Benefits:
Modules provide a number of benefits, including:

Encapsulation: Each module has its own scope, which means that you can define private variables and functions that are not visible outside the module.

Reusability: Modules can be reused across multiple projects, which can save time and effort.

Maintainability: By organizing your code into separate modules, you can make it easier to maintain and update.

Namespacing: Modules can be used to avoid naming conflicts between different parts of your code.

Load time: By splitting your code into smaller modules, you can reduce the load time of your application, as only the required modules need to be loaded.

Overall, modules are an important feature of TypeScript that can help you write more organized and maintainable code.
-----------------------------------------
Type Compatability (how TypeScript determines if types are compatible with each other)

Type compatibility is a fundamental concept in TypeScript that deals with how the type system determines if types are compatible with each other. TypeScript uses a structural type system, which means that types are considered compatible if their members match. This is in contrast to a nominal type system, where types are considered compatible only if they have the same name or explicitly declare compatibility.

In TypeScript, type compatibility allows for flexibility in how types are used. For example, a function that expects a specific type can be called with an argument that has a compatible type, even if the argument's type is not the same as the expected type.

Type compatibility is determined based on the shape of the types, not their names. This means that two types are compatible if they have the same properties and methods, even if they are declared in different interfaces or classes. Additionally, extra properties on an object are allowed, as long as the required properties match.

TypeScript also supports variance in type compatibility, which means that a type can be considered compatible with a similar type that has more or fewer specific properties. For example, a function that expects an argument of type Animal can accept an argument of type Dog, as Dog is a subtype of Animal.

Type compatibility can be a powerful tool for creating reusable code and for working with third-party libraries. By understanding how type compatibility works in TypeScript, you can write more flexible and maintainable code.
-----------------------------------------
Declaration Merging (combining multiple declarations into a single definition)

Declaration merging is a feature of TypeScript that allows multiple declarations of the same identifier to be merged into a single definition. This can be useful when working with external libraries or when defining interfaces or classes that need to be extended later.

Some examples of declaration merging in TypeScript include:

Merging interface declarations: If two interfaces with the same name are defined in separate files, TypeScript will automatically merge them into a single interface definition.

Merging function declarations: If two functions with the same name are defined in separate files, TypeScript will merge them into a single function definition.

Merging namespace declarations: If two namespace declarations with the same name are defined in separate files, TypeScript will merge them into a single namespace definition.

Merging class declarations: If two classes with the same name are defined in separate files, TypeScript will merge them into a single class definition.

One important thing to note about declaration merging is that it only works for declarations that have the same name and are defined in the same scope. If two declarations with the same name are defined in different scopes (for example, a global scope and a module scope), they will not be merged.

Overall, declaration merging is a powerful feature of TypeScript that can help simplify code and make it more modular. By allowing multiple declarations to be merged into a single definition, it can make it easier to work with external libraries and extend existing interfaces or classes.
-----------------------------------------
Type Assertion (used to tell the compiler that a value should be treated as a specific type)

TypeScript provides a way to tell the compiler that a value should be treated as a specific type, even if TypeScript's type checker is unable to infer the type.

Type assertion can be used in two ways:

Angle-bracket syntax: <type>value

as syntax: value as type

For example, if you know that a value is a string, but TypeScript thinks it's a union type, you can use type assertion to treat it as a string:

const myValue: string | number = "hello";
const myString: string = <string>myValue; // angle-bracket syntax
const myOtherString: string = myValue as string; // as syntax
Type assertion can be useful when working with third-party libraries or legacy code that doesn't have explicit types defined, as well as when the type system is unable to infer the type of a value.

However, it's important to use type assertion with caution, as it can lead to runtime errors if the assertion is incorrect. It's recommended to use type assertion only when there's no other way to express the type of a value.
-----------------------------------------
Decorators (used to modify the behavior of classes, methods, or properties)

What are decorators?

Decorators are a TypeScript feature that allows you to add metadata or modify the behavior of classes, methods, or properties at design time. They are a form of declarative programming that can simplify the code by separating the concerns of the code logic from the cross-cutting concerns such as logging, caching, security, and validation.

How are decorators used?

Decorators are used by adding an @ symbol before the decorator name, followed by parentheses if the decorator requires arguments. Decorators can be added to classes, methods, or properties. Here's an example of a decorator that logs the execution of a method:

function log(target: Object, key: string, descriptor: PropertyDescriptor) {
  const originalMethod = descriptor.value;
  descriptor.value = function (...args: any[]) {
    console.log(`Executing ${key} with arguments: ${args}`);
    return originalMethod.apply(this, args);
  };
  return descriptor;
}

class MyClass {
  @log
  myMethod(arg1: string, arg2: number) {
    console.log(`myMethod called with arguments: ${arg1}, ${arg2}`);
  }
}

const myObject = new MyClass();
myObject.myMethod('hello', 42);
In this example, the log function is the decorator, and it takes three arguments: the target object (the class), the name of the method, and the property descriptor of the method. It logs the method execution and returns the modified property descriptor.

The @log decorator is added to the myMethod method of the MyClass class. When myMethod is called on an instance of MyClass, the decorator logs the method execution before calling the original method with the same arguments.

What are the types of decorators?

There are four types of decorators in TypeScript:

Class decorators: applied to classes and modify their behavior or metadata.
Method decorators: applied to class methods and modify their behavior or metadata.
Property decorators: applied to class properties and modify their behavior or metadata.
Parameter decorators: applied to the parameters of a class method and modify their behavior or metadata.
What are some use cases for decorators?

Some common use cases for decorators include:

Logging: adding logging statements to methods or classes to track their execution.

Validation: validating input parameters or return values of methods.

Caching: caching the results of method calls to improve performance.

Security: adding authentication or authorization checks to methods or classes.

Dependency injection: injecting dependencies into class constructors or methods.

Routing: defining HTTP routes for Express.js or other web frameworks.

What are the limitations of decorators?

Some limitations of decorators include:

They can only be used with classes, methods, properties, or parameters, not with functions or variables.

They cannot modify the return type or the parameter types of a method.

They can only be applied once per element, and their order of execution is not guaranteed.

They cannot be used with JavaScript's import and export syntax, only with TypeScript's import and export statements.

They are an experimental feature of TypeScript and may change in future releases.

Overall, decorators are a powerful tool in TypeScript that can help you write more modular, reusable, and maintainable code by separating cross-cutting concerns from the core logic of your classes and methods.



---------------------------------
1. Async/await
Async/await is a feature in JavaScript (and TypeScript) that allows developers to write asynchronous code in a synchronous style. It was introduced in ES2017 and has since become a popular way of handling asynchronous operations, such as making HTTP requests or accessing a database.

Using async/await
To use async/await, you must mark a function with the async keyword. This tells the function to return a Promise that resolves to the function's return value. Within the function, you can use the await keyword to wait for a Promise to resolve before continuing execution. For example:

async function getData() {
  const response = await fetch('https://example.com/data');
  const data = await response.json();
  return data;
}
In this example, the function uses the fetch function to make an HTTP request and then uses the await keyword to wait for the response to resolve. Once the response is received, the function uses the await keyword again to parse the response body as JSON. Finally, the function returns the parsed data.

Error handling
When using async/await, you can use a try/catch block to handle errors. If a Promise passed to the await keyword rejects, the execution will jump to the catch block. For example:

async function getData() {
  try {
    const response = await fetch('https://example.com/data');
    const data = await response.json();
    return data;
  } catch (error) {
    console.error('Error fetching data:', error);
  }
}
In this example, the catch block will be executed if there is an error while fetching or parsing the data. The catch block can then handle the error in whatever way is appropriate.

Async functions with Promise.all
Async/await can also be used with Promise.all to execute multiple asynchronous operations in parallel. Promise.all takes an array of Promises and returns a Promise that resolves when all the Promises in the array have resolved. For example:

async function getAllData() {
  const [userData, eventData] = await Promise.all([
    fetch('https://example.com/users').then(response => response.json()),
    fetch('https://example.com/events').then(response => response.json())
  ]);
  return { userData, eventData };
}
In this example, the function uses Promise.all to fetch user and event data in parallel. The function then waits for both Promises to resolve and returns an object with the parsed data.

Overall, async/await is a powerful feature that can simplify the process of writing asynchronous code. By using async/await, developers can write code that looks and behaves more like synchronous code, making it easier to reason about and debug.
---------------------------------
2. Iterators and Generators

Iterators and generators are features in JavaScript that allow you to work with collections of data in a more flexible and powerful way. They provide a way to iterate over a collection of values, one at a time, and can be used for a wide range of purposes.

Iterators
An iterator is an object that defines a sequence of values and provides a way to access them one at a time. The iterator protocol defines two methods that an object must implement in order to be an iterator: next() and done. The next() method returns an object with two properties: value (the current value in the sequence) and done (a boolean that indicates whether the sequence has ended). The done property is set to true when there are no more values to iterate over.

Here's an example of how to create an iterator for an array of numbers:

const numbers = [1, 2, 3];
const iterator = numbers[Symbol.iterator]();

console.log(iterator.next()); // { value: 1, done: false }
console.log(iterator.next()); // { value: 2, done: false }
console.log(iterator.next()); // { value: 3, done: false }
console.log(iterator.next()); // { value: undefined, done: true }

Generators
A generator is a special type of function that allows you to define an iterator in a more concise and flexible way. When a generator function is called, it returns a generator object that implements the iterator protocol. You can use the yield keyword inside a generator function to define the sequence of values that the iterator will produce.

Here's an example of a simple generator function that produces an infinite sequence of random numbers:

function* randomNumbers() {
  while (true) {
    yield Math.random();
  }
}

const iterator = randomNumbers();

console.log(iterator.next()); // { value: 0.123456789, done: false }
console.log(iterator.next()); // { value: 0.987654321, done: false }
console.log(iterator.next()); // { value: 0.555555555, done: false }
Generators can be used for a wide range of purposes, such as iterating over large datasets, generating unique identifiers, and implementing custom control flow structures.

Overall, iterators and generators are powerful features in JavaScript that allow you to work with collections of data in a more flexible and efficient way. They are widely used in modern JavaScript libraries and frameworks, and are essential tools for any advanced JavaScript developer.
----------------------------------
3. Type guards using ‘in’ and ‘typeof’

TypeScript provides type guards that help you narrow down the type of a variable or parameter based on its value. Two commonly used type guards are 'in' and 'typeof'.

'in' type guard
The 'in' operator allows you to check if a property exists on an object. You can use it to narrow down the type of an object based on the presence of a certain property. For example:

interface Circle {
kind: 'circle';
radius: number;
}

interface Square {
kind: 'square';
sideLength: number;
}

type Shape = Circle | Square;

function area(shape: Shape) {
if ('radius' in shape) {
// shape must be a Circle
return Math.PI * shape.radius ** 2;
} else {
// shape must be a Square
return shape.sideLength ** 2;
}
}
In this example, the 'in' operator is used to check if the 'radius' property exists on the 'shape' object. If it does, we know that the shape must be a Circle, so we can safely access the 'radius' property.

'typeof' type guard
The 'typeof' operator allows you to check the type of a variable or parameter at runtime. You can use it to narrow down the type of a variable based on its value. For example:

function double(value: string | number) {
if (typeof value === 'number') {
// value must be a number
return value * 2;
} else {
// value must be a string
return value + value;
}
}
In this example, the 'typeof' operator is used to check if the 'value' parameter is a number. If it is, we can safely multiply it by 2. If it's not a number, we know it must be a string, so we can safely concatenate it with itself.

Type guards are a powerful feature of TypeScript that allow you to write more type-safe code. By using type guards, you can catch errors at compile time instead of at runtime, which makes your code more reliable and easier to maintain.
------------------------------------
4. Discriminated unions

Discriminated unions is a feature in TypeScript that allows you to define a type that can represent several different variants. It is a way of modeling data where the type of the data depends on a discriminant property.

Here's an example of how to define a discriminated union:

interface Square {
  kind: 'square';
  size: number;
}

interface Rectangle {
  kind: 'rectangle';
  width: number;
  height: number;
}

type Shape = Square | Rectangle;
In this example, we define two interfaces, Square and Rectangle, that represent two different shapes. We then define a type Shape that is a union of Square and Rectangle. Notice that each interface has a kind property with a string literal type that identifies the type of the shape.

We can now use the discriminated union to write functions that work with both types of shapes:

function area(shape: Shape) {
  switch (shape.kind) {
    case 'square':
      return shape.size * shape.size;
    case 'rectangle':
      return shape.width * shape.height;
  }
}
In this example, we define a function area that takes a Shape as its argument. We use a switch statement to check the value of the kind property, and then calculate the area of the shape based on its properties.

Using a discriminated union can make your code more type-safe and easier to maintain. It allows you to write functions that work with different types of data without having to resort to runtime type checks or casting.
--------------------------------------
5. Type narrowing with nullish coalescing and optional chaining operators (?? and ?.)

A feature in TypeScript that allows developers to write more concise and safer code when dealing with nullable or undefined values.

Nullish coalescing operator (??)
The nullish coalescing operator (??) allows you to provide a default value for a variable or expression that may be null or undefined. For example, consider the following code:

let foo;
let bar = foo ?? 'default';
console.log(bar);
In this code, the variable foo is undefined, so the nullish coalescing operator returns the default value 'default' and assigns it to the variable bar. The output of the console.log statement will be 'default'.

Optional chaining operator (?.)
The optional chaining operator (?.) allows you to safely access properties and methods of an object that may be null or undefined. For example, consider the following code:

let person = {
name: 'Alice',
age: 30
};
let email = person?.contact?.email;
console.log(email);
In this code, the person object does not have a contact property, so the optional chaining operator returns undefined for the email variable. The output of the console.log statement will be undefined.

Type narrowing with nullish coalescing and optional chaining operators
Together, the nullish coalescing operator and optional chaining operator allow you to narrow the type of a variable based on its nullish or undefined value. For example, consider the following code:

let user = null;
let name = user?.name ?? 'default';
console.log(name);
In this code, the user variable is null, so the optional chaining operator returns undefined for the name variable. The nullish coalescing operator then provides the default value 'default' and assigns it to the name variable. The output of the console.log statement will be 'default'.

TypeScript uses this type narrowing to infer more specific types for variables and expressions, which can help catch bugs earlier in the development process and make code easier to maintain.

--------------------------------------
6. Non-null assertion operator (!)

A feature in TypeScript that allows you to tell the compiler that a variable or property is not null or undefined, even if its type includes these values. This operator is represented by an exclamation mark (!) that you add after the variable or property name.

Here's an example of how to use the non-null assertion operator:

let str: string | undefined = 'hello';
console.log(str!.toUpperCase());

In this example, the variable str has a union type of string or undefined. Normally, if you try to call the toUpperCase() method on this variable, TypeScript will give you a compilation error because it doesn't know whether str is defined or not. However, by adding the non-null assertion operator (!) after str, you are telling TypeScript that you are certain that str is not undefined, so it should allow the method call.

It's important to use the non-null assertion operator carefully, as it can lead to runtime errors if you mistakenly assume that a variable or property is not null or undefined when it actually is. You should only use this operator when you have manually checked that the value is not null or undefined, or when you know that a certain library or API always returns a non-null value.
--------------------------------------
7. ‘never’ type

The 'never' type in TypeScript represents a value that will never occur. It is used to indicate that a function will not return a value, or that a variable cannot be assigned a value. Here are some examples of how the 'never' type can be used:

Function that never returns:

function throwError(message: string): never {
  throw new Error(message);
}
This function takes a string parameter and throws an error with that message. Since the function always throws an error, it will never return a value. Therefore, the return type is 'never'.

Variable that cannot be assigned a value:

let neverVar: never;
neverVar = (() => { throw new Error('Something went wrong'); })();
In this example, we declare a variable 'neverVar' of type 'never'. We then assign it a value by invoking an anonymous function that throws an error. Since the function always throws an error, it will never return a value. Therefore, the type of the expression is 'never', which is compatible with the type of the variable.

The 'never' type is often used in conjunction with other types and type guards to create exhaustive type checking. For example, if you have a function that takes a parameter that can be either a string or a number, you can use a type guard to check the type of the parameter and return a 'never' value if it is neither a string nor a number. This way, you can ensure that all possible types of the parameter have been handled in the function.
--------------------------------------
8. ‘keyof ‘and ‘typeof’ operator

'keyof' Operator:
The 'keyof' operator is a TypeScript operator that allows you to extract the keys of an object or interface as a union type. It can be useful when you need to create a type that is based on the keys of an existing type. Here's an example:

interface Person {
name: string;
age: number;
email: string;
}

type PersonKeys = keyof Person;
// The type of PersonKeys is "name" | "age" | "email"

In this example, the 'keyof' operator is used to create a new type 'PersonKeys' that is a union of the keys of the 'Person' interface.

'typeof' Operator:
The 'typeof' operator is a TypeScript operator that returns the type of a value or variable at runtime. It can be useful when you need to dynamically check the type of a value. Here's an example:

const num = 42;
const str = "Hello, world!";
const bool = true;

console.log(typeof num); // Output: "number"
console.log(typeof str); // Output: "string"
console.log(typeof bool); // Output: "boolean"

In this example, the 'typeof' operator is used to log the type of the 'num', 'str', and 'bool' variables at runtime. The output shows that the type of 'num' is 'number', the type of 'str' is 'string', and the type of 'bool' is 'boolean'.

Overall, the 'keyof' and 'typeof' operators are useful features of TypeScript that can help you create more robust and type-safe code.
--------------------------------------
9. Global types

Global types in TypeScript refer to types that are available globally throughout your codebase. These types are defined in the global namespace and can be accessed from anywhere in your code.

Here are some examples of global types in TypeScript:

The any type: The any type is a special type that can be used to represent any type of value. It is often used when you don't know the type of a value at compile-time.

The void type: The void type represents the absence of a value. It is often used as the return type of functions that don't return a value.

The null and undefined types: These types represent the absence of a value. null is used when a value is explicitly set to null, while undefined is used when a value hasn't been set yet.

The never type: The never type represents a value that will never occur. It is often used as the return type of functions that always throw an error or never return.

The unknown type: The unknown type is similar to the any type, but is more restrictive. It is often used when you don't know the type of a value, but want to impose some restrictions on it.

Global types are an important part of TypeScript, as they provide a way to define types that are available globally throughout your codebase. By using global types, you can ensure that your code is more robust and easier to maintain.
--------------------------------------
10. Namespace merging

Namespace merging is a feature in TypeScript that allows you to merge multiple namespace declarations with the same name into a single namespace. This can be useful for organizing related code into separate files or modules.

To merge namespaces, simply define the same namespace in multiple files or modules. TypeScript will automatically merge them into a single namespace. For example, suppose you have two files, foo.ts and bar.ts, each with their own namespace declaration:

foo.ts:

namespace MyNamespace {
  export function foo() {
    console.log('foo');
  }
}
bar.ts:

namespace MyNamespace {
  export function bar() {
    console.log('bar');
  }
}
You can then use the merged namespace in another file:

main.ts:

/// <reference path="foo.ts" />
/// <reference path="bar.ts" />

MyNamespace.foo(); // Output: "foo"
MyNamespace.bar(); // Output: "bar"
In this example, the MyNamespace namespace is defined in both foo.ts and bar.ts, but they are automatically merged into a single namespace when used in main.ts. This allows you to separate related code into separate files while still maintaining a single namespace.
--------------------------------------
11. Ambient declarations

Ambient declarations are a way to describe the shape of external libraries or modules in TypeScript without actually providing an implementation. They are used to provide type information for code that is written in TypeScript but uses external JavaScript libraries or modules.

To create an ambient declaration, you use the declare keyword followed by the name of the variable, function, class, or namespace that you want to describe. For example, if you want to describe the jQuery library, you might write an ambient declaration like this:

declare var $: {
(selector: string): any;
fn: any;
// ...
};
This declares a variable called $ that has a function signature that takes a string argument and returns any type. It also has an fn property that has any type.

You can also use ambient declarations to describe entire modules. For example, if you're using the Node.js fs module in your TypeScript code, you might write an ambient declaration like this:

declare module "fs" {
export function readFile(path: string, callback: (err: Error, data: Buffer) => void): void;
export function writeFile(path: string, data: Buffer, callback: (err: Error) => void): void;
// ...
}
This declares a module called "fs" that has two exported functions: readFile and writeFile. The readFile function takes a string argument for the file path and a callback function that takes an Error object and a Buffer object. The writeFile function takes a string argument for the file path, a Buffer object for the file contents, and a callback function that takes an Error object.

Overall, ambient declarations are a powerful tool for working with external libraries or modules in TypeScript, allowing you to benefit from TypeScript's static type checking and other features even when working with code that was not originally written in TypeScript.
--------------------------------------
12. Type erasure

Type erasure is a process in which type annotations in TypeScript code are removed during compilation, resulting in plain JavaScript code with no type information. This means that the type annotations added in TypeScript are not available at runtime in the compiled JavaScript code.

Type erasure is a key concept in understanding how TypeScript works. When you write TypeScript code, you are adding type annotations to your code to help catch bugs earlier in the development process. However, when you compile your TypeScript code into JavaScript, these type annotations are removed, leaving only the plain JavaScript code.

The reason for this is that JavaScript does not have built-in support for static typing, so TypeScript adds type annotations as a way of providing this feature. However, since JavaScript is a dynamically typed language, the type information is not needed at runtime.

While type erasure may seem like a limitation, it actually allows TypeScript to be used in a wider range of scenarios, such as in web browsers, where JavaScript is the only language supported. Additionally, type erasure allows TypeScript code to be interoperable with other languages that target JavaScript, such as Kotlin or Scala.
--------------------------------------
13. Type assertions with ‘as const’

Type assertions with 'as const' is a TypeScript feature that allows you to specify a variable as a readonly constant. When you use 'as const' to assert a value's type, TypeScript narrows the type of the variable to a more specific, immutable type. This is useful when you want to ensure that a value doesn't change throughout your code.

Here's an example of how to use 'as const':

const colors = ['red', 'green', 'blue'] as const;
In this example, the 'as const' assertion tells TypeScript that the 'colors' array should be treated as a readonly tuple of string literals, instead of an array of string values. This means that you can access the values of the 'colors' array, but you can't modify or reassign them.

console.log(colors[0]); // Output: "red"

colors.push('yellow'); // Compilation error: Property 'push' does not exist on type 'readonly [ "red", "green", "blue" ]'

colors[0] = 'pink'; // Compilation error: Index signature in type 'readonly [ "red", "green", "blue" ]' only permits reading.
In this example, trying to push a new value to the 'colors' array or reassign a value to an index will result in a compilation error, because the 'colors' array is treated as a readonly constant.

Overall, 'as const' is a powerful TypeScript feature that helps ensure that your code is more robust and less prone to bugs, by providing stricter type checking and immutability guarantees.

--------------------------------------
14. The ‘declare’ keyword

The 'declare' keyword is used in TypeScript to tell the compiler about types that exist outside of the TypeScript code. It is used to declare variables, functions, classes, and modules that are defined in external JavaScript libraries or modules.

When using external libraries or modules that don't have TypeScript type definitions, the 'declare' keyword can be used to tell the TypeScript compiler about these types, so that it can provide type-checking and code completion for these libraries.

Here are some examples of how the 'declare' keyword can be used:

Declaring a variable:

declare let myVar: string;

This tells the TypeScript compiler that there is a variable called 'myVar' of type 'string' that exists outside of the TypeScript code.

Declaring a function:

declare function myFunc(param: string): void;

This tells the TypeScript compiler that there is a function called 'myFunc' that takes a parameter of type 'string' and returns 'void' that exists outside of the TypeScript code.

Declaring a class:

declare class MyClass {
myMethod(): void;
}

This tells the TypeScript compiler that there is a class called 'MyClass' that has a method called 'myMethod' that returns 'void' and exists outside of the TypeScript code.

Declaring a module:

declare module 'myModule' {
export function myFunc(): void;
}

This tells the TypeScript compiler that there is a module called 'myModule' that exports a function called 'myFunc' that returns 'void' and exists outside of the TypeScript code.

By using the 'declare' keyword, you can tell the TypeScript compiler about types that exist outside of your TypeScript code and provide type-checking and code completion for these external libraries and modules.
--------------------------------------
15. Decorator composition

Decorator composition is a feature in TypeScript that allows you to apply multiple decorators to a single class, method, or property. This can be useful for adding multiple behaviors to an object, without having to write repetitive code.

Using decorator composition, you can apply multiple decorators to a single object in a way that is easy to read and maintain. Here's an example of using decorator composition to add multiple decorators to a class:

@logger
@serialize
class Person {
  name: string;
  age: number;

  constructor(name: string, age: number) {
    this.name = name;
    this.age = age;
  }

  greet() {
    console.log(`Hello, my name is ${this.name} and I'm ${this.age} years old.`);
  }
}
In this example, we have a Person class that has two decorators applied to it: @logger and @serialize. The logger decorator logs information about the class when it is instantiated, and the serialize decorator serializes the class to a JSON string.

By using decorator composition, we can apply these two decorators to the Person class in a single line of code, rather than having to apply each decorator separately. This makes our code more concise and easier to read.

Overall, decorator composition is a powerful feature in TypeScript that allows you to add multiple behaviors to an object in a way that is easy to manage and maintain.
--------------------------------------
16. The ‘abstract’ keyword

The 'abstract' keyword is a feature in TypeScript that allows you to define abstract classes and methods. An abstract class is a class that cannot be instantiated directly, but instead serves as a blueprint for other classes. An abstract method is a method that has no implementation and must be implemented by a subclass.

Here's an overview of how to use the 'abstract' keyword in TypeScript:

Abstract classes
To define an abstract class, use the 'abstract' keyword before the class name. An abstract class can have properties and methods, just like a regular class, but it cannot be instantiated directly. Instead, you must create a subclass that extends the abstract class and implements its abstract methods.

Here's an example of an abstract class in TypeScript:

abstract class Animal {
name: string;
constructor(name: string) {
this.name = name;
}
abstract makeSound(): void;
}

This abstract class defines an 'Animal' with a 'name' property and an abstract 'makeSound' method. You cannot create an instance of this class directly.

Abstract methods
To define an abstract method, use the 'abstract' keyword before the method name. An abstract method has no implementation and must be implemented by a subclass. Abstract methods can only be defined within an abstract class.

Here's an example of an abstract method in TypeScript:

abstract class Animal {
name: string;
constructor(name: string) {
this.name = name;
}
abstract makeSound(): void;
}

This abstract class defines an 'Animal' with a 'name' property and an abstract 'makeSound' method. The 'makeSound' method must be implemented by a subclass.

Subclassing abstract classes
To create a subclass that extends an abstract class, use the 'extends' keyword and implement the abstract methods. The subclass can also have its own properties and methods.

Here's an example of a subclass that extends the 'Animal' abstract class:

class Dog extends Animal {
constructor(name: string) {
super(name);
}
makeSound() {
console.log('Woof!');
}
}

This subclass, 'Dog', extends the 'Animal' abstract class and implements the 'makeSound' method. You can create an instance of this class and call its methods:

const dog = new Dog('Fido');
console.log(dog.name); // Output: "Fido"
dog.makeSound(); // Output: "Woof!"
--------------------------------------
17. The ‘public’, ‘private’, and ‘protected’ access modifiers

The ‘public’, ‘private’, and ‘protected’ access modifiers are features in TypeScript that allow you to control the visibility and accessibility of class members (properties and methods). These access modifiers can be used to restrict access to certain parts of your code, making it more secure and maintainable.

Here is an overview of these access modifiers:

public: This is the default access modifier in TypeScript. Public members are accessible from anywhere, both within and outside of the class. For example:
class Person {
public name: string;

constructor(name: string) {
this.name = name;
}

public greet() {
console.log(Hello, my name is ${this.name}.);
}
}
In this example, the name and greet methods are both public, meaning they can be accessed from outside of the class as well as from within.

private: Private members are only accessible from within the class they are defined in. They cannot be accessed from outside of the class, even by instances of the class. For example:
class Person {
private age: number;

constructor(age: number) {
this.age = age;
}

public greet() {
console.log(Hello, I'm ${this.age} years old.);
}
}
In this example, the age property is private, meaning it can only be accessed from within the Person class.

protected: Protected members are similar to private members, but they can also be accessed from within any subclasses of the class they are defined in. They cannot be accessed from outside of the class hierarchy. For example:
class Animal {
protected name: string;

constructor(name: string) {
this.name = name;
}
}

class Cat extends Animal {
public meow() {
console.log(${this.name} says meow!);
}
}
In this example, the name property is protected, meaning it can be accessed from within the Animal and Cat classes, but not from outside of this class hierarchy.

By using these access modifiers in TypeScript, you can ensure that your code is secure and maintainable, and that you have fine-grained control over the visibility and accessibility of your class members.
--------------------------------------
18. Advanced class features such as abstract classes, constructor parameter properties, and index signatures for classes.

Advanced class features in TypeScript can make your code more organized, extensible, and easier to maintain. Some of the advanced features of classes in TypeScript include abstract classes, constructor parameter properties, and index signatures for classes.

Abstract classes
Abstract classes are classes that cannot be instantiated directly. They are used as base classes for other classes to inherit from. Abstract classes can define abstract methods, which are methods that have no implementation in the base class but must be implemented by the derived classes. For example, you can define an abstract class for a shape like this:

abstract class Shape {
abstract area(): number;
}

This abstract class defines an abstract method area() that must be implemented by any class that inherits from it. You cannot create an instance of this Shape class directly, but you can create instances of classes that inherit from it and implement its abstract method.

Constructor parameter properties
Constructor parameter properties allow you to define and initialize class properties in the constructor parameter list. This can help make your code more concise and readable. For example, you can define a class for a person with constructor parameter properties like this:

class Person {
constructor(public name: string, public age: number) {}
}

This class defines properties for name and age, and initializes them in the constructor parameter list. You can create an instance of this class like this:

let person = new Person('Alice', 30);

Index signatures for classes
Index signatures allow you to define a type for the properties of a class that can be accessed with an index, such as an array or an object. For example, you can define a class for a dictionary like this:

class Dictionary {
[index: string]: string;
}

This class defines an index signature for string properties with string values. You can create an instance of this class and use it like this:

let dict = new Dictionary();
dict['foo'] = 'bar';
dict['baz'] = 'qux';

console.log(dict['foo']); // Output: "bar"
console.log(dict['baz']); // Output: "qux"

In summary, TypeScript offers several advanced class features like abstract classes, constructor parameter properties, and index signatures for classes that can make your code more organized and easier to maintain.
--------------------------------------
19. Type Guards (a technique for narrowing down the type of a variable)

Type Guards is a technique used in TypeScript to narrow down the type of a variable. This is useful when dealing with union types, where a variable can have different types at different times. By using a Type Guard, you can check the type of a variable at runtime and narrow it down to a specific type.

There are several ways to implement a Type Guard in TypeScript. One common way is to use the typeof operator to check the type of a variable. For example, suppose you have a variable that can be either a string or a number:

let value: string | number = 'hello';

You can create a Type Guard to narrow down the type of this variable to a string like this:

function isString(value: any): value is string {
return typeof value === 'string';
}

Now, you can use this Type Guard to check the type of the variable and narrow it down to a string:

if (isString(value)) {
// 'value' is now narrowed down to a string
console.log(value.length);
}

Another way to implement a Type Guard is to use the instanceof operator. This is useful when dealing with classes or interfaces. For example, suppose you have an interface for a person and a class that implements this interface:

interface Person {
name: string;
age: number;
}

class Student implements Person {
name: string;
age: number;
grade: number;

constructor(name: string, age: number, grade: number) {
this.name = name;
this.age = age;
this.grade = grade;
}
}

Now, you can create a Type Guard to check if a variable is an instance of the Student class:

function isStudent(value: any): value is Student {
return value instanceof Student;
}

You can use this Type Guard to check the type of a variable and narrow it down to a Student:

let person: Person = new Student('Alice', 20, 90);

if (isStudent(person)) {
// 'person' is now narrowed down to a Student
console.log(person.grade);
}

Type Guards are a powerful feature in TypeScript that can help you write safer and more maintainable code. By narrowing down the type of a variable, you can catch bugs earlier in the development process and make your code more readable and understandable.
--------------------------------------
20. Intersection Types (a way of combining multiple types into a single type)

Intersection Types in TypeScript allow you to combine multiple types into a single type. This is useful when you need to work with objects that have properties from multiple sources.

Syntax
To create an Intersection Type, you use the '&' symbol to combine two or more types. For example:

type A = { foo: number };
type B = { bar: string };
type C = A & B;

This creates a new type C, which is the intersection of types A and B. The resulting type has properties from both types:

let c: C = { foo: 42, bar: 'hello' };

In this example, the variable c has both a foo property of type number and a bar property of type string.

Type Inference
TypeScript is able to infer the resulting type of an Intersection Type based on the types of the values being assigned to it. For example:

function combine(a: A, b: B): A & B {
return { foo: a.foo, bar: b.bar };
}

This function takes an object of type A and an object of type B, and returns an object that is the intersection of both types. The resulting type is inferred by TypeScript based on the types of the arguments:

let combined = combine({ foo: 42 }, { bar: 'hello' });

In this example, the variable combined is of type A & B, since that is the resulting type of the combine function.

Limitations
Intersection Types are useful for combining types, but they have some limitations. For example, if two types have conflicting properties, the resulting Intersection Type will have a union type for those properties:

type A = { foo: number };
type B = { foo: string };
type C = A & B;

This creates a new type C, which has a foo property that is a union of number and string:

let c: C = { foo: 42 }; // Error: Type '{ foo: number; }' is not assignable to type 'C'.

In this example, the variable c has a foo property of type number, but the type C expects a foo property that is a union of number and string. This results in a compilation error.


--------------------------------------
21. Type Queries (a way of extracting the type of a variable as a type)

Type Queries are a feature in TypeScript that allow developers to extract the type of a variable as a type. This can be useful in situations where you need to access the type of a variable, but you don't have access to the original type.

Using a Type Query, you can extract the type of a variable and use it in other parts of your code. Type Queries are denoted by the typeof keyword, followed by the name of the variable you want to extract the type from.

For example, suppose you have a variable called "myVar" with a type of string. You can use a Type Query to extract the type of "myVar" like this:

let myVar: string = "Hello, world!";
type MyVarType = typeof myVar;
In this example, "MyVarType" will be a type that is equivalent to the type of "myVar" (in this case, a string).

Type Queries can also be used with object properties. For example, suppose you have an object with a property called "name" that has a type of string. You can use a Type Query to extract the type of the "name" property like this:

let person = { name: "Alice", age: 30 };
type PersonNameType = typeof person.name;
In this example, "PersonNameType" will be a type that is equivalent to the type of the "name" property of the "person" object (in this case, a string).

Type Queries can be a powerful tool for creating more flexible and reusable code in TypeScript. By allowing you to extract the type of a variable or object property, you can create more generic types that can be used in a variety of situations.
--------------------------------------
22. Polymorphic 'this' types (a way of defining methods on a class that return the type of the class itself)

Polymorphic this types in TypeScript refer to a way of defining methods on a class that return the type of the class itself. This allows for fluent method chaining, where each method call returns an instance of the class, allowing you to chain multiple method calls together.

Here's an example of how to use polymorphic this types in a class:

class Calculator {
  private value: number;

  constructor(value: number) {
    this.value = value;
  }

  add(x: number): this {
    this.value += x;
    return this;
  }

  subtract(x: number): this {
    this.value -= x;
    return this;
  }

  multiply(x: number): this {
    this.value *= x;
    return this;
  }

  getValue(): number {
    return this.value;
  }
}
In this example, the Calculator class has several methods that return the type of the class itself (i.e., this), allowing you to chain them together:

const result = new Calculator(10)
  .add(5)
  .multiply(2)
  .subtract(3)
  .getValue();
console.log(result); // Output: 17
By using polymorphic this types, you can write more expressive and concise code, while still maintaining type safety.

--------------------------------------
23. String Literal Types (a way of defining types that only allow a specific string value)

String Literal Types is a feature in TypeScript that allows you to define types that only allow a specific string value. This is useful when you want to restrict the possible values of a variable or parameter to a specific set of strings.

Here's an example of how to define a String Literal Type in TypeScript:

type Fruit = 'apple' | 'banana' | 'orange';
In this example, the type Fruit can only be one of three specific string values: 'apple', 'banana', or 'orange'. If you try to assign a value to a variable of type Fruit that is not one of these three values, you'll get a compilation error.

Here's an example of how to use a variable with a String Literal Type:

let myFruit: Fruit = 'apple';
In this example, myFruit can only be assigned one of the three specific string values defined in the Fruit type. If you try to assign a different string value to myFruit, you'll get a compilation error.

String Literal Types are particularly useful when working with APIs that expect specific string values for certain parameters or properties. By using String Literal Types, you can ensure that your code is compatible with the API by restricting the possible values of those parameters or properties to the values expected by the API.
--------------------------------------
24. Numeric Literal Types (a way of defining types that only allow a specific numeric value)

Numeric Literal Types is a feature in TypeScript that allows developers to define types that only allow specific numeric values. This is useful when you want to restrict a variable, parameter, or property to a specific set of values.

To define a Numeric Literal Type, you can use a union type with numeric literals. For example, you can define a type that only allows the values 1, 2, and 3 like this:

type MyNumber = 1 | 2 | 3;
let num: MyNumber = 2;
num = 4; // Error: Type '4' is not assignable to type 'MyNumber'.

In this example, the MyNumber type is a union of the numeric literals 1, 2, and 3. The variable num is of type MyNumber, which means it can only have one of these three values. If you try to assign a value outside of this range, you'll get a compilation error.

Numeric Literal Types can be useful in many scenarios, such as defining constants, enumerations, or specific values that are part of a domain. By using Numeric Literal Types, you can make your code more self-documenting and less error-prone.
--------------------------------------
25. Readonly Properties (a way of marking certain properties of an object as read-only)

Readonly Properties is a feature in TypeScript that allows you to mark certain properties of an object as read-only. This means that once the property is set, it cannot be changed.

To mark a property as read-only, you can use the readonly keyword in front of the property name. For example:

interface Person {
readonly name: string;
age: number;
}

let person: Person = { name: 'Alice', age: 30 };
person.age = 31; // This is allowed
person.name = 'Bob'; // This will result in a compilation error

In this example, the name property of the Person interface is marked as read-only. When creating an instance of the Person interface, the name property can be set, but it cannot be changed afterwards.

Readonly properties are useful when you want to ensure that certain properties of an object remain constant throughout the life of the object. This can help prevent bugs and make code more predictable.

It's important to note that marking a property as read-only only affects the property itself, not the object that contains it. In other words, you can still modify other properties of the object, even if some properties are marked as read-only.
--------------------------------------
26. Index Signatures (a way of defining the shape of an object with dynamic keys)

Index Signatures are a way of defining the shape of an object with dynamic keys in TypeScript. Sometimes you might have an object with dynamic keys, where the keys are not known ahead of time. In such cases, you can use an index signature to tell TypeScript about the expected shape of the object.

Here is an example of an object with dynamic keys:

const myObj = {
prop1: 'value1',
prop2: 'value2',
};

In this case, the keys are known ahead of time (prop1 and prop2), so you can define an interface for this object as follows:

interface MyObj {
prop1: string;
prop2: string;
}

But what if you have an object with keys that are not known ahead of time? In that case, you can use an index signature. An index signature is denoted by square brackets [] and can be used to define the type of a property whose name is not known ahead of time. Here's an example:

interface MyObj {
[key: string]: string;
}

In this example, the index signature [key: string] tells TypeScript that the object can have any number of properties with string keys and string values.

You can also use number keys with an index signature. Here's an example:

interface MyObj {
[key: number]: string;
}

In this example, the index signature [key: number] tells TypeScript that the object can have any number of properties with number keys and string values.

Index signatures are a powerful feature of TypeScript that can help you work with objects that have dynamic keys. By using index signatures, you can define the expected shape of an object, even when the keys are not known ahead of time.
--------------------------------------
27. Conditional types

Conditional types are a feature in TypeScript that allow you to create types that depend on other types. They are used to create more flexible and reusable type definitions.

Here's an example of how you might use a conditional type:

type NonUndefined<T> = T extends undefined ? never : T;


This type definition creates a new type called NonUndefined that takes a generic type parameter T. It then uses a conditional type to check if T extends undefined. If it does, the type evaluates to never (a type that can never be assigned a value). If it doesn't, the type evaluates to T.

You can use this type to ensure that a value is not undefined:

function foo<T>(value: NonUndefined<T>): void {
  // ...
}


In this example, the foo function takes a generic type parameter T and a value of type NonUndefined<T>. This ensures that the value passed to the function is not undefined.

Conditional types can also be used to create more complex type definitions that depend on multiple types. For example, you could use a conditional type to create a type that only allows certain properties of an object to be optional:

type OptionalProperties<T> = {
  [P in keyof T]?: T[P];
} & (T extends any ? never : T);


This type definition creates a new type called OptionalProperties that takes a generic type parameter T. It uses a mapped type to create a new object type that has all of the same properties as T, but with the optionality of those properties set to optional (?). It then uses a conditional type to ensure that the type does not match T exactly (otherwise, all properties would be optional).

You can use this type to define an object with optional properties:

interface MyInterface {
  foo: string;
  bar: number;
}

const myObject: OptionalProperties<MyInterface> = {
  foo: 'hello',
};


In this example, the myObject variable is of type OptionalProperties<MyInterface>, which means that the bar property is required, but the foo property is optional.
--------------------------------------
28. Mapped Types

Mapped types are a powerful feature of TypeScript that allow you to transform an existing type into a new type. This can be useful for creating new types based on existing ones, or for transforming existing types in useful ways.

Syntax of Mapped Types
Mapped types use the following syntax:

{ [P in K]: T }
This syntax defines a new type with properties of type T, where the property names are taken from the keys of type K. The in keyword is used to iterate over each key in K.

Example of Mapped Types
Here is an example of using mapped types to create a new type based on an existing one:

type Person = {
  name: string;
  age: number;
};

type PartialPerson = { [P in keyof Person]?: Person[P] };

In this example, we define a Person type with name and age properties. We then use a mapped type to create a new type called PartialPerson, which has the same properties as Person, but with each property made optional using the ? operator. The keyof operator is used to get the keys of the Person type.

Using the PartialPerson type, we can now define variables that have some, but not all, of the properties of a Person, like this:

const person1: PartialPerson = { name: 'Alice' };
const person2: PartialPerson = { age: 30 };
const person3: PartialPerson = { name: 'Bob', age: 25 };

Conclusion
Mapped types are a powerful feature of TypeScript that allow you to create new types based on existing ones. They use a simple syntax that iterates over the keys of a type, allowing you to transform the properties in useful ways. Mapped types can be used to create new types with optional or readonly properties, or to transform existing types in other useful ways.
--------------------------------------
29. Union Types

Union Types is a feature in TypeScript that allows a variable to have multiple possible types. It enables developers to specify that a variable can contain values of different types, and provides flexibility in function parameters and return types.

Defining Union Types
To define a union type in TypeScript, use the "|" operator to separate each type. For example, you can define a variable with a union type of string or number like this:

let variable: string | number;

This means that the variable can contain either a string or a number.

Using Union Types
Union Types can be useful when you want to create more flexible code that can handle different types of values. For example, you can create a function that can accept either a string or a number parameter like this:

function printValue(value: string | number) {
console.log(value);
}

This function can be called with either a string or a number argument:

printValue("Hello"); // Output: "Hello"
printValue(42); // Output: 42

Another example of using Union Types is when defining a return type for a function. For instance, a function can return a string or null value, like this:

function getStringOrNull(value: string): string | null {
if (value === "") {
return null;
}
return value;
}

This function can either return a string or a null value, depending on the input.

Conclusion
Union Types in TypeScript provides developers with more flexibility when defining variables, function parameters, and return types. By using the "|" operator, developers can define a variable to accept multiple possible types, which makes the code more adaptable to different situations.
--------------------------------------
30. keyof and Lookup types

The 'keyof' keyword in TypeScript is used to extract the keys of an object as a union type. It allows you to access the keys of an object without knowing them beforehand. Here's an example:

interface Person {
  name: string;
  age: number;
  email: string;
}

type PersonKeys = keyof Person; // PersonKeys is "name" | "age" | "email"
In this example, we use the 'keyof' keyword to extract the keys of the 'Person' interface as a union type. The resulting type 'PersonKeys' is a union of the keys of the 'Person' interface.

The 'Lookup types' in TypeScript allow you to access a property of a type using another type as a key. This can be useful when working with dynamic code, such as when you don't know the name of a property at compile time. Here's an example:

interface Person {
  name: string;
  age: number;
  email: string;
}

type PersonKey = keyof Person; // PersonKey is "name" | "age" | "email"
type PersonLookup = Person[PersonKey]; // PersonLookup is string | number
In this example, we first use the 'keyof' keyword to extract the keys of the 'Person' interface as a union type. We then create a new type 'PersonLookup' by using the 'PersonKey' type as a key to access a property of the 'Person' type. The resulting type 'PersonLookup' is a union of the types of the properties of the 'Person' type that match the keys in 'PersonKey'.
--------------------------------------
31. String literal types

String literal types in TypeScript allow you to specify a string that must have a specific value. This can be useful for cases where you want to restrict the set of valid string values for a variable or parameter.

To define a string literal type, you use a string literal as the type annotation. For example, you can define a variable with a string literal type like this:

let color: "red" | "green" | "blue";
This defines a variable named color with a type that can only be one of the string literal values "red", "green", or "blue". You can then assign a value to this variable using one of those string literal values:

color = "red"; // valid
color = "yellow"; // invalid, results in a compilation error
You can also use string literal types as part of union types to create more complex type definitions. For example, you can define a function that takes a parameter that must be either the string "top" or the string "bottom":

function align(align: "top" | "bottom") {
  // function body
}
In summary, string literal types are a useful feature in TypeScript that allow you to restrict the set of valid string values for a variable or parameter. They can help catch errors earlier in the development process and make your code more reliable.

--------------------------------------
32. Numeric literal types

Numeric literal types are a feature in TypeScript that allow you to specify exact numeric values as types. This can be useful in cases where you want to limit the possible values of a variable or function parameter to a specific set of numbers.

To define a numeric literal type, you can use the pipe symbol (|) to separate multiple values. For example, you can define a type for the numbers 1, 2, and 3 like this:

type OneTwoThree = 1 | 2 | 3;
You can then use this type to type-check variables or function parameters:

function printNumber(num: OneTwoThree) {
  console.log(num);
}

printNumber(1); // Output: 1
printNumber(4); // Compilation error: Argument of type '4' is not assignable to parameter of type 'OneTwoThree'.
In this example, the printNumber function only accepts values that are either 1, 2, or 3. If you try to pass a value outside of this range, you'll get a compilation error.

Numeric literal types can also be used in combination with other types, such as interfaces or classes. For example, you can define an interface for a color like this:

interface Color {
  name: string;
  code: 'red' | 'green' | 'blue';
}
This interface specifies that a color should have a name property of type string, and a code property that can only be one of the values 'red', 'green', or 'blue'.
--------------------------------------
33. Type aliases

Type aliases in TypeScript allow you to create a new name for a type. This can be useful when you want to create a complex type that is used in multiple places in your code, or when you want to give a more descriptive name to an existing type.

Here's an example of creating a type alias:

type User = {
  name: string;
  age: number;
  email: string;
};
In this example, we've created a new type alias called User that represents an object with name, age, and email properties.

Once you've defined a type alias, you can use it in place of the original type throughout your code. For example:

function sendEmail(user: User) {
  // ...
}

const newUser: User = { name: 'Alice', age: 30, email: 'alice@example.com' };
sendEmail(newUser);
Here, we're using the User type alias to define the user parameter of the sendEmail function and the newUser variable. This makes the code more readable and easier to understand.

Type aliases can also be used with union types and intersection types to create more complex types. For example:

type Name = string;
type Age = number;

type Person = {
  name: Name;
  age: Age;
};

type Employee = Person & {
  employeeId: string;
};

type Customer = Person | {
  customerId: string;
};
In this example, we've created type aliases for Name and Age, and used them to define the Person type. We've then used the & operator to create a new Employee type that extends the Person type with an additional employeeId property, and the | operator to create a new Customer type that can either be a Person or an object with a customerId property.

Type aliases can make your code more concise, easier to read, and easier to maintain.

--------------------------------------
34. Function overloads

Function overloads in TypeScript allow you to define multiple function signatures for a single function name. This is useful when you have a function that can take different types or numbers of arguments, and you want to provide type checking and code completion for each of these cases.

To define function overloads, you use the same function name multiple times with different parameter lists and return types. For example, you can define a function that can take either a string or an array of strings as its first argument, like this:

function logMessage(message: string): void;
function logMessage(messages: string[]): void;
function logMessage(messages: string | string[]): void {
  if (Array.isArray(messages)) {
    messages.forEach((message) => console.log(message));
  } else {
    console.log(messages);
  }
}
In this example, we define three versions of the logMessage function: one that takes a single string argument, one that takes an array of strings, and one that handles both cases with a union type. The implementation of the function is the last definition, which uses a conditional statement to handle each case.

Using function overloads provides several benefits. First, it makes your code more readable and easier to understand, as it clearly defines the allowed types and numbers of arguments for a function. Second, it provides type checking and code completion for each function signature, which helps catch errors and improves developer productivity. Finally, it allows you to provide specific documentation and typing for each overload, which can be helpful for others using your code.

--------------------------------------
35. Mixins

Mixins are a feature in TypeScript that allow you to add functionality to a class by combining it with other classes. It is a way of reusing code across multiple classes without having to duplicate it.

To use mixins, you create a new class that extends the base class and adds the additional functionality. You can then use the mixin class to extend any other class that needs that functionality.

Here's an example of a simple mixin that adds a log method to a class:

class Loggable {
  log(message: string) {
    console.log(message);
  }
}

class MyClass extends Loggable {
  // ...
}

const myInstance = new MyClass();
myInstance.log("Hello, world!"); // Output: "Hello, world!"
In this example, the Loggable class defines a log method that logs a message to the console. The MyClass class extends Loggable and inherits the log method. We create an instance of MyClass and call the log method to output a message to the console.

Mixins can also take constructor parameters and use them to modify the behavior of the class. Here's an example of a mixin that adds a timestamp property to a class:

type Constructor<T = {}> = new (...args: any[]) => T;

function Timestamped<TBase extends Constructor>(Base: TBase) {
  return class extends Base {
    timestamp = new Date();
  };
}

class MyClass extends Timestamped(class {}) {
  // ...
}

const myInstance = new MyClass();
console.log(myInstance.timestamp); // Output: current date and time
In this example, the Timestamped function takes a base class as a parameter and returns a new class that extends the base class and adds a timestamp property. We use the class {} syntax to create an anonymous base class. We then create a MyClass class that extends the Timestamped mixin class. When we create an instance of MyClass, it automatically gets a timestamp property with the current date and time.

Mixins can be a powerful tool for code reuse and organization in large-scale TypeScript projects. They allow you to add functionality to classes without having to modify the original code, making it easier to maintain and refactor your codebase.
--------------------------------------


For more information
visit the OFFICIAL TypeScript DOCS :
https://www.typescriptlang.org/docs/