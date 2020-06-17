"use strict"

// This file is adapted from https://github.com/ralfbiedert/cheats.rs/blob/master/static/index.js

let codes = document.querySelectorAll("code");
let iOS = !!navigator.platform && /iPad|iPhone|iPod/.test(navigator.platform); // https://stackoverflow.com/questions/9038625/detect-if-device-is-ios

// Called by toggle button, enable or disable night mode and persist setting in localStorage.
function toggle_night_mode() {
    let body = document.getElementsByTagName("body")[0];
    if (body.classList.contains("night-mode")) {
        body.classList.remove("night-mode");
        !!localStorage && localStorage.setItem("night-mode", "day");
    } else {
        body.classList.add("night-mode");
        !!localStorage && localStorage.setItem("night-mode", "night");
    }
}

// Called by toggle button, enable or disable ligatures persist setting in localStorage.
function toggle_ligatures() {
    let body = document.getElementsByTagName("body")[0];
    let set = undefined;

    if (codes[0].style.fontVariantLigatures === "common-ligatures") {
        set = "none";
        !!localStorage && localStorage.setItem("ligatures", "no-ligatures");
    } else {
        set = "common-ligatures";
        !!localStorage && localStorage.setItem("ligatures", "ligatures");
    }

    codes.forEach((code) => {
        code.style.fontVariantLigatures = set;
    });
}

// Use proper syntax since we don't want to write ````lean ...``` all the time.
codes.forEach(code => {
    code.className = "language-lean";
});

// Executed on page load, this runs all toggles the user might have clicked
// the last time based on localStorage.
try {
    // iOS does not honor the ligature settings and always renders the font without them.
    // Hide the button not to confuse users.
    if (iOS) {
        let button = document.getElementById("toggle_ligatures");
        button.style.visibility = "hidden";
    }

    let night_mode = !!localStorage && localStorage.getItem("night-mode");
    let ligatures = !!localStorage && localStorage.getItem("ligatures");

    if (night_mode === "night") {
        toggle_night_mode();
    }

    if (ligatures === "ligatures") {
        toggle_ligatures();
    }

} catch (e) {
    console.log(e);
}