// cypress/integration/recommendation.spec.js

describe('Recommendation Page Test', () => {
  it('Clicks the recommendation button and navigates to the recommendation page', () => {
    // localhost:5173로 접속
    cy.visit('http://localhost:5173');

    // 특정 조건이 충족될 때까지 대기
    cy.wait(1000); // 1초 동안 대기 

    // 상영작 추천 버튼을 찾고 클릭
    cy.get(':nth-child(3) > .sc-beyTiQ').click();

    // 특정 조건이 충족될 때까지 대기
    cy.wait(2000); // 2초 동안 대기 

    // 추천 페이지로 이동하는지 확인
    cy.url().should('include', '/page2'); // 추천 페이지 URL에 '/page2'가 포함되어 있는지 확인

    // 10번 이상의 이벤트를 전달하고 각 이벤트가 정상 동작하는지 검증
    for (let i = 0; i < 10; i++) {
      // 이벤트 전달 및 검증 (예: 버튼 클릭 이벤트)
      cy.get(':nth-child(3) > .sc-beyTiQ').click();
       
     // 예매 버튼이 존재하는지 확인
     cy.get('[style="left: 640px; top: 515px;"]').should('exist');

    }
  });
});
