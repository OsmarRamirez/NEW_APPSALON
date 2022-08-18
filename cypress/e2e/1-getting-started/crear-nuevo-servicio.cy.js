/// <reference types="cypress" />

describe('Probar crear nuevo servicio y Citarlo', () => {
    it('Crear servicio y realizar cita de este', () => {
        
        cy.visit('/'); //Esto hace que visites Raiz
        cy.get('[data-cy="email"]').type('prueba1@gmail.com');
        cy.get('[data-cy="password"]').type('789456123');
        cy.get('[data-cy="input-inicio"]').submit();// Con esto da clik para inicar
       
        cy.get('[data-cy="boton-crear"]').click();
        cy.get('[data-cy="nombre-servicio"]').type('Tinte Hobre');
        cy.get('[data-cy="valor-servicio"]').type('250');
        cy.wait(2000);
        cy.get('[data-cy="save-changes"]').submit();
        cy.wait(500);
        cy.get('[data-cy="cerrar-sesion"]').click();


        //esto ya es la parte de loguear con otro usurio y crear la cita
        cy.get('[data-cy="email"]').type('hola@hola.com'); //esto rellene automaticamente los datos del login 
        cy.wait(2000);
        cy.get('[data-cy="password"]').type('123456');
        cy.get('[data-cy="input-inicio"]').submit();// Con esto da clik para inicar
        cy.get('[data-id-servicio]').last().click();
        cy.wait(1000);
        cy.get('[data-cy="BTN-SIG"]').click();
        cy.get('[data-cy="fecha"]').type('2022-08-23');
        cy.wait(1000)
        cy.get('[data-cy="hora"]').type('12:30');
        cy.wait(5000);
        cy.get('[data-cy="BTN-SIG"]').click();
        cy.wait(3000);
        cy.get('[data-id-cita="cita"]').click();

       

    
        //cy.get('[data-cy="cerrar-sesion"]').click();


    });
});