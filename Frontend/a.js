
const func1 = () => {

    fetch('http://localhost:8080/api/v1/rest/').then(function (response) {

	// The API call was successful!
	if (response.ok) {
		return response.json();
	}

	// There was an error
	return Promise.reject(response);

}).then(function (data) {
	// This is the JSON from our response
    document.getElementById("div1").innerHTML = JSON.stringify(data)
	console.log(data);
}).catch(function (err) {
	// There was an error
	console.warn('Something went wrong.', err);
});
}

func1()
// document.getElementById("div1").innerHTML = response;