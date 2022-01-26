// @ts-check

describe('Get api', () => {

 it('returns JSON', () => {
   cy.request('/products')
   .its('headers')
   .its('content-type')
   .should('include', 'application/json')
 })
})