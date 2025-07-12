/// <reference types="cypress" />

import { expect } from "chai";

//Get all products
describe("GET /productsList", () => {
  it("should return a list of products", () => {
    cy.request("https://automationexercise.com/api/productsList").then((response) => {
      expect(response.status).to.eq(200);

      const body = typeof response.body === "string"
        ? JSON.parse(response.body)
        : response.body;

      expect(body).to.have.property("products");
      expect(body.products).to.be.an("array");
      expect(body.products.length).to.be.greaterThan(0);
    });
  });
});

//Get all brands
describe("GET /brandsList", () => {
  it("should return a list of brands", () => {
    cy.request("https://automationexercise.com/api/brandsList").then((response) => {
      expect(response.status).to.eq(200);

      const body = typeof response.body === "string"
        ? JSON.parse(response.body)
        : response.body;

      expect(body).to.have.property("brands");
      expect(body.brands).to.be.an("array");
      expect(body.brands.length).to.be.greaterThan(0);
    });
  });
});

//Search product by keyword
describe("POST /searchProduct", () => {
  it("should return products matching the search term", () => {
    cy.request({
      method: "POST",
      url: "https://automationexercise.com/api/searchProduct",
      headers: {
        "Content-Type": "application/x-www-form-urlencoded"
      },
      form: true,
      body: {
        search_product: "top"
      }
    }).then((response) => {
      expect(response.status).to.eq(200);

        const body = typeof response.body === "string"
        ? JSON.parse(response.body)
        : response.body;

      expect(body).to.have.property("products");


      const products = body.products;

      expect(Array.isArray(products)).to.be.true;
      expect(products.length).to.be.greaterThan(0);

      products.forEach((product: any) => {
        expect(product).to.have.property("top");
      });
    });
  });
});
