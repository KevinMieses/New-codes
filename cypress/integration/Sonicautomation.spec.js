/// <reference types="cypress" />
describe ('Search elements',()=>{

before('',()=>{
    cy.visit('https://2aoj2-aaaaa-aaaad-qa4qq-cai.ic.fleek.co/')

})
     it('Swap tab',()=>{ 


        cy.get('.css-zk1pc6 > .chakra-stack')
        .should('be.visible')
        .should('have.text','Sonic')

        cy.get('#tabs-1--tab-0')
          .should('be.visible')
          .should('have.text','Swap')

      cy.get('#tabs-1--tab-1')
        .should('be.visible')
        .should('have.text','Liquidity')

      cy.get('#tabs-1--tab-2')
         .should('be.visible')
         .should('have.text','Assets')

      cy.get('#tabs-1--tab-3')
         .should('be.visible')
         .should('have.text','Activity')

      cy.get('.css-vvpvr5')
         .should('be.visible')
         .should('have.text','Install Plug')

     })

    it('Liquity tab',()=>{
       cy.get('#tabs-1--tab-1').click()

        cy.get('.css-1oygcxo')
          .should('be.visible')
          .should('have.text','Liquidity Provider Rewards')

        cy.get('.css-9svypg > .chakra-text')
           .should('be.visible')
           .should('have.text','Liquidity providers earn a 0.3% fee on all trades proportional to their share of the pool. Fees are added to the pool, accrue in real time and can be claimed by withdrawing your liquidity. If you want to learn review our documentation.')

        cy.get('.css-22dskd')
            .should('be.visible')
            .should('have.text','Your Liquidity Positions')  

            cy.get('.css-l0aeb3 > .chakra-button')
              .should('be.visible')
              .should('have.text','Create Position')

              cy.get('.css-1ppz6m1 > svg') 
                .should('be.visible')

            cy.get('.css-1imtb7y > .chakra-stack > .chakra-text')
              .should('be.visible')
              .should('have.text','Your liquidity positions will appear here.')

            cy.get('.css-1imtb7y > .chakra-stack > .chakra-button')
                .should('be.visible')
                .should('have.text','Install Plug')

            cy.get('.css-9xuvt2')
              .should('be.visible')
              .should('have.text','Sonic v1.1.0') 
            
    })

    it('Assets tab',()=>{   
        cy.get('#tabs-1--tab-2').click()
        
        cy.get('.css-1oygcxo')
          .should('be.visible')
          .should('have.text','Assets Details')

        cy.get('.css-9svypg > .chakra-text')
          .should('be.visible')
          .should('have.text','View all the assets you have deposited or obtained on Sonic through our Liquidity and Swaps protocols, and deposit more or withdraw them to your wallet.')
 
        cy.get('.css-22dskd')
          .should('be.visible')
          .should('have.text','Your Assets')

        cy.get('.css-1ppz6m1 > svg') 
                .should('be.visible') 

        cy.get('.css-1imtb7y > .chakra-stack > .chakra-text')
          .should('be.visible')
          .should('have.text','Your assets will appear here.')

        cy.get('.css-1imtb7y > .chakra-stack > .chakra-button') 
          .should('be.visible')
          .should('have.text','Install Plug')

        cy.get('.css-9xuvt2')
          .should('be.visible')
          .should('have.text','Sonic v1.1.0') 

    })

    it('Activity tab',()=>{  
       cy.get('#tabs-1--tab-3').click()

        cy.get('.css-22dskd')
          .should('be.visible')
          .should('have.text','Your Activity')

        cy.get('.css-1ppz6m1 > svg') 
                .should('be.visible')

        cy.get('.css-1imtb7y > .chakra-stack > .chakra-text')
        .should('be.visible')
        .should('have.text','Your transaction activity will appear here.')

        cy.get('.css-1imtb7y > .chakra-stack > .chakra-button') 
        .should('be.visible')
        .should('have.text','Install Plug')

       cy.get('.css-9xuvt2')
        .should('be.visible')
        .should('have.text','Sonic v1.1.0') 




    })


})
