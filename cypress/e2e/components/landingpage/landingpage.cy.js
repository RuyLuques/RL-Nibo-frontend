/* eslint-disable no-undef */
describe('LandingPage Component Test', () => {
    it('should display a list of landingpage projects', () => {
      cy.visit('http://localhost:3000/landingpage');
      cy.get('[data-test="landingpage-component"]').should('exist');
    });
  });
  