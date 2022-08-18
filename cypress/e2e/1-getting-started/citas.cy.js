/// <reference types="cypress" />

describe('Se verifica el funcionamiento de visualizar las citas creadas', () => {
    it('Probar las citas existentes', () => {
        cy.visit('/');
        cy.get('[data-cy="email"]').type('prueba1@gmail.com');
        cy.get('[data-cy="password"]').type('789456123');
        cy.get('[data-cy="input-inicio"]').submit();

        cy.get('[data-cy="heading-admin"]').should('exist');
        cy.get('[data-cy="heading-admin"]').invoke('text').should('equal', 'Panel de Administración');
        cy.get('[data-cy="heading-admin"]').invoke('text').should('not.equal', 'Hola, administrador');

        cy.get('[data-cy="calendar"]').type('2022-08-15');

        cy.get('[data-cy="boton-eliminar"]').should('have.class', 'boton-eliminar');
        cy.get('[data-cy="boton-eliminar"]').should('not.have.class', 'boton-delete');
    });
});