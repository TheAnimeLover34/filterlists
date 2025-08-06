// ==UserScript==
// @name         Soft98 Click Redirect with Delegation
// @namespace    Violentmonkey Scripts
// @match        *://*.soft98.ir/*
// @grant        none
// @version      1.0
// @description  Use event delegation to intercept clicks on Soft98 download link and redirect, bypassing adblock/VPN warnings.
// @author       Parsa307
// ==/UserScript==

(function () {
    'use strict';

    document.body.addEventListener('click', function(event) {
        // Check if the clicked element or its ancestor has the target class
        let el = event.target;
        while (el && el !== document.body) {
            if (el.classList && el.classList.contains('dbdlll')) {
                if (el.href) {  // Check if href exists
                    window.location.href = el.href; // Redirect to real download
                }
                break;
            }
            el = el.parentElement;
        }
    }, { capture: true, passive: false });
})();
