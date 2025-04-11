(function() {
    try {
        let genres = [];

        let author = document.querySelector("a[itemprop=author]");

        document.querySelectorAll(".info a[itemprop=genre]").forEach(e => {
            genres.push({
                title: e.textContent,
                input: e.getAttribute("href"),
                script: "gen.js"
            });
        });

        let suggests = [];
        if (author) {
            suggests.push({
                title: "Cùng tác giả",
                input: author.getAttribute("href"),
                script: "gen.js"
            });
        }

        return JSON.stringify(
                {
                    success: true,
                    data: {
                        name: document.querySelector("h3.title")?.textContent || "",
                        cover: document.querySelector("div.book img")?.getAttribute("src") || "",
                        author: document.querySelector("div.info div a")?.textContent || "",
                        description: document.querySelector("div.desc-text")?.innerHTML || "",
                        detail: "",
                        ongoing: (document.querySelector("div.info")?.innerHTML || "").includes(">Đang ra<"),
                        genres: genres,
                        suggests: suggests,
                        host: "https://truyenfull.vision"
                    }
                }
            );
    } catch (error) {
        return JSON.stringify({ success: false, error: error.message });
    }
})()