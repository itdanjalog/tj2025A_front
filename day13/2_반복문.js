/*문제 6: 배열 요소의 합계와 평균 구하기
다음 학생들의 점수가 담긴 배열이 있습니다. for 반복문을 사용하여 모든 점수의 합계와 평균을 계산하여 콘솔에 출력하시오.
let scores = [85, 92, 78, 65, 95]; */
// * 배열내 모든 점수 조회 : 0부터 마지막인덱스까지 조회 
// for( let index = 0 ; index <= 마지막인덱스 ; index++ ){ }

/* 
let scores = [85, 92, 78, 65, 95];
let sum = 0; // 누적 총합계를 구해야 하므로 for 밖에 선언 
for( let index = 0 ; index <= scores.length - 1 ; index++ ){ // index는 0부터 마지막 인덱스 이하까지 1씩증가 반복 
    // let sum = 0; 여기에 합계 변수를 선언하면 안된다 : 합계변수는 *누적* 해야하므로 선언를 반복하면 안됨.
    sum += scores[index];   // 배열내 index번재의 요소 값 를 더한다.
    // 평균계산은 반복할 필요가 없다.!
} // for end 
console.log( `총점 : ${ sum }  , 평균 : ${ sum/scores.length } `  );
*/

/* 문제 7: 특정 조건에서 반복문 탈출하기 (break)
점수 배열에서 100점 만점자가 처음 나타나면, 그 학생의 점수를 출력하고 반복문을 즉시 종료하는 프로그램을 작성하시오.
let scores = [77, 82, 100, 54, 96];
출력 예시: 100점 만점자를 찾았습니다!*/

/*
let scores = [77, 82, 100, 54, 96];
for( let index = 0 ; index <= scores.length - 1 ; index++ ){
    let value = scores[index]; // index번째 요소 값 호출 
    if( value == 100 ){ //만약에 해당 값이 100(만점) 이면 
        console.log( `${value}점 만점자를 찾았습니다.!`);
        break; // 가장 가까운 for{} 탈출/종료 
    } // if end 
} // for end 
// break를 만나면  [***여기***] 로 이동된다.
*/

/*문제 8: 특정 조건 건너뛰기 (continue)
점수 배열에서 60점 미만(과락)인 점수는 건너뛰고, 60점 이상인 점수만 콘솔에 출력하는 프로그램을 작성하시오.
let scores = [90, 45, 72, 88, 59, 100];*/

/*
let scores = [90, 45, 72, 88, 59, 100];
for( let index = 0 ; index <= scores.length - 1 ; index++ ){
    let value = scores[ index ]; // index번째의 요소 값 호출 
    if( value < 60 ){ continue; } // 가장 가까운 반복문의 증감식으로 이동 
    console.log( value );
} // for end 
*/

/*문제 9: 배열에서 특정 값의 개수 세기
다음 배열에서 'A'형 혈액형을 가진 사람이 몇 명인지 for 반복문을 통해 세고, 그 수를 콘솔에 출력하시오.
let bloodTypes = ['A', 'B', 'O', 'AB', 'A', 'B', 'A']; */

/*
let bloodTypes = ['A', 'B', 'O', 'AB', 'A', 'B', 'A']; 
let countA = 0; // A형 개수를 저장하는 변수 
for( let index = 0 ; index <= bloodTypes.length-1 ; index++ ){
    let blood = bloodTypes[index]; // index번째의 혈액형 호출 
    if( blood == 'A'){ // 만약에 혈액형이 A이면 
        countA++; // vs countA += 1 vs countA = countA + 1 
    }
} // for end 
console.log( `A형 개수 : ${ countA }`);
*/

/*문제 10: 학생 점수 시각화하기 
주어진 학생 이름과 점수 배열을 이용하여, 각 학생의 점수를 동그라미(●, ○)로 시각화하여 HTML에 출력하는 프로그램을 작성하시오.
(1). 초기 데이터
학생 이름과 점수는 두 배열의 동일한 인덱스를 사용합니다.
let nameArray = ['유재석', '강호동', '신동엽'];
let scores = [92, 86, 72];
(2). 구현 조건
for 반복문을 사용하여 모든 학생의 데이터를 순회합니다.
점수를 100점 만점으로 환산하여 시각화합니다.
점수의 십의 자리 숫자만큼 꽉 찬 동그라미(●)를, **나머지(10 - 십의 자리 수)**만큼 빈 동그라미(○)를 출력합니다.
예시: 점수가 92점이면 십의 자리는 9이므로, ●●●●●●●●●○ 와 같이 표현합니다.
HTML에 학생 이름과 변환된 점수 시각화를 한 줄씩 출력합니다.
(3). 출력 예시 (HTML)
유재석 ●●●●●●●●●○
강호동 ●●●●●●●●○○
신동엽 ●●●●●●●○○○  */
let nameArray = ['유재석', '강호동', '신동엽'];
let scores = [92, 86, 72];

let output = "" // 빈 문자열 선언 
for( let index = 0 ; index <= nameArray.length -1 ; index++  ){
    // 이름 출력 
    let name = nameArray[index];
    output += `<div> ${ name } `; //  HTML 문자열 ( 이름 ) 추가 
    // 점수 출력 
    let score = scores[index];
    let black = parseInt( score / 10 ); // 92/10 -> 9.2 -> parseInt(9.2) -> 9
    for( let circle = 1 ; circle <= 10 ; circle++ ){
        // 동그라미는 1부터 10이하까지 1씩증가 ( 총10번 )
        if( circle <= black ){ output += `<span>●</span>`}  // 만일 현재 동그라미가 점수보다 작으면 검은
        else{ output += `<span>○</span>`} // 크면 흰
    }
    // -- 줄 바꿈 
    output += `</div>`
} // for end 
document.write( output );
