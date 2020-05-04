const makeBigger = () => {
   document.querySelector('.content').style.fontSize = '3.4em';
   document.querySelector('.content').style.background = 'hotpink';
   document.querySelector('p').innerHTML = 'hello';


};

const makeSmaller = () => {
  document.querySelector('.content').style.fontSize = '1.0em';
  document.querySelector('.content').style.background = 'white';
  document.querySelector('.content').innerHTML = 'bye';
};

/*

What do i want to modify (select)?
What property do I want to change?
What do  Iwant to change it to
*/
document.querySelector('.a1').onclick = makeBigger;
document.querySelector('.a2').onclick = makeSmaller;
