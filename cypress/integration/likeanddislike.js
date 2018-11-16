describe('Profile page test', () => {
  it('Visit the profile page', () => {
    cy.visit('localhost:3500/articles/170/view');
    cy.get('.like')
      .click();
    cy.get('.tab_login_button')
      .click();

    cy.get('.login_email')
      .type('jehonadabokpus@gmail.com');

    cy.get('.login_password')
      .type('jOe4life');

    cy.get('.login_button')
      .click();
    cy.wait(10000);
    cy.get('.like')
      .click();
    cy.get('.dislike')
      .click();
    cy.get('.like')
      .click();
  });
});
