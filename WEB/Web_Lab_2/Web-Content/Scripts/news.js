document.addEventListener("DOMContentLoaded", function() {
    let allNews = [];

    window.addEventListener("online", function(event) {
        provider.get("news", (news) => {
            if (news) {
                allNews = news;
            }
            sendAllNewsToServer(allNews);
            showAllNews(allNews);
            provider.remove("news");
            allNews = [];
        });
    });

    provider.get("news", (news) => {
        if (news) {
            allNews = news;
        }
    });
    if (isOnline()) {
        sendAllNewsToServer(allNews);
        provider.remove("news");
        allNews = [];

        let req = new XMLHttpRequest();
        req.open("GET", "/all_news", true);
        req.send();
        req.onreadystatechange = function() {
            if (req.readyState === XMLHttpRequest.DONE) {
                if (req.status != 200) {
                    console.log("Something goes wrong!");
                } else {
                    let data = JSON.parse(req.responseText);
                    showAllNews(data);
                }
            }
        };
    }

    function addNews(title, text) {
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

    function showAllNews(allNews) {
        for (let i = 0; i < allNews.length; i++) {
            addNews(allNews[i].title, allNews[i].body);
        }
    }

    function sendNewsToServer(title, body) {
        fetch("/all_news", {
                method: "POST",
                headers: {
                    "Content-type": "application/json"
                },
                body: JSON.stringify({ title: title, body: body }),
            })
            .catch(error => console.error("Cannot fetch data:", error));
    }

    function sendAllNewsToServer(allNews) {
        for (let i = 0; i < allNews.length; i++) {
            sendNewsToServer(allNews[i].title, allNews[i].body)
        }
    }
});