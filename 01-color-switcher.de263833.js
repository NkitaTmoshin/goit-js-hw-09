!function(){"use strict";var t=document.querySelector("[data-start]"),e=document.querySelector("[data-stop]");t.addEventListener("click",(function(e){n=setInterval((function(){var e="#".concat(Math.floor(16777215*Math.random()).toString(16));document.body.style.background=e,t.setAttribute("disabled",!0)}),1e3)})),e.addEventListener("click",(function(){t.removeAttribute("disabled"),clearInterval(n)}));var n=null}();
//# sourceMappingURL=01-color-switcher.de263833.js.map