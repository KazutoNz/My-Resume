// script.js
fetch('title.html')
    .then(response => response.text())
    .then(data => {
        document.getElementById('navbar').innerHTML = data;
    })
    .catch(error => console.error('Error loading the navbar:', error));

    fetch('title.php')
    .then(response => response.text())
    .then(data => {
        document.getElementById('navbar').innerHTML = data;
    })
    .catch(error => console.error('Error loading the navbar:', error));