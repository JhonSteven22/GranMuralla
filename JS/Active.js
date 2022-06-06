document.addEventListener("DOMContentLoaded", function () {
    var scrollSpy = new bootstrap.ScrollSpy(document.body, {
        target: "#main_nav",
        offset: 200,
    });

    // add padding top to show content behind navbar
    navbar_height = document.querySelector(".navbar").offsetHeight;
    document.body.style.paddingTop = navbar_height + "px";
});

//
/*
const searchInputDropdown = document.getElementById("search-input-dropdown");
const dropdownOptions = document.querySelectorAll(".input-group-dropdown-item");

searchInputDropdown.addEventListener("input", () => {
    const filter = searchInputDropdown.value.toLowerCase();
    showOptions();
    const valueExist = !!filter.length;

    if (valueExist) {
        dropdownOptions.forEach((el) => {
            const elText = el.textContent.trim().toLowerCase();
            const isIncluded = elText.includes(filter);
            if (!isIncluded) {
                el.style.display = "none";
            }
        });
    }
});

const showOptions = () => {
    dropdownOptions.forEach((el) => {
        el.style.display = "flex";
    });
};
*/