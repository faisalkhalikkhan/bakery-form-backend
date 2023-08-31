const router = require("express").Router();
const ContactForm = require("../models/contact.form.model");

router.get("/", (req, res) => {
  res.send(":)");
});

router.post("/v1.0/add-record", async (req, res) => {
  try {
    const phone = req.body.phone;
    const body = req.body;
    console.log(body);

    if (phone == null || phone.toString().length < 10) {
      res.status(409).render("index", { screen: "error" });
    }
    const newAdmin = new ContactForm(body);
    await newAdmin.save();
    res.status(201).render("index", { screen: "success" });
  } catch (error) {
    res.status(409).json(error.message);
  }
});

module.exports = router;
