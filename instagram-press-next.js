var bn = 2;
var clickEvent = new MouseEvent('click', {
    'view': window,
    'bubbles': true,
    'cancelable': false
});
var el = document.getElementsByClassName('wpO6b');	
el[bn].addEventListener(clickEvent, function (e) { /* ... */ }, false);
el[bn].dispatchEvent(clickEvent);
var tmrID = setInterval(function() {el[bn+1].dispatchEvent(clickEvent)}, 3000);
var btn = document.createElement('BUTTON');
btn.innerHTML = 'STOP';
btn.id = 'cscr';
btn.style.cssText = 'position: fixed; top:55px; right:0; z-index: 999;';
btn.onclick = function() {clearTimeout(tmrID), btn.remove()};
document.body.appendChild(btn); 
var sheet = window.document.styleSheets[0];
sheet.insertRule('.HP0qD {display: none !important}', sheet.cssRules.length);
sheet.insertRule('.Ppjfr {display: none}', sheet.cssRules.length);
sheet.insertRule('.M9sTE {width: 100%} ', sheet.cssRules.length);
sheet.insertRule('.EtaWk {display: none} ', sheet.cssRules.length);
sheet.insertRule('.JyscU ._97aPb {margin-right: 0 !important} ', sheet.cssRules.length);
sheet.insertRule('.JyscU.ePUX4 .eo2As  {display: none} ', sheet.cssRules.length);

