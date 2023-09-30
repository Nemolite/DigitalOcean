function createNode(element){
  return document.createElement(element)
}
function append(parent, el) {
	return parent.appendChild(el)
}

const ul = document.getElementById("7");
const url = 'https://reqres.in/api/users?page=2';

fetch(url)
.then((resp) => resp.json())
.then(function(data) {
    let emails = data['data']
    return emails.map(function(email) {
    let li = createNode('li')
    let span = createNode('span')
    span.innerHTML = `${email.email} ${email.first_name} ${email.last_name}`
    append(li, span)
    append(ul, li)
  })


})
.catch(function(error) {
  console.log(error);
});