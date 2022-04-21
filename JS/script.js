let quote = document.getElementById('custom-quote')
let quoteAuthor1 = document.getElementById('author') 
let quoteSection = document.getElementById('quote-section')
let btn = document.querySelectorAll('button')
let formSection = document.getElementById('form-section')




let fetchData = (data) => {
    console.log(data)
    document.getElementById('custom-quote').innerText = data.content
    document.getElementById('author').innerText = data.originator.name
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
        document.getElementById('quote-section').style.display = "none"
    }
}))
