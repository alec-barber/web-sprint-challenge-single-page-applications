describe('Pizza App Testing', () => {
  // state refresh before each test
  beforeEach( () => {
    cy.visit('http://localhost:3000/pizza')
  })

  // Helpers/Getters  
  const nameInput = () => cy.get('input[name=name]')
  const sizeInput = () => cy.get('select[name=size]')
  const sauceInput = () => cy.get('input[name=sauce]')
  const toppingInput0 = () => cy.get('input[name=extraCheese]')
  const toppingInput1 = () => cy.get('input[name=sausage]')
  const toppingInput2 = () => cy.get('input[name=pepperoni]')
  const toppingInput3 = () => cy.get('input[name=bacon]')
  const toppingInput4 = () => cy.get('input[name=ham]')
  const toppingInput5 = () => cy.get('input[name=onion]')
  const toppingInput6 = () => cy.get('input[name=mushroom]')
  const toppingInput7 = () => cy.get('input[name=greenPeppers]')
  const toppingInput8 = () => cy.get('input[name=spinach]')
  const toppingInput9 = () => cy.get('input[name=olives]')
  const glutenInput = () => cy.get('input[name=gluten]')
  const specialInput = () => cy.get('input[name=special]')
  const quantityInput = () => cy.get('input[name=quantity]')
  const submitBtn = () => cy.get(`button[id="order-button"]`)

  const toppings = () => cy.get('[type="checkbox"]')

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
    toppingInput0().should('exist')
    toppingInput1().should('exist')
    toppingInput2().should('exist')
    toppingInput3().should('exist')
    toppingInput4().should('exist')
    toppingInput5().should('exist')
    toppingInput6().should('exist')
    toppingInput7().should('exist')
    toppingInput8().should('exist')
    toppingInput9().should('exist')
    glutenInput().should('exist')
    specialInput().should('exist')
    quantityInput().should('exist')
    submitBtn().should('exist')

    toppings().should('exist')
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

    it("Checks to see that the form submits when the first three inputs are filled out, and submit button is clicked.", () => {
      nameInput().type("Sons of Thunder")
      sizeInput().select("X-Large")
      sauceInput().check("Garlic Ranch")
      submitBtn().click()
      nameInput().should("have.value", "")
    })
  })

  describe("Filling out the form with toppings, and then submitting it works.", () => {
    it("Successful navigation to the site.", () => {
      cy.url().should("include", "localhost");
    })

    it("Submit button starts out disabled.", () => {
        submitBtn().should("be.disabled");
    })

    it("can type in the inputs", () => {
        nameInput()
            .should("have.value", "")
            .type("Johnny B. Goode")
            .should("have.value", "Johnny B. Goode")

        sizeInput()
            .should("have.value", "")
            .select("Medium")
            .should("have.value", "Medium")

        sauceInput()
            .should("have.value", "Original Red")
            .check("Garlic Ranch")
            .should("have.value", "Garlic Ranch")

        toppingInput0()
            .should("not.be.checked", false)
            .check()
            .should("be.checked", "extraCheese")

        // toppings()
        //     .check()
    })
  })

})