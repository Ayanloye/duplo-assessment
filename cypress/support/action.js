Cypress.Commands.add('Login', () => {
    cy.fixture('element').then((el) => {
        cy.visit('/')
        cy.get(el.usernameField).should('be.visible').type(el.standardUser)
        cy.get(el.passwordField).should('be.visible').type(el.password)
        cy.get(el.loginButton).should('be.visible').click()
        cy.url().should('eq', 'https://www.saucedemo.com/inventory.html')
    })
})

Cypress.Commands.add('Logout', () => {
    cy.fixture('element').then((el) => {
        cy.get(el.burgerButton).should('be.visible').click()
        cy.get(el.logoutButton).should('be.visible').click()

    })
})

Cypress.Commands.add('viewInventory', () => {
    cy.fixture('element').then((el) => {
        cy.get(el.inventoryItems).should('have.length.greaterThan', 5).and('not.be.empty')
        cy.get(el.inventoryItems).should('be.visible').and('exist')

    })
})

Cypress.Commands.add('addItemsToCart', () => {
    cy.fixture('element').then((el) => {
        cy.get(el.firstItem).should('be.visible').click()
        cy.get(el.secondItem).should('be.visible').click()
        cy.get(el.cartBadge).should('be.visible').invoke('text').then(val => {
            expect(val).to.equal('2')
        })
        cy.get(el.cartButton).should('be.visible').click()
        cy.get(el.cartItem).should('have.length.greaterThan', 1).and('not.be.empty')
    })
})

Cypress.Commands.add('removeItemsFromCart', () => {
    cy.fixture('element').then((el) => {
        cy.get(el.removeItem1).should('be.visible').and('exist').click()
        cy.get(el.checkCartitem).should('have.length.greaterThan', 0).and('not.be.empty')
    })
})

Cypress.Commands.add('checkout', () => {
    cy.fixture('element').then((el) => {
        cy.get(el.checkoutButton).should('be.visible').and('exist').click()
        cy.get(el.firstnameField).should('be.visible').and('exist').type(el.firstname)
        cy.get(el.lastnameField).should('be.visible').and('exist').type(el.lastname)
        cy.get(el.postalCodeField).should('be.visible').and('exist').type(el.postalCode)
        cy.get(el.continueButton).should('be.visible').and('exist').click()
        cy.get(el.viewCartItem).should('have.length.greaterThan', 1).and('not.be.empty')
        cy.get(el.finishButton).should('be.visible').and('exist').click()
        cy.get(el.successMessage).should('be.visible').and('exist').and('have.text', 'Thank you for your order!')


    })
})

Cypress.Commands.add('filterpage', () => {
    cy.fixture('element').then((el) => {
        cy.get(el.filterContainer).should('be.visible').and('exist').select('za')
        cy.get(el.filterContainer).should('be.visible').and('exist').select('lohi')
        cy.get(el.filterContainer).should('be.visible').and('exist').select('hilo')


    })
})