const form = document.querySelector('#searchForm')
form.addEventListener('submit', async function(e) {
    e.preventDefault();
    const searchTerm = form.elements.query.value;
   
    
    //request api call to fetch shows user request
    //http://api.tvmaze.com/search/shows?q=girls
    
    //searchTerm1:for programiticly add query parameters ins
    const config = {params: {q: searchTerm}} 
    const res = await axios.get(`http://api.tvmaze.com/search/shows`, config);
    //searchTerm2: change search query by user input q=girls -> q=${searchTerm}` to get what user searches
    //const res = await axios.get(`http://api.tvmaze.com/search/shows?q=${searchTerm}`);
    makeImages(res.data)
    form.elements.query.value = ' ';  //after each sarch, clear the search url
    
})

//functon to append each search result picture in the array to html body
const makeImages = (shows) => {
    for(let result of shows){
        //not every show has image, so show img which has pic
        if(result.show.image){
        const img = document.createElement('IMG'); //create img element for html body
        img.src = result.show.image.medium; //return first show img url in search result[]
        document.body.append(img); //show image once search button clicked
    }
    }
}
