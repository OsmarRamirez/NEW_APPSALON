/// <reference types="cypress" />

describe('Funcionamiento de los formularios', () => {
    it('Valida página del formulario de crear cuenta', () => {
        cy.visit('/crear-cuenta')

        cy.get('[data-cy="titulo-crear"]').should('exist');
        cy.get('[data-cy="titulo-crear"]').invoke('text').should('equal', 'Crear Cuenta');
        cy.get('[data-cy="titulo-crear"]').invoke('text').should('not.equal', 'Crear Nueva Cuenta');

        cy.get('[data-cy="formulario-crear"]').should('exist');
    });

    it('Llena los campos del formulario', () => {
        cy.get('[data-cy="input-nombre"]').type('jesus04');
        cy.get('[data-cy="input-apellido"]').type('castillo04');
        cy.get('[data-cy="input-telefono"]').type('7351517544');
        cy.get('[data-cy="input-correo"]').type('jesus03@hola.com');
        cy.get('[data-cy="input-password"]').type('123456544');
        cy.get('[data-cy="formulario-crear"]').submit();
        cy.get('[data-cy="notificacion"]').should('exist');
        cy.get('[data-cy="notificacion"]').invoke('text').should('equal', 'Confirma tu cuenta');
    });
    it('Llena los campos del formulario usuario existente', () => {
        cy.visit('/crear-cuenta')
        cy.get('[data-cy="input-nombre"]').type('Osmar2');
        cy.get('[data-cy="input-apellido"]').type('Ramírez3');
        cy.get('[data-cy="input-telefono"]').type('2441112843');
        cy.get('[data-cy="input-correo"]').type('holam@hola.com');
        cy.get('[data-cy="input-password"]').type('123456');
        cy.get('[data-cy="formulario-crear"]').submit();
        cy.get('[data-cy="alertas"]').contains('El usuario ya está registrado');
    });
});