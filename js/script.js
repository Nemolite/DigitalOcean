fetch('https://reqres.in/api/users?page=2')
.then(res => res.json())
.then(json => document.getElementById("test").innerText = JSON.stringify(json))
.then(function(data) {
    console.log('ok')
})
.catch(function(error) {
    console.log('error')
});