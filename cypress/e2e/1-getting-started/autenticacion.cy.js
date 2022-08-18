/// <reference types="cypress" />

describe('Probar la autenticación', () => {
    it('Prueba el inicio de sesión', () => {
        cy.visit('/');

        cy.get('[data-cy="input-inicio"]').should('exist');

        // Ingresar los datos
        cy.get('[data-cy="input-inicio"]').submit();
        cy.wait(5000);

        // El usuario exista

        cy.get('[data-cy="email"]').type('hola@hola.com');
        cy.get('[data-cy="password"]').type('123456');
        cy.get('[data-cy="input-inicio"]').submit();
        cy.wait(5000);
    });

    it('Prueba la navegación', () => {
        cy.get('[data-cy="1"]').click();
        cy.wait(3000);

        cy.get('[data-cy="2"]').click();
        cy.wait(3000);

        cy.get('[data-cy="3"]').click();
        cy.wait(3000);

        // Cerrar sesión
        cy.get('[data-cy="cerrar-sesion"]').click();
    });

    
    it('Prueba de autenticación no aprobada', () => {
        cy.visit('/');

        cy.get('[data-cy="input-inicio"]').should('exist');

        // Ingresar los datos
        cy.get('[data-cy="input-inicio"]').submit();
        cy.wait(5000);

        // El usuario no exista
        cy.get('[data-cy="email"]').type('hola12@hola.com');
        cy.get('[data-cy="password"]').type('1234156');
        cy.get('[data-cy="input-inicio"]').submit();
        cy.wait(5000);
    });
});