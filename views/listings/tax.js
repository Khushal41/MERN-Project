// Select all elements with the ID 'flexSwitchCheckDefault' and store them in 'taxSwitchs'
let taxSwitchs = document.querySelectorAll("#flexSwitchCheckDefault");

// Select all elements with the class 'changeAfter' and store them in 'changeAfter'
let changeAfter = document.querySelectorAll(".changeAfter");

// Loop through each 'taxSwitch' in the 'taxSwitchs' NodeList
for (let taxSwitch of taxSwitchs) {
    // Add a click event listener to each 'taxSwitch'
    taxSwitch.addEventListener("click", () => {
        console.log("click asd"); // Log a message to the console when the switch is clicked

        // Get all elements with the class 'tax-info'
        let taxInfo = document.getElementsByClassName("tax-info");

        // Get all elements with the class 'price-info'
        let priceInfo = document.getElementsByClassName("price-info");

        // Loop through each element in 'taxInfo'
        for (tax of taxInfo) {
            // Check if the display style is not set to 'inline'
            if (tax.style.display != "inline") {
                // If true, set the display style to 'inline'
                tax.style.display = "inline";

                // Update the innerHTML of each 'changeAfter' element
                for (const changeA of changeAfter) {
                    changeA.innerHTML = "Display total after taxes ..";
                }
            } else {
                // Otherwise, hide the element by setting the display style to 'none'
                tax.style.display = "none";
            }
        }

        // Loop through each element in 'priceInfo'
        for (price of priceInfo) {
            // Check if the display style is not set to 'none'
            if (price.style.display != "none") {
                // If true, hide the element by setting the display style to 'none'
                price.style.display = "none";
            } else {
                // Otherwise, set the display style to 'inline'
                price.style.display = "inline";

                // Update the innerHTML of each 'changeAfter' element
                for (const changeA of changeAfter) {
                    changeA.innerHTML = "Display total before taxes ";
                }
            }
        }
    });
}

// Select all elements with the ID 'flexSwitchCheckDefaultS' and store them in 'taxSwitchsS'
let taxSwitchsS = document.querySelectorAll("#flexSwitchCheckDefaultS");

// Loop through each 'taxSwitch' in the 'taxSwitchsS' NodeList
for (let taxSwitch of taxSwitchsS) {
    // Add a click event listener to each 'taxSwitch'
    taxSwitch.addEventListener("click", () => {
        // Get all elements with the class 'tax-info'
        let taxInfo = document.getElementsByClassName("tax-info");

        // Get all elements with the class 'price-info'
        let priceInfo = document.getElementsByClassName("price-info");

        // Loop through each element in 'taxInfo'
        for (tax of taxInfo) {
            // Check if the display style is not set to 'inline'
            if (tax.style.display != "inline") {
                // If true, set the display style to 'inline'
                tax.style.display = "inline";

                // Update the innerHTML of each 'changeAfter' element
                for (const changeA of changeAfter) {
                    changeA.innerHTML = "Display total after taxes ..";
                }
            } else {
                // Otherwise, hide the element by setting the display style to 'none'
                tax.style.display = "none";
            }
        }

        // Loop through each element in 'priceInfo'
        for (price of priceInfo) {
            // Check if the display style is not set to 'none'
            if (price.style.display != "none") {
                // If true, hide the element by setting the display style to 'none'
                price.style.display = "none";
            } else {
                // Otherwise, set the display style to 'inline'
                price.style.display = "inline";

                // Update the innerHTML of each 'changeAfter' element
                for (const changeA of changeAfter) {
                    changeA.innerHTML = "Display total before taxes ";
                }
            }
        }
    });
}
