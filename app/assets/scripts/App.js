import("../styles/styles.css");
import MobileMenu from "./modules/MobileMenu.js";
import RevealOnScroll from "./modules/RevealOnScroll";

new MobileMenu();

//new MobileMenu(document.querySelectorAll(".testimonial"));
let revealOnScroll = new RevealOnScroll();

if (module.hot) {
  module.hot.accept();
}
