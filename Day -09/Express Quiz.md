# Express Quiz

#### Theory

1. What is NodeJS?
   * NodeJS is a JavaScript runtime built on Chrome's V8 engine.
   * It allows us to run JavaScript outside the browser.
   * Usually, if we wanted to write and execute JavaScript code, we could only do it via embedding it in the `<script> </script>` tag.
   * After Node, we can run JS even in the console.

2. What is V8 engine?
   * The V8 engine is developed by Google and it is one of the most popular engines to run JS.
   * Every browser ships with it's own engine which handles JavaScript. 
   * Every Chromium browser uses the V8 engine.
   * Even Node and Deno are built on top of V8 engine which allow us to run JS outside the browser.

3. What is Event Loop in NodeJS?
   * (Source: GFG) The event loop allows Node.js to perform non-blocking I/O operations despite the fact that JavaScript is single-threaded. It is done by assigning operations to the operating system whenever and wherever possible.
   * So basically, since JS is a single-threaded language - it can only handle one task at a time i.e. only one thing is running at a time.
   * The problem is that if the execution of an event takes a very long time to complete, everything else that comes after the event gets blocked because until and unless that event gets completed and taken out of the event loop, no other event can get executed.
   * Hence we can say that the Event Loop acts like a stack. It executes whatever is at the top of the stack and after it has executed, it pops the item.

4. What is the use of `tsconfig.json` file?
   * The `tsconfig.json` file is used to tweak TS to our choices.
   * TS needs to be transpiled down to regular JS in order for browsers to understand it.
   * Now, the `tsconfig.json` file allows us to tweak some parameters of that compilation according to our needs.
   * For example, we can set the input and the output directories, specify which version of JS do we want to compile down to, etc.

5. What are the methods provided by `fs` module to manipulate files?
   * The `fs` module is a native module which comes built in with NodeJS.
   * It allows us to manipulate the file system and the files in it.
   * Some of the methods provided by it are:-
     1. `fs.readFile()` - For reading data from a file
     2. `fs.writeFile()` - For writing data from a file
     3. `fs.rename()` - For moving a file
     4. `fs.unlink()` - For deleting a file permanently

6. What is API?
   * The full form of API is _Application Programming Interface_.
   * We can think of an API as a means of interacting with data.
   * We can use the API to either send some data to the server or to get some data from the server.
   * The most famous use of API is REST API.

7. What is JSON format?
   * The full form of JSON is _JavaScript Object Notation_.
   * It is very similar to the objects that are a part of the JS language and hence it has a similar name.
   * Some example JSON is :-
   ```json
   {
      "name": "Kshipra Jadav",
      "age": 19,
      "gender": "Male",
      "programming languages": ["Javascript", "Typescript", "Java"]
   }
   ```
8. Why we use JSON format for API?
   * (Source: Stackoverflow Blog) JSON is the standard for transferring data. Almost every networked technology can use it: JavaScript has built-in methods to encode and decode JSON either through the Fetch API or another HTTP client. Server-side technologies have libraries that can decode JSON without doing much work.

9. What is a Framework?
   * (Source: CodeAcademy) A framework is a structure that you can build software on. It serves as a foundation, so you're not starting entirely from scratch. Frameworks are typically associated with a specific programming language and are suited to different types of tasks.
   * Some examples of frameworks are :- _ExpressJS_ for NodeJS, _Django_ for Python, _Rails_ for Ruby, etc.

10. How an HTTP Communication works.
    * The HTTP communication works in a _Request - Response_ model.
    * First, the client sends the request to the server.
    * The server then responds with a response.
    * That response can contain the data requested or an error message if the data is not found.
    * The HTTP communication is better explained by the following diagram.
![what-is-http---teachoo](https://user-images.githubusercontent.com/84441419/179136208-f9a57f56-464d-4c73-b4c0-6e32f906ce12.jpg)

   
11. What is Middleware in ExpressJS.
    * Middleware in Express is used for two things.
    * First is to pre-define the usage of some functions.
      * Example - `express.json()` allows us to parse the request bodies which contain JSON data. Without us defining this middleware, we will not be able to parse the bodies with JSON data.
    * Second is to intercept the request and run some code before the response is being send.
      * Example - Say a user hit an api endpoint. If we first need to check if that user is authorized or not to access that endpoint, we can assign this task to a middleware to check the authorization of the user. Here, the middleware is just a function which takes `req, res, next` as parameters.
