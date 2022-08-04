var chai = require("chai");
var chaiHttp = require("chai-http");
var server = require("../server");

const API = `http://localhost:${process.env.PORT}`;

const should = chai.should();
chai.use(chaiHttp);

// parent block
describe("Customers API", () => {

  // assertion for GET
  describe("Test GET route /customers", () => {
    it("It should return all customers", (done) => {
      chai
        .request(API)
        .get("/customers")
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
    it("it should get an customer by the given id", (done) => {
      const customer_id = "4";
      chai
        .request(API)
        .get(`/customers/view/${customer_id}`)
        .end((err, res) => {
          res.should.have.status(200);
        //   res.body.should.be.a("object");
        //   res.body.should.have.property("customer_id").equal(1);
        //   res.body.should.have.property("firstname");
        //   res.body.should.have.property("middlename");
        //   res.body.should.have.property("lastname");
        //   res.body.should.have.property("address");
        //   res.body.should.have.property("contact");
          done();
        });
    });
  });

  describe("Test POST route", () => {
    it("it should post customer", (done) => {
      
      const newCustomer = {
        firstname: `herzlia ${Math.random().toString(36).slice(2)}`,
        middlename: "mang juan",
        lastname: "mang juan",
        address: Math.random().toString(36).slice(2),
        contact: Math.floor(Math.random() * 093424243) + 300,
      };

      chai
        .request(API)
        .post("/customers/add")
        .send(newCustomer)
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

  
});
