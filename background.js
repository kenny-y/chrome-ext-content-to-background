chrome.runtime.onMessage.addListener(function(request, sender, sendResponse) {
  console.log(sender.tab ?
              "from a content script:" + sender.tab.url :
              "from the extension");
  if (request.action == "show-notification") {
    chrome.notifications.create('notification', {
      type: 'basic',
      title: 'Hello from Kenny',
      iconUrl: chrome.extension.getURL("48.png"),
      message: 'Only browser extension can do this',
    }, function() {});

    sendResponse("[OK] from background.js");
  }
});
