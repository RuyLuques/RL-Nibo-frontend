/* eslint-disable no-undef */
describe('LandingPageServices Component Test', () => {
    it('should display a list of landingpageservices projects', () => {
      cy.visit('http://localhost:3000/landingpageservices');
      cy.get('[data-test="landingpageservices-component"]').should('exist');
    });
  });
  