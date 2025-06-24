
// ==================== 2. 핵심 기능 구현 ( 저장 C : 대기 등록 ) ================= //
function addWaiting(){
    // 1. 입력마크업 객체 가져오기
    const nameInput = document.querySelector('.nameInput');
    const phoneInput = document.querySelector('.phoneInput');
    const countInput = document.querySelector('.countInput');
    // 2. (저장할)입력마크업 입력된 값 가져오기
    const name = nameInput.value;
    const phone = phoneInput.value;
    const count = countInput.value;
    // 3. 객체화
        // --- 함수화 된 localStorage 에서 배열 불러오기
        let waitingList = getLocalStorage();
    const no = waitingList.length == 0 ? 1 : waitingList[ waitingList.length-1 ].no + 1; 
    const obj = { no , name  , phone , count };
    // 4. 배열에 객체 저장 
    waitingList.push(obj);
        // --- 함수화 된 localStorage 에서 배열 저장하기 
        localStorage.setItem('waitingList' , JSON.stringify(waitingList) );

} // func end 

// ==================== 2. 핵심 기능 구현( 조회/비교 R : 대기 확인 ) ================= //
function checkStatus(){
    // 1. 입력마크업 객체 가져오기
    const phoneInput2 = document.querySelector('.phoneInput2');
    // 2. (비교할)입력마크업 입력된 값 가져오기
    const phone2 = phoneInput2.value;
    // 3. 반복문 이용하여 모든 배열/목록 조회
        // --- 함수화 된 localStorage 에서 배열 불러오기
        let waitingList = getLocalStorage();
    for( let index = 0 ; index <= waitingList.length - 1 ; index++ ){
        const waiting = waitingList[index];
        if( waiting.phone == phone2 ){  // 4. 하나씩 조회 결과내 비교할 값 찾기
            // 5. 비교에 따른 행동1
            alert( `대기번호 : ${ waiting.no }`);
            return; // 함수를 종료 함으로써 아래 '없는번호입니다'. alert 무시하기.
        }
    }
    // 5. 비교에 따른 행동2
    alert('없는 번호 입니다.');
} // func end 

