var chai = require("chai");
var chaiHttp = require("chai-http");
var server = require("../server");

const API = "http://localhost:3000";
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
      const barcode = "143";
      chai
        .request(API)
        .get("/items/view/" + barcode)
        .end((err, res) => {
          res.should.have.status(200);
          // res.body.should.be.a("object");
          // console.log(res.body)
          // res.body.should.have.property("name");
          // res.body.should.have.property("quantity");
          // res.body.should.have.property("cost");
          // res.body.should.have.property("_id");
          done();
        });
    });
  });

  describe("Test POST route", () => {
    it("it should post an item", (done) => {
      const item = {
        barcode: Math.floor(Math.random() * 1000) + 5005,
        name: "mang juan",
        quantity: Math.floor(Math.random() * 100) + 75,
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

  //edit item
});
