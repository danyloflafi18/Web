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
    if (verifyInput()) {
        alert('News is sent :)');
        document.getElementById('newsTitle').value = "";
        document.getElementById('newsBody').value = "";
    } else {
        alert('Edit please :)');
    }

};