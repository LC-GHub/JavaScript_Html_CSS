const form = document.querySelector("#searchform");

form.addEventListener('submit', async (e) => {
    e.preventDefault();
    const searchterm = form.elements.query.value;
    //const res = await axios.get(`https://api.tvmaze.com/search/shows?q=${searchterm}`)
    const URLparams = {
        params: {q: searchterm}
    }
    const res = await axios.get(`https://api.tvmaze.com/search/shows`, URLparams)
    //console.log(res.data)
    await makeImg(res.data);
    form.elements.query.value = '';
    
})

const makeImg = async (shows) => {
    try{
        for (let result of shows){
            const newImg = document.createElement('img');
            newImg.src = result.show.image.medium;
            document.body.appendChild(newImg);
        }
    }catch (e){
        console.log('there are shows that do not contain medium image URLs')
    }
    
}