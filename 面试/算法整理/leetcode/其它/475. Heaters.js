/*

Winter is coming! Your first job during the contest is to design a standard heater with fixed warm radius to warm all the houses.

Now, you are given positions of houses and heaters on a horizontal line, find out minimum radius of heaters so that all houses could be covered by those heaters.

So, your input will be the positions of houses and heaters seperately, and your expected output will be the minimum radius standard of heaters.

Note:
Numbers of houses and heaters you are given are non-negative and will not exceed 25000.
Positions of houses and heaters you are given are non-negative and will not exceed 10^9.
As long as a house is in the heaters' warm radius range, it can be warmed.
All the heaters follow your radius standard and the warm radius will the same.

 */

// 这种题我一向不做。。。

var findRadius = function(houses, heaters) {
    var radius = houses.map(function(x){return [x,0,Number.MAX_VALUE];}).concat(heaters.map(function(x){return [x,1,Number.MAX_VALUE]}));
    radius.sort(function(a,b) {
        if (a[0] > b[0])
            return 1;
        else if (a[0] < b[0])
            return -1;
        else
            return 0
    });
    
    function updateRadius(fromLeftToRight) {
        var indices = [];
        var i;
        for (i = 0; i < radius.length; i++)
            indices.push(i);
        if (!fromLeftToRight) {
            indices.reverse();
        }
        var curHeater = null;
        for (i = 0; i < indices.length; i++) {
            var idx = indices[i];
            if (radius[idx][1] == 1)
                curHeater = radius[idx][0];
            else if (curHeater)
                radius[idx][2] = Math.min(radius[idx][2], Math.abs(radius[idx][0] - curHeater));
        }
    }
    
    updateRadius(true);
    updateRadius(false);
    
    var ret = 0;
    for (var i = 0; i < radius.length; i++) {
        if (radius[i][1] === 0) {
            ret = Math.max(ret, radius[i][2]);
        }
    }
    return ret;
};