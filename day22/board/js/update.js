
// (1) 수정페이지 접속했을때 기존 데이터 호출 함수
getBoard(); // 최초 1번 함수 실행 
function getBoard(){
    const url = new URLSearchParams( location.search );
    const selectNo = url.get('no');
    let boardList = localStorage.getItem('boardList');
    if( boardList == null ){ boardList = []; }
    else{ boardList = JSON.parse( boardList ); }
    for( let i = 0 ; i<boardList.length ; i++ ){
        const obj = boardList[i];
        if( obj.no == selectNo ){
            // 기존 게시물정보를 input 마크업에 넣어주기.
            document.querySelector('#titleInput').value=obj.title
            document.querySelector('#contentInput').value=obj.content
        } // if end 
    } // for end 
} // func end 

// (2) 수정처리 함수 
function boardUpdate(){
    // 1. URL 경로 가져오기 , ?쿼리스트링
    const url = new URLSearchParams( location.search )
    // 2. URL경로에서 내가 선택한 게시물번호(no) 가져오기
    const selectNo = url.get( 'no' )
    // 3. localStorage 에서 배열 가져오기
    let boardList = localStorage.getItem('boardList');
    if( boardList == null ) { boardList = [] }
    else{ boardList = JSON.parse( boardList ); }
    // 4. 반복문 이용하여 선택한 게시물번호의 게시물 찾기
    for( let i = 0 ; i < boardList.length ; i++ ){
        const obj = boardList[i];
        if( obj.no == selectNo ){
            // 5. 찾은 게시물에 새롭게 입력받은 값 으로 대입/수정
            obj.title = document.querySelector('#titleInput').value;
            obj.content = document.querySelector('#contentInput').value;
            obj.pwd = document.querySelector('#pwdInput').value;
            // 6. localStorage 에서 배열 저장
            localStorage.setItem( 'boardList' , JSON.stringify( boardList ) );
            // 7. (성공) view.html 이동하기.
            alert('수정 완료');
            location.href = `view.html?no=${selectNo}`
        }
    } // for end 
} // func end 