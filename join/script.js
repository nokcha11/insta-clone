let joinBtn = document.getElementById('join-btn');
let animateInput = document.querySelectorAll('.animate-input');


let emailAct = nameAct = idAct = pwAct = false;

let userEmail = document.getElementById('user-email');
let userName = document.getElementById('user-name');
let userId = document.getElementById('user-id');
let userPw = document.getElementById('user-pw');

let pwBtn = document.getElementById('pw-btn');

// updateInput 매개변수 2개

function updateInputState(val, activeVar) {
    if(val.value.trim().length > 0) {
    // animate-input 에 active class add
    // val(input)부모요소에 active클래스 추가
    val.parentElement.classList.add('active');
    activeVar = true;

  } else {
      // animate-input 에 active class remove
      val.parentElement.classList.remove('active');
      activeVar = false;
  }
  return activeVar;
} 

animateInput.forEach((item) => {
  let input = item.querySelector('input');
  input.addEventListener('keyup', () => {
    // 이벤트 발생한 keyup만 로그에 나온다.
    if(input == userEmail) {
      // console.log('같다');
      emailAct = updateInputState(input, emailAct);
    } else if(input == userName) {
      nameAct = updateInputState(input, nameAct);
    } else if(input == userId) {
      idAct = updateInputState(input, idAct);
    } else if(input == userPw) {
      pwAct = updateInputState(input, pwAct);
    }

    let allTrue = emailAct && nameAct && idAct && pwAct;

    if(allTrue) {
      // allTrue 안 값이 모두 참일 때
      // joinBtn disabled 속성 remove
      // joinBtn.removeAttribute('disabled'); 사용가능
      // j-Query에서는 .attr('disabled', true / false) 사용 가능
      // vanilla JS에서는 속성 제거할 때 false X | removeAttribute() 사용!
      joinBtn.removeAttribute('disabled');
    } else {
      joinBtn.setAttribute('disabled', true);
    }
  })
})


function modeToggle() {

// 삼항연산자
// 조건 ? true : false

let pwType = userPw.getAttribute('type') == 'password';
// console.log(pwType);

//  userPw의 type password => text | pwBtn.innerHTML =  '숨기기' 
userPw.setAttribute('type', pwType ? 'text' : 'password' )

//  userPw의 type password => password | pwBtn.innerHTML =  '비밀번호 표시'
  pwBtn.innerHTML = pwType ? '숨기기' : '비밀번호 표시';
}

pwBtn.addEventListener('click', modeToggle);


