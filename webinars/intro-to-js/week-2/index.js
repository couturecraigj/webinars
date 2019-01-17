/**
 * Interfacing with HTML
 */

// Selecting document elements
const rootEl = document.querySelector('#root');
const dataNodeList = document.querySelectorAll('div.data');


const updateHTML = () => {
  console.log('update called!')
  rootEl.innerHTML = '<h1>SET FROM JAVASCRIPT</h1>'
  updateButton.removeEventListener('click', updateHTML);
}

const updateButton = document.getElementById('update-html');

updateButton.addEventListener('click', updateHTML);
updateButton.onclick = updateHTML;
