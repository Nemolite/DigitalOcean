function createNode(element) {
    return document.createElement(element);
}

function append(parent, el) {
  return parent.appendChild(el);
}

const ul = document.getElementById('authors');
const url = 'https://reqres.in/api/users?page=2';

fetch(url)
.then((resp) => resp.json())
.then(function(data) {
  let authors = data['data'];

  for (let index = 0; index < authors.length; ++index) {

    let span = createNode('span');
    let li = createNode('li');

    span.innerHTML = `${authors[index]['first_name']}`;

    append(li, span);
    append(ul, li);
  }
  })

.catch(function(error) {
  console.log(error);
});