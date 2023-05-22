const socket = io('http://localhost:3000');

  
//i want to use the input to send to the index.js file
var form = document.getElementById('form');
var input = document.getElementById('input');
let message = document.getElementById('messages');

form.addEventListener('submit', function(e) {
  e.preventDefault();
  if (input.value) {
    socket.emit('chat message', input.value);
    input.value = '';
  }
 
});
socket.on('chat message',(msg) => {
    console.log('hello');
   const li = document.createElement('li');
    li.textContent = msg;
    message.appendChild(li);
  })
