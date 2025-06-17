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
/* 
const members = [ 
    { id: 'user1', password: 'pass1', name: '사용자1' },
    { id: 'user2', password: 'pass2', name: '사용자2' },
];
let id = prompt('아이디 : ');
let pwd = prompt('비밀번호 : ');
let name = prompt('이름 : ');
let member = { id : id , pwd : pwd , name : name } // 2. 입력받은 정보(여러변수)로 하나의 member 객체
let idCheck = false; // 중복이 있다(true)/없다(false) 기억하기 위한 변수 
for( let index = 0 ; index <= members.length -1 ; index++ ){
    let member = members[index]; // index번째의 member 객체 꺼내기(조회)
    if( member.id == id ){ // index번째의 member객체내 id속성값이 입력받은 id 와 같으면
        idCheck = true; // 중복 체크!!! 
        break; // 반복문 종료 
    }  // ******** 아직 모두 조회된 상태가 아니므로 for문 안에서 배열에 저장 하지 않는다. ***********
} // for end 
if( idCheck == false ){ 
    members.push(member);  
    console.log( '등록 성공');
} else{  
    console.log( '등록 실패'); 
}
*/

/* 문제 3: 객체 배열의 속성 값 평균 구하기
scores 배열에 담긴 모든 학생의 수학(math) 점수 평균을 계산하여 콘솔에 출력하시오. */
const scores = [
  { name: 'A', math: 80, science: 92 },
  { name: 'B', math: 95, science: 88 },
  { name: 'C', math: 76, science: 78 }
];
// --------------------- 반복문 없이 ------------ //
let 학생객체1 = scores[0]
let 학생객체2 = scores[1]
let 학생객체3 = scores[2]
let 학생1수학점수 = 학생객체1.math; // 80
let 학생2수학점수 = 학생객체2.math; // 95
let 학생3수학점수 = 학생객체3.math; // 76
let 합계 = 학생1수학점수 + 학생2수학점수 + 학생3수학점수 ; // 80 + 95 + 76
let 인원수 = scores.length // 3 
let 평균 = 합계 / 인원수 ;
// --------------------- 반복문 풀이 ------------ //
let sum = 0 ; // 객체들의 math(수학점수)를 *누적* 합계를 저장 하기 위한 변수.
for( let index = 0 ; index <= scores.length - 1 ; index++ ){ // 0 부터 마지막 인덱스까지 1씩증가 
    let 학생객체 = scores[ index ]; // index번째 학생객체 호출 
    sum +=  학생객체.math; // index번째 학생객체의 수학점수 속성값 호출 하여 sum에 누적합계
} // for end 
console.log( sum / scores.length );    // 합계 / 3(배열길이=객체개수=인원수) 
