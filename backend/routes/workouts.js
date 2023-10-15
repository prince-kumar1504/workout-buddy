const express = require('express')
const {
    createWorkout,
    getWorkout,
    getWorkouts,
    deleteWorkout,
    updateWorkout
} = require('../controllers/workoutControllers')

const router = express.Router()


//GET all workout
router.get('/',getWorkouts)

//GET a single workout
router.get('/:id',getWorkout)

//POST a new workout
router.post('/', createWorkout)

//DELETE a new workout
router.delete('/:id',deleteWorkout)

//UPDATE a new workout
router.patch('/:id',updateWorkout)

module.exports = router