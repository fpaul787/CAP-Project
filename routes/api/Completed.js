const express = require('express');
const router = express.Router();
const httpResponse = require ('../../util/http');

// Course Model
const Completed = require('../../models/Completed');

// @route   GET api/items
// @desc    Get All Items
// @access  Public
router.get('/', async (req, res) => {

    try {
    const completedList = await Completed.find({});
    httpResponse.successResponse(res, completedList);
    } catch (e) {
        console.log(e);
        httpResponse.failureResponse(res, e.toString());
    }
    
});

router.put('/:id', async (req, res) => {
    console.log(req.body)
  var completedList = null
    try{
      completedList = await Completed.findByIdAndUpdate(req.params.id, 
      { 
        ...req.body
    });
    
      httpResponse.successResponse(res, completedList);
      
    } catch (e) {
      console.log(e)
      httpResponse.failureResponse(res, e.toString());
    }
    finally{
      console.log('Completed list:',completedList)
    }
  
  

  });

module.exports = router;