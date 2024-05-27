
/*        
            Importation de rough-notation 
*/

import { annotate } from "rough-notation";

/*        
            Box Notations 
*/
const boxes = document.querySelectorAll('.box');
boxes.forEach(box => {
    
    const annotation = annotate(box, { 
        type: 'box', 
        color: '#4C956C', 
        iterations: 1, 
        strokeWidth: 3});

    annotation.show();
});

/*        
            Bracket Notations 
*/
const brackets = document.querySelectorAll('.bracket');
brackets.forEach(bracket => {
    const annotation = annotate(bracket, { 
        type: 'bracket', 
        brackets: ['left', 'right'],
        color: '#4C956C', 
        iterations: 1, 
        strokeWidth: 2,
    padding: 4});
    annotation.show();
});


/*         
            Circle Notations 
*/
const circles = document.querySelectorAll('.circle');
circles.forEach(circle => {
    const annotation = annotate(circle, { 
        type: 'circle', 
        color: '#4C956C', 
        animationDuration: 2000});
    annotation.show();
});


/*         
            Crossed-Off Notations 
*/
const crossedOffs = document.querySelectorAll('.crossed-off');
crossedOffs.forEach(crossedOff => {
    const annotation = annotate(crossedOff, { 
        type: 'crossed-off', 
        color: '#4C956C', 
        iterations: 1, 
        animationDuration: 2000});
    annotation.show();
});


/*      
            Highlights Notations 
*/
const highlights = document.querySelectorAll('.highlight');
highlights.forEach(highlight => {
    const annotation = annotate(highlight, { 
        type: 'highlight', 
        color: '#FFC9B9', 
        iterations: 1, 
        animationDuration: 2000});
    annotation.show();
});
const multilines = document.querySelectorAll('.highlight__multi-line');
multilines.forEach(highlight => {
    const annotation = annotate(highlight, { 
        type: 'highlight', 
        color: '#FFC9B9', 
        multiline: true, 
        iterations: 1, 
        animationDuration: 2000});
    annotation.show();
});


/*   
            Strike-through Notations 
*/
const strikes = document.querySelectorAll('.strike');
strikes.forEach(strike => {
    const annotation = annotate(strike, { 
        type: 'strike-through', 
        color: '#4C956C', 
        animationDuration: 2000});
    annotation.show();
});


/*   
            Underline Notations
*/
const underlines = document.querySelectorAll('.underline');
underlines.forEach(underline => {
    const annotation = annotate(underline, { 
        type: 'underline', 
        color: '#4C956C', 
        strokeWidth: 1, 
        iterations: 3, 
        animationDuration: 2000});
    annotation.show();
});



/* 
            Toggle Menu Function
*/
const dialogs = document.querySelectorAll('.dialog');
const menuBtn = document.querySelector('.menu__icon');

dialogs.forEach(dialog => {
    dialog.addEventListener('click', () => {
        toggleDialogs();
    });
});

menuBtn.addEventListener('click', () => {
    toggleDialogs();
});

function toggleDialogs(){
    const dialog = document.querySelector('.dialog');
    dialog.classList.toggle('hidden');
    document.body.classList.toggle('remove-scroll');
};