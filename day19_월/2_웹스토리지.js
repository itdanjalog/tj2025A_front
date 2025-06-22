/*

예제 1: localStorage에 데이터 저장하고 불러오기
목표: localStorage에 사용자의 아이디를 저장하고, 페이지를 새로고침해도 그 값이 유지되는 것을 확인합니다.

예제 2: localStorage에 객체 저장하기 (JSON.stringify)
목표: 사용자의 환경 설정(객체)을 문자열로 변환하여 localStorage에 저장합니다.
코드: const userSettings = { theme: 'dark', notifications: true, language: 'ko' };

예제 3: localStorage에서 객체 불러오기 (JSON.parse)
목표: localStorage에 문자열로 저장된 사용자 설정을 다시 객체로 변환하여 사용합니다.

예제 4: 데이터 삭제하기 (removeItem, clear)
목표: 스토리지에 저장된 특정 데이터 또는 전체 데이터를 삭제하는 방법을 알아봅니다.

예제 5: 방문 횟수 카운터 만들기
목표: 페이지가 로드될 때마다 sessionStorage를 사용하여 방문 횟수를 1씩 증가시키시오. 
현재 방문 횟수를 id="visitCount"인 span 태그에 "이번 세션에서 O번째 방문입니다." 형식으로 출력하시오. 
(페이지를 새로고침하면 숫자가 올라가고, 브라우저 탭을 닫았다 다시 열면 1로 초기화되어야 합니다.)

*/