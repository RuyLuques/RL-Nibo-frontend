/* eslint-disable no-undef */
describe('LandingPageAbout Component Test', () => {
    it('should display a list of landingpageabout projects', () => {
      cy.visit('http://localhost:3000/landingpageabout');
      cy.get('[data-test="landingpageabout-component"]').should('exist');
    });
  });
  