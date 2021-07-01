// ==UserScript==
// @name         Tasky
// @namespace    http://freakpants.ch
// @version      0.1
// @description  try to take over the world!
// @author       freakpants
// @match        https://odoo.simpit.ch/*
// @icon         data:image/gif;base64,R0lGODlhAQABAAAAACH5BAEKAAEALAAAAAABAAEAAAICTAEAOw==
// @require      http://code.jquery.com/jquery-3.6.0.min.js
// @grant        none
// ==/UserScript==

(function() {
    'use strict';
    $(function() {
        alert('tasky 3 running');
        jQuery("li:contains('Task Timer läuft')").click();
    }
})();
