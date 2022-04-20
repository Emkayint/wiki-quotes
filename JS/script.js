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


