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
        --회원번호는 현재 배열의 마지막 회원번호에 1을 더한 값으로 자동 부여합니다.
    -login() 구현:
        --입력된 아이디와 비밀번호를 입력받아 (memberList)배열 내의 어떤 회원 객체의 id, pw 값과 모두 일치하면, "로그인 성공" 알림창을 띄우고 함수를 즉시 종료합니다.
        --일치하는 정보를 찾지 못하면, "동일한 회원정보가 없습니다. 로그인실패" 알림창을 띄웁니다.
*/

// =============================== (1) 데이터 구성 ============================== //
const memberList = [ 
    { no : 1 , id : 'qwe' , pw : 'qwe'} , 
    { no : 2 , id : 'asd' , pw : 'asd'}  
]
// =============================== (2) 회원가입 함수 ============================== //
function signup(){  console.log('--> signup exe');
    // 1. 입력마크업 객체 가져오기
    const signId = document.querySelector('.signId');   console.log( signId );
    const signPw = document.querySelector('.signPw');   console.log( signPw );
    // 2. 입력마크업 객체내 입력값 가져오기
    const id = signId.value;                            console.log( id );
    const pw = signPw.value;                            console.log( pw );
    // 3. 객체화
    const no = memberList[ memberList.length-1 ].no + 1;    // 배열내 마지막인덱스의 회원번호 + 1
    const obj = { no : no , id : id , pw : pw };        console.log( obj );
    // 4. 배열 저장
    memberList.push( obj );                             console.log( memberList );
    alert('회원 등록 성공 ');     // 알림.
} // func end 

// =============================== (3) 로그인 함수 ============================== //
function login(){ console.log( '--> login exe ');
    // 1. 입력마크업 객체 가져오기
    const loginId = document.querySelector('.loginId');
    const loginPw = document.querySelector('.loginPw');
    // 2. 입력마크업 객체내 입력값 가져오기
    const id = loginId.value;
    const pw = loginPw.value;
    // 3. 기존배열(회원목록)내 입력받은 값과 일치한 정보 찾기(비교) , <for>
    for( let index = 0 ; index <= memberList.length-1 ; index++ ){
        const member = memberList[index]; // index번째 회원정보(객체)
        if( member.id == id && member.pw == pw ){
            // 만약에 index번째 회원아이디가 입력한아이디와 같고 회원비밀번호가 입력한비밀번호 같으면
            alert('로그인 성공');   
            return; // 강제 함수(반복문) 종료
        } // if end 
    } // for end 
    // 4. 못찾았다.
    alert('로그인 실패');
} // func end 