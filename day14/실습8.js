// [실습8]
/*  문제 1: prompt로 제품 정보 객체 만들기
    prompt를 세 번 사용하여 사용자로부터 '제품명', '가격', '제조사'을 순서대로 입력받습니다. 
    입력받은 정보로 하나의 product 객체를 생성하고, 생성된 객체를 콘솔에 출력하시오. */
/*    
// 1. prompt 이용하여 입력받은 데이터를 각각 변수에 저장
let pname = prompt( '제품명 : ');
let pprice = prompt( '가격 : ');
let pmanufact = prompt( '제조사 : ');
// (방법)1 : 배열일때 , 배열은 제품명/가격/제조사 를 인덱스(저장순서)로 구분한다. , 
const array = [ pname , pprice , pmanufact ];
// (방법)2 : 객체일때 , 객체는 제품명/가격/제조사 를 속성명(식별이름)로 구분한다.
const obj1 = { 'pname' : pname , 'pprice' : pprice , 'pmanufact' : pmanufact };
// * 만일 속성명 과 자료의변수명이 일치하면 **속성명 생략** , 자동으로 변수명을 속성명으로 정의한다.
const obj2 = {  pname ,  pprice ,  pmanufact };
console.log( array );  console.log( obj1 );    console.log( obj2 );
*/

/*문제 2: prompt로 회원 가입 및 아이디 중복 확인 기능 구현
prompt를 세 번 사용하여 사용자로부터 '아이디', '비밀번호', '이름'을 순서대로 입력받습니다.
입력받은 정보로 하나의 member 객체를 생성하고, members 배열에 저장하여 배열을 콘솔에 출력하시오.
단] 입력받은 아이디가 이미 배열에 존재하면 '존재하는 아이디 입니다'를 출력하고 배열에 등록하지 않습니다.*/
const members = [ 
    { id: 'user1', password: 'pass1', name: '사용자1' },
    { id: 'user2', password: 'pass2', name: '사용자2' },
];

// 1. prompt를 세 번 사용 : '아이디', '비밀번호', '이름'을 순서대로 입력받습니다
let id = prompt('아이디 : ');
let pwd = prompt('비밀번호 : ');
let name = prompt('이름 : ');
// 2. 입력받은 정보(여러변수)로 하나의 member 객체
let member = { }        // (1) 객체 생성  , 객체내 속성 추가 해야 하므로 *변수에 저장* 
member.id = id;         // (2) 객체내 새로운 속성명 에 입력받은 값 대입 
member.pwd = pwd;
member.name = name; // vs let member = { id : id , pwd : pwd , name : name }
// let member = [ ]; member.push( id )
    // * 입력받은 아이디가 이미 배열에 존재여부 
    // 1. 배열내 모든 객체 하나씩 (조회)꺼낸다.
let idCheck = false; // 중복이 있다(true)/없다(false) 기억하기 위한 변수 
for( let index = 0 ; index <= members.length -1 ; index++ ){
    let member = members[index]; // index번째의 member 객체 꺼내기(조회)
    // 2. 객체내 id 속성 값이 입력받은 값과 비교 
    if( member.id == id ){ // index번째의 member객체내 id속성값이 입력받은 id 와 같으면
        idCheck = true; // 중복 체크!!! 
        break; // 반복문 종료 
    }
    // * 아직 모두 조회된 상태가 아니므로 for문 안에서 배열에 저장 하지 않는다. 
} // for end 
// 3. member 객체, members 배열에 저장
// 4. members 배열을 콘솔에 출력하시오.
if( idCheck == false ){ 
    members.push(member);  console.log( '등록 성공');
}
else{  console.log( '등록 실패'); }










