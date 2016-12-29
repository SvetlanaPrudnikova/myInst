var router = require('express').Router();
var mocks = require('./mock');
var assign = require('object-assign');

router.get('/photos', function (req, res, next) {
    var photos = mocks.photos.map(function (photo) {
            return assign({}, photo, {
                text: undefined
            })
        }),
        limit = Number(req.query.limit) || photos.length,
        offset = Number(req.query.offset) || 0;

    res.json(photos.slice(offset, limit + offset))
});


router.post('/report', function (req, res) {
    res.json({})
})

module.exports = router;
