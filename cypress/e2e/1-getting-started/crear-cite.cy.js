/// <reference types="cypress" />

describe('Probar crear cita', () => {
    it('Crear cita y navegacion', () => {
        
        cy.visit('/'); //Esto hace que visites Raiz
        cy.get('[data-cy="email"]').type('hola@hola.com');
        cy.get('[data-cy="password"]').type('123456');
        cy.get('[data-cy="input-inicio"]').submit();// Con esto da clik para inicar
        cy.get('[data-id-servicio="8"]').click();
        cy.wait(1000);
        cy.get('[data-cy="BTN-SIG"]').click();
        cy.wait(1000);
        cy.get('[data-cy="fecha"]').type('2022-08-23');
        cy.wait(1000);
        cy.get('[data-cy="hora"]').type('12:30');
        cy.wait(5000);
        cy.get('[data-cy="BTN-SIG"]').click();
        cy.wait(3000);
        cy.get('[data-id-cita="cita"]').click();
       //cy.get('[data-cy="cerrar-sesion"]').click();


    });
});