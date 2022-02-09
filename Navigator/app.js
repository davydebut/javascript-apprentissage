let AppCodeName = document.getElementById('appCodeName'),
    appName = document.getElementById('appname'),
    appVersion = document.getElementById('appversion'),
    userAgent = document.getElementById('userAgent'),
    elbtn1 = document.getElementById('btn1'),
    elbtn2 = document.getElementById('btn2'),
    elbtn3 = document.getElementById('btn3'),
    elbtn4 = document.getElementById('btn4');

elbtn1.addEventListener("click", function () {
    AppCodeName.innerHTML = navigator.appCodeName;
}, false);
elbtn2.addEventListener("click", function () {
    appName.innerHTML = navigator.appName;
}, false);
elbtn3.addEventListener("click", function () {
    appVersion.innerHTML = navigator.appVersion;
}, false);
elbtn4.addEventListener("click", function () {
    userAgent.innerHTML = navigator.userAgent;
}, false);