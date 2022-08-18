/// <reference types="cypress" />

describe('Probar la actualización y eliminación de los servicios ofrecidos', () => {
    it('Actualizar servicio y eliminarlo posteriormente', () => {
        cy.visit('/');
        
        cy.get('[data-cy="email"]').type('prueba1@gmail.com');
        cy.get('[data-cy="password"]').type('789456123');
        cy.get('[data-cy="input-inicio"]').submit();
        cy.get('[data-cy="boton-servicios"]').click();

        cy.get('[data-cy="update"]').first().click();
        cy.get('[data-cy="nombre-servicio"]').clear();
        cy.get('[data-cy="nombre-servicio"]').type('Corte tipo militar');
        cy.get('[data-cy="valor-servicio"]').clear();
        cy.get('[data-cy="valor-servicio"]').type('150');
        cy.get('[data-cy="update-boton"]').click();

        cy.get('[data-cy="delete-button"]').first().submit();
        cy.get('[data-cy="cerrar-sesion"]').click();
    });
});