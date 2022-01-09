var tmrID = setInterval(function() {window.scrollBy({ top: 600, left: 0, behavior: 'smooth' })}, 3000);
var btn = document.createElement('BUTTON');
btn.innerHTML = 'STOP';
btn.id = 'cscr';

btn.style.cssText = 'position: fixed; top:55px; right:0; z-index: 999;';
btn.onclick = function() {clearTimeout(tmrID), btn.remove()};
document.body.appendChild(btn);