

/*
    [쿼리스트링]
        - URL(웹주소) 상에 매개변수를 사용.
        - URL?변수명=값
        - 페이지 이동(요청) 간의 데이터 전달
        1. 사용법
            (1) 이동하는 방법
                (방법1) HTML: <a href="이동할경로?변수명=값&변수명=값" />;
                (방법2) JS  : location.href="이동할경로?변수명=값&변수명=값"
            (2) URL상의 매개변수를 가져오는 방법 
                1. let url = new URLSearchParams( location.search );
                2. let param = url.get( '변수명' );
*/
// [1]
let url = new URLSearchParams( location.search );
console.log( url );
// [2]
let param = url.get('param');
console.log( param );
// [3]
let url3 = new URLSearchParams( location.search );
let pcode = url3.get( 'pcode' );    console.log( pcode );
let page = url3.get( 'page' );  console.log( page );
// [4]
function 이동함수(){
    // JS에서 페이지 요청하는 방법 : location.href="경로?변수명=값&변수명=값";
    location.href = '1_queryString.html?sort=1&code=8';
} // func end 
let url4 = new URLSearchParams( location.search );
let sort = url4.get( 'sort' );      console.log( sort );
let code = url4.get( 'code' );      console.log( code );




