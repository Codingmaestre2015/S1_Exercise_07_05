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

/* open center figure in separate window */
function zoomFig() {

}

/* create event listeners and populate image elements */
function setUpPage() {
    createEventListeners();
    populateFigures();
}

/* run setUpPage() function when page finishes loading */
window.addEventListener("load", setUpPage);