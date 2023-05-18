const express = require("express");
const  router = express.Router();
const Property = require('../controller/propertyController')
const upload = require('../middleware/upload');

router.post('/propertys',upload(), Property.propertys);
router.get('/getProperty', Property.getProperty)



module.exports = router ;