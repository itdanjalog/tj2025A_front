// ==================== 3. localStorage 관리하는 함수 ================= //
function setLocalStorage( waitingList ){
    localStorage.setItem('waitingList' , JSON.stringify(waitingList) );
} // func end 

function getLocalStorage(){
    let waitingList = localStorage.getItem('waitingList');
    if( waitingList == null ){
        waitingList = []
    }else{
        waitingList = JSON.parse(waitingList)
    }
    return waitingList; // 웹스토리지 에서 조회된 배열을 반환하는 함수, 없으면 []빈배열 , 있으면 [{},{}]
}