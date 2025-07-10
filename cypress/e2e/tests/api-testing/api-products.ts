import { Pencil } from "../../../support/interfaces"

const validatePencil = (pencil: Pencil) => pencil;

const newPencil: Pencil = {
    title: "BMW Pencil",
    id: 200,
    color: "red"
}

context('Api Tests', () => {
    describe('Products test cases', () => {
        it('Should post a dummy pencil', () => {

            const validatedPencil = validatePencil(newPencil)

            cy.request<Pencil>({
                method: 'POST',
                url: 'https://dummyjson.com/products/add',
                body: validatedPencil
            }).then((reponse) => {
                expect(reponse.body.title).to.be.equal(validatedPencil.title)
            })

        })
    })
})
