// Require Node modules in the browser thanks to Browserify: http://browserify.org
var bespoke = require('bespoke');
var classes = require('bespoke-classes');
var nav = require('bespoke-nav');
var scale = require('bespoke-scale');
var bullets = require('bespoke-bullets');
var hash = require('bespoke-hash');
var prism = require('bespoke-prism');
var multimedia = require('bespoke-multimedia');
var extern = require('bespoke-extern');

// Bespoke.js
bespoke.from({ parent: 'article.deck', slides: 'section' }, [
  classes(),
  nav(),
  bullets('.build, .build-items > *:not(.build-items)'),
  hash(),
  prism(),
  multimedia(),
  extern(bespoke)
]);

let eClick = 0;
let eMove = 0;
let eEnter = 0;
let eLeave = 0;
let eChange = 0;
let eInput = 0;
let eFocus = 0;
let eBlur = 0;

document.querySelector('#e-click').addEventListener('click', (event) => {
  eClick++;
  event.currentTarget.innerText = `click Event Fired: ${eClick}`;
  console.log(event);
});

document.querySelector('#e-move').addEventListener('mousemove', (event) => {
  eMove++;
  event.currentTarget.innerText = `mousemove Event Fired: ${eMove}`;
  console.log(event);
});

document.querySelector('#e-enter').addEventListener('mouseenter', (event) => {
  eEnter++;
  event.currentTarget.innerText = `mouseenter Event Fired: ${eEnter}`;
  console.log(event);
});

document.querySelector('#e-leave').addEventListener('mouseleave', (event) => {
  eLeave++;
  event.currentTarget.innerText = `mouseleave Event Fired: ${eLeave}`;
  console.log(event);
});

document.querySelector('#e-change').addEventListener('change', (event) => {
  eChange++;
  document.querySelector('#e-change-text').innerText = `change Event Fired: ${eChange}`;
  console.log(event);
});

document.querySelector('#e-input').addEventListener('input', (event) => {
  eInput++;
  document.querySelector('#e-input-text').innerText = `input Event Fired: ${eInput}`;
  console.log(event);
});

document.querySelector('#e-focus').addEventListener('focus', (event) => {
  eFocus++;
  document.querySelector('#e-focus-text').innerText = `focus Event Fired: ${eFocus}`;
  console.log(event);
});

document.querySelector('#e-blur').addEventListener('blur', (event) => {
  eBlur++;
  document.querySelector('#e-blur-text').innerText = `blur Event Fired: ${eBlur}`;
  console.log(event);
});

document.querySelector('#e-key').addEventListener('keydown', (event) => {
  console.log(event);
  document.querySelector('#e-keydown-text').innerText = 'keydown fired';
  // setTimeout(() => { document.querySelector('#e-keydown-text').innerText = ''; }, 5000);
});

document.querySelector('#e-key').addEventListener('keyup', (event) => {
  console.log(event);
  document.querySelector('#e-keyup-text').innerText = 'keyup fired';
  // setTimeout(() => { document.querySelector('#e-keyup-text').innerText = ''; }, 5000);
});