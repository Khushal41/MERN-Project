const mongoose = require("mongoose");
const initData = require("./data.js");
const Listing = require("../models/listing.js");

const MONGO_URL = "mongodb://127.0.0.1:27017/wanderlust";

main()
    .then(() => {
        console.log("Connected to DB");
        initDB(); // Call initDB after successfully connecting to DB
    })
    .catch((err) => {
        console.error("Error connecting to DB:", err);
    });

async function main() {
    await mongoose.connect(MONGO_URL);
}

const initDB = async () => {
    try {
        // Check if initData.data is defined and is an array
        if (!initData || !initData.data || !Array.isArray(initData.data)) {
            throw new Error('initData.data is not properly defined or is not an array.');
        }

        // Clear the listings collection
        await Listing.deleteMany({});

        // Add the owner field to each object in initData.data and ensure image is correctly formatted
        const newData = initData.data.map((obj) => ({
            ...obj,
            owner: "66989600ae2b255a382e566a",
            image: {
                url: obj.image.url, // Assuming the image field should be the URL string
                filename: obj.image.filename // Assuming you have the filename property in your data
            }
        }));

        // Insert the new data into the collection
        await Listing.insertMany(newData);

        console.log("Data was initialized");
    } catch (error) {
        console.error("Error initializing data:", error.message);
    } finally {
        // Ensure to disconnect from MongoDB even if there's an error
        mongoose.disconnect()
            .then(() => console.log("Disconnected from DB"))
            .catch((err) => console.error("Error disconnecting from DB:", err));
    }
};
