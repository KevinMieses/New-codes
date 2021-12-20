describe('', () => {
    
 beforeEach('', () =>{ 

 cy.visit('http://automationpractice.com/index.php?id_category=3&controller=category')

 })
 
 it("Large Tops search", ()=> {

 cy.get('#layered_category_4').check()
   .get('#layered_id_attribute_group_3').check()
   .get('#layered_id_attribute_group_3').check()
   .get('#layered_category_4').uncheck()

 })


})