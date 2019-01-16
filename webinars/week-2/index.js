/**
 * Interfacing with HTML
 */

// Selecting document elements
const rootEl = document.querySelector('#root');
const dataNodeList = document.querySelectorAll('div.data');


const updateHTML = () => {
  rootEl.innerHTML = '<h1>SET FROM JAVASCRIPT</h1>'
}

const updateButton = document.getElementById('update-html');

updateButton.onclick = updateHTML;

updateButton.addEventListener('click', updateHTML);