/* eslint-disable no-undef */
describe('AutomationHubspot Component Test', () => {
    it('should display a list of automationhubspot projects', () => {
      cy.visit('http://localhost:3000/automationhubspot');
      cy.get('[data-test="automationhubspot-component"]').should('exist');
    });
  });
  