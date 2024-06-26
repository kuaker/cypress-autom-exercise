import AssertHomePage from "../../../support/assertPages/AssertHomePage"
import AssertProductDetailsPage from "../../../support/assertPages/AssertProductDetails"
import AssertProductsPage from "../../../support/assertPages/AssertProductsPage"
import Header from "../../../support/modules/Header"
import ProductsPage from "../../../support/pages/ProductsPage"

context('E2E Tests', () => {

    beforeEach(() => {
        cy.visit('/')
        AssertHomePage.checkSliderIsVisible()
    })

    describe('Product us test cases', () => {
        it('Verify All Products and product detail page', () => {
            Header.clickOnProductsButton()
            AssertProductsPage.checkUserNavigateToAllProducts()
            cy.request({ url: `${Cypress.env('baseUrl')}products` }).then((response) => {
                expect(response.status).to.eq(200)
            })
            ProductsPage.clickOnFirstProduct()
            AssertProductDetailsPage.checkProductDetailItemUrl('1')
        })
    })
})
