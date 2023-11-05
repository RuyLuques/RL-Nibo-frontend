/* eslint-disable no-undef */
describe('Projects Component Test', () => {
    it('should display a list of projects projects', () => {
      cy.visit('http://localhost:3000/projects');
      cy.get('[data-test="projects-component"]').should('exist');
    });
  });
  