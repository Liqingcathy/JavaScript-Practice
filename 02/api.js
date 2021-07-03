/**
 * Fetch provides a generic definition of Request and Response objects (and other things involved 
 * with network requests). This will allow them to be used wherever they are needed in the future, 
 * whether it’s for service workers, Cache API, and other similar things that handle or modify 
 * requests and responses, or any kind of use case that might require you to generate your responses 
 * programmatically (that is, the use of computer program or personal programming instructions).
 * 
 * The fetch() method takes one mandatory argument, the path to the resource you want to fetch. 
 * It returns a Promise that resolves to the Response to that request — as soon as the server responds 
 * with headers — even if the server response is an HTTP error status.
 * 


//option1: use fetch api
fetch('https://api.cryptonator.com/api/ticker/btc-usd')
    .then(res => {
        console.log("response", res)
        return res.json() //promise
    })
    .then(data => {
        console.log('data parsed')
    })
    .catch(e => {
        console.log('error', e)
    })

//option2: use async fetch api
const fetchBitcoinPrice = async () => {
    try {
        const res = await fetch('https://api.cryptonator.com/api/ticker/btc-usd')
        const data = await res.json();
        console.log(data.ticker.price) //return price
    } catch (e) {
        console.log('error', e)
    }
}
*/

//option3: Axios
/*
promise based HTTP client for the browser and Node. js. Axios makes it easy to 
send asynchronous HTTP requests to REST endpoints and perform CRUD operations. 
It can be used in plain JavaScript or with a library such as Vue or React.
*/
axios.get('https://api.cryptonator.com/api/ticker/btc-usd')
.then(res => {
    console.log(res.data.ticker.price)
})
.catch(err => {
    console.log('error', err)
})

const fetchBitcoinPrice = async () => {
    try {
        const res = await axios.get('https://api.cryptonator.com/api/ticker/btc-usd')
        console.log(res.data.ticker.price)
    } catch (e) {
        console.log('error', e)
    }
}


//setting headers with Axios to get json instead of html
const getDadJoke = async () => {
    //get json response
    const config = {headers: {Accept: 'application/json'}}
    const res = await axios.get('https://icanhazdadjoke.com/api')
    console.log(res.data.joke) //get joke content

}