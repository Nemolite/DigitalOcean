// function createNode(element){
//   return document.createElement(element)
// }

// fetch('https://reqres.in/api/users?page=2')
// .then(res => res.json())
// .then(json => document.getElementById("test").innerText = JSON.stringify(json))
// .then(function(data) {
//     console.log('ok')
// })
// .catch(function(error) {
//     console.log('error')

// let li = document.createElement('li')
// let span = document.createElement('span')
// const ull = document.getElementById('some')
// url = 'https://reqres.in/api/users?page=1'
// fetch(url)
// .then(function(response) {
//        response.text().then(data=>{
//         span.innerHTML = `${data}`
//         ull.appendChild(span)
//     })
// })

// document.querySelector('#get-text').onclick = async () => {
// 	try {
// 		let response = await fetch(url)
// 		if (response.ok) {
// 			let data = await response.text()
// 			//      console.log(data);
// 			document.querySelector('#result').innerHTML = data
// 		}
// 	} catch (error) {
// 		console.log(error)
// 	}
// }

// document.querySelector('#get-text').onclick = () => {
// 	fetch('https://reqres.in/api/users?page=2')
// 		.then(response => {
// 			if (response.ok) {
// 				response.text().then(data => {
// 					// выведем данные в #result
// 					document.querySelector('#result').innerHTML = data
// 				})
// 			}
// 		})
// 		.catch(error => {
// 			console.log(error)
// 		})
// }

// function createNode(element) {
// 	return document.createElement(element)
// }

// function append(parent, el) {
// 	return parent.appendChild(el)
// }

// const ul = document.getElementById('authors')
// const url = 'https://reqres.in/api/users?page=2'

// fetch(url)
// 	.then(resp => resp.json())
// 	.then(function (data) {
// 		let authors = data['data']
// 		let out = getElementById(out)
// 		console.log(out)
// 		for (let index = 0; index < authors.length; ++index) {
// 			let span = createNode('span')
// 			let li = createNode('li')

// 			span.innerHTML = `${authors[index]['first_name']}`

// 			out.innerHTML = 'authors[email]'

// 			append(li, span)
// 			append(ul, li)
// 		}
// 	})

// 	.catch(function (error) {
// 		console.log(error)
// 	})

// // строка JSON
// var jsonPerson = '{"name":"Иван","age":25}'

// // объект JavaScript
// var person = {
// 	name: 'Иван',
// 	age: 25,
// }

// var person1 = JSON.parse(jsonPerson)
// console.log(person1)
// console.log(person1.name)

// let json = JSON.stringify(person1)
// console.log(json)

// const body = document.querySelector('body')
// console.log(body)

// const elem = document.createElement('p')
// elem.innerHTML = 'Hello,HTML'

// body.appendChild(elem)
// authorsJSON = {

// }

// for (let index = 0; index < authors.length; ++index) {
// 	// 						out.innerHTML = authors[index]['email']
// 	// 					}

// sty = {
// 	time: {
// 		updated: 'Oct 3, 2023 09:32:00 UTC',
// 		updatedISO: '2023-10-03T09:32:00+00:00',
// 		updateduk: 'Oct 3, 2023 at 10:32 BST',
// 	},
// 	disclaimer:
// 		'This data was produced from the CoinDesk Bitcoin Price Index (USD). Non-USD currency data converted using hourly conversion rate from openexchangerates.org',
// 	chartName: 'Bitcoin',
// 	bpi: {
// 		USD: {
// 			code: 'USD',
// 			symbol: '&#36;',
// 			rate: '27,540.8578',
// 			description: 'United States Dollar',
// 			rate_float: 27540.8578,
// 		},
// 		GBP: {
// 			code: 'GBP',
// 			symbol: '&pound;',
// 			rate: '23,012.9205',
// 			description: 'British Pound Sterling',
// 			rate_float: 23012.9205,
// 		},
// 		EUR: {
// 			code: 'EUR',
// 			symbol: '&euro;',
// 			rate: '26,828.8165',
// 			description: 'Euro',
// 			rate_float: 26828.8165,
// 		},
// 	},
// }

// // forjs = JSON.parse(sty)
// console.log(sty.time)

// let a = prompt('Введите число=')
// console.log(a)

// if (a < 0 && a > 10) {
// 	alert('Число a меньше нуля,значит вне диапозона')
// } else {
// 	alert(a)
// }
// console.log(a < 0 && a > 10)
// console.log(a >= 0 && a <= 10)
// switch (a >= 0 && a <= 10) {
// 	case true:
// 		alert(a)
// 		break
// 	case false:
// 		alert('Число a  вне диапозона')
// 		break
// }

// function myfanc(a, b) {
// 	if (a > b) {
// 		alert('Число a больше чем число b')
// 	} else {
// 		if (a < b) {
// 			alert('Число b больше чем число a')
// 		} else {
// 			alert('Число b равно числу a')
// 		}
// 	}
// }
// let xsd = prompt('Введите 1 число=')
// let yer = prompt('Введите 2 число=')
// myfanc(xsd, yer)

// function tret(a) {
// 	if (a % 2 == 0) {
// 		alert('Ваше число чётное')
// 	} else {
// 		alert('Ваше число не чётное')
// 	}
// }

// let x = prompt('Введите число=')

// tret(x)

// var a = 10
// let b = 11
// const c = 13
// alert(a)

// let myText = 'The dog ate my homework!'
// console.log(myText)

// const siteURL = 'https://www.google.com'
// siteURL = 11
// console.log(siteURL)

// let a = prompt('введите переменную = ')

// function myfanc(x) {
// 	let sum
// 	console.log(x)
// 	sum = x * x
// 	return x
// }

// myfanc(34)
// myfanc(a)

// let ty = s => {
// 	return s + s
// }

// console.log(ty(2))

// document.write('Show this on screen!')

// for (let i = 1; i <= 10; i = i + 1) {
// 	console.log('Hello, World')
// 	document.write('Hello, World')
// }

// for (let j = 0; j < 5; j++) {
// 	document.write('Hello, World  ', j)
// 	document.write('<br/>')
// }

// let j = 0
// while (j < 5) {
// 	document.write('Hello, World  ', j)
// 	document.write('<br/>')
// 	j++ // j = j + 1
// }

// function append(parent, el) {
// 	return parent.appendChild(el)
// }

// const ul = document.getElementById("7");
// const url = 'https://reqres.in/api/users?page=2';

// fetch(url)
// .then((resp) => resp.json())
// .then(function(data) {
//     let emails = data['data']
//     return emails.map(function(email) {
//     let li = createNode('li')
//     let span = createNode('span')
//     span.innerHTML = `${email.email} ${email.first_name} ${email.last_name}`
//     append(li, span)
//     append(ul, li)
//   })

// })
// .catch(function(error) {
//   console.log(error);
// });

// const ul1 = document.getElementById('authors')
// const url = 'https://reqres.in/api/users?page=2'

// let j = 0
// do {
// 	document.write('Hello, World  ', j)
// 	document.write('<br/>')
// 	j = j + 1
// } while (j < 5)

// for (let i = 1; i <= 10; i = i + 1) {
// 	umo = i * i
// 	console.log(umo)
// }

// let j = 0
// while (j <= 20) {
// 	document.writeln(j)
// 	console.log(j)
// 	j = j + 2
// }

// for (let i = 0; i <= 20; i = i + 1) {
// 	if (i % 2 == 0) {
// 		document.writeln(i)
// 		console.log(i)
// 	}
// }

// let sum = 0
// let j = 0
// while (j <= 10) {
// 	sum = sum + j
// 	j++
// }
// alert(sum)
// let sum = 0
// for (let i = 0; i < 10; i = i + 1) {
//
// 		sum = sum + i
//
// }

// alert(sum)

// for (let i = 10; i >= 1; i = i - 1) {
// 	console.log(i)
// }

// for (let index = 1; index <= 5; index = index + 1) {
// 	if (index == 3) {
// 		break
// 	}
// 	console.log(index)
// }

// let ind = 0
// while (ind <= 4) {
// 	ind = ind + 1
// 	if (ind == 3) {
// 		continue
// 	}
// 	console.log(ind)
// }

// let inx = 0
// do {
// 	inx = inx + 1
// 	if (inx == 3) {
// 		continue
// 	}
// 	console.log(inx)
// } while (inx <= 4)

// for (let ar = 0; ar <= 20; ar = ar + 4) {
// 	if(ar!=0){
// 		console.log(ar)
// 	}

// }

// let i = 0
// while (i <= 20) {
// 	if (i % 2 == 0) {
// 		console.log('Число чётное')
// 	} else {
// 		console.log('Число не чётное')
// 	}
// }

// for (let i = 7; i <= 48; i = i + 3) {
// 	console.log(i)
// }

// sum = 0

// for (let j = 0; j <= 40; j++) {
// 	if (j % 2 == 0) {
// 		sum = sum + j
// 		if (sum == 20) break
// 	}
// }
// console.log(sum)

// function myfanc() {
// 	for (let i = 1; i <= 10; i++) {
// 		if (i != 3 && i != 7) console.log(i)
// 	}
// }
// myfanc()

// for (let i = 1; i <= 10; i++) {
// 	if (i == 5 || i == 7) {
// 		continue
// 	}
// 	console.log(i)
// }

// let j = 0
// while (j < 10) {
// 		j = j + 1
// 			if (j == 5) {
// 				continue
// 			}
// 		console.log(j)
// }

// let k = 10
// do {
// 	console.log(k)
// 	k--
// } while (k >= 1)

/**
 *Функция для работы
 */
// function myfanc() {}

// myfanc()

// /**
//  * Функция вывода строки
//  * @param {} a
//  */
// function myfanc(a) {
// 	console.log(a)
// }

// let timeoutID = setTimeout(myfanc, 5000, 12)
// console.log(timeoutID)

// let intervalID = setInterval(myfanc, 3000, 12)
// clearInterval(intervalID)

// function noname() {
// 	function innerfanc() {
// 		console.log('innerfanc')
// 	}
// 	return innerfanc
// }

// let n = noname()
// console.log(n())

// function noname2() {
// 	let a = 11
// 	function innerfanc2() {
// 		return a++
// 	}
// 	return innerfanc2
// }

// let n2 = noname2()
// console.log(n2())
// console.log(n2())
// console.log(n2())

// function myfanc() {
// 	alert('Hello, World')
// }

// let timeoutID1 = setTimeout(myfanc, 5000)

// function myfanc3() {
// 	console.log('Hello,World')
// }

// for (let i = 5000; i <= 15000; i = i + 5000) {
// 	setTimeout(myfanc3, i)
// }

// function myfanc4(txt, txt2) {
// 	console.log(txt)
// 	alert(txt2)
// }

// // setTimeout(myfanc4, 3000, 'any', 23)
// let a = 10
// a = 23

// function fanc() {
// 	b = 45
// 	let a = 67
// 	console.log(a)
// }
// fanc()

// console.log(a)
// console.log(b)

// let arr = [1, 2, 3, 4, , 5]
// let arr2 = new Number(1, 2, 3, 4)
// console.log(arr)
// console.log(arr2)
// let arr3 = ['hello', 2, true, [2, 3, 4, 5]]

// // console.log(arr3.length)

// arr3.push('[6, 7, 8]')

// for (let i = 0; i < arr3.length; i++) {
// 	console.log(arr3[i])
// }

// let arr = [1, 2, 3, 4, 5]

// function fanc(item) {
// 	return item + 4
// }

// let newarr = arr.map(fanc)
// console.log(newarr)

// function fanc2(item) {
// 	ret = item > 2
// 	return ret
// }

// let newarr2 = arr.filter(fanc2)
// console.log(newarr2)

// function r(n, m) {
// 	return n + m
// }
// let res = arr.reduce(r)
// console.log(res)

// arr3 = [11, 2, 33, 4, 53, 6]

// for (let item of arr3) {
// 	console.log(item)
// }

// for (let i = 0; i < arr3.length; i++) {
// 	console.log(arr3[i])
// }

// let str1 = 'hello,World'
// console.log(str1[0])

// let newstr = [...str1]
// for (item of str1) {
// 	console.log(item)
// }

// let theBigString = 'Pulp Fiction is an awesome movie!'
// console.log(theBigString.slice(5, 12))

// let inspirationalQuote = 'That which you can also split apart'
// let arrstr1 = inspirationalQuote.split(' ')
// for (item of arrstr1) {
// 	console.log(item)
// }

// let ip2 = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]

// for (let index = 0; index < ip2.length; index++) {
// 	console.log(ip2[index])
// }

// let arr = ['Hello', 2, true, 25, 10000, 'ip']
// let ind = 0
// while (ind < arr.length) {
// 	console.log(arr[ind])
// 	ind = ind + 1
// }

// function s(a) {
// 	console.log(a)
// }

// let arrt = [1, 2, 3, 4, 5, 6, 7, 8, 9]

// for (let ng = arrt.length - 1; ng >= 0; ng = ng - 1) {
// 	console.log(arrt[ng])
// }

// for (let k = 0; k < arrt.length; k++) {
// 	if (arrt[k] % 2 != 0) {
// 		s(arrt[k])
// 	}
// }

// let sumarr = 0
// for (let d = 0; d < arrt.length; d++) {
// 	sumarr = sumarr + arrt[d]
// }
// s(sumarr)
// function s(a) {
// 	console.log(a)
// }

// let foo = { a: 'Hello', b: 'Monday' }

// s(foo.a)
// s(foo['a'])

// const json = '{"result":true, "count":42}';
// const obj = JSON.parse(json);

// s(obj.count)

// let jsonmain = JSON.stringify(foo)

// s(jsonmain)
// s(typeof jsonmain )

// const url = 'https://reqres.in/api/users?page=2'
// fetch(url)
//     .then(resp => resp.json())
//  	.then(function (data) {
//  		s(data)
//  		s(data.data)
//  	})

//  	.catch(function (error) {
//  		s(error)
//  	})
// let arrstr = [
// 	'политехнического',
// 	'учимся',
// 	'техникума',
// 	'Шумерлинского',
// 	'Минобразования',
// 	'Чувашии',
// 	'Мы',
// ]

// console.log(arrstr)

// let groceries = ['Milk', 'Eggs', 'Frosted Flakes', 'Salami', 'Juice']
// console.log(groceries[4])
// console.log(groceries)

// groceries.push('Segey')
// console.log(groceries)

// groceries.pop()
// console.log(groceries)

// groceries.unshift('Vushnyakov')
// console.log(groceries)

// groceries.shift()
// console.log(groceries)

// groceries[2] = 'new String'
// console.log(groceries)

// console.log(groceries.indexOf('Salami'))

// let n = groceries.indexOf('Salami')
// groceries[n] = 'Motor'
// console.log(groceries)

// let good = ['Mario', 'Luigi', 'Kirby', 'Yoshi']
// let bad = ['Bowser', 'Koopa Troopa', 'Goomba']

// let goodAndBad = good.concat(bad)

// console.log(goodAndBad)

// let goodAndBad2 = bad.concat(good)

// console.log(goodAndBad2)

// let str1 = arrstr[6]
// arrstr.pop()
// arrstr.unshift(str1)

// arrstr.push('в')

// let a2 = arrstr.indexOf('учимся')
// let a1 = arrstr[a2]
// arrstr.unshift(a1)

// console.log(arrstr)
