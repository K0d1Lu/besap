function changeColor(action, color) {
  document.body.style.backgroundColor = color;
}

chrome.runtime.onMessage.addListener(
  function({ from, action, color }, sender, sendResponse) {
    if (from === 'ext') {
      changeColor(action, color)
    }
  }
);