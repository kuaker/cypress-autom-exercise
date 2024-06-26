import AssertAccountCreatedPage from "../../../support/assertPages/AssertAccountCreatedPage"
import AssertDeleteAccount from "../../../support/assertPages/AssertDeleteAccount"
import AssertHeader from "../../../support/assertPages/AssertHeader"
import AssertHomePage from "../../../support/assertPages/AssertHomePage"
import AssertLoginPage from "../../../support/assertPages/AssertLoginPage"
import AssertSignUpPage from "../../../support/assertPages/AssertSignUpPage"
import AccountInformation from "../../../support/modules/AccountInformation"
import AddressInformation from "../../../support/modules/AddressInformation"
import Header from "../../../support/modules/Header"
import AccountCreatedPage from "../../../support/pages/AccountCreatedPage"
import LoginPage from "../../../support/pages/LoginPage"
import SignUpPage from "../../../support/pages/SignUpPage"

context('E2E Tests', () => {

    beforeEach(() => {
        cy.visit('/')
        AssertHomePage.checkSliderIsVisible()
    })

    describe('Register test cases', () => {
        it('Register User', () => {
            Header.clickOnLoginSignUpButton()
            AssertLoginPage.checkSignUpTitleIsVisible()
            LoginPage.fillNameAndEmailForSignUp()
            LoginPage.clickOnSignUpButton()
            AssertSignUpPage.checkAccountInformationTitleIsVisible()
            AccountInformation.setNameEmailAndPassword()
            AccountInformation.setDateOfBirth()
            AccountInformation.selectCheckBoxNewLetter().check()
            AccountInformation.selectCheckBoxOfferss().check()
            AddressInformation.fillFormWithInformation()
            SignUpPage.clickOnCreateAccountButton()
            AssertAccountCreatedPage.checkAccountWasCreated()
            AccountCreatedPage.clickOnContinueButton()
            AssertHeader.checkLoggedAsUsernameIsVisible()
            Header.clickOnDeleteAccount()
            AssertDeleteAccount.checkAccountDeleteMessagesAreVisible()
        })

        it('Register User with existing email', () => {
            Header.clickOnLoginSignUpButton()
            AssertLoginPage.checkSignUpTitleIsVisible()
            LoginPage.fillSignUpFieldsWithExistingData()
            LoginPage.clickOnSignUpButton()
            AssertLoginPage.checkEmailAlreadyExists()
        })
    })
})
