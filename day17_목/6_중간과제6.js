/*
    주제 : 미니 웹페이지 가계부
        1. 가계부 정보(항목) : 1. 날짜 2.항목명 3.금액 
        2. 세가지의 정보를 <input>입력 받아 각각 하나의 배열 저장 기능 
        3. 등록된 모든 정보들을 출력 기능
        3. HTML 출력 예시 
        날짜            항목        금액
        2024-11-26      콜라        1000
        2024-11-27      커피        1200
    [생각1] 시각적으로 보이는 목표의 데이터 구성을 어떻게 해야하는지 생각 
        변수= 하나의 자료를 저장하는 메모리 공간 ,
        배열= 여러개의 자료를 저장하는 하나의 타입 ,
        1. 날짜 데이터 여러개 저장 .
            let 날짜배열 = [ '2024-11-26' , '2024-11-27' ]
        2. 항목 데이터 여러개 저장 .
            let 항목배열 = [ '콜라' , '커피' ]
        3. 금액 데이터 여러개 저장 .
            let 금액배열 = [ 1000 , 1200 ]
        4. 배열 선언 위치 : 
            전역변수:JS 실행될때 1번선언 
                vs 
            지역변수 : 지역{}이 실행될때다 선언 / {}종료될때마다 사라짐
        5. 서로 다른 배열간의 인덱스가 동일하면 하나의 가계 정보
            날짜배열[0] = '2024-11-26'
            항목배열[0] = '콜라'
            금액배열[0] = 1000
    [생각2] 제작할 기능/함수 몇개 필요한지 구성 / 처리할 로직
        1. [등록]버튼 클릭시 input으로 입력받은 3개의 값을 각 배열에 저장하는 함수
        2. 등록[배열push]시 현재 배열의 요소(값)들을 출력하는 함수  
    [생각3] 등록함수에서 실행할 로직???
        1. 입력 / 저장                              prompt vs *document.querySelector()*
        2. 처리 : 입력된 정보를 배열에 추가           배열명.push( )  
        3. 출력 : 출력함수 호출 로 대체        
    [생각4] 출력함수에서 실행할 로직???
        1. 어디에                                   document.write() vs *document.querySelector()*
        2. 무엇을                                   배열순회 해서 모든 배열내 요소(값)들 html(문자) 로 구성해서
        3. 출력

*/
/*
    [개선 포인트 1: 데이터 구조 변경]
    - 기존 : 날짜, 항목, 금액을 각각의 배열로 관리 (날짜배열, 항목배열, 금액배열)
    - 변경 : 관련된 데이터들을 하나의 '객체(Object)'로 묶고, 이 객체들을 하나의 배열에서 관리합니다.
                데이터의 연관성이 명확해지고 관리가 훨씬 쉬워집니다.
*/
let accountBook = [
    { date: '2025-06-18', content: '점심식사', amount: 9000 },
    { date: '2025-06-19', content: '커피', amount: 4500 }
];

// --- 요소 선택 (자주 사용하므로 미리 변수에 저장) ---


/*
    [개선 포인트 2: 함수 역할 분리와 addEventListener 사용]
    - '등록'과 '출력' 로직을 명확히 분리하고, 버튼 클릭 이벤트는 addEventListener로 처리합니다.
*/

// [3] 이벤트 리스너 등록
// [1] 등록 함수 (데이터 추가 기능만 담당)
function addItem(){
    const dateInput = document.querySelector('#dateInput');
    const contentInput = document.querySelector('#contentInput');
    const amountInput = document.querySelector('#amountInput');
    const date = dateInput.value;
    const content = contentInput.value;
    const amount = Number(amountInput.value); // 금액은 숫자로 변환
    // 2. 새로운 항목을 '객체' 형태로 생성
    const newItem = {
        date: date,
        content: content,
        amount: amount
    };
    // 3. accountBook 배열에 새로운 객체 추가
    accountBook.push(newItem);
    // 4. 화면 다시 그리기(출력)
    render();
}

// [2] 출력 함수 (현재 데이터를 화면에 그리는 기능만 담당)
// 페이지가 처음 로드될 때, 초기 데이터를 화면에 출력
render();
function render(){
    const tableBody = document.querySelector('#tableBody');
    let html = ''; // 테이블에 추가할 HTML 문자열
    // accountBook 배열을 순회하며 각 객체를 테이블 행(tr)으로 변환
    for(let index = 0 ; index <=accountBook.length-1 ; index++){
        const item = accountBook[index];
        html += `<tr>
                    <td>${item.date}</td>
                    <td>${item.content}</td>
                    <td>${item.amount.toLocaleString()} 원</td>
                    </tr>`;
        // toLocaleString() : 숫자를 세 자리마다 콤마(,)로 구분해주는 유용한 함수
    }
    // 구성된 HTML을 tableBody의 내용으로 삽입
    tableBody.innerHTML = html;
};
