/* eslint-disable no-undef */
describe('Footer Component Test', () => {
    it('should display a list of footer projects', () => {
      cy.visit('http://localhost:3000/footer');
      cy.get('[data-test="footer-component"]').should('exist');
    });
  });
  