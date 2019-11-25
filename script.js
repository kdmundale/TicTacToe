/*const grid = document.getElementsByTagName('grid');
grid.addEventListener('click', event => {
  let player = document.createTextNode('X');
  grid.appendChild(player);
*/

let grid = document.getElementById('one');
grid.addEventListener('click', event => {
  let player = document.createTextNode('x');
  grid.appendChild(player);
});
grid.addEventListener('dblclick', event => {
  let player = document.createTextNode('o');
  grid.appendChild(player);
});
