/**
 * @param {number} hour
 * @param {number} minutes
 * @return {number}
 */
 var angleClock = function(hour, minutes) {
    //let angle = 
    let hour1
    if (hour === 12) {
        hour1 = 0
    } else {
        hour1 = hour
    }
    hour1 += minutes/60
    hour1 = hour1 * 5
    
    
    let angle = Math.abs(hour1 - minutes)
    if (angle > 30) {
        angle = 60 -angle
    }
    angle = 360 * (angle/60)
    return angle
};
console.log(angleClock(12, 30))