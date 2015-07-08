var tutorialpopups = ["tutorialIntroSlide", "tutorialAddRemoveSlide", "tutorialStorageSlide"];
var currentPopUp = "";

function toggle(div_id) {
    var el = document.getElementById(div_id);
    if (el.style.display == 'none') {
        el.style.display = 'block';
    } else {
        el.style.display = 'none';
    }
}

function blanket_size(popUpDivVar) {
    if (typeof window.innerWidth != 'undefined') {
        viewportheight = window.innerHeight;
    } else {
        viewportheight = document.documentElement.clientHeight;
    }
    if ((viewportheight > document.body.parentNode.scrollHeight) && (viewportheight > document.body.parentNode.clientHeight)) {
        blanket_height = viewportheight;
    } else {
        if (document.body.parentNode.clientHeight > document.body.parentNode.scrollHeight) {
            blanket_height = document.body.parentNode.clientHeight;
        } else {
            blanket_height = document.body.parentNode.scrollHeight;
        }
    }
    var blanket = document.getElementById('blanket');
    blanket.style.height = blanket_height + 'px';
    for (var i = tutorialpopups.length - 1; i >= 0; i--) {
        var popUpDiv = document.getElementById(tutorialpopups[i]);
        popUpDiv_height = blanket_height / 2 - 200; //200 is half popup's height
        popUpDiv.style.top = popUpDiv_height + 'px';
    };
}

function window_pos(popUpDivVar) {
    if (typeof window.innerWidth != 'undefined') {
        viewportwidth = window.innerHeight;
    } else {
        viewportwidth = document.documentElement.clientHeight;
    }
    if ((viewportwidth > document.body.parentNode.scrollWidth) && (viewportwidth > document.body.parentNode.clientWidth)) {
        window_width = viewportwidth;
    } else {
        if (document.body.parentNode.clientWidth > document.body.parentNode.scrollWidth) {
            window_width = document.body.parentNode.clientWidth;
        } else {
            window_width = document.body.parentNode.scrollWidth;
        }
    }
    var popUpDiv = document.getElementById(popUpDivVar);
    window_width = window_width / 2 - 200; //200 is half popup's width
    popUpDiv.style.left = window_width + 'px';
}

function popup(windowname) {
    blanket_size(windowname);
    window_pos(windowname);
    toggle('blanket');
    toggle(windowname);
}

function next_popup(popups) {
    if (currentPopUp) {
    	toggle(currentPopUp);
    };
    if (!popups || popups.length < 1) {
    	toggle("blanket")
        return;
    }
    var popupname = popups.splice(0, 1)
    popup(popupname);
    currentPopUp=popupname;

    // body...
}
