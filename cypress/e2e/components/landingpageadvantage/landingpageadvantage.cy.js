/* eslint-disable no-undef */
describe('LandingPageAdvantage Component Test', () => {
    it('should display a list of landingpageadvantage projects', () => {
      cy.visit('http://localhost:3000/landingpageadvantage');
      cy.get('[data-test="landingpageadvantage-component"]').should('exist');
    });
  });
  