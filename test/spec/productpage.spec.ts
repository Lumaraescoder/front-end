
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
 
 });

 context('720p resolution', () => {
   beforeEach(() => {
     /**
      * Run these tests as if in a desktop browser,
      * with a 720p monitor
      */
     cy.viewport(1280, 720);
   });
   describe('homepage', () => {
    it('Should visit home page', () => {
     cy.visit('/')
   });

   it('Should add a item to a cart', () => {
    cy.get('.add').should('be.visible')
    cy.get('.add').eq(4).click() // Click on fourth element of our array and insert into a card
   })
   it('Should before item is added to cart open the menu and remove a item', () => {
    cy.get('.MuiBadge-badge').should('be.visible')
    cy.get('.MuiBadge-badge').click() 
    cy.get('.MuiPaper-root').should('be.visible')   
    cy.get('.primary').click()   
   })
   })
 });
});

export {};