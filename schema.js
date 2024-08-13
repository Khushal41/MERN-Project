const Joi = require('joi');
const ExpressError = require('./utils/ExpressError'); // Ensure you have this utility file
const Review = require('./models/review'); // Ensure you have this model

// Define the listingSchema using Joi
module.exports.listingSchema = Joi.object({
    listing: Joi.object({
        title: Joi.string().required(),
        location: Joi.string().required(),
        description: Joi.string().required(),
        country: Joi.string().required(),
        price: Joi.number().required().min(0), // Changed to number as price should be a number
        image: Joi.string().allow("", null)
    }).required(),
});

// Define the reviewSchema using Joi
module.exports.reviewSchema = Joi.object({
    review: Joi.object({
        rating: Joi.number().required().min(1).max(5),
        comment: Joi.string().required(),
    }).required()
});

// Middleware to validate listing using the schema
module.exports.validateListing = (req, res, next) => {
    const { error } = module.exports.listingSchema.validate(req.body);
    if (error) {
        const msg = error.details.map(el => el.message).join(',');
        throw new ExpressError(msg, 400);
    } else {
        next();
    }
};

// Example of isLoggedIn middleware
module.exports.isLoggedIn = (req, res, next) => {
    if (!req.isAuthenticated()) {
        req.flash('error', 'You must be signed in first!');
        return res.redirect('/login');
    }
    next();
};

// Example of isOwner middleware (needs to be adapted to your Listing model)
module.exports.isOwner = async (req, res, next) => {
    const { id } = req.params;
    const listing = await Listing.findById(id);
    if (!listing.owner.equals(req.user._id)) {
        req.flash('error', 'You do not have permission to do that!');
        return res.redirect(`/listings/${id}`);
    }
    next();
};
