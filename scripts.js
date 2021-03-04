function getKey (e) {
    var location = e.location;
    var selector;
    if (location === KeyboardEvent.DOM_KEY_LOCATION_RIGHT) {
        selector = ['[data-key="' + e.keyCode + '-R"]']
    } else {
        var code = e.keyCode || e.which;
        selector = [
            '[data-key="' + code + '"]',
            '[data-char*="' + encodeURIComponent(String.fromCharCode(code)) + '"]'
        ].join(',');
    }
    return document.querySelector(selector);
}

function pressKey (char) {
    var key = document.querySelector('[data-char*="' + char.toUpperCase() + '"]');
    key.setAttribute('data-pressed', 'on');
    setTimeout(function () {
        key.removeAttribute('data-pressed');
    }, 200);
}


window.onload = function () {
    setTimeout(function(){ 
        document.getElementById("rgb").classList.add('keyboardBackground'); 
    }, 4000);


    document.body.addEventListener('keydown', function (e) {
        var key = getKey(e);
    
        key.setAttribute('data-pressed', 'on');
        var audio = new Audio('key.mp3');
        audio.play();
    });

    document.body.addEventListener('keyup', function (e) {
        var key = getKey(e);
        key && key.removeAttribute('data-pressed');
    });
};

