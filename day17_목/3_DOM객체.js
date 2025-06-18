/*

1. 객체(Object)의 기본 개념
자바스크립트에서 객체란 **속성(Property)**과 **함수(Method)**를 하나의 덩어리로 묶어놓은 데이터 구조입니다.

접근 방법: 객체는 점(.) 접근 연산자를 사용하여 내부의 속성 값에 접근하거나 함수(메소드)를 호출합니다.
객체명.속성명
객체명.함수명()
내장 객체: console, document 등 자바스크립트가 미리 만들어 제공하는 객체들입니다.
2. DOM (Document Object Model) 이란?
DOM은 웹 브라우저가 HTML 문서를 이해하고 제어할 수 있도록, 해당 문서를 트리 구조의 객체(Object) 모델로 변환한 것입니다. 자바스크립트와 HTML을 연결하는 다리 역할을 합니다.

핵심 객체: document 객체는 DOM 트리의 최상위 객체이며, HTML 문서 전체를 대표하는 시작점입니다.


    객체  
        - 속성과 함수 를 가질수 있는 자료 구조/타입
        - 객체는 .(접근연산자)를 이용하여 속성의값과 함수 호출
            변수명.속성명      변수명.함수명( )
        - 내가 만든 객체 vs 남이 만든객체(라이브러리 )    
            남이 만든객체 : 
                1. console.log() / console객체내 log()함수 호출 
                2. document.querySelector() / doument객체내 querySelector()함수 호출 
    *DOM객체* 
        - JS 회사에서 미리 만들어진 HTML 관련 객체 제공 , 왜? JS에서 HTML 조작하기 위해서 
        - document 객체내 속성과 함수는 무엇이 있나요? 다양하다.
            1. document.write('출력할내용')         : HTML에 출력할내용을 출력해주는 함수.
            2. document.querySelector('선택자')     : HTML에 지정한 선택자의 하나 마크업을 객체타입로 반환 함수 [ 객체 ]
            3. document.querySelectorAll('선택자')  : HTML에 지정한 선택자의 모든 마크업을 객체타입로 반환 함수 [ 배열 ]
                - 선택자( css동일 ) : 1.마크업 2..클래스명 3.#id명 4. > 자식 5. 띄어쓰기 자손 등등
        
        - 요소(마크업) 객체 주요 속성/함수 , 마크업들의 속성들을 JS에서도 접근이 가능하다. 
            1. .value : 지정된 마크업의 value속성값 호출/대입         
                - 사용가능한 요소 : <input /> , <select /> , <textarea > 등등
                - 사용불가능한 요소 : <div> , <table> , <span> 등등
                <호출> document.querySelector('선택자').value              [문자열]
                <대입> document.querySelector('선택자').value = 새로운값

            2. .innerHTML : 지정된 마크업의 시작마크업과 끝마크업의 > 사이 < 가 inner , 마크업 사이에 HTML 호출/대입 
                - 사용가능한 요소 : <div> , <table> , <span> 등등
                - 사용불가능한 요소 : <input /> , <select /> , <img /> 등등
                <호출> document.querySelector('선택자').innerHTML           [문자열]
                <대입> document.querySelector('선택자').innerHTML = 새로운값 

            3. .style : 지정된 마크업의 style속성을 이용한 css 조작
                - 모든 마크업 
                <호출> document.querySelector('선택자').style 
                <대입> document.querySelector('선택자').style = 'css문법'

            4. .src : 지정된 마크업의 src속성값 호출/대입
                - 사용가능한 요소 : <img src="" /> , <audio src="" /> , <video src="" /> 등등

            5. .addEventListener() : 전문가처럼 이벤트 다루기
                onclick 속성을 HTML에 직접 작성하는 대신, JavaScript 코드 내에서 이벤트와 함수를 연결하는 전문가적인 방식입니다. HTML(구조)과 JavaScript(동작)의 역할을 완벽하게 분리하여 코드의 가독성과 유지보수성을 높입니다.

                정의: 선택된 DOM 객체에 '이벤트 감지기(Listener)'를 부착(add)하는 함수(메소드)입니다.
                문법:
                선택된요소.addEventListener('이벤트이름', 실행할함수);
                이벤트이름: 'click', 'mouseover', 'keydown' , ''DOMContentLoaded 등. onclick과 달리 'on' 접두사를 붙이지 않습니다.
                실행할함수: 이벤트가 발생했을 때 실행될 함수의 이름 또는 함수 자체를 전달합니다.

            4) .classList : CSS 클래스 조작하기 (★실무 핵심★)
                요소의 class 속성을 직접 제어하는 아주 편리한 기능들을 모아놓은 속성입니다. style을 하나씩 변경하는 것보다 미리 정의된 CSS 클래스를 추가(add)하거나 제거(remove)하는 방식이 훨씬 체계적이고 강력합니다.

                비유: classList는 요소에게 **"이름표"**를 붙이거나 떼는 것과 같습니다. '활성화' 이름표(active 클래스)를 붙이면 그에 맞는 스타일이 적용되고, 떼면 원래대로 돌아오는 식입니다.

                주요 함수(메소드):
                요소.classList.add('클래스명'): 지정한 클래스를 추가합니다.
                요소.classList.remove('클래스명'): 지정한 클래스를 제거합니다.
                요소.classList.toggle('클래스명'): 클래스가 있으면 제거하고, 없으면 추가합니다. (토글 기능에 매우 유용)
                요소.classList.contains('클래스명'): 지정한 클래스가 있는지 확인합니다. (결과: true 또는 false)
                
*/
// [1]
console.log( document );
// [2]
console.log( document.querySelector('title') ); // <title>마크업를 JS의 객체타입으로 반환 [ 객체 ]
console.log( document.querySelector('body')); //<body>마크업를 JS의 객체타입으로 반환 [ 객체 ]

// [3]
console.log( document.querySelector('div') );   // <div> 마크업를 js의 객체타입으로 반환 [ 객체 ]
console.log( document.querySelectorAll('div') );    // <div> 마크업를 js의 객체타입으로 모두 반환[ 배열 ] 

console.log( document.querySelector('.box2') ); // <div> 마크업중에서 class속성이 'box2' 인 마크업를 js의 객체타입으로 반환 
console.log( document.querySelector('#box3') ); // <div> 마크업중에서 id속성이 'box3' 인 마크업를 js의 객체타입으로 반환 

// [4] 
let box222 = document;                                  // box222 = ( 객체O vs 리터럴/문자열 )
let box2 = document.querySelector('.box2');             // box2 = ( 객체O vs 리터럴/문자열 )
let box22 = document.querySelector('.box2').innerHTML;  // box22 = ( 객체 vs 리터럴/문자열O )


// 1. 제어할 HTML 요소들을 먼저 선택해서 변수에 저장한다.
const myButton = document.querySelector('#myButton');
const resultBox = document.querySelector('#resultBox');

function aa () {
    // 'click' 이벤트가 발생하면(버튼이 클릭되면) 아래의 함수가 실행된다.
    console.log('버튼이 클릭되었습니다!');
    
    // resultBox의 내부 HTML을 변경한다.
    resultBox.innerHTML = '버튼 클릭이 감지되어 내용이 변경되었습니다!';
    
    // resultBox의 스타일도 변경한다.
    resultBox.style.color = 'blue';
    resultBox.style.fontWeight = 'bold';
}

// 2. 버튼(myButton)에 '이벤트 감지기'를 부착한다.
myButton.addEventListener('click', aa );


// 1. 제어할 HTML 요소들을 선택합니다.
const toggleButton = document.querySelector('#toggleButton');
const targetBox = document.querySelector('#targetBox');

// 2. 버튼에 'click' 이벤트 리스너를 추가합니다.
toggleButton.addEventListener('click', function() {
    
    // 3. targetBox의 classList에서 'active' 클래스를 토글합니다.
    //    - targetBox에 'active' 클래스가 없으면 -> 추가해준다.
    //    - targetBox에 'active' 클래스가 있으면 -> 제거한다.
    targetBox.classList.toggle('active');
    
    console.log(targetBox.classList); // 콘솔에서 현재 클래스 목록 확인
});
