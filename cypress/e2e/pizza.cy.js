describe('Pizza App Testing', () => {
  // state refresh before each test
  beforeEach( () => {
    cy.visit('http://localhost:3000/pizza')
  })

  // Helpers/Getters  
  const nameInput = () => cy.get('input[name=name]')
  const sizeInput = () => cy.get('select[name=size]')
  const sauceInput = () => cy.get('input[name=sauce]')
  const submitBtn = () => cy.get(`button[id="order-button"]`)

  // Sanity Check
  it("Sanity check to make sure the tests work.", () => {
    expect(1 + 2).to.equal(3)
    expect(2 + 2).not.equal(5)
    expect({}).not.to.equal({})
  })

  it("The correct elements are showing.", () => {
    nameInput().should('exist')
    sizeInput().should('exist')
    sauceInput().should('exist')
    submitBtn().should('exist')
  })

  describe("Filling out the form minimally and submitting it.", () => {
    it("Successful navigation to the site.", () => {
      cy.url().should("include", "localhost");
  })

  it("Submit button starts out disabled.", () => {
      submitBtn().should("be.disabled");
  })

  it("can type in the inputs", () => {
      nameInput()
          .should("have.value", "")
          .type("John Wick")
          .should("have.value", "John Wick")

      sizeInput()
          .should("have.value", "")
          .select("Small")
          .should("have.value", "Small")

      sauceInput()
          .should("have.value", "Original Red")
          .check("BBQ")
          .should("have.value", "BBQ")
  })

  it("The submit button enables when the first three inputs are filled out.", () => {
      nameInput().type("Sons of Thunder")
      sizeInput().select("X-Large")
      sauceInput().check("Garlic Ranch")
      submitBtn().should("not.be.disabled")
  })

  })

})