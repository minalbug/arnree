const urlParams = new URLSearchParams(window.location.search);
const inputField = urlParams.get('inputField');
document.getElementById('inputValue').innerText = inputField;