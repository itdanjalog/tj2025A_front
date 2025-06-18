/*예제 1: 기본 함수 선언 및 호출
'함수 호출 성공!'이라는 메시지를 콘솔에 출력하는 sayHello 라는 이름의 함수를 정의하고, 그 함수를 호출하시오.*/
// 함수 선언시 고려할 사항 : 1.매개변수 2.반환값 3.처리할명령어
// (1)매개변수     :   X
// (2)반환값       :   X
// (3)처리할명령어 :   console.log();
/*
function sayHello(){ // 함수 정의 
    console.log('함수 호출 성공!');
}
sayHello(); // 정의한 함수 호출 
*/

/*예제 2: 매개변수를 사용하는 함수
임의의 두 개의 숫자(number)를 매개변수로 받아, 그 합을 콘솔에 출력하는 printSum 함수를 정의하시오. printSum(5, 10)을 호출하여 결과를 확인하시오.*/
// (1)매개변수     :   숫자1  ,  숫자2   :  매개변수명은 아무거나.
// (2)반환값       :   X
// (3)처리할명령어 :   더하기 해서 console.log()
/*
function printSum( 숫자1 , 숫자2 ){ // 함수 정의 
    console.log( 숫자1 + 숫자2 );
}
printSum( 5 , 10 ); // 15, 정의한 함수 호출 시 매개변수의 인수 전달 , 숫자1 = 5 / 숫자2 = 10 대응
printSum( 6 , 2 ); //  8
*/

/*예제 3: 값을 반환(return)하는 함수
임의의 이름을 문자열(string)로 매개변수를 받아 "환영합니다, [이름]님!" 형식의 문자열을 반환하는 getWelcomeMessage 함수를 정의하시오.
함수를 호출한 결과를 변수에 저장하고, 그 변수를 콘솔에 출력하시오. */
// (1)매개변수     :   이름    * 매개변수명은 아무거나.
// (2)반환값       :  "환영합니다, [이름]님!"
// (3)처리할명령어 :   X 
/*
function getWelcomeMessage( name ){ // 함수 정의 
    return `환영합니다, ${name}님!`
}
let 함수결과 = getWelcomeMessage('유재석'); // 함수 호출 
console.log( 함수결과 ); // 환영합니다, 유재석님!
*/

/*예제 4: 함수를 이용한 카운터
0의 값을 가진 counter라는 전역 변수를 만드시오. 호출될 때마다 counter의 값을 1씩 증가시키는 increaseCount 함수를 정의하시오.
함수를 세 번 호출한 뒤, counter의 값을 콘솔에 출력하여 3이 되었는지 확인하시오.*/
// (1)매개변수     :  X
// (2)반환값       :  X
// (3)처리할명령어 :  전역변수(counter) 1증가.
/*
let counter = 0 ; // 전역변수는 특정한 { } (지역)에서 선언되지 않은 변수 
function increaseCount(){ // 함수 정의 
    counter++; // vs counter = counter + 1 vs counter += 1 
}
increaseCount(); // 함수 호출 
increaseCount(); // 함수 호출 
increaseCount(); // 함수 호출 
console.log( counter ); // 전역변수 확인 = 3
*/

/*예제 5: for 반복문을 포함한 함수
임의의 숫자 n을 매개변수로 받아, 1부터 n까지의 숫자를 콘솔에 차례대로 출력하는 printNumbers 함수를 정의하시오.*/
// (1)매개변수     :  n
// (2)반환값       : 
// (3)처리할명령어 :  1부터 n까지의 숫자를 콘솔에 차례대로 출력 < for >
function printNumbers( n ){ // 함수 정의
    for( let i = 1 ; i <= n ; i++ ){ // i는 1부터 매개변수(n) 까지 1씩증가
        console.log( i );
    }
} // func end 
printNumbers( 5 ); // 1 2 3 4 5 [확인]

/*예제 6: prompt와 함수 활용
prompt를 이용해 사용자로부터 이름을 입력받으시오. 입력받은 이름을 매개변수로 받아, 해당 이름이 저장된 userList 전역 배열에 push하는 addUser 함수를 정의하고 호출하시오.*/
// (1)매개변수     :  name
// (2)반환값       : 
// (3)처리할명령어 :  매개변수(name) 를 배열(userList) 에 .push 
let userList = [ ]; // 전역변수에 빈 배열 선언 
function addUser( name ){ // 함수 정의 
    userList.push( name ); // 매개변수를 배열에 저장 
}
// 함수 호출 
let 이름 = prompt( '이름 : ' ); // 사용자로부터 이름 입력받아 
addUser( 이름 ); // 입력받은 이름 을 addUser 함수의 매개변수로 전달 
console.log( userList ); // [확인] 










/*예제 7: 배열을 매개변수로 전달
임의의 이름 들이 담긴 배열을 매개변수로 받아, for 반복문을 사용하여 배열의 모든 요소를 콘솔에 하나씩 출력하는 printFruits 함수를 정의하시오.

예제 8: Boolean 값 반환하기
임의의 숫자 하나를 매개변수로 받아, 그 숫자가 0보다 크면 true를, 그렇지 않으면 false를 반환하는 isPositive 함수를 만들어 보세요.

예제 9: 전역 변수와 지역 변수
let globalText = '전역'; 변수를 선언하세요. printLocal 함수 안에서는 let localText = '지역'; 변수를 선언하고, 
두 변수를 모두 콘솔에 출력해 보세요. 함수 바깥에서는 globalText만 출력되는 것을 확인하세요.
*/