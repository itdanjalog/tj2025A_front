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
/*
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
*/

/*문제 4: 특정 조건을 만족하는 객체 찾기
products 배열에서 id가 3인 상품 객체를 찾아, 해당 객체 전체를 콘솔에 출력하시오. 일치하는 객체가 없으면 "상품을 찾을 수 없습니다."를 출력합니다.*/

/*
const products = [ { id: 1, name: '사과' },{ id: 2, name: '바나나' },{ id: 3, name: '포도' }, { id: 4, name: '딸기' } ];
let idCheck = false; // id가 3인 찾았다(true)/못찾았다(false) 저장하는 변수
for( let index = 0 ; index <= products.length - 1 ; index++ ){
    let 과일객체 = products[index]; // index번째의 과일객체 꺼내기(호출)
    if( 과일객체.id == 3 ){
        idCheck = true;// 찾았다. 목표 이뤘다. 굳이 뒤에 인덱스 확인해야할까? break
        console.log( 과일객체 );
        break; // 반목문 종료 
    }  // * 모두 조회(for모두 실행)를 하고 나서 찾았다/못찾았다 판단!!!!
} // for end 
if( idCheck == false ){ console.log("상품을 찾을 수 없습니다."); }
*/

/*문제 5: 객체 배열 필터링하기
users 배열에서 isActive가 true인 사용자들만으로 구성된 새로운 배열 activeUsers를 만들고, 이 배열을 콘솔에 출력하시오.*/
/*
const users = [{ id: 1, name: '유저1', isActive: true },{ id: 2, name: '유저2', isActive: false },{ id: 3, name: '유저3', isActive: true },{ id: 4, name: '유저4', isActive: false }];
const activeUser = [] // 새로운 배열 인 빈배열 선언  
for( let index = 0 ; index <= users.length - 1 ; index++ ){ 
    if( users[index].isActive == true  ) { activeUser.push( users[index] );  }
}
console.log( activeUser);
*/

/*문제 6: 객체 배열 데이터 변환하기
movies 배열에 있는 각 영화 객체에서 title 속성만 추출하여, 영화 제목들로만 이루어진 새로운 배열 movieTitles를 만들고 콘솔에 출력하시오.*/
/*
const movies = [{ title: '인셉션', director: '크리스토퍼 놀란' },{ title: '기생충', director: '봉준호' },{ title: '매트릭스', director: '워쇼스키 자매' }];
const movieTitles = [] // 새로운 배열 인 빈배열 선언  
for( let index = 0 ; index <= movies.length - 1 ; index++ ){
    movieTitles.push( movies[index].title);
}
console.log( movieTitles );
*/

/* 문제 7: 데이터 그룹화하기, 다음 team 배열을 department를 기준으로 그룹화하여, 아래 result와 같은 형태로 만드시오. */
const team = [ { name: '철수', department: '개발팀' } ,{ name: '영희', department: '기획팀' },
  { name: '민수', department: '개발팀' }, { name: '지혜', department: '기획팀' } ];
// 최종 결과 형태 (result)
// { '개발팀': ['철수', '민수'],  '기획팀': ['영희', '지혜'] }
// (방법1)
let result = { '개발팀': [],  '기획팀': [] }; // 빈 배열( 부서 ) 2개 를 갖는 객체 생성 
for( let index = 0 ; index <= team.length - 1 ; index++ ){
    let t = team[index]; // index 번째 객체 호출 
    if( t.department == '개발팀' ){ // index 번째 객체의 부서가 '개발팀'
        result.개발팀.push( t.name ); // 결과객체내 개발팀 배열 에 index번째 객체의 이름 저장
    }else if( t.department == '기획팀'){
        result.기획팀.push( t.name );
    }
} // for end 
console.log( result );
// (방법2)
let result2 = { }; // 미리 부서명 배열 정의하지 않고.
for( let index = 0 ; index <= team.length - 1 ; index++ ){
    let t = team[index];
    if( result2[ t.department ] ){ // result2에 index번째의 부서명이 존재하면 true / 존재하지 않으면 false  
        result2[ t.department ].push( t.name ); // 부서명 배열에 index번째 이름 넣어준다.
    }else{ // 존재하지 않으면 새로운 배열 생성하고 초기값으로 index번재 이름 넣어준다.
        result2[ t.department ] = [  t.name  ]; // 배열 생성
    }
}
// * if( 객체변수.속성명 ){} // 지정한 객체내 속성명이 존재하면 true , 존재하지 않으면 false 






















