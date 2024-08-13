const express = require('express');
const router = express.Router();
const wrapAsync = require('../utils/wrapAsync');
const { isLoggedIn, isOwner, validateListing } = require('../middleware');
const multer = require('multer');
const { storage } = require("../cloudConfig");
const upload = multer({ storage });


const listingController = require('../controllers/listings');

// Route definitions
router.route('/')
    .get(wrapAsync(listingController.index))
    .post(
        isLoggedIn,
        upload.single("listing[image]"),
        validateListing,
        wrapAsync(listingController.createListing)
    );

// New Route
router.get('/new',
    isLoggedIn,
    listingController.renderNewForm);

router.route('/:id')
    .get(wrapAsync(listingController.showListing))
    .put(
        isLoggedIn,
        isOwner,
        upload.single("listing[image]"),
        validateListing,
        wrapAsync(listingController.updateListing))
    .delete(
        isLoggedIn,
        isOwner,
        wrapAsync(listingController.deleteListing));

// Edit Route
router.get('/:id/edit',
    isLoggedIn,
    isOwner,
    wrapAsync(listingController.editListing));

module.exports = router;
