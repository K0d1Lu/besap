function red() {
  document.body.style.backgroundColor = 'red';

  chrome.runtime.sendMessage(
    {
      from: 'ext',
      action: 'change-color',
      color: 'red'
    }
  );
}

function green() {
  document.body.style.backgroundColor = 'green';

  chrome.runtime.sendMessage(
    {
      from: 'ext',
      action: 'change-color',
      color: 'green'
    }
  );
}

async function getCurrentTab() {
  let queryOptions = { active: true, currentWindow: true };
  let [tab] = await chrome.tabs.query(queryOptions);
  return tab;
}

document.addEventListener('DOMContentLoaded', function () {
  const btnRed = document.getElementById('change-color-to-red');
  const btnGreen = document.getElementById('change-color-to-green');
  const btnInjectFile = document.getElementById('inject-file');


  btnRed.onclick = red;
  btnGreen.onclick = green;

  btnInjectFile.addEventListener('click', async () => {
    let tab = await getCurrentTab();
  
    chrome.scripting.executeScript({
      target: {tabId: tab.id},
      files: ['content-script.js']
    });
  });
});