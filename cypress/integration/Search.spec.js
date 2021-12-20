describe("Search test cases", () => {

    beforeEach('', () => {
        cy.log('Ejecutando precondiciones a las pruebas')
    })
    
    afterEach('', () => {
        cy.log('Ejecutando todas las postcondiciones a las pruebas')
    })

    it("Search dresses",() => {
   cy.visit('http://automationpractice.com/index.php')
   cy.get('#search_query_top').type('dress')
     .get('#searchbox > .btn').click()
     .get('.lighter').contains('"dress"')
    
    })

   it('Search hats', () => {
   cy.visit('http://automationpractice.com/index.php') 
     .get('#search_query_top').type('hat')
     .get('#searchbox > .btn').click()
     .get('.lighter').contains('"hat"')





   })
