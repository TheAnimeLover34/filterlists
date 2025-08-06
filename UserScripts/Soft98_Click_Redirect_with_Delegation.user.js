// ==UserScript==
// @name Soft98 Click Redirect with Delegation
// @namespace    Violentmonkey Scripts
// @version      1.0
// @match        *://*.soft98.ir/*
// @grant        none
// @description Use event delegation to intercept clicks on Soft98 download link and redirect, bypassing adblock/VPN warnings.
// @downloadURL  https://raw.githubusercontent.com/Parsa307/filterlists/main/UserScripts/Soft98_Click_Redirect_with_Delegation.js
// @updateURL    https://raw.githubusercontent.com/Parsa307/filterlists/main/UserScripts/Soft98_Click_Redirect_with_Delegation.js
// @homepageURL  https://github.com/Parsa307/filterlists
// @supportURL   https://github.com/Parsa307/filterlists/issues
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
