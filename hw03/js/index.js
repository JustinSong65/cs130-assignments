
// This variable will always hold the "active" photo element (the div)
let activeCard = null;

// PART 1: Make the showPhoto function work
const showPhoto = (e) => {
    // Hint: figure out which element the user clicked from the event object:
    activeCard = e.target;
    console.log('.card', activeCard);
    document.querySelector('.preview').className = 'preview active';
    document.querySelector('.featured_image').style.backgroundImage = activeCard.style.backgroundImage;
  };

const cards = document.querySelectorAll('.card');
for (card of cards) {
  card.onclick = showPhoto;


}

    // // Hint: figure out what its background image is:
    // const imgURL = activeCard.style.backgroundImage;
    // console.log('the background image of the active element is:', imgURL);

    // Your turn:
    // 1. set the .featured_image's background image to the imgURL (above), and
    // 2. update the .preview_box's class to include the "active" class.


// PART 2: Replace this code with what's commented below.
//         Instead of just applying the event handler to
//         the first .card element, you want to apply it to
//         all of the card elements
document.querySelector('.card').onclick = showPhoto;
// const cards = document.querySelectorAll('.card');
// for (card of cards) {
//     card.onclick = showPhoto;
// }



// PART 3: Close functionality
const close = () => {
  document.querySelector('.preview.active').className = 'preview';
};


document.querySelector('#close').onclick = close;

    // a. This function should remove the “active” class from the
    //    “.preview_box” element.
    // b. Attach your newly created “close” function to the onclick
    //    event handler of the close button (in the upper right-hand corner).


// PART 4: Next functionality:
// a. Modify the “next” function (below) so that that it replaces
//    the “.featured_image” background image to the next image in the list.
// b. Attach your newly created “next” function to the onclick event
//    handler of the “.next” button (in the upper right-hand corner).
// c. Also attach your “next” function to the onclick event handler of
//    the “.featured_image” element (so that clicking anywhere on the
//    image will advance it to the next one) — for convenience.

const photolist = document.querySelectorAll('.card')
// Serves as a way of indexing the photos

const next = () => {
  if (activeCard.nextElementSibling !=null) {
    activeCard = activeCard.nextElementSibling;
    document.querySelector('.featured_image').style.backgroundImage = activeCard.style.backgroundImage;
  }

  if (activeCard.style.backgroundImage === photolist[(photolist.length) - 1].style.backgroundImage) {
    activeCard = photolist[0]
    document.querySelector('.featured_image').style.backgroundImage = activeCard.style.backgroundImage;
  }

  }

document.querySelector('#next').onclick = next;
    // HINTS:
    // 1. update the "activeCard" variable so that it's now the
    //    next card in the list.
    // 2. Then do the same steps as before (in the showPhoto).



// PART 5: Previous functionality:
// a. Create a “previous” function that switches out the
//    “.featured_image” background image to the previous image
//    in the list.
// b. Attach your newly created “previous” function to the onclick
//    event handler of the “.prev” button (in the upper right-hand corner).


const prev = () => {
  if (activeCard.previousElementSibling !=null) {
    activeCard = activeCard.previousElementSibling;
    document.querySelector('.featured_image').style.backgroundImage = activeCard.style.backgroundImage;
  }

  if (activeCard.style.backgroundImage === photolist[0].style.backgroundImage) {
    activeCard = photolist[photolist.length - 1]
    document.querySelector('.featured_image').style.backgroundImage = activeCard.style.backgroundImage;
  }
}

document.querySelector('#prev').onclick = prev;
