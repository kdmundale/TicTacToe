/*const grid = document.getElementsByTagName('grid');
grid.addEventListener('click', event => {
  let player = document.createTextNode('X');
  grid.appendChild(player);
*/

/*let grid = document.getElementById('one');
grid.addEventListener('dblclick', event => {
  let player = document.createTextNode('x');
  grid.appendChild(player);
});
grid.addEventListener('click', event => {
  let player = document.createTextNode('o');
  grid.appendChild(player);
});*/


  document.body.addEventListener("click", event => {
   if (event.target.nodeName == "DIV") {
     console.log("Clicked", event.target.textContent = 'O');
   }
 });

 document.body.addEventListener("dblclick", event => {
  if (event.target.nodeName == "DIV") {
    console.log("Clicked", event.target.textContent = 'X');
  }
});
