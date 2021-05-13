function getHttpObject() {
    if (window.XMLHttpRequest) {
        return new XMLHttpRequest();
    }
    else {
        return null;
        alert("NO AJAX");
    }
}

async function sendGetRequest(url) {
    return new Promise((resolve, reject) => {
        let req = getHttpObject();
        req.open("GET", url, true);
        req.send(null);

        req.onreadystatechange = function(event) {
            if (req.readyState == 4 && req.status == 200) {
                resolve(req.responseText);
            }
            else if (req.readyState == 4 && req.status != 200) {
                reject(new Error("Bad GET Request"));
            }
        }
    })
}

export { sendGetRequest };
