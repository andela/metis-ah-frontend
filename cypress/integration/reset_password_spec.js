const url = 'http://localhost:3500/auth/reset-password';

describe('PASSWORD RESET: EMAIL VERIFICATION TESTS', () => {
  it('Visit the Reset password page', () => {
    cy.visit(url);
    cy.contains('SEND');
  });
  it('fails when submitting an empty field', () => {
    cy.visit(url);
    cy.contains('SEND')
      .click();
  });
  it('fails for invalid user email', () => {
    cy.visit(url);
    cy.get('input[name="email"]')
      .type('johngorithm@me.com');
    cy.contains('SEND')
      .click();
  });

  it('fails when is not an email', () => {
    cy.visit(url);
    cy.get('input[name="email"]')
      .type('johngorithm');
    cy.contains('SEND')
      .click();
  });

  it('passes when email is valid and user exists', () => {
    cy.visit(url);
    cy.get('input[name="email"]')
      .type('johngorithm@gmail.com');
    cy.contains('SEND')
      .click();
  });
});

describe('PASSWORD RESET: NEW PASSWORD UPDATE TESTS', () => {
  it('Visit the Reset Update page', () => {
    cy.visit(`${url}/kj345khj4khk2ljk34ghgh323jk5h32`);
    cy.contains('RESET PASSWORD');
  });
  it('fails when submitting an empty field', () => {
    cy.visit(`${url}/kj345khj4khk2ljk34ghgh323jk5h32`);
    cy.get('input[type="submit"]')
      .click();
  });
  it('fails for invalid user password', () => {
    cy.visit(`${url}/kj345khj4khk2ljk34ghgh323jk5h32`);
    cy.get('input[name="password"]')
      .type('johngorithm@me.com');
    cy.get('input[type="submit"]')
      .click();
  });

  it('fails when password is less than 8 Characters', () => {
    cy.visit(`${url}/kj345khj4khk2ljk34ghgh323jk5h32`);
    cy.get('input[name="password"]')
      .type('neWpass');

    cy.get('input[name="confirmPassword"]')
      .type('neWpass');

    cy.get('input[type="submit"]')
      .click();
  });

  it('fails when password does not contain either an uppercase and a lowercase Characters', () => {
    cy.visit(`${url}/kj345khj4khk2ljk34ghgh323jk5h32`);
    cy.get('input[name="password"]')
      .type('newpasswordaaa');

    cy.get('input[name="confirmPassword"]')
      .type('newpasswordaaa');

    cy.get('input[type="submit"]')
      .click();
  });

  it('fails when passwords do not match', () => {
    cy.visit(`${url}/kj345khj4khk2ljk34ghgh323jk5h32`);
    cy.get('input[name="password"]')
      .type('newPassword');

    cy.get('input[name="confirmPassword"]')
      .type('PasswordNew');

    cy.get('input[type="submit"]')
      .click();
  });

  it('passes when passwords match and are valid or fail for if token has expired', () => {
    cy.visit(`${url}/kj345khj4khk2ljk34ghgh323jk5h32`);
    cy.get('input[name="password"]')
      .type('newPassword@22');

    cy.get('input[name="confirmPassword"]')
      .type('newPassword@22');

    cy.get('input[type="submit"]')
      .click();
  });
});
