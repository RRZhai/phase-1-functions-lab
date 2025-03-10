let streetNum;
function distanceFromHqInBlocks(streetNum){
    return Math.abs(streetNum - 42);
}

function distanceFromHqInFeet(streetNum){
    return distanceFromHqInBlocks(streetNum) * 264;
}

let start;
let end;
function distanceTravelledInFeet(start, end){
    return Math.abs(start - end) * 264;
}

function calculatesFarePrice(start, end){
    if (distanceTravelledInFeet(start, end) <= 400){
        return 0;
    } else if (distanceTravelledInFeet(start, end) <= 2000){
        return (distanceTravelledInFeet(start, end) - 400) *0.02;
    } else if (distanceTravelledInFeet(start, end) <= 2500){
        return 25;
    } else if (distanceTravelledInFeet(start, end) > 2500){
        return 'cannot travel that far';
    }
}