document.getElementById("newsTitle").addEventListener("change", onchange);
document.getElementById("newsBody").addEventListener("change", onchange);



function verifyInput() {
    var titleField = document.getElementById('newsTitle');
    var bodyField = document.getElementById('newsBody');

    if (titleField.value.trim() === '') {
        return false;
    } else if (bodyField.value.trim() === '') {
        return false;
    } else {
        return true;
    }
}

function new_news() {
    let newsTitle = document.getElementById("newsTitle").value;
    let newsBody = document.getElementById("newsBody").value;
    if (verifyInput()) {
        alert('News is sent');
        submit_to_backend(newsBody, newsTitle);

    } else {
        alert('Edit please');
    }
    document.getElementById('newsTitle').value = "";
    document.getElementById('newsBody').value = "";

};

function isOnline() {
    return window.navigator.onLine;
}


function submit_to_backend(body, title) {
    if (isOnline()) {} else {
        let last_index = parseInt(localStorage.getItem("last-index-admin"));
        if (isNaN(last_index)) {
            last_index = -1;
        }
        let current_index = last_index + 1;
        localStorage.setItem("newsBody" + current_index, body);
        localStorage.setItem("newsTitle" + current_index, title);
        localStorage.setItem("last-index-admin", current_index)
    }
}