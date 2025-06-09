// [입력함수]
// 1. confirm() : 브라우저(크롬) 에 확인/취소 알림 창 , 확인 = true / 취소 = false 반환/리턴/결과 값
confirm( "(1) 입력 해주세요.")

// 2. prompt() : 브라우저(크롬) 에 텍스트 입력상자 알림 창 , 텍스트 입력상자에 입력한 텍스트를 반환/리턴/결과 값 
prompt( "(2) 입력 해주세요2.")

// 3. document.querySelector("선택자").innerHTML        : 특정한 선택자의 텍스트 호출 
// 4. documeny.querySelector("선택자").value            : 특정한 선택자의 value속성의 값 호출 

// [변수와 입력/출력 함수] * 입력받은 결과물을 변수에 저장.
// 1. let 변수명 = confirm();
    // confirm( "확인 또는 취소 클릭하세요.");           : 브라우저에서 확인/취소 선택 받는다.
    // let result1 = true 또는 false
let result1 = confirm( "확인 또는 취소 클릭하세요.");
console.log( result1 ) // 사용자 확인 클릭시 true 출력 , 취소 클릭시 false 출력 

// 2. let 변수명 = prompt();
let result2 = prompt( "사용자 전화번호 입력하세요. ")       
console.log( result2 )
