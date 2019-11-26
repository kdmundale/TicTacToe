/*const grid = document.getElementsByTagName('grid');
grid.addEventListener('click', event => {
  let player = document.createTextNode('X');
  grid.appendChild(player);
*/


document.body.addEventListener('click', event => {
  if (event.target.nodeName =='P'|| event.target.nodeName == 'DIV') {
    player = event.target.textContent = 'O';
    poop = getElementsByTagName('p');
    let x = grid.replaceChildren(player)
  }
});

document.body.addEventListener('dblclick', event => {
  if (event.target.nodeName =='P' || event.target.nodeName == 'DIV') {
    player = event.target.textContent = 'X';
    poop = getElementsByTagName('p');
    let x = grid.replaceChildren(player)
  }
});






/*let grid = document.getElementById('one');

grid.addEventListener('dblclick', event => {
  let player = document.createTextNode('o');
  grid.appendChild(player);
});

grid.addEventListener('click', event => {
  let poop = document.getElementById('poop1');
  let player = document.createTextNode('X');
  let x = grid.replaceChild(player, poop);
});
*/
