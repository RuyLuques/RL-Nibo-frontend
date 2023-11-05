/* eslint-disable no-undef */
describe('Home Component Test', () => {
    it('should display a list of home projects', () => {
      cy.visit('http://localhost:3000/');
      cy.get('[data-test="home-component"]').should('exist');
    });
  });
  