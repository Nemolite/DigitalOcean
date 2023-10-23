// function compareNumeric(a, b) {
// 	if (a < b) return 1
// 	if (a == b) return 0
// 	if (a > b) return -1
// }

// arr.sort(compareNumeric)
// console.log(arr)

// function fanc(item) {
// 	return item + 2
// }

// let newarr = arr.map(fanc)
// console.log(newarr)

// function fanc2(item) {
// 	return item <= 4
// }

// let newarr2 = arr.filter(fanc2)
// console.log(newarr2)

// let arr = [2, 3, 4, 5, 11, 1, 2, 17]

// function fanc3(total, item) {
// 	return (total = total + item)
// }

// let result = arr.reduce(fanc3)
// console.log(result)
// let div = document.querySelector('div')

// console.log(div)
// console.log(typeof div)
// //alert(div)

// let p = document.querySelector('p')
// console.log(p)

// let s = document.querySelector('script')
// console.log(s)
// //alert(s)

// let der = document.querySelector('#der')
// console.log(der)

// let arrli = document.querySelectorAll('li')
// console.log(arrli)
// for (let i = 0; i < arrli.length; i++) {
// 	console.log(arrli[i])
// }

// let tree = document.querySelector('.tree')
// console.log(tree)
// tree.textContent = 'Hello,World'

// let div = document.querySelector('div')
// div.setAttribute('class', 'myclass')

// let arrli = document.querySelectorAll('li')
// console.log(arrli)
// arrli[3].textContent = 'Hello,World'
// let div = document.querySelector('div')
// // div.style.backgroundColor = 'black'
// console.log(div.getAttribute('style'))

// div.style.height = '350px'

// // div.classList.add('myclass')
// div.classList.toggle('myclass')

// function mmm() {
// 	div.classList.toggle('myclass')
// }
// setTimeout(mmm, 5000)

// let block = document.querySelector('.block')
// for (let i = 0; i < block.children.length; i++) {
// 	console.log(block.children[i])
// }
// console.log(block.lastChild)

// let h1 = document.querySelector('h1')
// console.log(h1.nextSibling)

// let myp = document.createElement('p')
// myp.textContent = 'Hello'
// myp.classList.add('mypclass')

// let block = document.querySelector('.block')

// block.appendChild(myp)
// function myfanc() {
// 	function innermyfanc() {
// 		alert('Документ загрузился')
// 	}
// 	setTimeout(innermyfanc, 5000)
// }

// let h1 = document.querySelector('h1')

// // h1.addEventListener('click', myfanc)

// document.addEventListener('DOMContentLoaded', myfanc)

// document.addEventListener('Scroll', function () {
// 	console.log(111)
// })

// let zak = document.querySelector('#zak')
// // console.log(zak)
// zak.textContent = 'Hello,world'
// let varp = document.querySelector('.title')
// varp.innerHTML = 'Новый текст'

// let varmydiv = document.querySelector('div')
// varmydiv.setAttribute('class', 'block')

// let headingElement = document.querySelector('h1')
// console.log(headingElement.getAttribute('id'))
// console.log(headingElement.getAttribute('class'))

// let myblock = document.querySelector('.myblock')
// myblock.style.backgroundColor = 'green'
// myblock.style.borderRadius = '15px'
// // myblock.style.display = 'none'

// let headingElement = document.querySelector('h1')
// headingElement.style.fontSize = '14px'
// headingElement.style.paddingTop = '20px'

// let div1 = document.querySelector('div')
// div1.classList.add('block')

// let myblock = document.querySelector('.myblock')
// myblock.classList.remove('myblock')
// myblock.classList.add('newblock')

// let mynewblock = document.querySelector('.mynewblock')
// mynewblock.classList.toggle('bornesblock')
// mynewblock.classList.toggle('bornesblock')

// function fanc() {
// 	mynewblock.classList.toggle('bornesblock')
// }

// for (let i = 0; i < 9; i++) {
// 	setTimeout(fanc, 3000)

// }

// if (mynewblock.classList.contains('mynewblock')) {
// 	mynewblock.classList.remove('mynewblock')
// }

// let news = document.querySelector('.news')

// function fanc() {
// 	news.classList.remove('news')
// 	news.classList.add('newblock')
// }

// if (news.classList.contains('news')) {
// 	setTimeout(fanc, 5000)
// }

// let find = document.querySelectorAll('.title1')
// find[0].innerHTML = 'test25'
// find[0].setAttribute()
// console.log(find)
// console.log(find.firstChild)

// let news = document.querySelector('.news')
// console.log(news)
// news.children[0].textContent = 'test26'
// console.log(news.firstChild)
// news.firstChild.innerHTML = 'test27'

// let title1 = document.querySelector('#ret')
// console.log(title1)
// console.log(title1.parentNode)
// title1.parentNode.textContent = 'test parentNode'

// let news = document.querySelector('.news')
// // console.log(news.parentNode)
// console.log(news.firstElementChild)
// // console.log(news.childNodes)

// let ret = document.querySelector('#ret')
// ret.nextElementSibling.innerHTML = 'woqoweroiweoiweioriouwer'

// fetch('https://jsonplaceholder.typicode.com/todos/1')
// 	.then(response => response.json())
// 	.then(json => console.log(json))

// async function getUser() {
// 	const response = await fetch('https://jsonplaceholder.typicode.com/users', {
// 		method: 'GET',
// 		headers: { Accept: 'application/json' },
// 	})
// 	if (response.ok === true) {
// 		const user = await response.json()
// 		let tbody = document.querySelector('tbody')
// 		for (item of user) {
// 			console.log(item)
// 			htmltrtd = `<td>${item['name']}</td><td>${item['username']}</td><td>${item['email']}</td>`
// 			let tr = document.createElement('tr')
// 			tr.innerHTML = htmltrtd
// 			tbody.appendChild(tr)
// 		}
// 	}
// }
// // getUser()

// async function getUserFast() {
// 	const response = await fetch('http://127.0.0.1:8000/db', {
// 		method: 'GET',
// 		headers: {
// 			Accept: 'application/json',
// 		},
// 	})
// 	if (response.ok === true) {
// 		const user = await response.json()
// 		console.log(user)
// 		let tbody = document.querySelector('tbody')
// 		for (item of user) {
// 			console.log(item)
// 			htmltrtd = `<td>${item['age']}</td><td>${item['name']}</td><td>${item['id']}</td>`
// 			let tr = document.createElement('tr')
// 			tr.innerHTML = htmltrtd
// 			tbody.appendChild(tr)
// 		}
// 	}
// }
// getUserFast()

const body = document.querySelector('body')
console.log(body)
// let body1 = document.body
// console.log(body1)

const p = document.createElement('p')
p.textContent = 'Я теперь внутри DOM-дерева'
p.style.color = 'red'
p.style.fontSize = '20px'
p.classList.add('mycontent')
p.setAttribute('id', 'myp')
console.log(p)

body.appendChild(p)

const newp = document.querySelector('#myp')
const h2 = document.createElement('h2')
h2.innerHTML = 'Заголовок'

body.insertBefore(h2, p)

const h3 = document.createElement('h3')
h3.innerHTML = 'Новости'

body.insertAdjacentElement('beforeend', h3)
/**
 * Функция добавления нового элемента на страницу
 *
 */
function insertAfter(target, newElement) {
	target.parentNode.insertBefore(newElement, target)
}

const div = document.createElement('div')
div.setAttribute('class', 'block')

insertAfter(body, div)
