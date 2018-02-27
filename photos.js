/*    JavaScript 
      Exercise 07_05
      Photo gallery
      Variables and Functions
      Author: 
      Date:

 *     

 *    Filename: photos.js
 */

"use strict"; // interpret document contents in JavaScript strict mode

/* global variables */
var photoOrder = [1, 2, 3, 4, 5];

/* add src values to img elements based on order specified in photoOrder array*/
function populateFigures() {
    var filename;
    var currentFig;
    for (var i = 1; i < 4; i++) {
        filename = "images/IMG_0" + photoOrder[i] + "sm.jpg";  
        currentFig = document.getElementsByTagName("img")[i - 1];
        currentFig.src = filename;    
    }
}

/* shift all images one figure to the left, and change values in photoOrder array to match  */
function rightArrow() {
    for (var i = 0; i < 5; i++) {
        if ((photoOrder[i] + 1) === 6) {
            photoOrder[i] = 1;
        } else {
            photoOrder[i] += 1;
        }
        populateFigures();
    }
}

/* shift all images one figure to the right, and change values in photoOrder array to match  */
function leftArrow() {
    for (var i = 0; i < 5; i++) {
        if ((photoOrder[i] - 1) === 0) {
            photoOrder[i] = 5;
        } else {
            photoOrder[i] -= 1;
        }
        populateFigures();
    }
}

/* switch to 5-image layout*/
function previewFive() {
    // create figure and img elments for fifth image
    var lastFigure = document.createElement("figure");
    lastFigure.id = "fig5";
    lastFigure.style.zIndex = "5";
    lastFigure.style.position = "absolute";
    lastFigure.style.right = "45px";
    lastFigure.style.top = "67px";

    var lastImage = document.createElement("img");
    lastImage.width = "240";
    lastImage.length = "135";
}

/* open center figure in separate window */
function zoomFig() {

}

/* create event listeners for left arrow, right arrow, and center figure element */
function createEventListeners() {
    var leftarrow = document.getElementById("leftarrow");
    leftarrow.addEventListener("click", leftArrow);

    var rightarrow = document.getElementById("rightarrow");
    rightarrow.addEventListener("click", rightArrow);

    var mainFig = document.getElementsByTagName("img")[1];
    mainFig.addEventListener("click", zoomFig);

    var showAllButton = document.querySelector("#fiveButton p");
    showAllButton.addEventListener("click", previewFive);
}


/* create event listeners and populate image elements */
function setUpPage() {
    createEventListeners();
    populateFigures();
}

/* run setUpPage() function when page finishes loading */
window.addEventListener("load", setUpPage);