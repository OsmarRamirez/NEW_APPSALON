/// <reference types="cypress" />

describe('Probar el agregar un nuevo servicio', () => {
    it(' Prueva de seguridad Rutas', () => {
        cy.visit('/cita'); //
       // cy.visit('/auth');
        cy.visit('/servicios');
        cy.visit('/admin');
        cy.visit('/servicios/actualizar?id=2');
    });
    it('Prueba el inicio de sesión "Usuario" con entrada a admin rutas', () => {
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
        cy.visit('/admin');
        cy.visit('/servicios/actualizar?id=2'); 
        cy.visit('/servicios/crear'); 
        // Cerrar sesión
    });
});