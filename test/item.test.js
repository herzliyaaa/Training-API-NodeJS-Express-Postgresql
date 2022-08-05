var chai = require("chai");
var chaiHttp = require("chai-http");
var server = require("../server");

const API = `http://localhost:${process.env.PORT}`;
const expect = chai.expect;
const should = chai.should();
chai.use(chaiHttp);

// parent block
describe("Items API", () => {
  describe("Test GET route /items", () => {
    it("It should return all items", (done) => {
      chai
        .request(API)
        .get("/items")
        .end((err, res) => {
          res.should.have.status(200);
          res.body.should.be.a("array");
          res.body.length.should.not.be.equal(0);
          done();
        });
    });
  });

  describe("Test GET/:id route", () => {
    it("it should get an item by the given id", (done) => {
      const barcode = "89998";
      chai
        .request(API)
        .get(`/items/view/${barcode}`)
        .end((err, res) => {
          res.should.have.status(200);
          res.body.should.have
          .property("message")
          .to.equal(`Items of ${barcode}`);
          done();
        });
    });
  });

  describe("Test POST route", () => {
    it("it should post an item", (done) => {
      const item = {
        barcode: Math.floor(Math.random() * 156464) + 2,
        name: "mangjuan",
        quantity: Math.floor(Math.random() * 50) + 1,
        cost: Math.floor(Math.random() * 30) + 20,
      };

      chai
        .request(API)
        .post("/items/add")
        .send(item)
        .end((err, res) => {
          res.should.have.status(200);
          res.body.should.have
            .property("message")
            .to.equal("Items Created Successfully!");
          res.body.should.have
            .property("data")
            .which.is.an("object")
            .and.has.property("name")
            .to.deep.equal("mangjuan");
          done();
        });
    });
  });

  describe("Test PUT route", () => {
    it("it should update an item", (done) => {
      const barcode = "147141";
      const item = {
        name: "cracklings",
        quantity: Math.floor(Math.random() * 80) + 1,
        cost: Math.floor(Math.random() * 10) + 3,
      };

      chai
        .request(API)
        .put(`/items/edit/${barcode}`)
        .send(item)
        .end((err, res) => {
          res.should.have.status(200);
          res.body.should.have
            .property("message")
            .to.equal("Item Updated Successfully!");
          res.body.should.have
            .property("data")
            .which.is.an("object")
            .and.has.property("name")
            .to.equal("cracklings");
          done();
        });
    });
  });

  describe("Test DELETE/:id route", () => {
    it("it should delete an item by the given id", (done) => {
      const barcode = "101469";
      chai
        .request(API)
        .delete(`/items/delete/${barcode}`)
        .end((err, res) => {
          res.should.have.status(200);
          done();
        });
    });
  });

  
});
