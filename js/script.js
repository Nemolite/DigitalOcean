let li = document.createElement('li')
let ul = document.getElementById('some')
url = 'https://reqres.in/api/users?page=2'
fetch(url)
.then(function(resp) {
    // let something = JSON.parse(data.json);
    console.log(resp)
    // console.log(`${something.id}`)
    // console.log(something)
    li.innerHTML=`${id}`  
    console.log(li)
    ul.appendChild(li)
})