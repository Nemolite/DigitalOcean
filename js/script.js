

let li = document.createElement('li')
let span = document.createElement('span')
const ull = document.getElementById('some')
url = 'https://reqres.in/api/users?page=1'
fetch(url)
.then(function(response) {
       response.text().then(data=>{
        span.innerHTML = `${data}`
        ull.appendChild(span)
    })
})





document.querySelector('#get-text').onclick = async () => {
	try {
		let response = await fetch(url)
		if (response.ok) {
			let data = await response.text()
			//      console.log(data);
			document.querySelector('#result').innerHTML = data
		}
	} catch (error) {
		console.log(error)
	}
}

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

function createNode(element) {
	return document.createElement(element)
}

function append(parent, el) {
	return parent.appendChild(el)
}

const ul1 = document.getElementById('authors')
// const url = 'https://reqres.in/api/users?page=2'

fetch(url)
	.then(resp => resp.json())
	.then(function (data) {
		let authors = data['data']

		for (let index = 0; index < authors.length; ++index) {
			let span = createNode('span')
			let li = createNode('li')

			span.innerHTML = `${authors[index]['first_name']}`

			append(li, span)
			append(ul1, li)
		}
	})

	.catch(function (error) {
		console.log(error)
	})

