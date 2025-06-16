
// 1_객체.html  , 1_객체.js
// [1] 객체 선언 
{ }

// [2] 선언한 객체를 변수에 대입 
const obj1 = { };
console.log( obj1 );    // Object

// [3] 객체 선언시 속성(properties) 구성 , { 속성명 : 자료 , 속성명 : 자료  }
// - 속성명 과 자료 의 한쌍(entry) 하고 ,(쉼표) 구분하여 여러개 쌍(entry) 를 { } 로 감싼다.
// - 속성명은 임의로 작성하되 , 특수문자가 포함된 경우 ""or'' 감싼다.
// - 속성명은 자료를 식별하는 목적으로 중복 이름이 불가능하다.
const obj2 = { 속성명1 : 10 , "속성명2" : "hello" }
console.log( obj2 );    // {속성명1: 10, 속성명2: 'hello'}

// [4] 객체 호출
    // 변수명           : 전체 호출 
    // 변수명.속성명    : 특정한 속성의 자료 호출  * .(접근/도트 연산자) 특정한 위치(속성)로 이동한다는 뜻
    // 변수명['속성명'] : 특정한 속성의 자료 호출  * 속성명이 특수문자포함 또는 변수일때
    // Object.keys( 변수명 )    : 객체내 모든 속성명(key) 를 배열로 반환
    // Object.values( 변수명 )  : 객체내 모든 자료(value) 를 배열로 반환 
    // Object.entries( 변수명 ) : 객체내 모든 엔트리(entry) 를 배열로 반환 
console.log( obj2 ); 
console.log( obj2.속성명1 );            // 10
console.log( obj2['속성명2'] );         // hello
console.log( Object.keys( obj2 ) );     // ['속성명1', '속성명2']
console.log( Object.values( obj2 ) );   // [10, 'hello']
console.log( Object.entries( obj2  ) ); // [ ['속성명1' , 10 ] , ['속성명2' , 'hello'] ]

// [5] 객체내 속성 추가 , 변수명.새로운속성명 = 자료 , 변수명['새로운속성명'] = 자료
obj2.속성명3 = true;
console.log( obj2 );    // {속성명1: 10, 속성명2: 'hello', 속성명3: true}

// [6] 객체내 속성 수정 , 변수명.속성명 = 새로운자료 , 변수명['속성명'] = 새로운자료
obj2.속성명1 = 20; 
console.log( obj2 );    // {속성명1: *20, 속성명2: 'hello', 속성명3: true}

// [7] 객체내 속성 삭제 , delete 변수명.삭제속성명
delete obj2.속성명3;
console.log( obj2 );    // {속성명1: 20, 속성명2: 'hello'}

// [8] 객체 속성내 자료 , 자료에는 변수값,리터럴값,객체,배열,함수 등 모든 자료가 대입된다.
let var1 = 10;
const var2 = { 
    props1 : 3.14 , props2 : var1 , 
    props3 : { } ,  props4 : [ ] , 
    props5 : function(){}
}

// [9] in 연산자 , '찾을속성명' in 변수명 , 객체내 특정한 속성이 있는지 확인(true/false) 
console.log( 'props1' in var2 ); // true
console.log( 'props6' in var2 ); // false

// [10] 배열 과 객체 조합
// - 공통점 : 여러개 자료들을 하나의 자료로 묶는다.
// - 차이점 : 배열(인덱스으로 자료 구분) vs 객체(속성명으로 자료 구분 )
// - 동일한 자료의 의미를 가질때는 배열 , 서로 다른 자료의 의미를 가질때는 객체
// ['콜라' , 1000] -> 배열 보다는 객체 권장!!!
const 제품 = { '제품명' : '콜라' , '가격' : 1000 } 
// { {제품정보1} , {제품정보2} } -> 객체 보다는 배열 권장!! 
const 제품목록 = [ { '제품명' : '콜라' , '가격' : 1000 } , { '제품명' : '사이다' , '가격' : 2000 }  ]
// + 반복문 : 변수가 가지(참조)는 정보를 찾아가기(껍질까기)
// 제품목록(변수) -> 요소(배열) -> 속성값(객체)   ,  **변수명[인덱스].속성명**
for( let index = 0 ; index <= 제품목록.length - 1 ; index++ ){
    const product = 제품목록[index]; // index번째의 제품(객체)
    console.log( product.제품명 ); // index번째의 제품(객체) 의 속성값 호출
    console.log( product['가격'] )
} 