/*
[ 실습16 ] 웹 스토리지를 이용한 회원가입/로그인 페이지
1. 목표
    -사용자가 아이디와 비밀번호를 등록하고, 저장된 정보를 바탕으로 로그인 기능을 확인할 수 있는 기본 인증 페이지를 제작합니다. 
    -모든 회원 정보는 브라우저의 sessionStorage를 활용하여 관리합니다.

2. 화면 구성
    -페이지는 **'회원가입 영역'**과 '로그인 영역' 두 개의 <div>으로 명확히 구분되어야 합니다.
    -회원가입 영역:
        --아이디 입력: 가입할 아이디를 입력받는 <input> 필드가 있어야 합니다. (클래스명: signId)
        --비밀번호 입력: 가입할 비밀번호를 입력받는 <input> 필드가 있어야 합니다. (클래스명: signPw)
        --회원가입 버튼: 클릭 시 signup()를 호출하는 "회원가입" 버튼이 있어야 합니다.
    -로그인 영역:
        --아이디 입력: 로그인할 아이디를 입력받는 <input> 필드가 있어야 합니다. (클래스명: loginId)
        --비밀번호 입력: 로그인할 비밀번호를 입력받는 <input> 필드가 있어야 합니다. (클래스명: loginPw)
        --로그인 버튼: 클릭 시 login()를 호출하는 "로그인" 버튼이 있어야 합니다.

3. 데이터 관리
    -저장소: 모든 회원 정보는 브라우저의 **sessionStorage**를 사용하여 저장 및 관리되어야 합니다. (브라우저 탭 종료 시 데이터 초기화)
    -데이터 구조: 회원 목록은 객체(Object)를 담는 배열(Array) 형태로 관리합니다.
    -각 회원 객체는 { 'no' : 회원번호 , 'id' : 아이디, 'pw' : 비밀번호 } 형태를 가집니다.
    -회원번호(no)는 등록 시마다 1씩 자동 증가해야 합니다.
    -이 배열 전체는 JSON.stringify()를 통해 문자열로 변환된 후, sessionStorage에 'memberList'라는 키(key)로 저장되어야 합니다.

4. 핵심 기능 구현
    -signup() 구현:
        --입력된 아이디와 비밀번호를 입력받아 (memberList)배열 에 새로 생성한 회원 객체를 추가(push)합니다.
        --회원번호는 현재 배열의 마지막 대기번호에 1을 더한 값으로 자동 부여합니다.
    -login() 구현:
        --입력된 아이디와 비밀번호를 입력받아 (memberList)배열 내의 어떤 회원 객체의 id, pw 값과 모두 일치하면, "로그인 성공" 알림창을 띄우고 함수를 즉시 종료합니다.
        --일치하는 정보를 찾지 못하면, "동일한 회원정보가 없습니다. 로그인실패" 알림창을 띄웁니다.

*/

/* - 웹스토리지 이용한 회원가입/로그인 구현 */
// [1] 회원가입 함수 정의 
function 회원가입함수( ){
    // 1. [입력]
    let id = document.querySelector('.signId').value; // 각 INPUT 의 value 가져오기 
    let pw = document.querySelector('.signPw').value; // 각 INPUT 의 value 가져오기 
    // 2. [처리]
    let member = { 'id' : id , 'pw' : pw }; // 입력받은 값으로 객체 생성     

        let memberList = 회원정보목록반환함수();

        // 배열에 입력받은 객체 저장 
        memberList.push( member ); console.log( memberList );
        
        // - 변화가 있는 배열을 웹스토리지 다시 저장( 새로고침 )
        // - (1) key와value 구성된 웹스토리지 정보를 저장하는데 value값을 ( 배열-> 문자열 ) 타입으로 변환하여 저장한다.
        sessionStorage.setItem( 'memberList' , JSON.stringify( memberList ) )
        
    // 3. [출력]
    return; // 함수 종료 // 값 없을때는 생략 가능.
} // f end 

// [2] 로그인 함수 , [로그인] 버튼을 클릭했을때 
function 로그인함수(){

    // 회원가입이란 ? 입력한 정보들을 어딘가에 저장/기록  
    // 로그인이란 ? 로그(기록)으로 들어가는것 , 기록(회원가입)과 일치한 정보 비교 해서 들어감.

    let loginId = document.querySelector('.loginId').value;
    let loginPw = document.querySelector('.loginPw').value;

    // - 회원정보목록 호출 함수 실행 
    let memberList = 회원정보목록반환함수();

    // 로그인정보 가 회원정보목록(기록)내 존재하는지 비교 
    for( let index = 0 ; index <= memberList.length-1 ; index++ ){
        let info = memberList[index]; // index번째의 회원정보 객체 호출 
        if( info.id == loginId && info.pw == loginPw ){
            console.log( info );
            alert('로그인성공');
            return; // 현재 함수 종료 // 아래 코드는 실행되지 않는다.  
        }
    } // for end 
    alert('동일한 회원정보가 없습니다. 로그인실패');
    return;
} // f end 

// [3] 웹스토리지 에 있는 회원정보목록반환함수
function 회원정보목록반환함수(){ // 매개변수x , 리턴값 : memberList
    // * 회원목록정보를 전역변수에 선언하지 않고 웹스토리지 호출 
    // 왜? JS외부 (브라우저)에 저장하면 JS가 새로고침/변화가 있어도 저장 상태 유지 
    // - (1) 현재 회원정보를 저장하기 위한 회원정보목록을 웹스토리지 에서 가져오기.
    let memberList = sessionStorage.getItem( 'memberList' );
    console.log( memberList ); // 존재하지 않는 'key' 호출하면 null 반환된다.
    // - (2) 회원정보목록이 존재하면 존재하지 않으면 
    if( memberList == null ){
        //만약에 가져온 웹스토리지데이터(memberList)가 null(없다면) 이면
        memberList = []; // 빈 배열 생성하여 변수에 대입한다. 
    }else{// 가져온 웹스토리지 데이터(memberList) 가 존재하면 
        // 문자열 ---> 객체(JSON) 으로 변환
        memberList = JSON.parse( memberList );
    }
    return memberList; // 함수가 종료되면서 함수를 호출했던것으로 반환/리턴 하는 값 
} // f end 

