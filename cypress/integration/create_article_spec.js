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
        neque, aliquet et lacus at, iaculis tristique turpis. Nunc orci arcu,
        aliquam nec magna nec, faucibus egestas leo. Maecenas nec sapien id ante
        dictum semper ac eu augue. Morbi interdum odio sit amet turpis ornare,
        non commodo enim maximus. Nullam nisl sapien, congue sit amet sem id,
        condimentum fermentum augue. Suspendisse nec dictum magna. Aenean lobortis
        libero nulla, id auctor justo sagittis consequat. Suspendisse fringilla
        eros eget libero ultrices, id rutrum ante auctor. Nullam a leo facilisis,
        pretium leo eu, sodales mi. Praesent lacinia ultrices justo, vitae volutpat
        erat sodales luctus. Integer consequat lacinia volutpat. Class aptent taciti
        sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos.
        Aliquam pulvinar id justo vitae tincidunt. In suscipit lectus sed
        imperdiet aliquet.
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
