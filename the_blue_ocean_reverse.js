function blueOcean(param1, param2) {
    var res = [];
    param1.forEach(function (i) {
        if (i != param2[0])
            res.push(i);
    });
    console.log(res);
}
blueOcean([1, 2, 3, 4, 6, 10], [1]);
blueOcean([1, 5, 5, 5, 5, 3], [5]);
