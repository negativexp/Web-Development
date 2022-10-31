function ButtonSearch() {
    search = document.getElementById("searchInput").value;
    search = search.replace(/\s+/g, '+')
    search = "https://www.google.com/search?q=" + search;
    window.open(search, "_blank").focus;
};