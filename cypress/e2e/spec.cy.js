describe('Main Page', () => {
  beforeEach(() => {
    cy.intercept("GET", "https://rancid-tomatillos.herokuapp.com/api/v2/movies", {
      statusCode: 200,
      fixture: "testData"
    })
  .visit("http://localhost:3000/")
  });
  it("should be able to visit page", () => {
    cy.contains("Rancid Tomatillos").get("h1");
  });
  it("should be able to render movies", () => {
    cy.get("section").first()
      .contains('Black Adam')
      .contains('4.0')
      .get("img[src='https://image.tmdb.org/t/p/original//pFlaoHTZeyNkG83vxsAJiGzfSsa.jpg']")

    cy.get("section").last()
      .contains("X")
      .get("p")
      .contains('1.0')
      .get(
        "img[src='https://image.tmdb.org/t/p/original//woTQx9Q4b8aO13jR9dsj8C9JESy.jpg']"
      );
  });
  it('should display a 500 error when the server is down', () => {
    cy.intercept("https://rancid-tomatillos.herokuapp.com/api/v2/movies", {forceNetworkError: true})
    cy.visit("http://localhost:3000/")
    cy.get("h1")
    cy.contains("500 Error! Try again later!")
  })
});
describe('Movie Detail Page', () => {
  beforeEach(() => {
    cy.intercept("GET", "https://rancid-tomatillos.herokuapp.com/api/v2/movies", {
      statusCode: 200,
      fixture: "testData"
    })
  .visit("http://localhost:3000/")
  });
  it("should be able to display the info a particular movie when clicked", () => {
    cy.intercept("GET", "http://localhost:3000/436270", {
      statusCode: 200,
      fixture: "testData",
    });
    cy.get("h3").first()
    .contains("Black Adam").click();
    cy.get(
      "img[src='https://image.tmdb.org/t/p/original//pFlaoHTZeyNkG83vxsAJiGzfSsa.jpg']"
    );
    cy.get("h3").contains("Title: Black Adam")
    cy.get("p").contains("Average Rating: 4")
    cy.get("p").contains("Release Date: 2022-10-19")
  })
  it("should be able to go back to the home page", () => {
    cy.go('back');
    cy.visit("http://localhost:3000");
    cy.get("section")
      .contains("Black Adam")
      .contains("4.0")
      .get(
        "img[src='https://image.tmdb.org/t/p/original//pFlaoHTZeyNkG83vxsAJiGzfSsa.jpg']"
      );
    cy.get("section")
      .contains("The Woman King")
      .contains("4.0")
      .get(
        "img[src='https://image.tmdb.org/t/p/original//438QXt1E3WJWb3PqNniK0tAE5c1.jpg']"
      );
  })
});