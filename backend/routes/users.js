const router = require('express').Router();
let User = require('../models/user.model');

router.route('/').get((req, res) => {
  User.find()
    .then(users => res.json(users))
    .catch(err => res.status(400).json('Error: ' + err))
});

router.route('/add').post((req, res) => {
  const username = req.body.username;
  const role = req.body.role

  const newUser = new User({
    username,
    role
  });

  newUser.save()
    .then(() => res.json('User added!'))
    .catch(err => res.status(400).json('Erorr: ' + err))
});

router.route('/:id').get((req, res) => {
  User.findById(req.params.id)
    .then(user => res.json(user))
    .catch(err => res.status(400).json('Error: ' + err))
});

// Add perfomance review about user
router.route('/update/:id').put((req, res) => {
  User.findByIdAndUpdate(req.params.id, { $addToSet: { reviews: req.body.reviews } } )
    .then(user => {
      user.save()
        .then(() => res.json('User updated!'))
    })
    .catch(err => res.status(400).json('Error: ' + err))
});

router.route('/:id').delete((req, res) => {
  User.findByIdAndDelete(req.params.id)
    .then(() => res.json('User deleted!'))
    .catch(err => res.status(400).json('Error: ' + err))
});

module.exports = router;
