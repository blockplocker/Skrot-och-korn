function buildmenu() {
    var menu = document.getElementById("menu");
    var menuItems = [
        { text: "Startsida", href: "index.html" },
        { text: "Product sida", href: "productPage.html" },
        { text: "Media sida", href: "videoPage.html" },
        { text: "kontakta oss", href: "ContactPage.html" }
    ];

    menuItems.forEach(function(item) {
        var li = document.createElement("li");
        var a = document.createElement("a");
        a.href = item.href;
        a.textContent = item.text;
        li.appendChild(a);
        menu.appendChild(li);
    });
}

buildmenu();