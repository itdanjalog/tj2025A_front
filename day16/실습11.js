// 함수란? 미리 정의한 코드를 재사용 함으로써 효율적으로 로직 가능
/*
      x = 3 , y = 2     <--------- 함수 매개변수(여러개가능)  
    ---    ----------
    |               |
    |    X + Y      | <----------- 함수 로직/실행부 { }
    |               |
    ---------    ----
            return     <----------- 함수 종료되면서 반환되는 값( 한개 )

    =================================================================
    생활속 함수 예제1 : 자판기
        - 매개변수 : 돈 , 제품번호 
        - 자판기 : 돈에 따른 제품의 가격 유효성검사 , 재고검사 등등 처리
        - 반환값 : 선택된음료 , 잔돈
        
        유재석 자판기에 1000, 1번제품(콜라) 전달 하면 '유재석에게 콜라'반환 
        강호동 자판기에 2500, 2번제품(환타) 전달 하면 '강호동에게 환타'반환
    =================================================================
    - 함수 안에서 다른 함수 호출 이 가능하다. 
    function 함수A( ){
        함수B();
    }
    function 함수B( ){ }

    - 재귀함수 : 함수 안에서 현재함수를 호출이 가능하다.
    function 함수A( ){ 
        함수A();
    }
        function a( num ){                  // 3                // 2                // 1                // 0
            num--;                          num=3 , num = 2     num=2 , num = 1     num = 1 , num = 0   num =0 , num = -1
            if( num < 0 ) return;           false               false               false               true 
            a( num );                       a( 2 )              a(1)                a(0)                return
            return;
        };
        a( 3 ); 

*/ 
/* 실습 1: 성인 인증 함수
나이(age)를 매개변수로 받아, 20세 이상이면 true를, 미만이면 false를 반환하는 isAdult 함수를 만드세요. 
isAdult(25)와 isAdult(17)의 결과를 각각 콘솔에 출력해 보세요.*/
// 1. 매개변수  : age 
// 2. 반환값    : true / false 
// 3. 로직      : age가 20세 이상이면 true , 미만이면 false; 
/*
function isAdult( age ){ // 함수 정의/선언 
    if( age >= 20 ){ return true; } // true 반환 
    else{ return false; } // false 반환 
} // func end 
let reuslt = isAdult( 25 ); // 함수 호출1
console.log( reuslt );
console.log( isAdult( 17 ) );  // 함수 호출2
*/

/*실습 2: 배열의 총합 구하기
숫자로 이루어진 배열을 매개변수로 받아, for 반복문을 사용해 모든 요소의 합계를 구하여 
반환하는 sumArray 함수를 만드세요. 아래 numbers 배열로 테스트해 보세요.*/
// 매개변수 : array
// 반환값 : 배열의총합계
// 로직 : for이용한배열의총합계구하기
/*
const numbers = [10, 20, 30, 40, 50]; 
function sumArray( array ){ // 함수 정의 
    let sum = 0; // 누적합계 변수 
    for( let index = 0 ; index <= array.length - 1 ; index++ ){
        sum += array[index];
    }
    return sum; // 누적합계를 반환한다. --> sumArray() 호출된곳으로 반환 
}
sumArray( numbers );                // 함수 호출하고 반환값을 변수에 저장하지 않았다.
let sum = sumArray( numbers );      // 함수 호출하고 반환값을 변수에 저장 했다.
*/

/*실습 3: 가장 긴 단어 찾기
문자열로 이루어진 배열을 매개변수로 받아, for 반복문을 사용해 가장 긴 단어를 찾아 반환하는 findLongestWord 함수를 만드세요. 아래 words 배열로 테스트해 보세요.*/
// 1. 매개변수 : array  * 매개변수명은 아무거나.
// 2. 반환값 : 배열내가장긴단어
// 3. 로직 : 매개변수배열내 가장 긴 단어 찾기 <for> 
/* 
const words = ['apple', 'banana', 'kiwi', 'strawberry'];    
function findLongestWord( array ){                          
    let longWord = '' ; // 가장 긴 단어를 저장하는 변수 
    for( let index = 0 ; index <= array.length-1 ; index++ ){
        let word = array[index];
        // 만약에 index번째 단어가 가장긴단어 보다 길면 가장긴단어 에 index번째 단어 대입한다.
        if( word.length > longWord.length ){ longWord = word; }
    } // for end 
    return longWord; // 함수가 종료되면서 함수를 호출했던곳으로 반환하는 값
} // func end 

let result = findLongestWord( words ); // 배열(객체) 은 객체이다. 
console.log( result );
*/

/*실습 4: 게임 점수 관리하기
let userScore = 0; 전역 변수를 만드세요. gainScore() 함수는 userScore를 10 증가시키고, loseScore() 함수는 5 감소시킵니다.
gainScore()를 세 번, loseScore()를 한 번 호출한 뒤, 최종 점수를 콘솔에 출력하세요.*/
// 1. (gainScore)매개변수 : X
// 2. (gainScore)리턴값 : X
// 3. (gainScore)로직 : 전역변수(userScore)를 10증가.
/*
let userScore = 0;
function gainScore( ){
    userScore += 10; // 전역변수 10증가. 
}
// 1. (loseScore)매개변수 : X
// 2. (loseScore)리턴값 : X
// 3. (loseScore)로직 : 전역변수(userScore)를 5감소.
function loseScore( ){
    userScore -= 5; // 전역변수 5감소.
}
gainScore();
gainScore();
gainScore();
loseScore();
console.log( userScore );   // 25 
*/

/*실습 5: 최고 점수 학생 찾기
전역변수 students 배열 데이터를 이용하여 , 
가장 높은 점수(score)를 가진 학생의 이름을 찾아 반환하는 findTopStudent 함수를 만드세요.
const students = [ { name: '김철수', score: 85 },{ name: '이영희', score: 92 },{ name: '박민준', score: 78 }]; */
// [ findTopStudent ] 최고 점수 학생 찾기 함수
// 1. 매개변수 : x
// 2. 반환값 : 가장높은점수를가진이름
// 3. 로직(명령코드들) : students배열내 가장 높은 점수(score)를 가진 학생의 이름을 찾는 행동/로직/코드 
// * 전역변수 
const students = [ { name: '김철수', score: 85 },{ name: '이영희', score: 92 },{ name: '박민준', score: 78 } ]; 
function findTopStudent(  ){
    let maxObj = { name : '' , score : 0 }
    for( let index = 0 ; index <= students.length - 1 ; index++ ){
        const student =  students[index];
        if( student.score > maxObj.score ){
            maxObj = student;    
        }
    } // for end 
    return maxObj.name; // 가장높은점수의이름
} // f end 
// 확인차
let result = findTopStudent(); 
console.log( result );
