function changeColorToRed() {
  document.body.style.backgroundColor = 'red';

  chrome.runtime.sendMessage(
    {
      from: 'ext',
      action: 'change-color',
      color: 'red'
    }
  );
}

function changeColorGreen() {
  document.body.style.backgroundColor = 'green';

  chrome.runtime.sendMessage(
    {
      from: 'ext',
      action: 'change-color',
      color: 'green'
    }
  );
}

document.addEventListener('DOMContentLoaded', function () {
  const buttonRed = document.getElementById('changeColorToRed');
  const buttonGreen = document.getElementById('changeColorToGreen');

  buttonRed.onclick = changeColorToRed;
  buttonGreen.onclick = changeColorGreen;
});