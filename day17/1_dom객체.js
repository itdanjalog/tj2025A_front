
/*
    객체란 ? 속성(Property) 와 함수(function) 를 하나로 묶은 자료 
        - 변수명.속성명     : 객체내 속성값 호출 
        - 변수명.속성명()   : 객체내 함수 호출
            console.log()       : console 객체내 log 함수 호출 
            document.write()    : document 객체내 write 함수 호출
            
    [ DOM객체 ]
        - 내장(미리 만들어진) 객체
        1. 정의 : 문서객체모델 , HTML를 객체로 다루기 위한 내장객체 
            D(document:html)O(object)M(model)
        2. 내장객체 : document 
        3. 내장객체내 주요 속성 
            1. document.write('출력할내용')         : HTML에 문자열(HTML) 출력하는 함수 
            2. document.querySelector('선택자')     : HTML에 지정한 선택자를 JS객체로 *반환*하는 함수
            3. document.querySelectorAll('선택자')  : HTML에 지정한 선택자를 모두 JS객체(배열)로 *반환* 하는 함수
                *선택자 : 1.마크업명 2. .클래스명 3. #id명 
            4. dom객체.innerHTML                    : 마크업내 html내용물을 호출 하는 속성
                * <마크업> !!!여기가 innerHTML 입니다. </마크업>
*/
// [1]
console.log( document ) ;   // HTML 마크업 전체 
// [2]
document.write('내장객체 함수실행');
// [3]
const div = document.querySelector('div'); // 1개
console.log( div );
const box2 = document.querySelector('.box2');
console.log( box2 );
const box3 = document.querySelector('#box3');
console.log( box3 );
// [4]
const divArray = document.querySelectorAll('div'); // 여러개 
console.log( divArray );
// [5]
const div2 = document.querySelector('div');
const html = div2.innerHTML;
console.log( html ); // <div> 박스1 </div> -->  박스1 








