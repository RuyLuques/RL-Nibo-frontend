/* eslint-disable no-undef */
describe('LandingPageForm Component Test', () => {
    it('should display a list of landingpageform projects', () => {
      cy.visit('http://localhost:3000/landingpageform');
      cy.get('[data-test="landingpageform-component"]').should('exist');
    });
  });
  