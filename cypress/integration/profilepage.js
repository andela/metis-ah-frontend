describe('Profile page test', () => {
  before(() => {
    cy.visit('http://localhost:3500/users/12', {
      onBeforeLoad: (win) => {
        const token = 'b05fb9d69e0a51c46266f3c2c646ece8795914e2ba3705c503309e49017dc54e134692891e92b474d0655197e68e4f122be64073d8f0b8cde0d156c17f550f7ec0e9839099a73f8143638c0779a430657ba2727a424baa33166927f16997c3df0011c7fbc387383c61a5bab5b700d479a3909f37c1f971658e5bb1c63bf823483cdea635275165586ed2b47e1c15da585f10617d249cc22a1a3af14354a9fca5d219ef10d32b36d4471dd74a39e2befbeb42f0c4d8afdbf90c';
        win.localStorage.setItem('userToken', token);
      }
    });
  });

  it('Visit the profile page', () => {
    cy.visit('http://localhost:3500/users/12');
    cy.get('.ProfileContainer');
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
      .type('Hello, I am a senior software developer who lives in toronto canadab');
    cy.get('[type="submit"]')
      .click();
  });
});
