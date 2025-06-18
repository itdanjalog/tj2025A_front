/*예제 1: 요소 내용 변경하기*/
// id가 'title'인 <h1> 요소의 내용을 'DOM 조작 성공!'으로 변경하시오.
// (1) 목표 요소     : #title
// (2) 사용할 속성/메소드: .innerHTML
// (3) 처리할 내용   : 'DOM 조작 성공!' 텍스트로 교체
const titleElement = document.querySelector('#title');
titleElement.innerHTML = 'DOM 조작 성공!';

/*예제 2: 사용자 입력값 가져와서 표시하기*/
// id가 'usernameInput'인 <input>에 이름을 입력하고 '확인' 버튼(id: 'submitBtn')을 클릭하면,
// id가 'greeting'인 <p> 태그에 "안녕하세요, [입력된이름]님!"이라고 표시하시오.
// (1) 목표 요소     : #usernameInput, #submitBtn, #greeting
// (2) 사용할 속성/메소드: .addEventListener, .value, .innerHTML
// (3) 처리할 내용   : 버튼 클릭 시 input의 value를 읽어와 p 태그에 삽입
const usernameInput = document.querySelector('#usernameInput');
const submitBtn = document.querySelector('#submitBtn');
const greeting = document.querySelector('#greeting');

submitBtn.addEventListener('click', function() {
    const username = usernameInput.value;
    greeting.innerHTML = `안녕하세요, ${username}님!`;
});


/*예제 3: 요소 스타일 동적으로 변경하기*/
// '스타일 변경' 버튼(id: 'styleBtn')을 클릭하면,
// id가 'colorBox'인 <div>의 배경색을 'skyblue'로, 글자색을 'white'로 변경하시오.
// (1) 목표 요소     : #styleBtn, #colorBox
// (2) 사용할 속성/메소드: .addEventListener, .style
// (3) 처리할 내용   : 버튼 클릭 시 div의 배경색과 글자색 스타일 변경
const styleBtn = document.querySelector('#styleBtn');
const colorBox = document.querySelector('#colorBox');

styleBtn.addEventListener('click', function() {
    colorBox.style.backgroundColor = 'skyblue';
    colorBox.style.color = 'white';
});

/*예제 4: CSS 클래스 토글하기 (다크 모드 예시)*/
// '테마 변경' 버튼(id: 'themeBtn')을 클릭할 때마다 <body> 태그에 'dark-mode' 클래스를 추가하거나 제거(토글)하시오.
// (1) 목표 요소     : body, #themeBtn
// (2) 사용할 속성/메소드: .addEventListener, .classList.toggle()
// (3) 처리할 내용   : 버튼 클릭 시 body 요소의 'dark-mode' 클래스를 토글
const themeBtn = document.querySelector('#themeBtn');
const body = document.querySelector('body');

themeBtn.addEventListener('click', function() {
    body.classList.toggle('dark-mode');
});

/*예제 5: 새로운 HTML 요소 생성 및 추가하기*/
// '항목 추가' 버튼(id: 'addBtn')을 클릭하면, '새 항목'이라는 텍스트를 가진 <li> 요소를 새로 만들어
// id가 'itemList'인 <ul>에 추가하시오.
// (1) 목표 요소     : #addBtn, #itemList
// (2) 사용할 속성/메소드: .addEventListener, document.createElement(), .textContent, .append()
// (3) 처리할 내용   : 버튼 클릭 시 <li>를 동적으로 생성하여 <ul>의 자식으로 추가
const addBtn = document.querySelector('#addBtn');
const itemList = document.querySelector('#itemList');

addBtn.addEventListener('click', function() {
    // 1. <li> 요소를 새로 생성
    const newLi = document.createElement('li');
    // 2. 생성된 <li>에 텍스트 내용 추가
    newLi.textContent = '새 항목';
    // 3. <ul>의 마지막 자식으로 <li> 추가
    itemList.append(newLi);
});


/*예제 6: 특정 HTML 요소 제거하기*/
// '박스 삭제' 버튼(id: 'removeBtn')을 클릭하면, id가 'targetBox'인 <div> 요소를 문서에서 제거하시오.
// (1) 목표 요소     : #removeBtn, #targetBox
// (2) 사용할 속성/메소드: .addEventListener, .remove()
// (3) 처리할 내용   : 버튼 클릭 시 #targetBox 요소를 DOM에서 제거
const removeBtn = document.querySelector('#removeBtn');
const targetBox = document.querySelector('#targetBox');

removeBtn.addEventListener('click', function() {
    targetBox.remove();
});


/*예제 7: 여러 요소에 동일한 작업 반복하기*/
// 클래스가 'item'인 모든 <p> 요소의 글자색을 'green'으로, 글자 두께를 'bold'로 변경하시오.
// (1) 목표 요소     : .item (모든 요소)
// (2) 사용할 속성/메소드: .querySelectorAll(), for...of 반복문, .style
// (3) 처리할 내용   : 모든 .item 요소를 순회하며 스타일 변경
const items = document.querySelectorAll('.item');

for (const item of items) {
    item.style.color = 'green';
    item.style.fontWeight = 'bold';
}

/*예제 8: 이미지 소스(src) 변경하기 , https://placehold.co/ */
// '이미지 변경' 버튼(id: 'changeImgBtn')을 클릭하면,
// id가 'mainImage'인 <img> 요소의 src 속성을 'https://placehold.co/600x400/red/white'로 변경하시오.
// (1) 목표 요소     : #changeImgBtn, #mainImage
// (2) 사용할 속성/메소드: .addEventListener, .src
// (3) 처리할 내용   : 버튼 클릭 시 이미지의 src 속성 값을 변경
const changeImgBtn = document.querySelector('#changeImgBtn');
const mainImage = document.querySelector('#mainImage');

changeImgBtn.addEventListener('click', function() {
    mainImage.src = 'https://placehold.co/600x400/red/white';
});


/*예제 9: 데이터 속성(data-*) 값 읽어오기*/
// 각 버튼은 'data-item-id'라는 데이터 속성을 가지고 있다. 버튼을 클릭하면,
// 해당 버튼의 'data-item-id' 값을 alert 창으로 표시하시오.
// (1) 목표 요소     : .item-button (모든 버튼)
// (2) 사용할 속성/메소드: .querySelectorAll(), .forEach(), .addEventListener, .dataset
// (3) 처리할 내용   : 각 버튼에 이벤트 리스너를 달고, 클릭 시 event.target의 dataset 값을 읽어옴
const itemButtons = document.querySelectorAll('.item-button');

itemButtons.forEach(function(button) {
    button.addEventListener('click', function(event) {
        // event.target은 클릭이 발생한 바로 그 버튼 요소를 가리킴
        const itemId = event.target.dataset.itemId;
        alert(`선택한 아이템 ID는 ${itemId}입니다.`);
    });
});

/*예제 10: 키보드 이벤트 정보 사용하기*/
// id가 'keyInput'인 입력창에 키보드를 입력할 때마다(키를 뗄 때),
// 입력된 키의 값을 바로 아래 <div>(id: 'keyDisplay')에 "입력된 키: [키 값]" 형식으로 표시하시오.
// (1) 목표 요소     : #keyInput, #keyDisplay
// (2) 사용할 속성/메소드: .addEventListener('keyup'), event.key, .textContent
// (3) 처리할 내용   : 입력창에 'keyup' 이벤트 발생 시 event 객체에서 키 값을 읽어와 div에 표시
const keyInput = document.querySelector('#keyInput');
const keyDisplay = document.querySelector('#keyDisplay');

keyInput.addEventListener('keyup', function(event) {
    // 이벤트 객체(event)에서 'key' 속성을 읽어옴
    keyDisplay.textContent = `입력된 키: ${event.key}`;
});

