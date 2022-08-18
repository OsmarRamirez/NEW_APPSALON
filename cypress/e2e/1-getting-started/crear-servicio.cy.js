/// <reference types="cypress" />

describe('Probar el agregar un nuevo servicio', () => {
    it('Agregar servicio al catálogo', () => {
        cy.visit('/');
        cy.get('[data-cy="email"]').type('prueba1@gmail.com');
        cy.get('[data-cy="password"]').type('789456123');
        cy.get('[data-cy="input-inicio"]').submit();

        cy.get('[data-cy="boton-crear"]').click();
        cy.get('[data-cy="nombre-servicio"]').type('Corte tipo CR7');
        cy.get('[data-cy="valor-servicio"]').type('200');
        cy.get('[data-cy="save-changes"]').submit();

        cy.get('[data-cy="services"]').should('exist');
        cy.get('[data-cy="nombre-nuevo"]').last().should('exist');
        cy.get('[data-cy="boton-servicios"]').click();
        cy.get('[data-cy="update"]').last().click();
        cy.wait(5000);
        cy.go('back');
    });
});