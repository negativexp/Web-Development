function buttonHambac() {
    window.alert("matyas neni hambac");
    window.alert("a proc je ten muz v krabici");
}

function buttonClick() {
    var cislo = document.getElementById("textboxCislo").value;
    if(cislo == 420 || cislo == 69) {
        window.alert("zabij se");
    } else if (cislo == 1) {
        window.alert("stranky delal matyas :)");
    } else {
        document.getElementById("textChange").innerHTML = "ty cupko blba: " + cislo;
    }

}