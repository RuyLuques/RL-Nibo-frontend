/* eslint-disable no-undef */
describe('Services Component Test', () => {
    it('should display a list of services projects', () => {
      cy.visit('http://localhost:3000/services');
      cy.get('[data-test="services-component"]').should('exist');
    });
  });
  