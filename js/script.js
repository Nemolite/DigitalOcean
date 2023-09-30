document.querySelector('#get-text').onclick = () => {
	fetch('https://reqres.in/api/users?page=2')
		.then(response => {
			if (response.ok) {
				response.text().then(data => {
					// выведем данные в #result
					document.querySelector('#result').innerHTML = data
				})
			}
		})
		.catch(error => {
			console.log(error)
		})
}
