describe('TEST CREATE ARTICLE', () => {
  it('write an article', () => {
    cy.visit('http://localhost:3500');
    cy.get('.login-button')
      .click();

    cy.get('.tab_login_button')
      .click();

    cy.get('.login_email')
      .type('metis.ah2018@gmail.com');

    cy.get('.login_password')
      .type('IamAdminFolks');

    cy.get('.login_button')
      .click();

    cy.wait(10000);
    cy.get('.write_button')
      .click();

    cy.get('.ArticleTitle')
      .type('New Test Title');

    cy.get('.ArticleDesc')
      .type('New Test Description');

    cy.get('.ck-editor__editable')
      .type(`
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque massa
        neque, aliquet et lacus at, iaculis tristique turpis.
      `);

    cy.get('.CategorySelector')
      .click()
      .click();


    cy.get('.TagSelector')
      .click()
      .click();

    cy.get('.publish')
      .click();
  });
});
