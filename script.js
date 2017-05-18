$(onReady);

function onReady() {
  console.log('loaded JS');

//register events

$('#squareButton').on('click', createBox);
//button
$('#hey').on('click', '.box',  changeToBlack);
$('#hey').on('click', '.xit', closeBox);

}
//change selected box to black

function createBox(){
 var $d = $('<div>');
 $d.addClass('box');
 var $xit = $('<div>x</div>');
 $xit.addClass('xit');
 $d.append($xit);

var $color = randomColor();
$d.css('background-color', $color);
  console.log('createBox onClick working');
  $('#hey').append($d);
}

function changeToBlack () {
$(this).css('background-color', 'black');
}

function randomColor(){
  return '#'+(Math.random()*0xFFFFFF<<0).toString(16);
    //$('.box').css('background-color', randomColorChange);
}
//function randomNumber(min, max){
    //return Math.floor(Math.random() * (1 + max - min) + min);
//}
function closeBox () {
  $(this).parent().remove();
}
