(function() {
    try {
        let novelList = [];
        let nextElement = document.querySelector(".pagination > li.active + li");
        let next = nextElement ? nextElement.textContent.trim() : null;
        if (!next) { next = 0;}
        else { next = Number(next); }

        document.querySelectorAll(".list-truyen div[itemscope]").forEach(e => {
            novelList.push({
                name: e.querySelector(".truyen-title > a")?.textContent.trim(),
                link: e.querySelector(".truyen-title > a")?.href,
                description: e.querySelector(".author")?.textContent.trim(),
                cover: e.querySelector("[data-image]")?.getAttribute("data-image"),
                host: "https://truyenfull.vision"
            });
        });

        return JSON.stringify({ success: true, data: novelList, next: next });
    } catch (error) {
        return JSON.stringify({ success: false, error: error.message });
    }
})()