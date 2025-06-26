function boardWrite(){
    // 1. 입력 마크업 객체 가져오기 
    const titleInput = document.querySelector('#titleInput');
    const contentInput = document.querySelector('#contentInput');
    const pwdInput = document.querySelector('#pwdInput');
    // 2. 입력 마크업 객체내 입력값 가져오기
    const title = titleInput.value; 
    const content = contentInput.value;
    const pwd = pwdInput.value;
    // 3. 객체화
    const obj = { title , content , pwd };
    // 4. localStorage 에서 배열 가져오기.
    let boardList = localStorage.getItem('boardList');
    if( boardList == null ){ boardList = [] }
    else{ boardList = JSON.parse( boardList ); }
    // 5. 객체를 배열에 저장
    obj.no = boardList.length == 0 ? 1 : boardList[boardList.length-1].no+1;         // ( 자동 게시물 번호 )
    boardList.push( obj );
    // 6. localStorage 에 배열 저장하기. 
    localStorage.setItem( 'boardList' , JSON.stringify( boardList ) );
    // 7. 기타 등등
    alert('게시물 작성 성공');
    location.href = 'list.html' // 글쓰기 성공시 게시물목록(list) 페이지 로 이동
} // func end 
