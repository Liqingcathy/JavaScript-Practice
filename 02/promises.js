const { resolve } = require("path/posix");

/**
 * A Promise is an object representing the eventual completion or failure of an asynchronous operation.
 * A Promise is in one of these states:
 * pending: initial state, neither fulfilled nor rejected.
 * fulfilled(resolved): meaning that the operation was completed successfully.
 * rejected: meaning that the operation failed.
 * 
*/
const posts = [
    { title: 'Post One', body: 'This is post one' },
    { title: 'Post Two', body: 'This is post two' }
];

//get post one, post 3
function getPosts() {
    setTimeout(() => { //callback function
        let output = ' ';
        posts.forEach((post, index) => { //for each 
            output += `<li>${post.title}</li>`
        });
        document.body.innerHTML = output;
    }, 1000); //takes 1 sec 
}


//create post three
function createPost(post) {
    return new Promise((resolve, reject) => {
    //when resolves, call resolve, when rejected call reject    
    setTimeout(() => {
        posts.push(post);

        const error = false;

        if(!error) { //if no error
            resolve();
        }else {
            reject('Error: something went wrong');
        }
    }, 2000); //akes 2 sec     
})
}

//createPost({title: 'Post Three', body: 'This is post three'}).then(getPosts);

/**
 * Unlike old-fashioned passed-in callbacks, a promise comes with some guarantees:
 * Callbacks added with then() will never be invoked before the completion of the current run of the JavaScript event loop.
 * These callbacks will be invoked even if they were added after the success or failure of the asynchronous operation that the promise represents.
 * Multiple callbacks may be added by calling then() several times. They will be invoked one after another, in the order in which they were inserted.

   Chainning
 * A common need is to execute two or more asynchronous operations back to back, where each subsequent operation starts when the previous operation succeeds, 
 * with the result from the previous step. We accomplish this by creating a promise chain.
 * Here's the magic: the then() function returns a new promise, different from the original:
    const promise = doSomething();
    const promise2 = promise.then(successCallback, failureCallback);
    OR
    const promise2 = doSomething().then(successCallback, failureCallback);


  *  This second promise (promise2) represents the completion not just of doSomething(), 
  *  but also of the successCallback or failureCallback you passed in, which can be other 
  *  asynchronous functions returning a promise. When that's the case, any callbacks added to promise2 get queued behind the promise returned by either successCallback or failureCallback.
 * 
 */
 
  //------------------------------------------------------------------------------------------
  //enable asynchronous, promise-based behavior to be written in a cleaner style, 
  //avoiding the need to explicitly configure promise chains.
  //Async / Await
  async function init() {
    await createPost({title: 'Post Three', body: 'This is post three'});
    //await untill create post and getPost()

    getPosts();
  }

  init();

  //------------------------------------------------------------------------------------------
  //Async / Await with fetch
  async function fetchUsers() {
      const response = await fetch('http://example.com/movies.json')

      const data = await response.json();
      console.log(data);
  } 
  
  fetchUsers();

  //------------------------------------------------------------------------------------------
  //Promise.all
  const promise1 = Promise.resolve('Hello');
  const promise2 = 10;
  const promise3 = new Promise((resolve, reject) => 
      setTimeout(resolve, 2000, 'Goodbye')
   );
   const promise4 = fetch('http://example.com/movies.json')
   //returns a promise containing the response (a Response object). HTTP response
   .then(response => response.json()) //To extract the JSON body content from the response
   .then(data => console.log(data));
  
  Promise.all([promise1, promise2, promise3, promise4]).then((values) => 
  console.log(values));    

  