# TypeScript Quiz Basic Level 1

### Theory

1. What are the basic data types in TypeScript?
   * In TS, there are 4 basic data types. `string`, `number`, `boolean` and `any`.
   * `string` data type can represent values which are strings.
   * `number` data type can represent values which are numbers. `int`, `float` are both covered under numbers.
   * `boolean` data type can only have two values : `true` and `false`
   * `any` data type stands for `any` value. The variable can have literally any data type. It can be string, number, etc.
   * Example :- 
    ```ts
    const myName : string = "Kshipra"
    const myAge : number = 19
    const isMale : boolean = true
    ```
2. What is Generic data type.
   * The way that I understand Generics in TS is that a generic is just the `any` type but on steroids.
   * Generics are usually used with functions. They define a function's return type and the type of parameter that it accepts.
   * However, even while using a Generic in a function, we can still pass __any__ parameter and return __anything__. 
   * The main difference (at least the one I could spot) is the awareness about the parameter's type and the return type.
   * Let's take a function which appends a UID to a task. In order to do that, an object should be passed to it.
   * We will write the function with `any` type first and then demonstrate generics with the function.
   ```ts
   const addUID = (obj: any) : any => {
       const uid : number = Math.floor(Math.random() * 100)
   
       return {...obj, uid}
   }
   
   let myTask : object = {
       "task": "Do TypeScript"
   }
   
   let myFinalTask : object = addUID(myTask)
   
   console.log(myFinalTask) // Output:- { task: 'Do TypeScript', uid: 15 }
   
   console.log(myFinalTask.task) // Error:- error TS2339: Property 'task' does not exist on type 'object'.
   ```  
   * We can notice here that even though, TS does know the value of `myFinalTask` and it is successfully printing it in the second last line, if we try to access any property from the object, we simply get an error. 
   * This is because since the function `addUID` returns an `any` type, TS is not concerned about the type of the parameter being passed in and the type of the variable which is getting returned and hence it does not check it for it's types.
   * Now, if we replace `any` with `<T>` we will immediately be able to see the difference.
   ```ts
   const addUID = <T> (obj: T) => {
       const uid : number = Math.floor(Math.random() * 100)
   
       return {...obj, uid}
   }
   
   let myTask = addUID<object>({task: "Do TypeScript"})
   
   console.log(myTask) // Output:- { task: 'Do TypeScript', uid: 96 }
   
   console.log(myTask.uid) // Output:- 96
   ```

3. What is type inferring in TS.
   * Type inference occurs when TypeScript automatically assigns a type to a variable without explicitly specifying.
   * Example :-
   ```ts
   let a = 10
   let b = "Hello"
   
   b = a // Error:- error TS2322: Type 'number' is not assignable to type 'string'.
   ```

4. What are the possible ways to define typing for functions.
   * There are two way to define typing for function :-
     1. Using pre-defined type like `string` or `number`
     2. Using Generics `<T>`

5. How to define Generic Type For Classes?
   * Generic Type for classes can be defined like this :- 
```ts
class Person <T, U> {
    firstname: T
    lastname: U
    
    constructor(firstname: T, lastname: U) {
        this.firstname = firstname
        this.lastname = lastname
    }
    
    display(): void {
        console.log(`${this.firstname} -- ${this.lastname}`)
    }
}

const p1 = new Person<string, string>("Kshipra", "Jadav")
p1.display() // Output:- Kshipra -- Jadav
```



### Programs

1. Define the types in typescript for the given following JavaScript code.
```ts
type TODO = {
   name: string,
   description: string,
   done: boolean
}

let todos: Array<TODO> = [];

function add(name: string, description: string): number {
   return todos.push({name: name, description: description, done: false});
}

function remove(index: number): Array<TODO> {
   return todos.splice(index, 1);
}

function list(): void {
   todos.forEach(function (todo: TODO, index: number) {
      console.log(index + " -" + todo.name);
   });
}

function update(index: number, name: string, description: string): TODO {
   todos[index].name = name;
   todos[index].description = description;
   return todos[index];
}
```