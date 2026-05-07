const express = require("express");

const router = express.Router();

const Task = require("../models/task");

// CREATE TASK
router.post("/", async (req, res) => {

  try {

    console.log(req.body);

    const task = await Task.create({
      title: req.body.title,
      status: req.body.status
    });

    res.json(task);

  } catch (err) {

    console.log(err);

    res.status(500).json({
      error: err.message
    });

  }

});

// GET TASKS
router.get("/", async (req, res) => {

  try {

    const tasks = await Task.findAll();

    res.json(tasks);

  } catch (err) {

    console.log(err);

    res.status(500).json({
      error: err.message
    });

  }

});
// DELETE TASK
router.delete("/:id", async (req, res) => {

  try {

    await Task.destroy({
      where: {
        id: req.params.id
      }
    });

    res.json({
      message: "Task Deleted ✅"
    });

  } catch (err) {

    console.log(err);

    res.status(500).json({
      error: err.message
    });

  }

});

// UPDATE STATUS
router.put("/:id", async (req, res) => {

  try {

    await Task.update(

      {
        status: req.body.status
      },

      {
        where: {
          id: req.params.id
        }
      }

    );

    res.json({
      message: "Status Updated ✅"
    });

  } catch (err) {

    console.log(err);

    res.status(500).json({
      error: err.message
    });

  }

});

module.exports = router;