describe('Main Page', () => {
  beforeEach(() => {
    cy.intercept("GET", "**/movie/popular**", {
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
      .contains('7.2')
      .get("img[src='https://image.tmdb.org/t/p/original//pFlaoHTZeyNkG83vxsAJiGzfSsa.jpg']")

    cy.get("section").last()
      .contains("X")
      .get("p")
      .contains('6.7')
      .get(
        "img[src='https://image.tmdb.org/t/p/w500/woTQx9Q4b8aO13jR9dsj8C9JESy.jpg']"
      );
  });
  it('should display a 500 error when the server is down', () => {
    cy.intercept("**/movie/popular**", {forceNetworkError: true})
    cy.visit("http://localhost:3000/")
    cy.get("h1")
    cy.contains("500 Error! Try again later!")
  })
});
describe('Movie Detail Page', () => {
  beforeEach(() => {
    cy.intercept("GET", "**/movie/popular**", {
      statusCode: 200,
      fixture: "testData"
    })
  .visit("http://localhost:3000/")
  });
  it("should be able to display the info a particular movie when clicked", () => {
    cy.intercept("GET", "**/movie/436270**", {
      statusCode: 200,
      body: {
        "id": 436270,
        "poster_path": "https://image.tmdb.org/t/p/w500/pFlaoHTZeyNkG83vxsAJiGzfSsa.jpg",
        "backdrop_path": "https://image.tmdb.org/t/p/w500/bQXAqRx2Fgc46uCVWgoPz5L5Dtr.jpg",
        "title": "Black Adam",
        "vote_average": 7.2,
        "vote_count": 4250,
        "popularity": 2847.433,
        "release_date": "2022-10-19",
        "overview": "Nearly 5,000 years after he was bestowed with the almighty powers of the Egyptian gods—and imprisoned just as quickly—Black Adam is freed from his earthly tomb, ready to unleash his unique form of justice on the modern world."
      }
    });
    cy.get("h3").first()
    .contains("Black Adam").click();
    cy.get(
      "img[src='https://image.tmdb.org/t/p/w500/pFlaoHTZeyNkG83vxsAJiGzfSsa.jpg']"
    );
    cy.get("h1").contains("Black Adam")
    cy.get("span").contains("7.2")
    cy.get("p").contains("Release Date: 2022-10-19")
  })
  it("should be able to go back to the home page", () => {
    cy.go('back');
    cy.visit("http://localhost:3000");
    cy.get("section")
      .contains("Black Adam")
      .contains("7.2")
      .get(
        "img[src='https://image.tmdb.org/t/p/w500/pFlaoHTZeyNkG83vxsAJiGzfSsa.jpg']"
      );
    cy.get("section")
      .contains("The Woman King")
      .contains("7.9")
      .get(
        "img[src='https://image.tmdb.org/t/p/w500/438QXt1E3WJWb3PqNniK0tAE5c1.jpg']"
      );
  })
});