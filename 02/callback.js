/**
 * A moderately complicated website can easily include anywhere from 10 to 200 resources. 
 * To be able to fetch those quickly, browsers will make several GET requests simultaneously, 
 * rather than waiting for the responses one at a time.
 */

const posts = [
    { title: 'Post One', body: 'This is post one' },
    { title: 'Post Two', body: 'This is post two' }
];
//GET requests simply ask for information. 
//Requests that change something on the server, for example creating a new account or 
//posting a message, should be expressed with other methods, such as POST


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
function createPost(post, callback) {
    //A callback function is a function passed into another function as an argument
    setTimeout(() => {
        posts.push(post);
        callback(); //getPost()
    }, 2000); //akes 2 sec 
}


createPost({ title: 'Post Three', body: 'This is post three' }, getPosts); //get post 3
