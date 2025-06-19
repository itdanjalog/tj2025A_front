/*
[실습14: 제품 관리 페이지]
1. 목표
    사용자가 카테고리, 제품명, 가격, 이미지를 포함한 제품 정보를 등록하고, 등록된 모든 제품을 표 형태로 한눈에 확인하며 관리할 수 있는 웹 페이지를 제작합니다.
2. 화면 구성
    페이지는 사용자가 정보를 입력하는 **'제품 등록 영역'**과 등록된 결과를 보여주는 **'제품 목록 영역'**으로 명확히 구분되어야 합니다.
    제품 등록 영역 (<div id="header">):
        카테고리 선택: 미리 정의된 카테고리 목록에서 제품의 분류를 선택할 수 있는 드롭다운 메뉴가 있어야 합니다. (예: '음료', '과자')
        제품명 입력: 등록할 제품의 이름을 텍스트로 입력할 수 있어야 합니다. (예: "코카콜라")
        제품 가격 입력: 제품의 가격을 숫자로 입력할 수 있어야 합니다. (예: 1000)
        제품 이미지 입력: 제품의 사진을 사용자의 컴퓨터에서 파일 형태로 선택하여 첨부할 수 있어야 합니다.
        등록 버튼: 모든 정보를 입력한 후, 목록에 제품을 추가하기 위한 "등록" 버튼이 있어야 합니다.
    제품 목록 영역 (<div id="main">):
        등록된 모든 제품 정보를 보여주는 표(테이블)가 있어야 합니다.
        표는 "이미지", "카테고리명", "상품명", "가격", "등록일", "비고" 순서의 열로 구성되어야 합니다.
        각 제품 항목(행)마다 해당 제품을 관리할 수 있는 "삭제" 버튼과 "수정" 버튼이 포함되어야 합니다.

3. 핵심 기능
    초기 데이터 표시:
        사용자가 페이지에 처음 방문했을 때, 카테고리 선택 메뉴에는 두 개의 예시 카테고리('음료', '과자')가 기본적으로 표시되어 있어야 합니다.
        제품 목록 표에는 사용법을 쉽게 이해할 수 있도록 네 개의 예시 제품이 기본적으로 표시되어 있어야 합니다.

    제품 등록 기능:
        사용자가 '등록 영역'에 카테고리, 제품명, 가격을 모두 입력하고 "등록" 버튼을 클릭하면, 해당 제품이 '목록 영역' 표에 새로운 행으로 즉시 추가되어야 합니다.
        제품 등록 시, 등록 날짜는 현재 날짜로 자동 기록되어야 합니다.
        첨부된 이미지는 목록의 '이미지' 열에 표시되어야 하며, 이미지를 첨부하지 않은 경우 기본 이미지가 대신 표시되어야 합니다.

    제품 관리 기능:
        삭제: 각 제품의 "삭제" 버튼을 클릭하면 해당 제품이 목록에서 즉시 제거되어야 합니다.
        수정: "수정" 버튼을 클릭하면, prompt 창을 통해 새로운 제품명과 가격을 입력받아 해당 제품의 정보를 수정하고 목록을 즉시 갱신해야 합니다.
*/

// 1. 데이터모델링 
const categoryList = [ { cno : 1 , cname : '음료'}, { cno : 2 , cname : '과자'} ]
let cno = 2

const productList = [
    { pno : 1 , cno : 1 , pname : '코카콜라'    , pprice : 1000 , pimg : 'https://placehold.co/100' , pdate : '2025-06-15' },
    { pno : 2 , cno : 2 , pname : '바나나킥'    , pprice : 1500 , pimg : 'https://placehold.co/100' , pdate : '2025-06-16' },
    { pno : 3 , cno : 1 , pname : '사이다'      , pprice : 1200 , pimg : 'https://placehold.co/100' , pdate : '2025-06-17' },
    { pno : 4 , cno : 2 , pname : '새우깡'      , pprice : 900 , pimg : 'https://placehold.co/100'  , pdate : '2025-06-18' },
];
let pno = 4;

// 1. 카테고리 출력 함수 
categoryPrint();
function categoryPrint() {
    let html = `<option value='' disabled selected> 카테고리 선택 </option>`;
    for( let index = 0 ; index <= categoryList.length-1 ; index++ ) {
        const category = categoryList[index];
        html += `<option value="${ category.cno}"> ${ category.cname} </option>`
    }
    const categoryInput = document.querySelector('#categoryInput');
    categoryInput.innerHTML = html;
}


// 2. 제품 등록 함수 
function productAdd(){
    const categoryInput = document.querySelector('#categoryInput');
    const pnameInput = document.querySelector('#pnameInput');
    const ppriceInput = document.querySelector('#ppriceInput');
    const pimgInput = document.querySelector('#pimgInput');
    // ----
    const cno = categoryInput.value;
    const pname = pnameInput.value;
    const pprice = ppriceInput.value;
    const pimg = pimgInput.files[0];

    if( cno === '' || pname === '' || pprice === '' ) {
        alert('비어있는 항목이 있습니다.');
        return;
    }
    let year = new Date().getFullYear();
    let month = new Date().getMonth() + 1 ;
        month = month < 10 ? '0' + month : month;
    let day = new Date().getDate() ;
        day = day < 10 ? '0' + day : day;
    const pdate = `${ year }-${ month }-${ day }`
    // ----
    const product = {
        pno : ++pno ,
        cno : Number(cno),
        pname : pname,
        pprice : Number(pprice),
        pdate : pdate,
        pimg : pimg ? URL.createObjectURL(pimg) : 'https://placehold.co/100'
    }
    productList.push(product);
    console.log( productList );
    productPrint();

    categoryInput.value = '';
    pnameInput.value = '';
    ppriceInput.value = '';
    pimgInput.value = '';
    alert('제품 등록 성공')
}

// 3. 제품 전체 조회 함수
productPrint(); 
function productPrint() {
    const tableBody = document.querySelector('#tableBody');
    let html = '';
    for( let index = 0 ; index <= productList.length-1 ; index++ ) {
        
        const product = productList[index];
        html +=` <tr>
                    <td> <img src="${ product.pimg }" /> </td>
                    <td> ${ getCategoryName( product.cno ) } </td>
                    <td> ${ product.pname } </td>
                    <td> ${ product.pprice.toLocaleString() } </td>
                    <td> ${ product.pdate } </td>
                    <td>
                        <button onclick="productDelete(${product.pno})" class="btnDelete" > 삭제 </button>
                        <button onclick="productEdit(${product.pno})" class="btnEdit" > 수정 </button>
                    </td>
                </tr>`
    }
    tableBody.innerHTML = html;
}

// 4. 제품 삭제 함수
function productDelete( pno ) {

    for( let index = 0 ; index <= productList.length-1 ; index++ ) {
        const product = productList[index];
        if( product.pno === pno ) {
            productList.splice( index , 1 );
            alert('제품 삭제 성공')
        }
    }

    productPrint();
}

// 5. 제품 수정 함수 
function productEdit( pno ) {
    
    const pname = prompt('새로운제품명 : ');
    const pprice = Number(prompt('새로운가격 : '));

    for( let index = 0 ; index <= productList.length-1 ; index++ ) {
        const product = productList[index];
        if( product.pno === pno ) {
            product.pname = pname;
            product.pprice = pprice;
            alert('제품 수정 성공')
        }
    }
    
    productPrint();
}

// 6. 카테고리번호 에 따른 카테고리명 반환 함수 
function getCategoryName( cno ) {
    for( let index = 0 ; index <= categoryList.length-1 ; index++ ) {
        const category = categoryList[index];
        if( category.cno === cno ) {
            
            return category.cname;
        }
    }
    return '';
}