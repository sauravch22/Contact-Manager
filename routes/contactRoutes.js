const express = require("express")
const validateToken = require("../middleware/ValidateToken")
const router = express.Router()
const {getContacts,CreateContact,getContact,UpdateContact,DeleteContact} = require("../controllers/contactController")

router.use(validateToken)

router.route("/").get(getContacts).post(CreateContact)

router.route("/:id").get(getContact).put(UpdateContact).delete(DeleteContact)

module.exports = router;