var chai = require("chai");
var chaiHttp = require("chai-http");
var server = require("../server");

const API = `http://localhost:${process.env.PORT}`;

const should = chai.should();
chai.use(chaiHttp);

// parent block
describe("Items API", () => {

  // assertion for GET
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

  //another assertion for get/:id
  describe("Test GET/:id route", () => {
    it("it should get an item by the given id", (done) => {
      const barcode = "7342433";
      chai
        .request(API)
        .get(`/items/view/${barcode}`)
        .end((err, res) => {
          res.should.have.status(200);
          // res.body.should.be.a("object");
          // res.body.should.have.property("name");
          // res.body.should.have.property("quantity");
          // res.body.should.have.property("cost");
          // res.body.should.have.property("id");
          // res.body.should.have.property("barcode");
          done();
        });
    });
  });

  describe("Test POST route", () => {
    it("it should post an item", (done) => {
      
      const item = {
        barcode: Math.floor(Math.random() * 10000) + 99999,
        name: "mang juan",
        quantity: Math.floor(Math.random() * 50) + 1,
        cost: Math.floor(Math.random() * 50) + 300,
      };

      chai
        .request(API)
        .post("/items/add")
        .send(item)
        .end((err, res) => {
          res.should.have.status(200);
          // res.body.should.be.a("object");
          // res.body.should.have.property("Items Created Successfully");
          // res.body.should.have.property("name");
          // res.body.should.have.property("quantity");
          // res.body.should.have.property("cost");
          // res.body.should.have.property("barcode");
          done();
        });
    });
  });

//PUT METHOD
  describe("Test PUT route", () => {
    it("it should update an item", (done) => {
      const barcode = "7342433";
      const item = {
        barcode: Math.floor(Math.random() * 10000) + 99999,
        name: "mang juan",
        quantity: Math.floor(Math.random() * 50) + 1,
        cost: Math.floor(Math.random() * 50) + 300,
      };

      chai
        .request(API)
        .put("/items/edit" + barcode)
        .send(item)
        .end((err, res) => {
          res.should.have.status(200);
          // res.body.should.be.a("object");
          // res.body.should.have.property("Items Created Successfully");
          // res.body.should.have.property("name");
          // res.body.should.have.property("quantity");
          // res.body.should.have.property("cost");
          // res.body.should.have.property("barcode");
          done();
        });
    });
  });

  //another assertion for DELETE/:id
  describe("Test DELETE/:id route", () => {
    it("it should delete an item by the given id", (done) => {
      const barcode = "7342433";
      chai
        .request(API)
        .get(`/items/delete/${barcode}`)
        .end((err, res) => {
          res.should.have.status(200);
          // res.body.should.be.a("object");
          // res.body.should.have.property("name");
          // res.body.should.have.property("quantity");
          // res.body.should.have.property("cost");
          // res.body.should.have.property("id");
          // res.body.should.have.property("barcode");
          done();
        });
    });
  });
  
});
