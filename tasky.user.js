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
    'use strict';
    alert('tasky running');
    jQuery("li:contains('Task Timer läuft')").click();
    // Your code here...
})();
