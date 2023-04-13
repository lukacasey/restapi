import express from "express";

const router = express.Router(); //get access to express router

router.route("/").get((req, res) => res.send("the get"));

router.route("/").put((req, res) => res.send("the put"));

router.route("/").post((req, res) => res.send("the post"));

router.route("/").delete((req, res) => res.send("the delete"));

router.route("/").patch((req, res) => res.send("the patch"));

export default router;
