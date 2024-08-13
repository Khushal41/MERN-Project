// filters icon -----------------------------------
// Select all elements with the class 'filter' and store them in the 'filters' NodeList
const filters = document.querySelectorAll(".filter");

// Function to apply styles based on the selected filter
function applyStyles(selectedFilter) {
    // Remove the 'selectedFilter' class from all filters
    filters.forEach((f) => f.classList.remove("selectedFilter"));

    // Find the element corresponding to the selected filter
    const selectedElement = document.querySelector("." + selectedFilter);

    // If the current page is '/listings', always add 'selectedFilter' to the first filter
    if (window.location.pathname === "/listings") {
        filters[0].classList.add("selectedFilter");
        return;
    }

    // If the selected element exists, add the 'selectedFilter' class to it
    if (selectedElement) {
        selectedElement.classList.add("selectedFilter");
    }
}

// Add a click event listener to each filter
filters.forEach((filter) => {
    filter.addEventListener("click", function () {
        // Get the second class of the clicked filter element (assumed to be the unique filter identifier)
        const element = this.classList[1];
        console.log(element); // Log the selected filter's class to the console

        // Store the selected filter in localStorage to persist the selection across page reloads
        localStorage.setItem("selectedFilter", element);

        // Apply styles to the selected filter
        applyStyles(element);
    });
});

// On page load, check if a filter was previously selected and apply styles
const storedFilter = localStorage.getItem("selectedFilter");
if (storedFilter) {
    applyStyles(storedFilter);
}


// filters slide button add-----------------------------------
// Select the element with the ID 'filters' (the container of the filters)
let filtersBox = document.querySelector("#filters");

// Select all elements with the ID 'slideButton' (the buttons for sliding the filter box)
let buttonSlide = document.querySelectorAll("#slideButton");

// Add a click event listener to each slide button
buttonSlide.forEach((button) => {
    button.addEventListener("click", () => {
        // Determine the direction of the scroll based on the button's class ('left_img_button' scrolls left, otherwise right)
        const direction = button.className == "left_img_button" ? -1 : 1;

        // Calculate the distance to scroll (width of the filtersBox minus 100 pixels, multiplied by the direction)
        const scrollImg = direction * (filtersBox.clientWidth - 100);

        // Scroll the filtersBox by the calculated distance with a smooth animation
        filtersBox.scrollBy({ left: scrollImg, behavior: "smooth" });
    });
});

// Add a scroll event listener to the filtersBox
filtersBox.addEventListener("scroll", () => {
    // Show or hide the left slide button based on the scroll position
    buttonSlide[0].style.display = filtersBox.scrollLeft <= 0 ? "none" : "flex";

    // Show or hide the right slide button based on the scroll position and the container width
    buttonSlide[1].style.display = filtersBox.scrollLeft >= (filtersBox.scrollWidth - filtersBox.clientWidth - 5) ? "none" : "flex";

    // Log the total scrollable width and the remaining scrollable width to the console for debugging
    console.log(filtersBox.scrollWidth);
    console.log(filtersBox.scrollWidth - filtersBox.clientWidth);
});
