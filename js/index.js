import * as ajaxUtils from "./modules/ajaxUtils.js";
import { routes, loadPage, transformPath } from "./modules/helper.js";

// when page loads, check the URL (location.pathname), then serve
// the right content corresponding to the URL
document.addEventListener("DOMContentLoaded", () => {
    var dest = transformPath(location);
    loadPage(eval(dest));
});

// add event listeners to all links, stop default redirection
// harvest destination from the <a> element's href, and inject
// the corresponding code from the above paths
document.querySelectorAll(".link").forEach((item) => {
    item.addEventListener("click", (event) => {
        event.preventDefault();

        const dest = event.currentTarget.pathname;
        history.pushState(null, "", dest);
        loadPage(eval(`routes.${dest.split('/')[1]}`));
    })
});

// inject HTML on use of back/forward buttons
window.addEventListener("popstate", () => {
    var dest = transformPath(location);
    loadPage(eval(dest));
});
