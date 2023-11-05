/* eslint-disable no-undef */
describe('Backend Component Test', () => {
    it('should display a list of backend projects', () => {
      cy.visit('http://localhost:3000/backend');
      cy.get('[data-test="backend-component"]').should('exist');
    });
  });
  