/* eslint-disable no-undef */
describe('Information Component Test', () => {
    it('should display a list of information projects', () => {
      cy.visit('http://localhost:3000/information');
      cy.get('[data-test="information-component"]').should('exist');
    });
  });
  