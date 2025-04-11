(function() {
    try {
        let jsonText = document.documentElement.innerText.replace(/[\u0000-\u001F\u007F-\u009F]/g, "");
        let json = JSON.parse(jsonText);

        let chapterContent = json.data.CONTENT
            .replace(/\t/g, "    ")
            .replace(/\n/g, "<br>");

        return JSON.stringify({ success: true, data: chapterContent});
    } catch (error) {
        return JSON.stringify({ success: false, error: error.message });
    }
})()