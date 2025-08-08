// ==UserScript==
// @name         Soft98 Smart Download Redirect
// @namespace    Violentmonkey Scripts
// @version      1.6
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

    const mirrorHost = "edge08.82.ir.cdn.ir";

    function changeDownloadLinks() {
        const links = document.querySelectorAll('a[href]');
        for (const link of links) {
            try {
                const url = new URL(link.href);
                if (url.hostname.startsWith("dl") && url.hostname.endsWith(".soft98.ir")) {
                    url.hostname = mirrorHost;
                    if (link.href !== url.href) {
                        link.href = url.href;
                    }
                }
            } catch (e) {
                // not a valid URL, ignore
            }
        }
    }

    setInterval(changeDownloadLinks, 500);

    document.body.addEventListener('click', function(event) {
        let el = event.target;

        // Climb up the DOM to find a link
        while (el && el !== document.body) {
            if (el.tagName === 'A' && el.href) {
                try {
                    const url = new URL(el.href);
                    // Only redirect if hostname matches mirrorHost
                    if (url.hostname === mirrorHost) {
                        event.preventDefault();
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
