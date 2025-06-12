/*문제 1: 과일 목록 관리
다음 과일 목록 배열이 주어져 있습니다.
let fruitList = [ '사과', '바나나' ];
사용자로부터 새로운 과일 이름을 입력받아, fruitList에 이미 존재하는 과일이면 
'이미 존재하는 과일입니다.'를 출력하세요. 존재하지 않는 과일이면 배열에 추가한 뒤, 
변경된 배열 전체를 출력하는 프로그램을 작성하시오.*/
// 조건 : 배열내 요소 찾기함수 : .indexOf()  , fruitList.indexOf( 새로운과일명 ) == -1 
let fruitList = [ '사과', '바나나' ];
let fruitName = prompt('새로운 과일명 : ');
if( fruitList.indexOf( fruitName ) == -1 ) {  // 존재하지 않는다.
    fruitList.push( fruitName ); // 입력받은 값을 배열에 추가한다. push( )
    console.log( fruitList );
}else{ console.log('이미 존재하는 과일입니다.'); } // (그외) 존재한다.

/*문제 2: 성별에 따른 색상 지정
주민등록번호 13자리를 문자열로 입력받습니다. 
성별을 나타내는 7번째 숫자가 '1' 또는 '3'이면 'blue'를, '2' 또는 '4'이면 'red'를 
출력하는 프로그램을 작성하시오.*/
// 조건 : 주민등록번호[6] == '1' || 주민등록번호[6] == '3' , 
// (1) 문자열도 배열자료 기반 이므로 인덱스가 존재한다.
console.log( '1234567891234'[7] );
// (2) 위치는 1 부터 , 인덱스는 0부터 , 7번째 숫자 --> 6번 인덱스 뜻 
let ssn = prompt('주민등록 번호 : ');
if( ssn[6] == '1' || ssn[6] == '3' ){ console.log('blue'); }
else{  console.log('red'); }

/*문제 7: 세 수 오름차순 정렬
서로 다른 세 개의 정수를 입력받아, 오름차순(작은 수부터 큰 수 순서)으로 정렬하여 출력하는 프로그램을 작성하시오.
예시: 17, 4, 8 입력 시 4, 8, 17 출력 */
// (1) 3개의 정수를 입력받는다. 
// (2) 3개의 하나의 배열 자료로 표현하여 변수에 저장
// (3) 스왑(교체) : 두 자료들 간의 위치를 교체하는 방법 , 한 위치에 하나만 저장이 가능하다.
/*
    A = 10;  B = 20;        두 변수간의 자료를 교체하시오.
        A = B;     B의 자료를 A에 대입 * A의 기존 자료는 사라진다. (변수는 하나의 자료 저장한다.)
        A = 20;  B = 20;  문제 발생 !!!! 
    *해결방안 : 임시변수 만들어서 임시 보관용 
    A = 10;  B = 20;  TEMP;
        TEMP = A;       TEMP = *10 , A = 10 , B = 20
        A = B;          TEMP = 10 , A = *20 , B = 20
        B = TEMP;       TEMP = 10 , A = 20 , B = *10
*/
// (4) 오름차순 : 두 수 간의 작은 값을 앞에 나열 , 두 수 비교하기.
//  A > B 비교하여 A가 더크면 A 와 B의 위치를 변경/스왑 
// (5) 조건 : num1 > num2 , num1 > num3 , num2 > mum3 
let num1 = Number( prompt("정수1 : ") )
let num2 = Number( prompt("정수2 : ") )
let num3 = Number( prompt("정수3 : ") )
let numList = [ num1 , num2 , num3 ]
let temp;   // 임시변수 선언  
if( numList[0] > numList[1] ){ // 첫번재 값이 두번째 값보다 크면 ( 스왑/교체 ) , >:오름차순 , <:내림차순
    temp = numList[0];          // 임시변수에 첫번째 값을 넣고 
    numList[0] = numList[1];    // 첫번째 위치에 두번째 값을 넣고 
    numList[1] = temp;          // 두번째 위치에 임시변수(첫번째값) 값을 넣고
} 
// else if [x] : 다수 조건에 따른 다수처리(스왑) 해야 하므로 안됨.
if( numList[0] > numList[2] ){   // 첫번째 값이 세번째 값보다 크면 ( 스왑/교체 )
    temp = numList[0];      numList[0] = numList[2];    numList[2] = temp;
}
if( numList[1] > numList[2] ){  // 두번재 값이 세번째 값보다 크면 ( 스왑/교체 )
    temp = numList[1];      numList[1] = numList[2];    numList[2] = temp;
} 
console.log( numList ); // 정렬 결과
