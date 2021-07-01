
// ==UserScript==
// @name         Tasky
// @namespace    http://freakpants.ch
// @version      0.2
// @description  display the current task you are working on
// @author       freakpants
// @match        https://odoo.simpit.ch/*
// @icon         data:image/gif;base64,R0lGODlhAQABAAAAACH5BAEKAAEALAAAAAABAAEAAAICTAEAOw==
// @grant        none
// ==/UserScript==

(function() {
    'use strict';

    function sleep(ms) {
    var unixtime_ms = new Date().getTime();
    while(new Date().getTime() < unixtime_ms + ms) {}
}

     function asleep(ms) {
        return new Promise(resolve => setTimeout(resolve, ms));
    }

    async function filter_view(){
        await asleep(3000);
        console.log("clicking filter");
        jQuery("li:contains('Task Timer läuft')").click();
    }

    function read_task(){
            console.log("trying to read task");
            // determine the name of the task
            let task_name = false;
            task_name = jQuery(".oe_kanban_content div strong").first().html();
            var h1 = jQuery("#tasky_message");
        if(task_name){
               if(task_name !== 'Fahrzeuge Sortierbar'){
                   jQuery(h1).html("Momentan loggst du auf den Task " + task_name + "!");
                   jQuery(h1).css("color","green");
               }
            } else {
                jQuery(h1).html("Momentan auf keinen Task am loggen!");
                jQuery(h1).css("color","red");
            }
    }
    jQuery(function() {
        var body;
        console.log('tasky 6 running');

        body = jQuery("body").html();
        jQuery("body").html("<div style='display:none;'>" + body + "</div>");
        jQuery("body").append("<div style='display:flex; justify-content:center; align-items:center; width:100vw; height: 100vh'><h1 style='font-weight: 600; text-transform:uppercase' id='tasky_message'></h1></div>");
        loop();
        async function loop(){
            while(true){
                window.location.href = "https://odoo.simpit.ch/web#view_type=kanban&model=project.task&action=529";
                await asleep(3000);
                filter_view();
                await asleep(3000);
                read_task();
                await asleep(3000);
            }
        }
    });
})();
