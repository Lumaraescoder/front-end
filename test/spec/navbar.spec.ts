describe('Nav Menus', () => {
  // For desktop view

  context('iphone-5 resolution', () => {
    beforeEach(() => {
    /**
     * Run these tests as if in a desktop browser,
     * with a 720p monitor
     */
      cy.viewport('iphone-5');   
    });  
    describe('When you visit home', () => {
      it('Should visit home page', () => {
        cy.visit('/');
      });
      describe('Mmenu', () => {
        it('Should open the mmenu', () => {
          cy.get('.hamburger').should('be.visible');
          cy.get('.hamburger').click();
          cy.get('.sidebar').should('have.class', 'active');
          cy.get('.sidebar').should('be.visible');
        });
        describe('nav', () => {
          it('Should find the menu links at the sidebar', () => {
            cy.get('.menu').should('be.visible');
          });
        });
      });
    });
  });

  context('720p resolution', () => {
    beforeEach(() => {
      /**
       * Run these tests as if in a desktop browser,
       * with a 720p monitor
       */
      cy.viewport(1280, 720);
    });
    // describe('When you visit home', () => { });
  });
});

export {};