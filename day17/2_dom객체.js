/*예제 1: 요소 내용 변경하기
// id가 'title'인 <h1> 요소의 내용을 'DOM 조작 성공!'으로 변경하시오.
// (1) 목표 요소     : #title
// (2) 사용할 내장 속성/메소드: .innerHTML
// (3) 처리할 내용   : 'DOM 조작 성공!' 텍스트로 교체
*/
// 1. 지정한 id의 dom객체를 가져오기 
const h1 = document.querySelector('#title'); 
console.log( h1 );
// 2. 가져온 dom객체내 innerHTML 대입하기 
h1.innerHTML = 'DOM 조작 성공!';

/*예제 2: 사용자 입력값 가져와서 표시하기*/
// id가 'usernameInput'인 <input>에 이름을 입력하고 '확인' 버튼(id: 'submitBtn')을 클릭하면,
// id가 'greeting'인 <p> 태그에 "안녕하세요, [입력된이름]님!"이라고 표시하시오.
// (1) 목표 요소     : #usernameInput, #submitBtn, #greeting
// (2) 사용할 내장 속성/메소드:  .value, .innerHTML
// (3) 처리할 내용   : 버튼 클릭 시 input의 value를 읽어와 p 태그에 삽입

function func2(){
    console.log( '--- func2 exe ---');
    // 1. usernameInput 마크업 객체 가져오기 
    const userNameInput = document.querySelector('#usernameInput');
        console.log( userNameInput );
    // 2. 마크업 객체내 value 속성값 가져오기 
    const userName = userNameInput.value;
        console.log( userName );
    // 3. greeting 마크업 객체 가져오기 
    const greeting = document.querySelector('#greeting');
        console.log( greeting );
    // 4. greeting 마크업내 innerHTML 대입하기.
    greeting.innerHTML = `안녕하세요, ${ userName }님!`
}


