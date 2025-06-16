// [실습8]
/*  문제 1: prompt로 제품 정보 객체 만들기
    prompt를 세 번 사용하여 사용자로부터 '제품명', '가격', '제조사'을 순서대로 입력받습니다. 
    입력받은 정보로 하나의 product 객체를 생성하고, 생성된 객체를 콘솔에 출력하시오. */
    
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





