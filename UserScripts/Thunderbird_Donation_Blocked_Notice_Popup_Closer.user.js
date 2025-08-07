// ==UserScript==
// @name         Thunderbird Donation Blocked Notice Popup Closer
// @namespace    Violentmonkey Scripts
// @version      1.0
// @match        https://www.thunderbird.net/*
// @grant        none
// @description  Forcefully hide Thunderbird donation popup.
// @downloadURL  https://raw.githubusercontent.com/Parsa307/filterlists/main/UserScripts/Thunderbird_Donation_Blocked_Notice_Popup_Closer.user.js
// @updateURL    https://raw.githubusercontent.com/Parsa307/filterlists/main/UserScripts/Thunderbird_Donation_Blocked_Notice_Popup_Closer.user.js
// @homepageURL  https://github.com/Parsa307/filterlists
// @supportURL   https://github.com/Parsa307/filterlists/issues
// @author       Parsa307
// ==/UserScript==

(function() {
    'use strict';

    let intervalId;

    function closeDonationDialog() {
        const dlg = document.getElementById('donation-blocked-notice');
        if (dlg && dlg.open) {
            dlg.close();
            dlg.style.display = 'none';

            // Stop the interval to exit script's repeated checks
            if (intervalId) {
                clearInterval(intervalId);
            }
        }
    }

    window.addEventListener('load', () => {
        closeDonationDialog();
        // Start repeated checks only if popup wasn't closed on load
        intervalId = setInterval(closeDonationDialog, 500);
    });
})();
