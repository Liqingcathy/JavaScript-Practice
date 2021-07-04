
const request = fakeRequestPromise('url.com/about');

request
    .then(() => { //when promise resolved
        console.log("worked")

    })
    .catch(() => { //when promise rejected
        console.log("error");
    })

