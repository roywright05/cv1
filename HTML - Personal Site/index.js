let btn6 = document.querySelector('.btn3-no');
let playBtn = document.querySelector('.play');
let hidden = false;
btn6.addEventListener('click', function(){

  // if(!hidden){
  //
  //   btn6.classList.add('hide');
  //   hidden = true;
  // }else{
  //
  //   btn6.classList.remove('hide');
  //   hidden = false;
  // }
  btn6.classList.toggle('hidden', true);

});

let play = document.querySelector('.play');
let listen = new Audio('Bang Bang.mp3');

play.addEventListener('click', function (){
  if(!hidden){
    listen.play();
    hidden = true;
    playBtn.classList.add('paused');
  }
  else{
    listen.pause();
    hidden = false;
    playBtn.classList.remove('paused');
  }
});
