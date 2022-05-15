const express = require('express');
const router = express.Router();

const meController = require('../app/controllers/MeController');
//
// mesController.index()

router.get('/stored/courses', meController.storedCourses);
router.get('/trashbin/courses', meController.trashbinCourses);
// router.post('/store', meController.store);
// router.get('/:slug', meController.show);

module.exports = router;
