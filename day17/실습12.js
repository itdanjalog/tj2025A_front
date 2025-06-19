/*
[ 실습12 : 미니 가계부 페이지 ]
1. 목표
	- 사용자가 자신의 수입/지출 내역을 날짜, 항목, 금액으로 기록하고, 등록된 모든 내역을 한눈에 볼 수 있는 간단한 가계부 웹 페이지를 만듭니다.
2. 화면 구성
    - 페이지는 사용자가 정보를 입력하는 **'등록 영역'**과 그 결과를 보여주는 **'목록 영역'**으로 명확히 구분되어야 합니다.
    - 등록 영역:
        - 날짜 선택: 사용자가 내역의 날짜를 달력에서 직접 선택할 수 있어야 합니다.
        - 항목 입력: 사용자가 지출 또는 수입 항목의 내용을 텍스트로 자유롭게 입력할 수 있어야 합니다. (예: "점심 식사", "교통비")
        - 금액 입력: 사용자가 금액을 숫자로 입력할 수 있어야 합니다.
        - 등록 버튼: 위 세 가지 정보를 입력한 후, 목록에 추가하기 위한 "등록" 버튼이 있어야 합니다.
    - 목록 영역:
        - 등록된 모든 가계부 내역을 보여주는 표가 있어야 합니다.
        - 표는 "날짜", "항목", "금액" 순서의 열로 구성되어야 합니다.

3. 핵심 기능
    - 초기 데이터 표시:
        - 사용자가 페이지에 처음 방문했을 때, 가계부 사용법을 쉽게 이해할 수 있도록 두 개의 예시 내역이 목록 표에 기본적으로 표시되어 있어야 합니다.
    - 내역 등록 기능:
        - 사용자가 '등록 영역'에 날짜, 항목, 금액을 모두 입력하고 "등록" 버튼을 클릭하면, 해당 내역이 '목록 영역' 표의 가장 아래쪽에 새로운 행으로 즉시 추가되어야 합니다.
    - 금액 자동 서식:
        - '목록 영역'에 표시되는 모든 금액은 사용자의 가독성을 위해 천 단위마다 쉼표(,)가 자동으로 표시되어야 합니다. (예: 4500이 입력되면 "4,500"으로 보여야 함)
        - 힌트] 변수명.toLocaleString()  :숫자를 세 자리마다 콤마(,)로 구분해주는 유용한 함수
*/
/*
    [ 작업순서 ]
        1. (프) 화면구성(HTML/CSS)
        2. (백) 데이터모델링 
            (1) 저장할 자료들을 모두 찾기
                - 날짜 , 항목명 , 금액 
            (2) 저장할 자료들의 분리( 중복 배제 ) 1:M ( 하나가 여러개를 참조/관계 ) x
            (3) 분리된 자료들끼리 연관관계  x
            * 테이블(배열) , 테이블내 행/가로 단위(객체)
        3. (백) 함수(기능) 설계
            (1) '등록' 함수 
                함수명 :    (아무거나) '등록함수'
                매개변수 :   x      ,   반환값 :   x
                로직 :      1. input으로부터 입력받은 값 가져오기 
                            2. 입력값 3개를 객체{} 로 구성 
                            3. 구성된 객체를 가계부목록(배열)에 저장 
                실행조건 : '등록버튼' 클릭(onclick) 했을때

            (2) '전체조회' 함수 
                함수명 :    '전체조회함수'
                매개변수 : x        ,    반환값 : x
                로직 :      1. 특정한 구역(table)에 배열내 모든 정보를 HTML 형식으로 출력한다.
                실행조건 : 1.페이지 열렸을때(최초1번)  2. 등록 성공했을때(새로고침)

        4. (백) 로직 
        5. (프/백) 화면 <---> 기능 연동
*/
// [2]  데이터모델링

const 가계부목록 = [ { 코드 : 1 , 날짜 : '2025-06-19' , 항목명 : '점심 식사' , 금액 : 9000 } ,
                    { 코드 : 2 , 날짜 : '2025-06-19' , 항목명 : '교통비'    , 금액 : 1500 }   ]
let 마지막인덱스 = 가계부목록.length-1;
let 코드자동번호 = 가계부목록[ 마지막인덱스 ].코드 // 2 // 현재 초기 배열의 마지막객체의 코드번호;

// [3] 기능(함수단위) 구현
// 1. 등록함수 정의 , 실행 : 등록버튼 onclick 했을때 -> <button onclick="등록함수()"> 등록버튼 </button>
function 등록함수(){ console.log( '--- 등록함수 exe ---'); // 2. 함수 onclick 확인 
    // 3. input에 마크업 객체 3개를 각각 가져오기
    const dateInput = document.querySelector('#dateInput');      console.log( dateInput );      // 3. <input id="dateInput" type="date" />
    const contentInput = document.querySelector('#contentInput');console.log( contentInput );   // 3. <input id="contentInput" type="text" />
    const moneyInput = document.querySelector('#moneyInput');    console.log( moneyInput );     // 3. <input id="moneyInput" type="number" />
    // 4. 각 마크업 객체에서 입력값 가져오기 
    const date = dateInput.value;           console.log( date );
    const content = contentInput.value;     console.log( content );
    const money = moneyInput.value;         console.log( money );
    // 5. 원하는 속성구성으로 객체 만들기, 설계: { 코드 : , 날짜 : , 항목명 : , 금액 : }
        // * 코드자동번호 에 1증가 한 후에 대입한다. < 실무x >
        코드자동번호++;
    const obj = { 코드 : 코드자동번호 , 날짜 : date , 항목명 : content , 금액 : money };   console.log( obj );
    // 6. 구성한 객체를 전역(배열)변수에 저장한다.
    가계부목록.push( obj );                 console.log( 가계부목록 );
    // 7. 새로고침 , 출력함수 재호출 
    전체조회함수();
} // func end 

// 2. 전체조회함수 , 실행조건 : 1. JS열렸을떄(최초1번) 2. 등록 성공했을때. 
전체조회함수(); // JS가 그냥 1번 출력함수 호출한다.
function 전체조회함수(){ console.log('--- 전체조회함수 exe --- ');
    // 3. 어디에 , <tbody id="contentBody">
    const contentBody = document.querySelector('#contentBody'); console.log( contentBody );
    // 4. 무엇을 , 배열내 객체정보 --> html 형식으로 표현  // *** 배열내 객체 1개당 <tr> 1개***
    let html = ``;
    for( let index = 0 ; index <= 가계부목록.length - 1 ; index++ ){ 
        const obj = 가계부목록[index]; // index번째 객체(정보) 호출
        html += `<tr>
                    <td> ${ obj.날짜 } </td>
                    <td> ${ obj.항목명 } </td>
                    <td> ${ obj.금액 }</td>
                </tr>` // !!!! 백틱 주의!!!!
    } // for end 
    // 5. 출력  , innerHTML
    contentBody.innerHTML = html; // 반복문 이용하여 객체를 HTML 형식으로 표현한 누적 HTML를 대입한다.
} // func end 





