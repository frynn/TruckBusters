//
// Modals
//

// Modal toggles
const service_modal_toggles = document.getElementById("services_modals");
const service_modals_close_buttons = document.getElementsByClassName("modal_close");

// Listen to events and handle modal toggles
service_modal_toggles.addEventListener("click", (evt) => {
    const {modalId} = evt.target.dataset;
    if (!modalId)
        return;

    document.getElementById(modalId).showModal();
});

// Setup listeners for close buttons
for (const button of service_modals_close_buttons) {
    button.addEventListener("click", (evt) => {
        const dialog = evt.target.parentNode.parentNode;
        dialog.close();
    });
}

//
// Mobile menu
//

const menu = document.getElementById("menu_mobile");
const burger_button = document.getElementById("burger_button");

// Listen to click events and toggle menu state
burger_button.addEventListener("click", () => {
    menu.classList.toggle("hidden");
})

const mobile_menu_links = document.getElementById("mobile_menu_links");
for (const link of mobile_menu_links.children) {
    link.children[0].addEventListener("click", () => {
        menu.classList.toggle("hidden");
    })
}