let quote = document.getElementById('custom-quote')
let quoteAuthor1 = document.getElementById('author') 
let quoteSection = document.getElementById('quote-section')
let btn = document.querySelectorAll('.nav-btn')
let formSection = document.getElementById('form-section')
let aboutSection = document.getElementById('about-section')




let fetchData = (data) => {
    console.log(data)
    quote.innerText = data.content
    quoteAuthor1.innerText = data.originator.name
    let Aquote = document.createElement('div')

    Aquote.innerHTML = `
        <hr>
        <div class="card-custom bg-custom p-3">
            <p> <em>" ${data.content}"</em></p>
            <p>Author <span> ${data.originator.name}</span> </p>
        </div>
    `
    quoteSection.prepend(Aquote)
}

function getApiData(param){
    const options = {
    	method: 'GET',
    	headers: {
    		'X-RapidAPI-Host': 'quotes15.p.rapidapi.com',
    		'X-RapidAPI-Key': '18e37f9bf1msh17efa5b9b13e64fp1a52d6jsnf1e5561d4a85'
    	}
    };
    fetch('https://quotes15.p.rapidapi.com/quotes/random/', options)
    	.then(response => response.json())
    	.then(response => param(response))

}

// getApiData(fetchData)

btn.forEach(button => button.addEventListener('click', () => {
    if(button.innerText === 'Quotes'){
        quoteSection.style.display = "block"
        formSection.style.display = "none"
        aboutSection.style.display = "none"
        
    } else if(button.innerText === "Add Quote"){
        quoteSection.style.display = 'none'
        formSection.style.display = "block"
        aboutSection.style.display = "none"
    } else if(button.innerText === "Get New Quote"){
        getApiData(fetchData)
    }
    else{
        quoteSection.style.display = 'none'
        formSection.style.display = "none"
        aboutSection.style.display = "block"
    }
}))
