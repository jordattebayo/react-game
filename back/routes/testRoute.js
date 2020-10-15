const express = require("express");
const testModel = require("../models/test");
const app = express();

app.get("/tests", async (req, res) => {
    const tests = await testModel.find({});

    try {
        res.send(tests);
    } catch (err) {
        res.status(500).send(err);
    }
});

app.post("/test", async (req, res) => {
    const test = new testModel(req.body);

    try{
        await test.save();
        res.send(test);
    } catch (err) {
        res.status(500).send(err);
    }
});

app.delete("/test/:id", async (req, res) => {
    try {
        const test = await testModel.findByIdAndDelete(req.params.id)

        if (!test) res.status(404).send("No user found")
        res.status(200).send()
    } catch (err) {
        res.status(500).send(err)
    }
})

app.patch("/test/:id", async (req, res) => {
    try {
        await testModel.findByIdAndUpdate(req.params.id, req.body)
        await testModel.save()
        res.send(test)
    } catch (err) {
        res.status(500).send(err)
    }
})

module.exports = app;