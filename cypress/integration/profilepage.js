describe('Profile page test', () => {
  it('Visit the profile page', () => {
    cy.visit('http://localhost:3500');
    cy.get('.login-button')
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
    cy.get('.atom__avatar')
      .click();
    cy.get('.profile__menu__item')
      .first()
      .click();
    cy.get('.Profile__edit').click();
    cy.get('#fileUpload').click();
    cy.get('[name="firstname"]')
      .clear()
      .type('jehonadab');
    cy.get('[name="lastname"]')
      .clear()
      .type('Okpukoro');
    cy.get('[name="username"]')
      .clear()
      .type('joeeasy');
    cy.get('[name="email"]')
      .clear()
      .type('joeeasy@gmail.com');
    cy.get('[name="interests"]')
      .clear()
      .type('runing, singing, climbing, jumping');
    cy.get('[name="bio"]')
      .clear()
      .type('Hello, I am a senior software developer who lives in toronto canada');
    cy.get('[type="submit"]')
      .click();
  });
});
