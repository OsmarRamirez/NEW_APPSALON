/// <reference types="cypress" />

describe('Carga la página principal', () => {
    it('Prueba el header de la página principal', () => {
        cy.visit('/')

        cy.get('[data-cy="heading-sitio"]').should('exist');
        cy.get('[data-cy="heading-sitio"]').invoke('text').should('equal', 'Hola');

        cy.get('[data-cy="heading-sitio"]').invoke('text').should('not.equal', 'Adios');
    });

    it('Prueba el texto de iniciar sesión', () => {
        cy.get('[data-cy="heading-inicio"]').should('exist');
        cy.get('[data-cy="heading-inicio"]').should('have.prop', 'tagName').should('equal', 'P');

        // Selecciona los inputs del formulario
        cy.get('[data-cy="input-inicio"]').should('exist');
        cy.get('[data-cy="input-inicio"]').find('.campo').should('have.length', 2);
        cy.get('[data-cy="input-inicio"]').find('.campo').should('not.have.length', 3);
    });

    it('Prueba los enlaces', () => {
        // Botón
        cy.get('[data-cy="enlace-boton"]').should('have.class', 'boton');
        cy.get('[data-cy="enlace-boton"]').should('not.have.class', 'boton-iniciar');

        // Enlaces
        cy.get('[data-cy="enlace-recuperar"]').invoke('text').should('equal', '¿Olvidaste tu password?');

        // Probar el redireccionamiento
        cy.get('[data-cy="enlace-recuperar"]').click();

        cy.wait(10000);
        cy.go('back');
    });

    it('Prueba el routing de los enlaces', () => {
        cy.get('[data-cy="enlace-crear"]').should('exist');
        cy.get('[data-cy="enlace-crear"]').invoke('attr', 'href').should('equal', '/crear-cuenta');
        cy.get('[data-cy="enlace-crear"]').click();

        cy.wait(10000);
        cy.go('back');
    });
});