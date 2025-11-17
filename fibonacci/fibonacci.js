function fibonacciGenerator(n) {
    var array = [];

    if (n === 0) {
        return array;
    } else if (n === 1) {
        array.push(0);
        return array;
    } else if (n === 2) {
        array.push(0, 1);
        return array;
    } else {
        array = [0, 1];
        for (var i = 2; i < n; i++) {
            array.push(array[i - 1] + array[i - 2]);
        }
        return array;
    }
}
