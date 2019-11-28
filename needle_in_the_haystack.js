function findNeedle(param1, param2) {
    var index = 0;
    param1.forEach(function (i) {
        if (param2 == i)
            console.log(param2, index);
        index += 1;
    });
}
findNeedle(["red", "blue", "yellow", "black"], "yellow");
findNeedle(["red", "blue", "yellow", "black"], "blue");
