const Course = require('../models/course');
const {
    mongooseToObject,
    multipleMongooseToObject,
} = require('../../util/mongoose');
class MeController {
    // GET /
    // GET /me/stored/courses
    storedCourses(req, res, next) {
        Promise.all([Course.find({}), Course.countDocumentsDeleted()])
            .then(([courses, deletedCount]) => {
                res.render('me/stored-courses', {
                    deletedCount,
                    courses: multipleMongooseToObject(courses),
                });
            })
            .catch(next);
    }
    // GET /me/trashbin/courses
    trashbinCourses(req, res, next) {
        Promise.all([Course.findDeleted({}), Course.countDocuments()]).then(
            ([courses, docCount]) => {
                res.render('me/trashbin-courses', {
                    docCount,
                    courses: multipleMongooseToObject(courses),
                });
            },
        );
    }
}

module.exports = new MeController();
