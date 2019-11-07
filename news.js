let storageSize = parseInt(window.localStorage.getItem("last-index-admin"));
getLocalStorage();
var table_row;

function getLocalStorage() {
    if (isNaN(storageSize))
        return;
    for (let i = 0; i <= storageSize; i++) {
        let text = localStorage.getItem("newsBody" + i);
        let title = localStorage.getItem("newsTitle" + i);
        if (text == null)
            continue;
        append_news(text, title, i);
    }
}

function append_news(text, title, current_index) {
    let mainNew = document.getElementById("news");
    let newNews = document.createElement("div");
    newNews.setAttribute("class", "news_item");
    mainNew.appendChild(newNews).innerHTML = `
    <img class="photo" src="D:/WEB/Web_Lab_2/Web-Content/Photo/news_table_1.jpg" alt="photo">
    <div class="news_title">
        ${title}
    </div>
    <div class="news_text">
        ${text}
    </div>`;
}