export class AssertProductDetailsPage {

    checkProductDetailItemUrl = (item: string) => {
        cy.log('***checkProductDetailItemUrl***')
        cy.url().should('contain', `product_details/${item}`)
    }

}

export default new AssertProductDetailsPage();
