1. 웹 스토리지란?
    웹 브라우저에 키(Key)-값(Value) 쌍의 형태로 데이터를 저장할 수 있는 공간입니다.
    서버로 자동 전송되지 않고, 오직 클라이언트(브라우저)에서만 JavaScript를 통해 제어됩니다.
    종류:
    sessionStorage: 브라우저 탭 세션이 유지되는 동안만 데이터가 저장됩니다. 탭을 닫으면 데이터는 사라집니다. (예: 일회성 정보, 이전 페이지 기록 등)
    localStorage: 사용자가 직접 삭제하거나 브라우저 캐시를 청소하지 않는 한, 데이터가 영구적으로 저장됩니다. (예: 사용자 설정, '다시 보지 않음' 팝업 등)

2. 웹 스토리지 기본 사용법
    setItem('key', 'value'): 데이터 저장
        지정한 key에 value를 저장합니다. value는 반드시 문자열이어야 합니다.
    getItem('key'): 데이터 조회
        지정한 key에 해당하는 value를 가져옵니다. key가 존재하지 않으면 null을 반환합니다.
    removeItem('key'): 특정 데이터 삭제
        지정한 key와 일치하는 항목 하나만 스토리지에서 삭제합니다.
    clear(): 전체 데이터 삭제
        해당 스토리지(localStorage 또는 sessionStorage)의 모든 데이터를 한 번에 삭제합니다.

4. 객체/배열 저장 Tip: JSON 활용
    웹 스토리지는 문자열만 저장할 수 있으므로, 객체(Object)나 배열(Array)을 저장하려면 JSON 형식으로 변환해야 합니다.
    JSON.stringify(객체 또는 배열): JavaScript 객체/배열을 JSON 문자열로 변환하여 저장합니다.
    JSON.parse(문자열): 스토리지에서 가져온 JSON 문자열을 다시 JavaScript 객체/배열로 변환하여 사용합니다.

/*
    - 웹스토리지
        - 브라우저( HTTP 통신 과 HTML/CSS/JS 코드를 렌더링/그려주는 프로그램 )
        - 브라우저 F12(개발자도구) -> [Application] -> 왼쪽사이드 메뉴 ( local storage / session storage )
            웹 브라우저에 키(Key)-값(Value) 쌍의 형태로 데이터를 저장할 수 있는 공간입니다.
        서버로 자동 전송되지 않고, 오직 클라이언트(브라우저)에서만 JavaScript를 통해 제어됩니다.
        종류:
        1. sessionStorage : 브라우저 탭 세션이 유지되는 동안만 데이터가 저장됩니다. 탭을 닫으면 데이터는 사라집니다. (예: 일회성 정보, 이전 페이지 기록 등)
        2. localStorage : 사용자가 직접 삭제하거나 브라우저 캐시를 청소하지 않는 한, 데이터가 영구적으로 저장됩니다. (예: 사용자 설정, '다시 보지 않음' 팝업 등)
        
        sessionStorage / localStorage 객체의 속성/기능 제공    
            - .(도트/접근)연산자 : 객체내 속성 값 접근/호출 사용
            1. setItem( 'key' , value ) : 웹스토리지 값 저장 하는 함수 , key 와 value 한쌍으로 저장 구조 
            2. getItem( 'key' ) : 웹스토리지 값 호출 하는 함수 , key를 호출함으로써 value 가 반환되는 구조

        setItem('key', 'value'): 데이터 저장
            지정한 key에 value를 저장합니다. value는 반드시 문자열이어야 합니다.
        getItem('key'): 데이터 조회
            지정한 key에 해당하는 value를 가져옵니다. key가 존재하지 않으면 null을 반환합니다.
        removeItem('key'): 특정 데이터 삭제
            지정한 key와 일치하는 항목 하나만 스토리지에서 삭제합니다.
        clear(): 전체 데이터 삭제
            해당 스토리지(localStorage 또는 sessionStorage)의 모든 데이터를 한 번에 삭제합니다.

    
    JSON( JavaScript Object Notaion ) 객체 : 자바스크립트 객체 문법의 형식 
        - 웹 스토리지는 문자열만 저장할 수 있으므로, 객체(Object)나 배열(Array)을 저장하려면 JSON 형식으로 변환해야 합니다.
        1. JSON.stringify( { 속성명 : 값 , 속성명 : 값 } ) : { } ---> 문자열  : '{ 속성명 : 값 , 속성명 : 값 }'
        2. JSON.parse( '{ 속성명 : 값 , 속성명 : 값 }' ) : 문자열 ---> { } : { 속성명 : 값 , 속성명 : 값 }
            ->  3 와 '3' 은 다르다.     -> {} 와 '{}' 은 다르다.
        JSON.stringify(객체 또는 배열): JavaScript 객체/배열을 JSON 문자열로 변환하여 저장합니다.
        JSON.parse(문자열): 스토리지에서 가져온 JSON 문자열을 다시 JavaScript 객체/배열로 변환하여 사용합니다.

*/
// [1] 웹스토리지
console.log( sessionStorage )
console.log( localStorage )

// [2] 웹스토리지 데이터 삽입 , 키 와 값 을 한쌍으로 하는 데이터 구조
sessionStorage.setItem( 'name' , '유재석' ); // F12개발자 -> [APPLICATIPN] 탭 -> 왼쪽메뉴 session storage 클릭 
localStorage.setItem( 'age' , 40 )  // F12개발자 -> [APPLICATIPN] 탭 -> 왼쪽메뉴 localStorage storage 클릭 

// [3] 웹스토리지 데이터 호출 , 키를 이용한 값 호출 
let 반환값1 = sessionStorage.getItem( 'name' ); console.log( 반환값1 );     // 유재석
let 반환값2 = localStorage.getItem('age'); console.log( 반환값2 );          // 40
let 반환값3 = sessionStorage.getItem( 'phone' ); console.log( 반환값3 );    // null( 객체가없다는뜻 가진 )

// [4] * 관례적으로 웹스토리지 에 객체를 대입하는 방법 , JSON객체 활용 
console.log( JSON.stringify( { "name" : "유재석" } ) );   // {"name":"유재석"} -> '{ "name" : "유재석" }'
console.log( JSON.parse( '{ "name" : "유재석"}' ) );   // '{ "name" : "유재석"}' -> {"name":"유재석"}

// sessionStorage.setItem( '할일' , { 할일내용 : '밥먹기' , 할일상태 : true } ); // 객체타입 를 저장할수 없다. 
sessionStorage.setItem( '할일' , JSON.stringify( { 할일내용 : '밥먹기' , 할일상태 : true } ) ); // {"할일내용":"밥먹기","할일상태":true}
let 반환값4 = sessionStorage.getItem( '할일' ); console.log( 반환값4 ); // '{"할일내용":"밥먹기","할일상태":true}' // 문자열 
console.log( JSON.parse( 반환값4) ) // {할일내용: '밥먹기', 할일상태: true} // 객체 
    // 개발자도구에서 F12 [conosle] 타입 확인 방법
        // 데이터가 파랑색이면 숫자 , true / false   // 데이터가 검정색이면 문자열 
        // 데이터가 ▶{ } 이면 객체 // 데이터가 ▶[ ] 이면 배열