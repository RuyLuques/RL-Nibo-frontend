/* eslint-disable no-undef */
describe('Seo Component Test', () => {
    it('should display a list of seo projects', () => {
      cy.visit('http://localhost:3000/seo');
      cy.get('[data-test="seo-component"]').should('exist');
    });
  });
  