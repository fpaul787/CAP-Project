const express = require('express');
const router = express.Router();
const httpResponse = require ('../../util/http');

// Course Model
const Course = require('../../models/Course');

// @route   GET api/items
// @desc    Get All Items
// @access  Public
router.get('/', async (req, res) => {

    try {
    const courses = await Course.find({});
    httpResponse.successResponse(res, courses);
    } catch (e) {
        console.log(e);
        httpResponse.failureResponse(res, e.toString());
    }
    
});

// @route   POST api/items
// @desc    Create An Item
// @access  Public
router.post('/',(req, res) => {
    const newCourse = new Course({
        name: req.body.name,
        hour: req.body.hour
    });

    newCourse.save()
    .then(item => res.json(item));
});

// @route   DELETE api/items/:id
// @desc    Delete An Item
// @access  Public
router.delete('/:id',(req, res) => {
    Course.findById(req.params.id)
    .then(item => item.remove().then(() => res.json({success: true})))
    .catch(err => res.status(404).json({success: false}));
});

module.exports = router;