$(function () {
  $(".tabPanelItem a").click(function () {
    $(this).parent().addClass("active").siblings(".active").removeClass("active");
    var tabContents = $(this).attr("href");
    $(tabContents).addClass("active").siblings(".active").removeClass("active");
    return false;
  });
});