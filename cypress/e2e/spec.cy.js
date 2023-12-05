describe('Rancid Tomatillos see movie info flow', () => {
  beforeEach(() => {
    cy.visit("http://localhost:3000/");
  });
  it('should be able to visit page', () => {
    cy.contains('Rancid Tomatillos')
    .get('h1')
  })
})