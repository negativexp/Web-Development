list = [".com", ".org", ".net", ".int", ".edu", ".gov", ".mil", ".cz"];

function ButtonSearch() {
    search = document.getElementById("searchInput").value;
    if(list.some(v => search.includes(v))) {
        window.open("https://" + search, "_blank");
    } else {
        search = search.replace(/\s+/g, '+')
        search = "https://www.google.com/search?q=" + search;
        window.open(search, "_blank").focus;
    }
};