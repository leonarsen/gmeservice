module.exports = app => {
    const contacts = require("../controllers/contact.controller.js");

    var router = require("express").Router();

    // Create a new contact
    router.post("/:nome/:cognome", contacts.create);

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