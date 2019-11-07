let main = document.getElementById('main');

document.getElementById("textFansAppeal").addEventListener("change", function() {
    let appeal_text = document.getElementById("textFansAppeal").value;
});

localStorage = window.localStorage;
getLocalStorage();

function verifyInput(descriptionField) {

    if (descriptionField.value.trim() === '') {
        return false;
    } else {
        return true;
    }
}

function addNewAppeal() {
    let appeal_text = document.getElementById("textFansAppeal").value;

    let today = new Date();
    let time = today.getHours() + ":" + today.getMinutes();
    let date = today.getDate() + "." + (today.getMonth() + 1) + "." + today.getFullYear();

    let description = document.getElementById('textFansAppeal');

    if (verifyInput(description)) {
        append_appeals(appeal_text, time, date);
        submit_to_backend(appeal_text, time, date);
    } else {

    }
    document.getElementById("textFansAppeal").value = "";
}

function isOnline() {
    return window.navigator.onLine;
}

function append_appeals(text, time, date) {
    let appealNew = document.getElementById("appeals");
    let new_appeal = document.createElement("div");
    new_appeal.setAttribute("class", "row");
    appealNew.appendChild(new_appeal).innerHTML = `
    <div class="fan_time card col-2">
    <p class="card-text">Supporter Ariana Grande</p>
    <p class="card-text">${time}</p>
    <p class="card-text">${date}</p>
</div>
<div class="card col-8">
    <p class="card-text">
    ${text}
    </p>
</div>`;
}

function submit_to_backend(text, time, date) {
    if (isOnline()) {} else {
        let lastIndex = parseInt(localStorage.getItem("lastIndex"));
        if (isNaN(lastIndex)) {
            lastIndex = -1;
        }
        let current_index = lastIndex + 1;
        localStorage.setItem("appeal-text" + current_index, text);
        localStorage.setItem("appeal-time" + current_index, time);
        localStorage.setItem("appeal-date" + current_index, date);
        localStorage.setItem("lastIndex", current_index)
    }
}

function getLocalStorage() {
    let storageSize = parseInt(window.localStorage.getItem("lastIndex"));
    if (isNaN(storageSize))
        return;

    for (let i = 0; i <= storageSize; i++) {
        let text = localStorage.getItem("appeal-text" + i);
        let time = localStorage.getItem("appeal-time" + i);
        let date = localStorage.getItem("appeal-date" + i);
        if (text == null) {
            continue
        }
        append_appeals(text, time, date);
    }
}