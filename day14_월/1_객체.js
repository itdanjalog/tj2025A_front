// [1] 객체 선언 
let 객체변수 = { }
// [2] 객체 호출 
console.log( 객체변수 );

// [3] 객체 속성 구성
let 객체변수2 = { 
    속성1 : 10 , 
    속성2 : 'hello' 
}

console.log( 객체변수2 );

// [4] 객체 속성값 호출 
console.log( 객체변수2.속성1 );
console.log( 객체변수2.속성2 );

// [5] 객체 속성 생성 
객체변수2.속성3 = true;
console.log( 객체변수2 );

// [6] 객체 속성 값 수정 
객체변수2.속성1 = 20;
console.log( 객체변수2 );

// [7] 객체 속성 삭제 
delete 객체변수2.속성3;
console.log( 객체변수2 );

// [8] 객체내 다양한 속성값들 
  // 1. 리터럴
  // 2. 변수
let 다른변수 = 10;
let 객체변수3 = {
    속성0 : 다른변수 , 
    속성1 : 10 , 속성2 : 'Hi' , 속성3 : false ,
    속성4 : [ 10 , 20 , 30 , 40 ] ,
    //속성5 : function(){} , 
    속성6 : { 속성7 : 10 , 속성8 :'Hi2' }
};
console.log( 객체변수3 );
console.log( 객체변수3.속성1 );
console.log( 객체변수3.속성4 );
console.log( 객체변수3.속성4[2] );
    // -- 객체 참조시 .(쉼표) / 배열 요소 참조시 : [인덱스]
객체변수3.속성5(); // 객체내 함수 호출 
console.log( 객체변수3.속성6 );
console.log( 객체변수3.속성6.속성8 );
    // -- 객체내 속성들의 데이터가 알수 없을때 어떻게 대응하죠?
    // console.log(); 이용한 데이터 상태를 확인하면서 개발하자.!!


// [9]. 객체 속성 접근: 대괄호 표기법 [ ]
// 점(.)으로 접근하기 어려운 경우에 사용하며, 특히 속성 이름이 변수이거나 특수문자를 포함할 때 반드시 필요합니다.
let user = {
    name: '유재석',
    'favorite food': '치킨' // 속성 이름에 공백이 있음
};

// 1. 점(.)으로 접근 불가능한 경우
// console.log(user.favorite food); // 오류 발생!
console.log(user['favorite food']); // "치킨"

// 2. 속성 이름을 변수로 접근하는 경우
let keyName = 'name';
console.log(user.keyName); // undefined (user 객체에 'keyName'이라는 속성은 없음)
console.log(user[keyName]); // "유재석" (변수 keyName의 값인 'name' 속성을 찾아
    
// [10]. 객체의 키/값 배열로 받기: Object.keys() / Object.values() / Object.entries(): 키와 값을 한 쌍으로 순회하기
// 객체의 모든 키(key) 또는 값(value)만을 배열 형태로 깔끔하게 받아올 수 있어 반복문과 함께 사용하기 좋습니다.
const product = {
  name: '노트북',
  price: 1500000,
  inStock: true
};

// 1. 객체의 모든 키(key)를 배열로 얻기
const keys = Object.keys(product);
console.log(keys); // ["name", "price", "inStock"]

// 2. 객체의 모든 값(value)을 배열로 얻기
const values = Object.values(product);
console.log(values); // ["노트북", 1500000, true]

// 3. 활용: 키 배열로 반복문 실행하기
for(let i = 0; i < keys.length; i++){
  let key = keys[i]; // 'name', 'price', 'inStock' 순서로 접근
  let value = product[key]; // 대괄호 표기법 활용!
  console.log(`${key} : ${value}`);
}

// [11]. 반복문과 객체/배열의 조합 (🌟 가장 중요)
// 실제 개발에서는 객체들의 배열 형태의 데이터를 가장 많이 다룹니다. 
// 예를 들어, 여러 회원의 정보를 목록으로 관리하는 경우입니다.
// 회원 목록 데이터 (객체의 배열)
const members = [
  { name: '강호동', age: 54, point: 1500 },
  { name: '신동엽', age: 52, point: 2500 },
  { name: '서장훈', age: 50, point: 900 }
];

// [활용 1] 모든 회원의 이름만 출력하기
console.log('--- 회원 이름 목록 ---');
for(let i = 0; i < members.length; i++){
    // members[i]는 각 회원 객체
    console.log(members[i].name);
}

console.log('--- 포인트 증가 후 전체 데이터 ---');
console.log(members);

// [12]. in 연산자: 객체에 특정 속성이 있는지 확인하기
const student = {
  name: '홍길동',
  major: '컴퓨터공학'
};

// 1. 속성이 있는지 기본 확인
console.log('name' in student);   // true
console.log('age' in student);    // false

// 2. if 조건문과 함께 사용하기
// 'grade' 속성이 없으면, 새로 추가하기
if (!('grade' in student)) {
  student.grade = 'A+';
  console.log('학점 정보가 추가되었습니다.');
}
console.log(student); // { name: '홍길동', major: '컴퓨터공학', grade: 'A+' }

// 3. 배열과 함께 사용하기 (배열도 사실 객체!)
const fruits = ['사과', '바나나', '딸기'];
console.log(0 in fruits);     // true (0번 인덱스가 존재)
console.log(3 in fruits);     // false (3번 인덱스는 없음)
