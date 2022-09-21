const express = require('express');
const cors = require('cors');

const app = express();

// route
const contactsRouter = require('./app/route/contact.route');




app.use(cors());
app.use(express.json());

app.use('/api/contacts', contactsRouter);

app.get("/", (req, res, next) => {
    res.status(200).json({
        message: "Welcome to contact book application.",
    });
});

module.exports = app;