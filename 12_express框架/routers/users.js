const express = require('express');

const router = express.Router();

router.get('/', (req, res, next) => {
  res.json(["李丹", "顾佳清", "石怀钰"]);
});

router.get('/:id', (req, res, next) => {
  res.json(`${req.params.id}用户的信息`);
});

router.post('/', (req, res, next) => {
  res.json('creating user succeeded');
});

module.exports = router;