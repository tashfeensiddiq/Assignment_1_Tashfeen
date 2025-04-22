describe("Login and check logo assertion", function(){

    it("Is Logo visible", function(){
        cy.visit("clm.selisestage.com")
        cy.get('#mat-input-0').type("ibrahim.khalil@selise.ch")
        cy.get('#mat-input-1').type("Selise@2023")
        cy.xpath('//*[@id="login_form"]/div[2]/button/span[2]',  { timeout: 10000 }).then($el => {
            if ($el.is(':visible')) {
              cy.wrap($el).click();

              cy.wait(10000); 
              cy.get('.toolbar-site-logo').should('be.visible');

              cy.get('.avatar').click()
              cy.get('#logout > .mat-mdc-menu-item-text > span').click()

            } 
    })


})


})