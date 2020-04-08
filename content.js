// Inject API to web page
var s = document.createElement('script');
s.src = chrome.extension.getURL('api.js');
s.onload = function() {
  this.parentNode.removeChild(this);
};
(document.head||document.documentElement).appendChild(s);

// Register event to allow dialog between page-wide and extension-wide code
document.addEventListener('MY_API:hello', function(e) {
  alert('Hello, ' + e.detail.who);
});

document.addEventListener('MY_API:show-notification', function(e) {
  // Content Script has access to DOM but no access to chrome.* API (with small number of exceptions).
  chrome.runtime.sendMessage({action: "show-notification", param: e}, function(response) {
    console.log(response);
  });
});
