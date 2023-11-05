/* eslint-disable no-undef */
describe('Navbar Component Test', () => {
    it('should display a list of navbar projects', () => {
      cy.visit('http://localhost:3000/navbar');
      cy.get('[data-test="navbar-component"]').should('exist');
    });
  });
  