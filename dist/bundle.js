!function(e){var t={};function n(r){if(t[r])return t[r].exports;var o=t[r]={i:r,l:!1,exports:{}};return e[r].call(o.exports,o,o.exports,n),o.l=!0,o.exports}n.m=e,n.c=t,n.d=function(e,t,r){n.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:r})},n.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},n.t=function(e,t){if(1&t&&(e=n(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var r=Object.create(null);if(n.r(r),Object.defineProperty(r,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var o in e)n.d(r,o,function(t){return e[t]}.bind(null,o));return r},n.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return n.d(t,"a",t),t},n.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},n.p="/dist",n(n.s=0)}([function(e,t,n){"use strict";n.r(t);var r=function(){var e=document.querySelector("#totop");e.style.display="none",window.addEventListener("scroll",(function(){pageYOffset>750?e.style.display="block":e.style.display="none"}))},o=function(){},l=function(){},a=function(){},u=function(){},c=function(){},i=function(){},s=function(){},f=function(){},d=function(){},g=function(){},y=function(){},v=function(){var e=document.querySelector("#form1"),t=document.querySelector("#form2"),n=document.querySelector("#banner-form"),r=document.querySelector("#card_order"),o=document.querySelector("#footer_form"),l=document.createElement("div"),a=document.querySelector("#thanks"),u=function(u){u.addEventListener("submit",(function(c){c.preventDefault();var s=new FormData(u),f={};return s.forEach((function(e,t){f[t]=e})),console.log("body",f),console.log("formData",s),l.style.display="block",l.classList="statusMessage",l.style.color=u===r?"#000000":"#ffff",l.textContent="Идет отправка...",l.style.fontSize="18px",u.appendChild(l),u.querySelector(".checkbox")&&!1===u.querySelector(".checkbox").checked?(l.textContent="Требуется подтвердить согласие на обработку данных",void(l.style.color="red")):u.querySelector(".phone-input").value.length<10?(l.textContent="Введите корректный телефон",void(l.style.color="red")):(i(f).then((function(r){200==r.status?(u!==e&&u!==t||(u.style.display="none",u.parentNode.style.display="flex",u.parentNode.style.justifyContent="center",u.parentNode.style.alignItems="center",u.parentNode.style.fontSize="18px",u.parentNode.style.color="rgb(255 209 26)",u.parentNode.textContent="Успешно"),u===n||u===o?(a.style.display="block",l.remove()):l.textContent="Успешно"):200!==r.status&&(u===n||u===o?(l.remove(),a.style.display="block",a.querySelector("p").textContent="Ошибка"):l.textContent="Ошибка")})).catch((function(e){console.error(e)})),void u.querySelectorAll("input").forEach((function(e){e.value=""})))}))},c=function(e){document.getElementById(e).addEventListener("input",(function(e){if("phone"===e.target.getAttribute("name"))if(e.target.value=e.target.value.replace(/[^+0-9]/gi,""),e.target.value=e.target.value.replace(/\+{1,}/gi,"+"),e.target.value=e.target.value.replace(/\d{1}\+/gi,e.target.value[0]),e.target.value=e.target.value.replace(/\+\d{1,}\+/gi,e.target.value.substring(e.target.value.indexOf("+"),e.target.value.length-1)),/^8/gi.test(e.target.value)){var t=e.target.value.substring(e.target.value.indexOf("8"),e.target.value.length-1);e.target.value.length>11&&(e.target.value=e.target.value.replace(e.target.value,t))}else if(/^\+/gi.test(e.target.value)){var n=e.target.value.substring(e.target.value.indexOf("+"),e.target.value.length-1);e.target.value.length>12&&(e.target.value=e.target.value.replace(e.target.value,n))}else if(!/^\+/gi.test(e.target.value)&&!/^8/gi.test(e.target.value)){var r=e.target.value.substring(e.target.value.indexOf(0),e.target.value.length-1);e.target.value.length>11&&(e.target.value=e.target.value.replace(e.target.value,r))}"name"===e.target.getAttribute("name")&&(e.target.value=e.target.value.replace(/[^а-яё\s]/gi,""))}))},i=function(e){return fetch("./server.php",{method:"POST",headers:{"Content-type":"application/json"},body:JSON.stringify(e)})};c("form1"),u(e),c("form2"),u(t),c("banner-form"),u(n),c("card_order"),u(r),c("footer_form"),u(o)},p=function(){};(function(){document.body.addEventListener("click",(function(e){var t=e.target;console.log(t);var n=function(e){(t.classList.contains("overlay")||t.closest(".close-form"))&&(e.style.display="none")};!function(){var e=document.querySelector(".clubs-list ul");t.closest(".club-select")?"block"===e.style.display?e.style.display="none":e.style.display="block":t.closest(".club-select")||(e.style.display="none")}();!function(){var e=document.querySelector("#free_visit_form"),r=document.querySelector("#thanks");t.classList.contains("open-popup")&&(e.style.display="block"),n(e),t.classList.contains("close-btn")&&(r.style.display="none")}();var r,o;r=document.querySelector(".callback-btn"),o=document.querySelector("#callback_form"),t===r&&(o.style.display="block"),n(o);!function(){var e=document.querySelector("#gift"),r=document.querySelector(".fixed-gift");t.closest(".fixed-gift")&&(e.style.display="block",r.remove()),e&&n(e)}()}))})(),r(),o(),l(),a(),u(),c(),i(),s(),f(),d(),g(),y(),v(),p()}]);