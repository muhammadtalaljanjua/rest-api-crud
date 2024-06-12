const express = require("express");
const router = new express.Router();
const FormAPI = require("../models/forms");

router.get("/", async (req, res) => {
  return res.send("Server Connection Established!");
});

router.post("/form", async (req, res) => {
  try {
    const form = await FormAPI.create(req.body);
    return res.status(201).send(form);
  } catch (error) {
    return res.status(500).send(error);
  }
});

router.get("/form", async (req, res) => {
  try {
    const forms = await FormAPI.find({});
    return res.status(200).send(forms);
  } catch (error) {
    return res.status(400).send(error);
  }
});

router.get("/form/:id", async (req, res) => {
  try {
    const _id = req.params.id;
    const form = await FormAPI.findById(_id);
    return res.status(200).send(form);
  } catch (error) {
    return res.status(400).send(error);
  }
});

router.patch("/form/:id", async (req, res) => {
  try {
    const _id = req.params.id;
    const form = await FormAPI.findByIdAndUpdate(_id, req.body, {
      new: true,
    });
    return res.status(200).send(form);
  } catch (error) {
    return res.status(500).send(error);
  }
});

router.delete("/form/:id", async (req, res) => {
  try {
    const _id = req.params.id;
    const form = await FormAPI.findByIdAndDelete(_id);
    return res.status(200).send(form);
  } catch (error) {
    return res.status(400).send(error);
  }
});

module.exports = router;
