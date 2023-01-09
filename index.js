// Code your solution in this file!

function distanceFromHqInBlocks(pickUp) {
  const hqLocation = 42 ;
  return Math.abs(pickUp - hqLocation);
}

function distanceFromHqInFeet(pickUp) {
  return Math.abs((pickUp - 42) * 264);
}
function  distanceTravelledInFeet(start, destination) {
 return Math.abs((destination - start) * 264 );
}
/*function calculatesFarePrice(start, destination) {
 if (Math.abs(destination - start < 400)) {
  return (0);
} else if (Math.abs(destination - start > 400  && Math.abs(destination - start < 2000))) {
   return ("remember the first 400 feet are free!)") ;
} else if 

}*/

function calculatesFarePrice(start, destination) {
  let dist = distanceTravelledInFeet(start, destination);
  if (dist < 400 ) {
     return (0);
  } else if (dist > 400 && dist < 2000 ) {
    return (Math.abs(dist - 400 ) ) *.02 ;
  } else if (dist > 2000 && dist < 2500) {
    return (25);
  } else {
    return ("cannot travel that far");
  }
}