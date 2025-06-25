/* ============================== LocalStorage 연동 함수 ============================== */

// 로컬 스토리지에서 'products' 키에 해당하는 데이터를 가져오는 함수
function getProducts() {
    // 'products' 키로 저장된 데이터를 로컬 스토리지에서 가져옵니다.
    let products = localStorage.getItem('products');
    // 만약 가져온 데이터가 없으면(null), 빈 배열로 초기화합니다.
    if (products == null) {
        products = [];
    } else {
        // 데이터가 있다면, JSON 문자열을 실제 자바스크립트 배열/객체로 변환합니다.
        products = JSON.parse(products);
    }
    // 처리된 products 배열을 반환합니다.
    return products;
}

// 주어진 products 배열을 로컬 스토리지에 저장하는 함수
function setProducts(products) {
    // 'products' 배열을 JSON 문자열 형태로 변환하여 로컬 스토리지에 저장합니다.
    localStorage.setItem('products', JSON.stringify(products));
}

/* ============================== 제품 관련 CRUD 함수 ============================== */
// CRUD: Create(등록), Read(조회), Update(수정), Delete(삭제)

// C: 새로운 제품을 등록하는 함수
function productAdd() {
    // HTML에서 각 입력 요소를 DOM 객체로 가져옵니다.
    const pnameInput = document.querySelector('#pnameInput');
    const ppriceInput = document.querySelector('#ppriceInput');
    const pimgInput = document.querySelector('#pimgInput');
    const pcontentInput = document.querySelector('#pcontentInput');

    // 각 입력 요소에서 사용자가 입력한 값을 가져옵니다.
    const pname = pnameInput.value;
    const pprice = ppriceInput.value;
    const pcontent = pcontentInput.value;
    const pimg = pimgInput.files[0]; // files[0]는 선택된 파일 객체를 의미합니다.

    // 현재 로컬 스토리지에 저장된 제품 목록을 불러옵니다.
    const products = getProducts();
    // 새 제품 코드를 생성합니다. (기존 제품이 없으면 1, 있으면 마지막 제품 코드 + 1)
    let pcode = products.length == 0 ? 1 : products[products.length - 1].pcode + 1;

    // 입력받은 값들로 새로운 제품 객체(obj)를 생성합니다.
    const obj = {
        pcode: pcode,
        pname: pname,
        pprice: Number(pprice), // 가격은 숫자형으로 변환합니다.
        pcontent: pcontent,
        // 이미지가 선택되었으면 해당 이미지의 임시 URL을 생성하고, 아니면 기본 이미지 주소를 사용합니다.
        pimg: pimg ? URL.createObjectURL(pimg) : 'https://placehold.co/100x100',
    };

    // 생성된 새 제품 객체를 products 배열에 추가합니다.
    products.push(obj);

    // 입력 필드를 초기화하여 다음 입력을 준비합니다.
    pnameInput.value = '';
    ppriceInput.value = '';
    pcontentInput.value = '';
    // pimgInput은 보안상 스크립트로 직접 초기화하기 복잡하므로 그대로 둡니다.

    // 사용자에게 제품이 등록되었음을 알립니다.
    alert('제품이 성공적으로 등록되었습니다.');

    // 변경된 products 배열을 다시 로컬 스토리지에 저장합니다.
    setProducts(products);

    // 제품 목록을 화면에 다시 그려서 최신 상태를 반영합니다.
    productPrint();
}

// R: 제품 목록을 화면에 출력(조회)하는 함수
productPrint(); // 페이지가 처음 로드될 때 제품 목록을 한번 출력합니다.
function productPrint() {
    // 제품 목록을 표시할 tbody 요소를 가져옵니다.
    const productBody = document.querySelector('#productBody');
    // 현재 로컬 스토리지에 저장된 모든 제품 목록을 불러옵니다.
    let products = getProducts();

    // tbody에 삽입될 HTML 문자열을 저장할 변수를 선언합니다.
    let html = '';
    // products 배열의 모든 요소를 순회합니다.
    for (let i = 0; i < products.length; i++) {
        const product = products[i]; // 현재 순회 중인 제품 객체입니다.
        // 각 제품 정보를 테이블 행(<tr>) HTML 태그로 만듭니다.
        html += `<tr>
                     <td> <img src="${product.pimg}" /> </td>
                     <td> ${product.pname} </td>
                     <td> ${product.pprice.toLocaleString()} </td>
                     <td> ${product.pcontent} </td>
                     <td> <button class="btnDelete" onclick="productDelete(${product.pcode})"> 삭제 </button> </td>
                 </tr>`;
    } // for 반복문 끝

    // 완성된 HTML 문자열을 tbody의 내용으로 삽입하여 화면에 표시합니다.
    productBody.innerHTML = html;
} // productPrint 함수 끝

// D: 특정 제품을 삭제하는 함수
function productDelete(pcode) {
    // 삭제할 제품의 pcode를 매개변수로 받습니다.
    // 현재 로컬 스토리지에 저장된 모든 제품 목록을 불러옵니다.
    let products = getProducts();

    // products 배열의 모든 요소를 순회하여 삭제할 제품을 찾습니다.
    for (let i = 0; i < products.length; i++) {
        // 만약 현재 순회 중인 제품의 pcode가 삭제할 pcode와 일치하면
        if (products[i].pcode == pcode) {
            // 배열에서 해당 요소를 제거합니다. (i번째 인덱스에서 1개 삭제)
            products.splice(i, 1);
            // 사용자에게 삭제가 완료되었음을 알립니다.
            alert('제품이 삭제되었습니다.');
            // 변경된 products 배열을 다시 로컬 스토리지에 저장합니다.
            setProducts(products);
            // 제품 목록을 화면에 다시 그려서 최신 상태를 반영합니다.
            productPrint();
            // 목표를 달성했으므로 함수를 즉시 종료합니다.
            return;
        }
    } // for 반복문 끝

    // 반복문이 끝날 때까지 해당 pcode를 찾지 못했다면, 오류 메시지를 표시합니다.
    alert('오류: 삭제하려는 제품을 찾지 못했습니다.');
} // productDelete 함수 끝
