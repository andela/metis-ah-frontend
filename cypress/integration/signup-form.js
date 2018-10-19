describe('THE FORM TEST', () => {
  it('Visit the signup form', () => {
    cy.visit('http://localhost:3500');
    cy.contains('GET STARTED').click();

    cy.get('input[name="username"]')
      .type('Author name');

    cy.get('input[name="email"]')
      .type('fake@email.com');

    cy.get('input[name="password"]')
      .type('Password1111');

    cy.get('input[name="confirmPassword"]')
      .type('Password1111');
    cy.contains('REGISTER')
      .click();

    cy.get('.closer')
      .click();
  });
});
