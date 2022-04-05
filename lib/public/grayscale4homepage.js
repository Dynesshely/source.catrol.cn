if (PublicSacrificeDay()) {
    if (IsHomePage()) {
        document.getElementsByTagName("html")[0].setAttribute("style", "filter:gray !important;filter:grayscale(100%);-webkit-filter:grayscale(100%);-moz-filter:grayscale(100%);-ms-filter:grayscale(100%);-o-filter:grayscale(100%);");
    }
}

function IsHomePage() {
    if (window.location.pathname == "/") {
        return true;
    }
    return false;
}

function PublicSacrificeDay() {
    var PSFarr = new Array("0321", "0322", "0403", "0404", "0405", "0406", "0414", "0512", "0707", "0807", "0814", "0909", "0918", "0930", "1025", "1213");
    var currentdate = new Date();
    var str = "";
    var mm = currentdate.getMonth() + 1;
    if (currentdate.getMonth() > 9) {
        str += mm;
    } else {
        str += "0" + mm;
    }
    if (currentdate.getDate() > 9) {
        str += currentdate.getDate();
    } else {
        str += "0" + currentdate.getDate();
    }
    if (PSFarr.indexOf(str) > -1) {
        return 1;
    } else {
        return 0;
    }
}