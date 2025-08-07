// ==UserScript==
// @name         Soft98 Smart Download Redirect
// @namespace    Violentmonkey Scripts
// @version      1.2
// @match        https://soft98.ir/*
// @grant        none
// @description  Redirect to download link if it points to dl*.soft98.ir, bypassing AdBlock/VPN warning.
// @downloadURL  https://raw.githubusercontent.com/Parsa307/filterlists/main/UserScripts/Soft98_Smart_Download_Redirect.user.js
// @updateURL    https://raw.githubusercontent.com/Parsa307/filterlists/main/UserScripts/Soft98_Smart_Download_Redirect.user.js
// @homepageURL  https://github.com/Parsa307/filterlists
// @supportURL   https://github.com/Parsa307/filterlists/issues
// @author       Parsa307
// ==/UserScript==

(function () {
    'use strict';

    document.body.addEventListener('click', function(event) {
        let el = event.target;

        // Climb up the DOM to find a link
        while (el && el !== document.body) {
            if (el.tagName === 'A' && el.href) {
                try {
                    const url = new URL(el.href);
                    // Only redirect if hostname starts with "dl" and is under soft98.ir
                    if (/^dl\d*\.soft98\.ir$/.test(url.hostname)) {
                        // Prevent default behavior
                        event.preventDefault();
                        // Replace the host with the Official CDN link
                        url.hostname = "edge08.82.ir.cdn.ir";
                        // Redirect to the Official CDN link
                        window.location.href = url.href;
                        break;
                    }
                } catch (e) {
                    // not a valid URL, ignore
                }
            }
            el = el.parentElement;
        }
    }, { capture: true, passive: false });
})();
