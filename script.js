
let count=(Math.floor(Math.random() * 10));
  if (count %2 ==0) {
    document.getElementById('head');
    let playerO = document.createTextNode('O Goes First!');
    head.appendChild(playerO);
  } else {
    document.getElementById('head');
    let playerX = document.createTextNode('X Goes First!');
    head.appendChild(playerX);
  }

document.body.addEventListener('click', event => {
    if (count % 2 == 0 && event.target.nodeName =='P'|| event.target.nodeName == 'DIV') {
        player = event.target.textContent = 'O';
    } else if (count % 2 == 1 && event.target.nodeName =='P'|| event.target.nodeName == 'DIV') {
      player = event.target.textContent = 'X';
    }
    count++;
});
