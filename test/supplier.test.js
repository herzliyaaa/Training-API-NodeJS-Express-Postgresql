var chai = require("chai");
var chaiHttp = require("chai-http");
var server = require("../server");

const API = `http://localhost:${process.env.PORT}`;

const should = chai.should();
chai.use(chaiHttp);

// parent block
describe("Suppliers API", () => {
  // assertion for GET
  describe("Test GET route /suppliers", () => {
    it("It should return all suppliers", (done) => {
      chai
        .request(API)
        .get("/suppliers")
        .end((err, res) => {
          res.should.have.status(200);
          res.body.should.be.a("array");
          res.body.length.should.not.be.equal(0);
          done();
        });
    });
  });

  //another assertion for get/:id
  describe("Test GET/:id route", () => {
    it("it should get an supplier by the given id", (done) => {
      const supplier_id = "193";
      chai
        .request(API)
        .get(`/suppliers/view/${supplier_id}`)
        .end((err, res) => {
          res.should.have.status(200);
          done();
        });
    });
  });

  describe("Test POST route", () => {
    it("it should post supplier", (done) => {
      const newSupplier = {
        name: "Biotech",
        address: "Banga",
        contact: `09${Math.floor(Math.random() * 0934246543) + 300}`,
      };

      chai
        .request(API)
        .post("/suppliers/add")
        .send(newSupplier)
        .end((err, res) => {
          res.should.have.status(200);
          res.body.should.have
            .property("message")
            .to.equal("Supplier Created Successfully!");
          res.body.should.have
            .property("data")
            .which.is.an("object")
            .and.has.property("name")
            .to.deep.equal("Biotech");
          done();
        });
    });
  });

//sdjahdsdadhhoiewhroiao
describe("Test PUT route", () => {
  it("it should update a suppler", (done) => {
    const supplier_id = "218";
    const updateSupplier = {
      name: "Biotech",
      address: "Tantangan",
      contact: `09${Math.floor(Math.random() * 0934246543) + 300}`,
    };

    chai
      .request(API)
      .put(`/suppliers/edit/${supplier_id}`)
      .send(updateSupplier)
      .end((err, res) => {
        res.should.have.status(200);
        res.body.should.have
          .property("message")
          .to.equal("Supplier Updated Successfully!");
        done();
      });
  });
});

describe("Test DELETE/:id route", () => {
  it("it should delete an supplier by the given id", (done) => {
    const supplier_id = "101469";
    chai
      .request(API)
      .delete(`/suppliers/delete/${supplier_id}`)
      .end((err, res) => {
        res.should.have.status(200);
        done();
      });
  });
});



});
