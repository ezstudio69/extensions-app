(function() {
    try {
        let jsonText = document.documentElement.innerText.replace(/[\u0000-\u001F\u007F-\u009F]/g, "");
        let json = JSON.parse(jsonText);

        let genres = [];

        return JSON.stringify({
            success: true,
            data: {
                name: json.data.NAME || "",
                cover: json.data.THUMB || "",
                author: json.data.AUTHOR || "",
                description: json.data.DESC || "",
                detail: "",
                ongoing: true,
                genres: [],
                suggests: [],
                host: "http://api.mottruyen.com"
            }
        });
    } catch (error) {
        return JSON.stringify({ success: false, error: error.message });
    }
})()