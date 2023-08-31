const mongoose = require('mongoose')

const contactForm = mongoose.Schema({
    name: String,
    email: String,
    phone: String,
    relation: String,
    ocassion: String,
    createdAt : {
        type: Date,
        default: new Date()
    }
})

const ContactForm = mongoose.model("ContactForm", contactForm);
module.exports = ContactForm;