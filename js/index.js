
window.onload = () => {
    getJoke();
    let newJoke = document.querySelector('#newJoke');
    newJoke.addEventListener('click',function(e){
        e.preventDefault();
        getJoke();
    })
}

async function getJoke() {
    let response = await fetch('https://api.chucknorris.io/jokes/random');
    
    if (response.ok) {
        let data = await response.json();
        // console.log(data);
        let container = document.querySelector('#container');

        container.innerHTML = '';

        photoDiv = document.createElement('div');
        photoDiv.innerHTML = '<br><img src=' + data.icon_url + '>';
        container.append(photoDiv);

        idDiv = document.createElement('div');
        idDiv.innerHTML = '<br><b>ID:</b><br>' + data.id;
        container.append(idDiv);

        jokeDiv = document.createElement('div');
        console.log(data.value);
        jokeDiv.innerHTML = '<br><b>Joke:</b><br>' + data.value;
        container.append(jokeDiv);
    } else {
        alert("HTTP-Error: " + response.status);
    }
}