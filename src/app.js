const logger = require("./middleware/logger");
const express = require("express");
const pageRoutes = require("./routes/pageRoutes");

const app = express();

app.use(logger);
app.use(express.json());
app.use(pageRoutes);

app.use((req, res) => {
    res.status(404).json({
        error: "Routen findes ikke"
    });
});

app.use((err, req, res, next) => {
    console.error(err.message);

    res.status(500).json({
        error: "Intern serverfejl"
    });
});

module.exports = app;
