import * as ajaxUtils from "./ajaxUtils.js";

const routes = {
    home: "./snippets/homepage.html",
    about: "/snippets/about.html",
    product: "./snippets/products.html",
    contact: "./snippets/contact.html"
};

// function to do AJAX get request to routes and inject HTML
// to the "content" div
async function loadPage(url) {
    const page = await ajaxUtils.sendGetRequest(url);
    document.getElementById("content").innerHTML = page;
}

// function to be used by with location object to get pathname
// and do simple text transformation to match route dictionary
function transformPath(loc) {
    if (!(loc.pathname in routes)) {
        console.log("Path not in Routes, defaulting to homepage");
        return `routes.home`;
    }
    else {
        return `routes.${loc.pathname.split('/')[1]}`;
    }

}

export { routes, loadPage, transformPath };
