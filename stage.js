(function() {
  var gui = require('nw.gui');
  var iframe = document.querySelector('iframe');

  var handleClick = function(e) {
    var checkForLink = function(el) {
      var openLink = function(url) {
        gui.Shell.openExternal(url);
        e.preventDefault();
      };

      if (el.nodeName.toLowerCase() === 'a') {
        var href = el.getAttribute('href');
        if (href) {
          if ((e.which === 2) || // Middle mouse button
              (el.target === 'blank' &&
               el.rel !== 'user' &&
               el.rel !== 'mediaPreview')) {
            openLink(href);
          }
        }
      } else if ((p = el.parentElement) !== null) {
        checkForLink(p);
      }
    };

    checkForLink(event.target);
  };
  
  var init = function() {
    if (iframe &&
        iframe.contentWindow &&
        iframe.contentWindow.document &&
        iframe.contentWindow.document.body &&
        iframe.contentWindow.document.body.innerHTML) {
     iframe.contentWindow.document.body.addEventListener('click', handleClick, false);
    } else {
      setTimeout(init, 100);
    }
  };
  
  init();
}).apply(this);
