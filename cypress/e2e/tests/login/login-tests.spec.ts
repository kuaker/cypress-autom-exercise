import AssertHeader from "../../../support/assertPages/AssertHeader"
import AssertHomePage from "../../../support/assertPages/AssertHomePage"
import AssertLoginPage from "../../../support/assertPages/AssertLoginPage"
import Header from "../../../support/modules/Header"
import LoginPage from "../../../support/pages/LoginPage"

context('E2E Tests', () => {

    beforeEach(() => {
        cy.visit('/')
        AssertHomePage.checkSliderIsVisible()
    })

    describe('Login test cases', () => {
        it('Login User with correct email and password', () => {
            Header.clickOnLoginSignUpButton()
            AssertLoginPage.checkSignUpTitleIsVisible()
            LoginPage.fillLoginFieldsWithExistingData()
            LoginPage.clickOnLoginButton()
            AssertHeader.checkLoggedAsUsernameIsVisible()
        })

        it('Login User with incorrect email and password', () => {
            Header.clickOnLoginSignUpButton()
            AssertLoginPage.checkSignUpTitleIsVisible()
            LoginPage.fillLoginFieldsWithInvalidData()
            LoginPage.clickOnLoginButton()
            AssertLoginPage.checkInvalidadEmailAndPasswordIsVisible();
        })
    })
})
