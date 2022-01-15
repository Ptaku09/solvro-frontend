describe('Add to favorites', () => {
  it('Adds articles to favorites', () => {
    cy.visit('/');
    cy.findByText(/articles/i).click();
    cy.wait(250);
    cy.scrollTo('bottom');
    cy.findByLabelText('go-to-top').click();
    cy.findAllByLabelText('add-to-favorites').first().click();
    cy.findAllByLabelText('wrapper').first().click();
    cy.findByText('Favorites').click();
    cy.findByLabelText('read-more').click();
    cy.findByText(/close/i).click();
    cy.scrollTo('top');
    cy.findAllByText(/spaceflight/i)
      .eq(1)
      .click();
    cy.findByText(/check it out!/i).should('exist');
  });
});
