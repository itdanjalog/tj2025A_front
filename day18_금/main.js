
// 1. 데이터모델링 
const categoryList = [ { cno : 1 , cname : '음료'}, { cno : 2 , cname : '과자'} ]
let cno = categoryList[ categoryList.length - 1].cno

const productList = [
    { pno : 1 , cno : 1 , pname : '코카콜라'    , pprice : 1000 , pimg : 'https://placehold.co/100' , pdate : '2025-06-15' },
    { pno : 2 , cno : 2 , pname : '바나나킥'    , pprice : 1500 , pimg : 'https://placehold.co/100' , pdate : '2025-06-16' },
    { pno : 3 , cno : 1 , pname : '사이다'      , pprice : 1200 , pimg : 'https://placehold.co/100' , pdate : '2025-06-17' },
    { pno : 4 , cno : 2 , pname : '새우깡'      , pprice : 900 , pimg : 'https://placehold.co/100'  , pdate : '2025-06-18' },
];
let pno = productList[ productList.length - 1].pno;

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
        pno : pno + 1,
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