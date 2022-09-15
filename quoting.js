const container = document.querySelector('.container');
const content = container.querySelector('.content');
const author = container.querySelector('.author');
const tags = container.querySelector('.tagSection');
const RefreshBtn = container.querySelector('.refreshBtn');
let apiURL = "https://api.quotable.io/random";

async function getData(){
    console.log("inside function");
    await fetch(apiURL).then((response)=>{
        console.log("inside the first then");
        return response.json();
    }).then((data)=>{
        // tags.textContent = data.tags;
        content.textContent = data.content;
        author.textContent = data.author;
        console.log(data);
    })
}

getData();
RefreshBtn.addEventListener('click', ()=>{
    window.location.reload();
})