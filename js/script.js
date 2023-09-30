const url = 'https://reqres.in/api/users?page=2';

document.querySelector('#get-text').onclick = async () => {
    try {
    let response = await fetch(url);
    if (response.ok) {
      let data = await response.text();
      console.log(data);
    }
    }
    catch (error) {
        console.log(error);
   }
}