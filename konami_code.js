const code = [38, 38, 40, 40, 37, 39, 37, 39, 66, 65]

function init() {
  // Write your JavaScript code inside the init() function
  let index = 0

  function onKeyDownHandler(event) {
    const key = parseInt(event.detail || event.which);

    if (key === code[index]) {
      index++;

      if (index === code.length) {
        alert('Hurray!');

        index = 0;
      }
    } else {
      index = 0;
    }
  }

  document.addEventListener('keydown', onKeyDownHandler);

}
