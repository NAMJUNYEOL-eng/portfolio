// click 이벤트 실행 선택자 할당 = plusBtn
const plusBtn = document.querySelectorAll('.footer_menu>dl>dt');
console.log('plusBtn : ', plusBtn);
// plusBtn item들 추출후 각각 할당
for(let i=0; i<plusBtn.length; i++) {
    plusBtn[i].addEventListener('click',toogleFooterMenu);
}
// CSS 연동 클래스 할당
const CLICKED_CLASS = 'clicked';
const MARKED_CLASS = 'mark';

// 클릭시 이벤트 리스너
function toogleFooterMenu() {
    this.nextElementSibling.classList.toggle(CLICKED_CLASS);
    this.classList.toggle(MARKED_CLASS);
}