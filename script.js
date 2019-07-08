const app = document.getElementById('root');

const logo = document.createElement('img');
logo.src = 'https://raw.githubusercontent.com/taniarascia/sandbox/master/ghibli/logo.png';

const container = document.createElement('div');
container.setAttribute('class', 'container');

app.appendChild(logo);
app.appendChild(container);

// Create a request variable and assign a new XMLHttpRequest object to it
const request = new XMLHttpRequest;

// Open a new connection, using the GET request on the URL endpoint
request.open('GET', 'https://ghibliapi.herokuapp.com/films', true);

request.onload = function () {
	// Begin accessing JSON data here
	const data = JSON.parse(this.response);
	
	if(request.status >= 200 && request.status < 400) {
		data.forEach(movie => {
			// Create a div with className of 'card'
			const card = document.createElement('div');
			card.setAttribute('class', 'card');

			// Add the card div to the container div
			container.appendChild(card);

			// Create an h1 element, add the value of movie.title to it, add the movieTitle to the card div
			const movieTitle = document.createElement('h1');
			movieTitle.appendChild(document.createTextNode(movie.title))
			card.appendChild(movieTitle);

			// Create a p element, add the value of movie.description to it, add the movieDesc to the card div
			const movieDesc = document.createElement('p');
			movieDesc.appendChild(document.createTextNode(movie.description));
			card.appendChild(movieDesc);
		});
	} else {
		console.log('error');
	}
}

// Send request
request.send();
