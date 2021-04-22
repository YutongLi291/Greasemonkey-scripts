Scope Logout Script
// ==UserScript==
// @name         Scope LogOut Script
// @namespace    http://tampermonkey.net/
// @version      0.1
// @description  try to take over the world!
// @author       You
// @match        https://scope.sciencecoop.ubc.ca/*
// @grant        none
// ==/UserScript==

(function() {
    'use strict';


    var tempFunc = sessionTimeoutPopup;
    window.sessionTimeoutPopup = function() {
    tempFunc();
    console.log("keep me logged in!");

    keepMeLoggedInClicked();
    }
})();
