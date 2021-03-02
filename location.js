
function whereAmI(lat,lag){
	let url="https://geocode.xyz/"+lat+","+lag+"?geoit=json";
	fetch(url).then(function(response) {
		// The API call was successful!
		if (response.ok) {
			return response.json();
		} else {
			throw new Error("You have entered more than 3 times in a second!");
			//return Promise.reject(response);
			
		}
	}).then(function(data) {
		// This is the JSON from our response
		console.log(data);
		console.log("You are in "+data.city+", "+data.country);
		getCountryName(data.country);
	}).catch(function (err) {
		// There was an error
		console.warn('Something went wrong.', err);
	});
}

whereAmI(52.508,13.381);
function getCountryName(country) {
let url="https://restcountries.eu/rest/v2/name/"+country	
fetch(url).then(function(response){
		// The API call was successful!
		if(response.ok) {
			return response.json();
		}
		else {
			return Promise.reject(response);
		}
}).then(function(data){
	// This is the JSON from our response
	console.log(data);
	let b = data[0];
	let a=`<div class="card" style="width:500px;margin-top:50px">
					 <img class="card-img-top" src="${b.flag}" alt="Card image" style="width:100%">
					 <div class="card-body">
					   <h4 class="card-title">${b.name}</h4>
					   </div>
				   </div> `;
   document.getElementById('sample').innerHTML =a;

}).catch(function (err) {
	// There was an error
	console.warn('Something went wrong.', err);
});
	
}