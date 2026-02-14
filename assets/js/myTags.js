// JavaScript Document
myTags = $('#myTags');
myTags.tagit({
    afterTagAdded: function (evt, ui) {
        if (!ui.duringInitialization) {
            search();
        }
    },
    afterTagRemoved: function (evt, ui) {
        search();
    }
});
var search = function () {
    if ($('.tagit-label').length) {
        $("#table tbody tr").fadeOut();
        var toShow = [];
        $('.tagit-label').each(function () {
            filter = $(this).text();
            $("#table tbody tr").each(function () {
                if ($(this).text().search(new RegExp(filter, "i")) > 0) {
                    toShow.push($("#table tbody tr").index(this));
                }
            });
        });
        $(toShow).each(function(i,value){
            $("#table tbody tr").eq(value).fadeIn();
        });
    }else{
        $("#table tbody tr").fadeIn();
    }
}