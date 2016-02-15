(function() {
  var gui = require('nw.gui');
  var iframe = document.querySelector('iframe');
  var win = gui.Window.get();

  var handleClick = function(e) {
    var checkForLink = function(el) {
      var openLink = function(url) {
        gui.Shell.openExternal(url);
        e.preventDefault();
      };

      if (el.nodeName.toLowerCase() === 'a') {
        var href = el.getAttribute('href');
        if (href !== null) {
          var middleButton = e.which === 2;
          if (middleButton ||
              (el.target === '_blank' &&
               el.rel !== 'user' &&
               el.rel !== 'mediaPreview')) {
            openLink(href);
          }

          console.log(href, middleButton, el.target, el.rel);
        }
      } else if ((p = el.parentElement) !== null) {
        checkForLink(p);
      }
    };

    checkForLink(e.target);
  };

  var zoom = function () { win.zoomLevel += 1; }
  var unzoom = function () { win.zoomLevel -= 1; }
  var resetZoom = function () { win.zoomLevel = 0; }

  var handleKeydown = function (e) {
    if (e.ctrlKey) {
      if (e.keyCode == 187) zoom();
      else if (e.keyCode == 189) unzoom();
      else if (e.keyCode == 48) resetZoom();
    }
  };

  var init = function() {
    if (iframe &&
        iframe.contentWindow &&
        iframe.contentWindow.document &&
        iframe.contentWindow.document.body &&
        iframe.contentWindow.document.body.innerHTML) {
     iframe.contentWindow.document.body.addEventListener('click', handleClick, false);
     iframe.contentWindow.document.body.addEventListener('keydown', handleKeydown, false);
    } else {
      setTimeout(init, 100);
    }
  };

  init();
}).apply(this);
