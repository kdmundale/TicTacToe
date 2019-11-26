
let count=0;
document.body.addEventListener('click', event => {
    if (count % 2 == 0 && event.target.nodeName =='P'|| event.target.nodeName == 'DIV') {
        player = event.target.textContent = 'O';
    } else if (count % 2 == 1 && event.target.nodeName =='P'|| event.target.nodeName == 'DIV') {
      player = event.target.textContent = 'X';
    }
    count++;
});

/*
document.body.addEventListener('dblclick', event => {
  if (event.target.nodeName =='P' || event.target.nodeName == 'DIV') {
    player = event.target.textContent = 'X';
    poop = getElementsByTagName('p');
    let x = grid.replaceChildren(player);
  }
});
*/
