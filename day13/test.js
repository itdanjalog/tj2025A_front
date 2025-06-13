// ==================================================
// JS 틱택토 게임
// ==================================================

// --- 1. 게임 초기 설정 ---
let board = ["", "", "", "", "", "", "", "", ""];
let currentPlayer = "O"; // 시작 플레이어
let isGameOver = false; // 게임 종료 상태를 저장하는 변수

// 게임 시작 메시지
console.log("=== 틱택토 게임 시작! (Function 없는 버전) ===");
console.log("플레이어 O부터 시작합니다. 0~8 사이의 숫자를 입력하세요.");

// --- 2. 메인 게임 루프 ---
// isGameOver가 true가 되면 루프가 종료됩니다.
while (!isGameOver) {

    // --- 보드판 출력 ---
    // function이 없으므로, 매 턴마다 직접 보드를 그려줍니다.
    // || '숫자'는 칸이 비어있을 경우 해당 칸의 번호를 보여주기 위함입니다.
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
        console.warn(">> 잘못된 입력입니다. 0에서 8 사이의 숫자를 입력해주세요. <<");
        continue; // 현재 턴을 다시 시작합니다.
    }
    if (board[position] !== "") {
        console.warn(">> 이미 선택된 위치입니다. 다른 위치를 선택해주세요. <<");
        continue; // 현재 턴을 다시 시작합니다.
    }

    // --- 보드에 현재 플레이어의 선택 기록 ---
    board[position] = currentPlayer;

    // --- 승리 조건 확인 ---
    const winningConditions = [
        [0, 1, 2], [3, 4, 5], [6, 7, 8], // 가로 3줄
        [0, 3, 6], [1, 4, 7], [2, 5, 8], // 세로 3줄
        [0, 4, 8], [2, 4, 6]             // 대각선 2줄
    ];

    let winnerFound = false;
    for (let i = 0; i < winningConditions.length; i++) {
        const [a, b, c] = winningConditions[i];
        if (board[a] && board[a] === board[b] && board[a] === board[c]) {
            winnerFound = true;
            break; // 승리 조건을 찾았으므로 더 이상 확인할 필요 없음
        }
    }

    if (winnerFound) {
        console.log(`🎉 축하합니다! [${currentPlayer}] 플레이어가 승리했습니다!`);
        isGameOver = true; // 게임 종료
    }
    // --- 무승부 확인 ---
    // 승자가 없고, 보드에 빈 칸("")이 더 이상 없는 경우
    else if (!board.includes("")) {
        console.log("⚖️ 아쉽네요! 무승부입니다.");
        isGameOver = true; // 게임 종료
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
        break; // while 루프를 즉시 탈출
    }

    // --- 플레이어 교체 ---
    // 게임이 계속 진행될 경우에만 플레이어를 바꿉니다.
    currentPlayer = (currentPlayer === "O") ? "X" : "O";
}

// --- 3. 게임 종료 메시지 ---
console.log("=== 게임이 종료되었습니다. ===");