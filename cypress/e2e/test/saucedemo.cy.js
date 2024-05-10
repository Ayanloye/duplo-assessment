let el
describe('Duplo Assessment', () => {
  beforeEach('User can login successfully',() => {
    cy.fixture('element').then((sel) => {
      el = sel
      cy.Login()
    })
  })

  afterEach('User can logout successfully',() => {
    cy.Logout()
  })

  it('User can login Successfully', () => {
    cy.Login()
  })

  it('Check that inventory is visible and not empty', () => {
    cy.viewInventory()
  })

  it('Check that user can Filter pages', () => {
    cy.filterpage()
  })

  it('Add Items to cart and View item added to cart', () => {
    cy.addItemsToCart()
  })

  it('Check that cart is visible and not empty then remove from cart', () => {
    cy.addItemsToCart()
    cy.removeItemsFromCart()

  })

  it('Check that user can checkout', () => {
    cy.addItemsToCart()
    cy.checkout()

  })


})
