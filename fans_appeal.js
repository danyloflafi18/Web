let main = document.getElementById('main');

function verifyInput(descriptionField) {

    if (descriptionField.value.trim() === '') {
        return false;
    } else {
        return true;
    }
}

function addNewAppeal() {

    let body = document.getElementById('body');
    let appeals = document.getElementById('appeals');
    let divNew = document.createElement("div");
    let fansDiv = document.createElement("div");
    let cardDiv = document.createElement("div");
    let description = document.getElementById('textFansAppeal');
    let hr = document.createElement('hr');
    let container = document.createElement('div');

    fansDiv.setAttribute("class", 'fan_time class col-2');

    let p1 = document.createElement('p');
    let p2 = document.createElement('p');
    let p3 = document.createElement('p');
    let p4 = document.createElement('p');

    let today = new Date();
    let dd = String(today.getDate()).padStart(2, '0');
    let mm = String(today.getMonth() + 1).padStart(2, '0');
    let yyyy = today.getFullYear();
    let hh = today.getHours();
    let min = today.getMinutes();

    if (verifyInput(description)) {
        p1.appendChild(document.createTextNode("Supporter Ariana Grande"));
        p2.appendChild(document.createTextNode(dd + '.' + mm + '.' + yyyy));
        p3.appendChild(document.createTextNode(hh + ":" + min));
        fansDiv.appendChild(p1);
        fansDiv.appendChild(p2);
        fansDiv.appendChild(p3);
        p4.appendChild(document.createTextNode(description.value));
        cardDiv.appendChild(p4);

        divNew.appendChild(fansDiv);
        divNew.appendChild(cardDiv);

        container.appendChild(hr);
        container.appendChild(divNew);

        appeals.appendChild(container);
    } else {

    }

    container.className = 'container';
    divNew.className = 'row';
    fansDiv.className = 'card col-2';
    cardDiv.className = 'card col-8';
    hr.className = 'row';

    document.getElementById("textFansAppeal").value = "";
}