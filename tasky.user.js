// ==UserScript==
// @name         Tasky
// @namespace    http://freakpants.ch
// @version      0.1
// @description  try to take over the world!
// @author       freakpants
// @match        https://odoo.simpit.ch/*
// @icon         data:image/gif;base64,R0lGODlhAQABAAAAACH5BAEKAAEALAAAAAABAAEAAAICTAEAOw==
// @grant        none
// ==/UserScript==

(function() {
    function sleep(ms) {
        return new Promise(resolve => setTimeout(resolve, ms));
    }
    async function activate_filter(){
        await sleep(5000);
        console.log("attempting filter");
        jQuery("li:contains('Task Timer läuft')").click();
    }
    'use strict';
    jQuery(function() {
        console.log('tasky 6 running');
        activate_filter();
    });
})();
