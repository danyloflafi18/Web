const express = require('express');
const path = require('path');
const app = express();
app.set('view engine', 'ejs');
app.use(express.static(path.join(__dirname, 'public')));


app.get('/fans_appeal.html', (req, res) => {
    const htmlFile = req.url.slice(1);
    var appeal = {
        author: "Pedro",
        time: "20:01",
        date: "2019-11-19",
        text: "THis is good band. I want to hear such a content."
    }
    var appeals = [appeal, appeal, appeal];
    res.render("fans_appeal", {
        appeals: appeals,
    });
})

app.get('/news.html', (req, res) => {
    const htmlFile = req.url.slice(1);
    var object = {
        src: "Web-Content/Styles_and_BG/bg_news.PNG",
        title: "20:43",
        text: "This is top news about Ariana Grande. Visit us !!!"
    }
    var news = [object, object, object];
    res.render("news", {
        news: news,
    });
})

app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, './index.html'));
})

app.get('/*', (req, res) => {
    if (req.url.endsWith('.html')) {
        const htmlFile = req.url.slice(1);
        res.sendFile(path.join(__dirname, './' + htmlFile));
    } else {
        res.sendFile(path.join(__dirname, './error.html'));
    }
})


const port = 8080;
app.listen(port, () => {
    console.log(`App running on ${port}`);
})