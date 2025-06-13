// ==================================================
// JS 틱택토 게임 (기본 문법 버전)
// --- 1. 게임 초기 설정 ---
let board = ["", "", "", "", "", "", "", "", ""];
let currentPlayer = "O"; // 또는 "X"
let isGameOver = false;

// 게임 시작 메시지
console.log("=== 틱택토 게임 시작! (기본 문법 버전) ===");
console.log("플레이어 O부터 시작합니다. 0~8 사이의 숫자를 입력하세요.");

// --- 2. 메인 게임 루프 ---
for ( ;  ; ) {
    if( isGameOver == true ) break; // 게임종료  : 무한루프 종료
    // --- 보드판 출력 ---
    const boardState = `
      ${board[0] || ' '} | ${board[1] || ' '} | ${board[2] || ' '}
    ----|---|---
      ${board[3] || ' '} | ${board[4] || ' '} | ${board[5] || ' '}
    ----|---|---
      ${board[6] || ' '} | ${board[7] || ' '} | ${board[8] || ' '}
    `;
    console.log(boardState);

    // --- 사용자 입력 받기 ---
    const move = prompt(`[${currentPlayer} 플레이어] 차례입니다. 원하는 위치를 입력하세요.`);
    const position = parseInt(move);

    // --- 입력값 유효성 검사 ---
    if (isNaN(position) || position < 0 || position > 8) {
        console.log(">> 잘못된 입력입니다. 0에서 8 사이의 숫자를 입력해주세요. <<");
        continue;
    }
    if (board[position] !== "") {
        console.log(">> 이미 선택된 위치입니다. 다른 위치를 선택해주세요. <<");
        continue;
    }

    // --- 보드에 현재 플레이어의 선택 기록 ---
    board[position] = currentPlayer;

    // --- 승리 조건 확인 (2차원 배열과 구조분해 없이 변경된 부분) ---
    let winnerFound = false;

    // 가로 3줄 확인
    if (board[0] !== "" && board[0] === board[1] && board[0] === board[2]) {
        winnerFound = true;
    } else if (board[3] !== "" && board[3] === board[4] && board[3] === board[5]) {
        winnerFound = true;
    } else if (board[6] !== "" && board[6] === board[7] && board[6] === board[8]) {
        winnerFound = true;
    }
    // 세로 3줄 확인
    else if (board[0] !== "" && board[0] === board[3] && board[0] === board[6]) {
        winnerFound = true;
    } else if (board[1] !== "" && board[1] === board[4] && board[1] === board[7]) {
        winnerFound = true;
    } else if (board[2] !== "" && board[2] === board[5] && board[2] === board[8]) {
        winnerFound = true;
    }
    // 대각선 2줄 확인
    else if (board[0] !== "" && board[0] === board[4] && board[0] === board[8]) {
        winnerFound = true;
    } else if (board[2] !== "" && board[2] === board[4] && board[2] === board[6]) {
        winnerFound = true;
    }

    // --- 승리 또는 무승부 처리 ---
    if (winnerFound) {
        console.log(`🎉 축하합니다! [${currentPlayer}] 플레이어가 승리했습니다! 🎉`);
        isGameOver = true;
    } else if (!board.includes("")) {
        console.log("⚖️ 아쉽네요! 무승부입니다. ⚖️");
        isGameOver = true;
    }

    // --- 게임이 종료되었다면, 마지막 보드 상태를 한 번 더 보여주고 루프 종료 ---
    if (isGameOver) {
        const finalBoardState = `
          ${board[0] || ' '} | ${board[1] || ' '} | ${board[2] || ' '}
        ----|---|---
          ${board[3] || ' '} | ${board[4] || ' '} | ${board[5] || ' '}
        ----|---|---
          ${board[6] || ' '} | ${board[7] || ' '} | ${board[8] || ' '}
        `;
        console.log(finalBoardState);
        break;
    }

    // --- 플레이어 교체 ---
    currentPlayer = (currentPlayer === "O") ? "X" : "O";
}

// --- 3. 게임 종료 메시지 ---
console.log("=== 게임이 종료되었습니다. ===");