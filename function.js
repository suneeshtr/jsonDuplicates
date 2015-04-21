// using underscore

function arrUnique(arr) {
    var cleaned = [];
    arr.forEach(function(itm) {
        var unique = true;
        cleaned.forEach(function(itm2) {
            if (_.isEqual(itm, itm2)) unique = false;
        });
        if (unique)  cleaned.push(itm);
    });
    return cleaned;
}

var standardsList = arrUnique(standardsList);


// using jquery

var categories = [];
var newArr = [];
$.each(data, function(index, value) {
    if ($.inArray(value.emailid, categories)==-1) {
        categories.push(value.emailid);
        newArr.push(value)
    }
});
