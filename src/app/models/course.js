const mongoose = require('mongoose');
const slug = require('mongoose-slug-generator');
const mongooseDelete = require('mongoose-delete');
const Schema = mongoose.Schema;

const Course = new Schema(
    {
        name: { type: String, require: true, maxlength: 255 },
        description: { type: String, maxlength: 600 },
        image: { type: String, maxlength: 300 },
        slug: { type: String, slug: 'name', unique: true },
        videoId: { type: String, require: true, maxlength: 50 },
        level: { type: String, maxlength: 50 },
    },
    {
        timestamps: true,
    },
);
// Add plugin
mongoose.plugin(slug);
Course.plugin(mongooseDelete, {
    deletedAt: true,
    overrideMethods: 'all',
});

module.exports = mongoose.model('Course', Course);
