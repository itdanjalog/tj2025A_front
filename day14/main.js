// 기준 날짜 (오늘)
const today = "2025-06-17";

// 데이터 명세 (팀원별 담당)
const users = [
  { userId: 1, name: "김개발" },
  { userId: 2, name: "최코딩" },
  { userId: 3, name: "박서버" }
];

const subscriptionPlans = [
  { planId: "p-01", planName: "베이직", price: 9900 },
  { planId: "p-02", planName: "프리미엄", price: 15000 }
];

const userSubscriptions = [
  { userId: 1, planId: "p-02", expiryDate: "2025-12-31" },
  { userId: 2, planId: "p-01", expiryDate: "2025-05-30" },
  // 박서버(userId: 3)는 구독 내역이 없음
];

document.write("<h1>회원 구독 상태 대시보드</h1>");

// 1. 모든 유저를 기준으로 반복
for (let i = 0; i < users.length; i++) {
  let currentUser = users[i];
  let userSubInfo = null; // 현재 유저의 구독 내역 객체를 담을 변수

  // 2. 현재 유저의 구독 내역 찾기
  for (let j = 0; j < userSubscriptions.length; j++) {
    if (currentUser.userId === userSubscriptions[j].userId) {
      userSubInfo = userSubscriptions[j];
      break;
    }
  }

  document.write(`<hr><h3>${currentUser.name}</h3>`);

  // 구독 내역이 있는 경우
  if (userSubInfo) {
    let planInfo = null; // 구독 상품의 상세 정보를 담을 변수

    // 3. 구독 상품의 상세 정보 찾기
    for (let k = 0; k < subscriptionPlans.length; k++) {
      if (userSubInfo.planId === subscriptionPlans[k].planId) {
        planInfo = subscriptionPlans[k];
        break;
      }
    }

    // 4. 구독 상태 판별
    let status = "";
    let statusColor = "";
    if (userSubInfo.expiryDate >= today) {
      status = "활성";
      statusColor = "green";
    } else {
      status = "만료";
      statusColor = "gray";
    }

    // 5. 최종 정보 출력
    document.write(
      `<ul>
        <li>구독 상품: ${planInfo.planName} (월 ${planInfo.price}원)</li>
        <li>상태: <strong style="color: ${statusColor};">${status}</strong></li>
      </ul>`
    );

  }
  // 구독 내역이 없는 경우
  else {
    document.write(`<p>구독 내역이 없습니다.</p>`);
  }
}