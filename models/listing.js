const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const listingSchema = new Schema({
    title: {
        type: String,
        required: true,

    },
    description: {
        type: String,
    },

    image: {
        type: String,
        default: "https://media-cdn.tripadvisor.com/media/photo-s/29/f0/19/20/caption.jpg",
        set: (v) => v === ""
            ? "https://media-cdn.tripadvisor.com/media/photo-s/29/f0/19/20/caption.jpg" : v,
    },
    price: {
        type: Number,
    },
    location: {
        type: String,
    },
    country: {

        type: String,
    },
})

const Listing = mongoose.model("Listing", listingSchema);
module.exports = Listing;