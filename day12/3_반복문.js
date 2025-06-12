/*문제 1: 1부터 10까지 출력하기
for 반복문을 사용하여 1부터 10까지의 숫자를 콘솔에 순서대로 
출력하는 프로그램을 작성하시오.*/
// *반복변수의 패턴* : 1부터 10까지 1씩증가 반복 
for( let num = 1 ; num <= 10 ; num++ ){ // num변수가 1부터 10 이하까지 1씩 증가 반복 
    console.log( num );
} // for end 

/*문제 2: 배열의 모든 요소 출력하기
다음과 같은 과일 배열이 있습니다. for 반복문을 사용하여 
배열의 모든 요소를 하나씩 콘솔에 출력하시오.
let fruits = ['사과', '바나나', '포도', '딸기'];*/
// *반복변수의 패턴* : 배열의모든요소( 0 부터 마지막인덱스[ .length-1 ]까지 1씩증가 )
let fruits = ['사과', '바나나', '포도', '딸기'];
for( let index = 0 ; index <= fruits.length - 1 ; index++ ){
    // index는 0부터 마지막인덱스 까지 1씩 증가 반복 
    console.log( fruits[index] ); // index 번째의 요소값 호출 
} // for end 

/*문제 3: 배열 역순으로 출력하기
주어진 배열을 for 반복문을 사용하여 
역순으로 (마지막 요소부터 첫 요소 순서로) 출력하는 프로그램을 작성하시오.
let numbers = [1, 2, 3, 4, 5];  출력 예시: 5 4 3 2 1  */
let numbers = [1, 2, 3, 4, 5];
console.log( numbers[4] );
console.log( numbers[3] );
console.log( numbers[2] );
console.log( numbers[1] );
console.log( numbers[0] );
// *반복변수의 패턴* : 4 3 2 1 0 : 마지막 인덱스부터 0 까지 1씩 감소  
for( let index = numbers.length-1 ; index >= 0 ; index-- ){
    // index는 마지막인덱스부터 0 까지 1씩 감소 
    console.log( numbers[index] );
} // for end 

/*문제 4: 1부터 50까지의 합계 구하기
for 반복문을 사용하여 1부터 50까지 모든 정수의 합을 구하여 콘솔에 출력하시오.*/
// *반복변수의 패턴* : 1 부터 50 까지 1씩 증가
let sum = 0; // 누적합계를 저장하는 변수 선언 
for( let number = 1 ; number <= 50 ; number++ ){
    sum += number // vs // sum = sum + number;
} // for end 
console.log( sum );

/*문제 5: 짝수만 출력하기
for 반복문과 if 조건문을 사용하여, 1부터 20까지의 숫자 중 짝수만 콘솔에 출력하시오.*/
// *반복변수의 패턴* : 1 부터 20 까지 1씩 증가
for( let num = 1 ; num <= 20 ; num++ ){
    // 만약에 num 이 짝수이면 console.log() 아니면 생략
    if( num % 2 == 0 ){  console.log( num ); }  // 값 % 2  , 짝수 : == 0 , 홀수 : == 1
    else{ } 
} // for end 