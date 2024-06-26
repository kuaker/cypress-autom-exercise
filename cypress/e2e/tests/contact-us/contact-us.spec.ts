import AssertContactUsPage from "../../../support/assertPages/AssertContactUsPage"
import AssertHomePage from "../../../support/assertPages/AssertHomePage"
import Header from "../../../support/modules/Header"
import ContactUsPage from "../../../support/pages/ContactUsPage"


context('E2E Tests', () => {

    beforeEach(() => {
        cy.visit('/')
        AssertHomePage.checkSliderIsVisible()
    })

    describe('Contact us test cases', () => {
        it('Contact Us Form', () => {
            Header.clickOnContactUs()
            AssertContactUsPage.checkGetInTouchTitleIsVisible()
            ContactUsPage.fillContactUsForm()
            AssertContactUsPage.checkSuccessMessageIsVisible()
            ContactUsPage.clickOnOkButton()
            AssertHomePage.checkSliderIsVisible()
        })
    })
})
