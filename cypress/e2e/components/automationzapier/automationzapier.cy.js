/* eslint-disable no-undef */
describe('AutomationZapier Component Test', () => {
    it('should display a list of automationzapier projects', () => {
      cy.visit('http://localhost:3000/automationzapier');
      cy.get('[data-test="automationzapier-component"]').should('exist');
    });
  });
  