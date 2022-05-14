function changeColor(action, color) {
  document.body.style.backgroundColor = color;
}

/**
 * When receiving a message from the extension,
 * get the good tab to call executeScript
 */
 chrome.runtime.onMessage.addListener(async ({ from, action, color }, sender, sendResponse) => {
  if (from === 'ext') {
    chrome.windows.getCurrent(w => {
      chrome.tabs.query({active: true, windowId: w.id}, tabs => {
        const tabId = tabs[0].id;

        chrome.scripting.executeScript({
          target: { tabId },
          function: changeColor,
          args: [action, color],
        });
      });
    });

    sendResponse({status: 'ok'});
  }
  sendResponse({status: 'wut'});
});
