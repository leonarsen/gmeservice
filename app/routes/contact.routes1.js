module.exports = app => {
    const contacts = require("../controllers/contact.controller.js");

    var router = require("express").Router();

    // Create a new contact
    router.post("/", contacts.create);

    // Retrieve all contacts
    router.get("/", contacts.findAll);

    // Retrieve all published contacts
    router.get("/published", contacts.findAllPublished);

    // Retrieve a single contact with id
    router.get("/:id", contacts.findOne);

    // Update a contact with id
    router.put("/:id", contacts.update);

    // Delete a contact with id
    router.delete("/:id", contacts.delete);

    // Delete all contacts
    router.delete("/", contacts.deleteAll);

    app.use("/api/contacts", router);
};

const contacts = require("../controllers/contact.controller.js");

module.exports = function (app) {
    app.use(function (req, res, next) {
        res.header(
            "Access-Control-Allow-Headers",
            "x-access-token, Origin, Content-Type, Accept"
        );
        next();
    });

    // Create a new contact
    app.post("/", [authJwt.verifyToken], contacts.create);

    // Retrieve all contacts
    app.get("/", [authJwt.verifyToken], contacts.findAll);

    // Retrieve all published contacts
    app.get("/published", [authJwt.verifyToken], contacts.findAllPublished);

    // Retrieve a single contact with id
    app.get("/:id", [authJwt.verifyToken], contacts.findOne);

    // Update a contact with id
    app.put("/:id", [authJwt.verifyToken], contacts.update);

    // Delete a contact with id
    app.delete("/:id", [authJwt.verifyToken], contacts.delete);

    // Delete all contacts
    app.delete("/", [authJwt.verifyToken], contacts.deleteAll);

};

const contacts = require("../controllers/contact.controller.js");
const { authJwt } = require("../middleware");

module.exports = function (app) {
    app.use(function (req, res, next) {
        res.header(
            "Access-Control-Allow-Headers",
            "x-access-token, Origin, Content-Type, Accept"
        );
        next();
    });

    // Create a new contact
    app.post("/", [authJwt.verifyToken], contacts.create);

    // Retrieve all contacts
    app.get("/", [authJwt.verifyToken], contacts.findAll);

    // Retrieve all published contacts
    app.get("/published", [authJwt.verifyToken], contacts.findAllPublished);

    // Retrieve a single contact with id
    app.get("/:id", [authJwt.verifyToken], contacts.findOne);

    // Update a contact with id
    app.put("/:id", [authJwt.verifyToken], contacts.update);

    // Delete a contact with id
    app.delete("/:id", [authJwt.verifyToken], contacts.delete);

    // Delete all contacts
    app.delete("/", [authJwt.verifyToken], contacts.deleteAll);

};
