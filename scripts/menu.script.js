const menu = document.getElementById("menu_mobile");
const menu_toggle = document.getElementById("menu_toggle");

// Listen to click events and toggle menu state
menu_toggle.addEventListener("change", () => {
    menu.classList.toggle("hidden");
})

const mobile_menu_links = document.getElementById("mobile_menu_links");
for (const link of mobile_menu_links.children) {
    link.children[0].addEventListener("click", () => {
        menu.classList.toggle("hidden");
        menu_toggle.checked = !menu_toggle.checked;
    })
}