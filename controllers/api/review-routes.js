const router = require('express').Router();
const { Restaurant, User, Review } = require('../../models');
const withAuth = require('../../utils/auth');

// get all reviews
router.get('/', (req, res) => {
  Review.findAll({
    attributes: { exclude: ['password'] },
  })
    .then((ReviewData) => res.json(ReviewData))
    .catch((err) => {
      console.log(err);
      res.status(500).json(err);
    });
});

// get single review
router.get('/:id', (req, res) => {
  Review.findOne({
    attributes: { exclude: ['password'] },
    where: {
      id: req.params.id,
    },
  })
    .then((ReviewData) => {
      if (!ReviewData) {
        res.status(404).json({ message: 'No Review found with this id' });
        return;
      }
      res.json(ReviewData);
    })
    .catch((err) => {
      console.log(err);
      res.status(500).json(err);
    });
});

// create review
router.post('/', withAuth, (req, res) => {
  Review.create({
    user_id: req.session.user_id,
    res_reviewed: req.body.res_reviewed,
    review_content: req.body.review_content,
    review_approval: req.body.review_approval,
  })
    .then((ReviewData) => res.json(ReviewData))
    .catch((err) => {
      console.log(err);
      res.status(500).json(err);
    });
});

// update review (not sure if we will need?)
router.put('/:id', withAuth, (req, res) => {
  Review.update(req.body, {
    individualHooks: true,
    where: {
      id: req.params.id,
    },
  })
    .then((ReviewData) => {
      if (!ReviewData) {
        res.status(404).json({ message: 'No Review found with this id' });
        return;
      }
      res.json(ReviewData);
    })
    .catch((err) => {
      console.log(err);
      res.status(500).json(err);
    });
});

// delete review
router.delete('/:id', withAuth, (req, res) => {
  Review.destroy({
    where: {
      id: req.params.id,
    },
  })
    .then((ReviewData) => {
      if (!ReviewData) {
        res.status(404).json({ message: 'No Review found with this id' });
        return;
      }
      res.json(ReviewData);
    })
    .catch((err) => {
      console.log(err);
      res.status(500).json(err);
    });
});

module.exports = router;
