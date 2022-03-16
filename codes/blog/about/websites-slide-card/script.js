$(document).ready(function() {
    $('#qrIos').qrcode({
        width: 200,
        height: 200,
        text: "iOS_URL_HERE"
    });
    $('#qrAndroid').qrcode({
        width: 200,
        height: 200,
        text: "DROID_URL_HERE"
    });
    $('#qrWeb').qrcode({
        width: 200,
        height: 200,
        text: "WINDOWS_URL_HERE"
    });
});

function rotateCard(btn) {
    var $card = $(btn).closest('.card-container');
    console.log($card);
    if ($card.hasClass('hover')) {
        $card.removeClass('hover');
    } else {
        $card.addClass('hover');
    }
}