/* eslint-disable no-undef */
describe('LandingPageHome Component Test', () => {
    it('should display a list of landingpagehome projects', () => {
      cy.visit('http://localhost:3000/landingpagehome');
      cy.get('[data-test="landingpagehome-component"]').should('exist');
    });
  });
  