/* eslint-disable no-undef */
describe('Technologies Component Test', () => {
    it('should display a list of technologies projects', () => {
      cy.visit('http://localhost:3000/technologies');
      cy.get('[data-test="technologies-component"]').should('exist');
    });
  });
  