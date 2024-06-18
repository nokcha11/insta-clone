let popup = document.querySelector('.overlay-popup');
let popAddBtn = document.querySelector('.pop-btn');
let popCloseBtn = document.querySelector('.popup-close-btn');


function popupOpen(item) {
  item.classList.add('active');
}

function popupClose(item) {
  item.classList.remove('active');
}


// popupOpen 함수 매개변수 X
// 매개변수가 없을 경우 => click 이벤트가 발생했을 때 해당 함수 호출
// postAddBtn.addEventListener('click', popupOpen);

// 매개변수가 있을 경우 => () => { popupOpen(매개변수) }
popAddBtn.addEventListener('click', () => {popupOpen(popup)});
popCloseBtn.addEventListener('click', () => {popupClose(popup)});


// Option Btn
let overlayFeed = document.querySelector('.overlay-feed');
let feedListBtn = document.querySelectorAll('.feed-list-btn');
console.log(feedListBtn)
let feedCloseBtn = document.querySelector('.feed-close-btn');

feedListBtn.forEach((btn) => {
  btn.addEventListener('click', () => {
    popupOpen(overlayFeed)
  })
})

feedCloseBtn.addEventListener('click', () => {popupClose(overlayFeed)})


// Canvas image
let fileUploadBtn  = document.querySelector('.file-upload-btn');
let canvas = document.getElementById('img-canvas');
let ctx = canvas.getContext('2d');

console.log(fileUploadBtn);

function handleImage(e){
  let reader = new FileReader();
  reader.onload = function(event){
    let img = new Image();

    img.onload = function(){
      canvas.width = 500;
      canvas.height = 400;
      ctx.drawImage(img,0,0,500,400);
    };

    img.src = event.target.result;
  };

  reader.readAsDataURL(e.target.files[0]);
}


fileUploadBtn.addEventListener('change', handleImage);
