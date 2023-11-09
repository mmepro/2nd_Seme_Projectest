// cypress/integration/recommendation.spec.js

describe('Recommendation Page Test', () => {
  it('Clicks the recommendation button and navigates to the recommendation page', () => {
    // localhost:5173로 접속
    cy.visit('http://localhost:5173');

    // 특정 조건이 충족될 때까지 대기
    cy.wait(1000); // 1초 동안 대기 

    // 상영작 추천 버튼을 찾고 클릭
    cy.get('[style="left: 75px; top: 295px;"]').click();

    // 특정 조건이 충족될 때까지 대기
    cy.wait(2000); // 2초 동안 대기 

    // 추천 페이지로 이동하는지 확인
    cy.url().should('include', '/page4'); // 추천 페이지 URL에 '/page2'가 포함되어 있는지 확인

    // 테스트 결과를 로그로 기록
    cy.log('OK'); // 테스트가 성공한 경우 'OK'를 출력
  });
});
