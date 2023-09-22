const canPlaceFlowers = function(flowerbed, n) {
    let availablePlots = 0;
    for (let i = 0; i < flowerbed.length; i++) {
        let currentPlot = flowerbed[i];
        let prevPlot = flowerbed[i-1];
        let nextPlot = flowerbed[i+1];
        if (prevPlot !== 1 && nextPlot !== 1 && currentPlot === 0) {
            flowerbed[i] = 1;
            availablePlots++;
        }
    }
    if (availablePlots >= n) {
        return true;
    }
    return false;
};

// Test ----> Expected output = true
console.log(canPlaceFlowers([0,0,1,0,1] , 1));