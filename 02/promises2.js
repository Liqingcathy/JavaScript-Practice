//a chain of promises async logic to get response data by order or get error message

fakeRequestPromise('my.com/api/page1')
.then(() => {
    console.log('page1')
    console.log(data)
    return fakeRequestPromise('my.com/api/page2')
})
.then(() => {
    console.log('page2')
    console.log(data)
    return fakeRequestPromise('my.com/api/page3')
})
.then(() => {
    console.log('page3')
    console.log(data)
})
.catch(() => {
    console.log('Error: a request failed')
    console.log(err)
})

