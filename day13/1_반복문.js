// [1] i(iterator:반복자) : 반복변수(반복문의 반복횟수 체크하는 변수 목적 )
for( let i = 1 ; i <= 3 ; i++ ){
    console.log( i );
}// for end 
/* --- 순서도(알리고즘) ---
    1. let i = 1
        2. i <= 3                true 
        3. console.log( i );    console.log( 1 );
        4. i++                  i = 2
        5. i <= 3               true 
        6. console.log( i );    console.log( 2 );
        7. i++                  i = 3 
        8. i <= 3               true 
        9. console.log( i );    console.log( 3 );
        10. i++                  i = 4
        11.  i <= 3             false 
*/

// [2] for 중첩  : for{} 안에 for{} 포함 
for( let i = 1 ; i <= 2 ; i++ ){ // 한달간 반복 해석 서술 : i는 1부터 2 이하까지 1씩증가 
    console.log( i );           // 2 번 
    for( let h = 1 ; h <= 3 ; h++  ){ // h는 1부터 3 이하 까지 1씩증가 
        console.log( h );       // 6 번 
    }
} // for end 
// 생각해보기 : 출력 되는 순서
// i = 1   -> true -> console.log  -> h = 1 -> true -> console.log 
//                                    h = 2 -> true -> console.log 
//                                    h = 3 -> true -> console.log 
//                                    h = 4 -> false 
// i = 2   -> true -> console.log  -> h = 1 -> true -> console.log 
//                                    h = 2 -> true -> console.log 
//                                    h = 3 -> true -> console.log 
//                                    h = 4 -> false 
// i = 3   -> false 

// [3] 구구단 : 단 안(마다)에 곱 포함 인가?? [O] 곱 안(마다)에 단 포함 인가??
// 1. 단 : 2 ~ 9 , 패턴 : 2부터 9까지 1씩증가 
for( let 단 = 2 ; 단 <= 9 ; 단++ ){
    console.log( 단 ); // 2 3 4 5 6 7 8 9 
}
// 2. 곱 : 1 ~ 9 , 패턴 : 1부터 9까지 1씩증가 
for( let 곱 = 1 ; 곱 <= 9 ; 곱++ ){
    console.log( 곱 ); // 1 2 3 4 5 6 7 8 9
}
// 3. 합치기 : 단 마다 곱 반복(포함) 해야한다.
for( let 단 = 2 ; 단 <= 9 ; 단++ ){
    for( let 곱 = 1 ; 곱 <=9 ; 곱++ ){
        console.log( ` ${ 단 } X ${ 곱 } = ${ 단 * 곱 } ` );   // 단 = 8 , 곱 = 9  ,72번 출력
    } // for 2 end 
} // for 1 end 
/* 순서도 
    단 변수     단 조건(단<=9)      곱 변수     곱 조건(곱<=9)                          
    단 = 2      true               곱 = 1      true             console.log출력         곱++
                                   곱 = 2      true              console.log출력        곱++
                                   곱 = 3      true              console.log출력        곱++
                                   곱 = 4      true              console.log출력        곱++
                                   ~~~~
                                   곱 = 9      true              console.log출력        곱++
                                   곱 = 10     false            X                             단++
    단 = 3      true               곱 = 1      true             console.log출력         곱++
                                   곱 = 2      true              console.log출력        곱++
                                   곱 = 3      true              console.log출력        곱++
                                   곱 = 4      true              console.log출력        곱++
                                   ~~~~
                                   곱 = 9      true              console.log출력        곱++
                                   곱 = 10     false            X                             단++
    ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
    단 = 10     false            X 
*/