(function (exports) {
  exports.hello = function (who) {
    document.dispatchEvent(new CustomEvent('MY_API:hello', {
      detail: {
        who: who || 'world'
      }
    }));
  };

  exports.notification = {};
  exports.notification.create = function (param) {
    document.dispatchEvent(new CustomEvent('MY_API:show-notification', param));
  }

})(window.MY_API = {});
