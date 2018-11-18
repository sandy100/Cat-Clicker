let kittyClickCount = puffyClickCount = 0;
$("#kitty-image").click(function () {
    kittyClickCount++;
    $("#kitty-count").text(kittyClickCount);
});
$("#puffy-image").click(function () {
    puffyClickCount++;
    $("#puffy-count").text(puffyClickCount);
})