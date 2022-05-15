 chrome.runtime.onMessage.addListener(async ({ from, action, color }, sender, sendResponse) => {
  if (from === 'ext') {
    chrome.windows.getCurrent(w => {
      chrome.tabs.query({active: true, windowId: w.id}, tabs => {
        const tabId = tabs[0].id;

        chrome.tabs.sendMessage(
          tabs[0].id,
          { from: 'ext', action, color }
        );
      });
    });

    //sendResponse({status: 'ok'});
  }
  //sendResponse({status: 'wut'});
});
