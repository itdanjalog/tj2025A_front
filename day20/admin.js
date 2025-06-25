
// ============================= 전역변수 ----> localStorage ====================== //
// 방법1 : 실습16.js 참고 // 방법2 : 실습17.js 참고

// (1) localStorage 에서 'products' 배열 가져오기
// (2) 사용처 : products배열이 필요한곳
function getProducts(){ 
    // 1. 호출하기 
    let products = localStorage.getItem('products')
    // 2. 만약에 호출값이 비어 있으면 빈배열로 초기화
    if( products == null ){ products = [] } 
    else{ // 아니면 JSON타입으로 변환 
        products = JSON.parse( products );
    }
    // 3. 호출된 products 배열을 함수를 호출했던곳으로 반환 
    return products;
} // func end 

// (1) 함수호출시 전달받은 매개변수 'products' 를 localStorage 에서 저장하기
// (2) 사용처 : products배열의 변화가 있는곳 
function setProducts( products ){
    localStorage.setItem('products' , JSON.stringify( products )  ); // 1. 저장하기
} // func end 

// products(제품목록) : pcode 제품코드 pname 제품명 pprice 제품가격 pcontent 설명 pimg 이미지
// const products = [
//     { pcode: 1, pname: '이름1', pprice: 1000, pcontent: '제품설명1' , pimg : 'https://placehold.co/100' },
//     { pcode: 2, pname: '이름2', pprice: 2000, pcontent: '제품설명2' , pimg : 'https://placehold.co/100' },
//     { pcode: 3, pname: '이름3', pprice: 3000, pcontent: '제품설명3' , pimg : 'https://placehold.co/100' },
// ]
// let pcode = 3;

// 제품등록 : 송지훈
function productAdd() { console.log(`1번 실행`);
    const pnameInput = document.querySelector('#pnameInput'); console.log(pnameInput);
    const ppriceInput = document.querySelector('#ppriceInput'); console.log(ppriceInput);
    const pimgInput = document.querySelector('#pimgInput'); console.log(pimgInput);
    const pcontentInput = document.querySelector('#pcontentInput'); console.log( pcontentInput );

    const pname = pnameInput.value; console.log(pname);
    const pprice = ppriceInput.value; console.log(pprice);
    const pcontent = pcontentInput.value; console.log( pcontent );
    const pimg = pimgInput.files[0]; console.log(pimg);

        // ============ getProducts() 호출해서 products 가져오기 
    const products = getProducts();
        // + pcode는 빈배열이면 1 , 빈배열이 아니면 마지막pcode+1 ( 자동번호 부여 )
    let pcode = products.length == 0 ? 1 : products[ products.length - 1 ].pcode + 1

    const obj = {
        pcode: pcode,
        pname: pname,
        pprice: Number(pprice),
        pcontent : pcontent ,
        pimg: pimg ? URL.createObjectURL(pimg) : 'https://placehold.co/100x100',
    }; console.log(obj);

    products.push(obj); console.log(obj);

    pnameInput.value = '';
    ppriceInput.value = '';
    pcontentInput.value = '';
    alert(' 제품 등록 ');
    
        // ============ products 지역변수의 배열을 localStorage 저장하기
        setProducts( products );

    productPrint()// 제품조회 함수 호출
}

// 제품조회 : 신승민
productPrint(); // 페이지 열렸을 때 초기 1번 함수 실행
function productPrint() { console.log(productPrint);
    console.log(`productPrint in`);
    // 배열 내 객체 1개 당 <tr> 1개
    // (1) 어디에 : <tbody id ="productBody">아래에 등록한 자료(제품목록) 출력하기
    const productBody = document.querySelector('#productBody'); 
    // (2) 무엇을 : 배열 내 객체 정보를 html 형식으로 표현하기

        // ============ getProducts() 호출해서 products 가져오기 
        let products = getProducts();

    let html = '';
    for (let i = 0; i <= products.length - 1; i++) {
        const product = products[i];
        // cno를 매개변수로 넣어서 카테고리 객체 반환. 아래 ${getCategory(product.cno).cname} 대신 ${category.cname} 넣으면 돌아감.
        html += `<tr>
                    <td> <img src="${product.pimg}" /> </td>
                    <td> ${product.pname} </td>
                    <td> ${product.pprice.toLocaleString()} </td>
                    <td> ${product.pcontent} </td>
                    <td> <button class="btnDelete" onclick="productDelete( ${product.pcode} )"> 삭제 </button>  </td>       
                </tr>`;
    } // for end
    // (3) 출력 : 
    productBody.innerHTML = html; console.log(html);

}   //func end : 출력함수 끝

// 제품삭제 : 이원국
function productDelete(pcode) {
    console.log('삭제');
    console.log(pcode);
    // (1) 삭제할 번호의 객체를 찾는다. for
        // ============ getProducts() 호출해서 products 가져오기 
    let products = getProducts();
    
    for (let i = 0; i <= products.length - 1; i++) {
        if (products[i].pcode == pcode) { // 만약 i번째 제품코드와 삭제할 제품코드가 같으면
            products.splice(i, 1); // 해당 i에서 요소 1개 삭제
            alert('[성공] 제품 삭제') // 안내
                // ============ products 지역변수의 배열을 localStorage 저장하기
                setProducts( products );
            productPrint(); // 삭제 이후 제품목록 새로고침/렌더링
            return; // 목표 이뤘으니 함수 종료.
        }
    } // for end
    // (2) 못 찾았다.
    alert('[오류] 제품번호 불일치')
}   // func end : 삭제함수 끝