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
  
    if(req.params.id === "1"){
      console.log('success')
      try{
        const completedList = await Completed.findOneAndUpdate("5eb0e28dbc6f85d8689d0766", 
        { 
          completed: req.body
      },{useFindAndModify: false});
     
  
        
        httpResponse.successResponse(res, completedList);
      } catch (e) {
        console.log(e)
        httpResponse.failureResponse(res, e.toString());
      }
    }
    
  
  

  });

// @route   DELETE api/items/:id
// @desc    Delete An Item
// @access  Public
router.delete('/:id', async (req, res) => {

  try {
      const compltedItem = await Completed.deleteOne({_id: req.params.id});
      httpResponse.successResponse(res, compltedItem);
  } catch (e) {
      console.log(e);
  httpResponse.failureResponse(res, e.toString());
  }


});

module.exports = router;