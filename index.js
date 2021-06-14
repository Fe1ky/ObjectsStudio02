// Code your orbitCircumference function here:
function orbitCircumference(r){
return Math.floor(2*Math.PI*r);
}

// Code your missionDuration function here:


function missionDuration(orbits,r,s){
// let r = 2000;
// let s = 28000;
let distance = orbits*orbitCircumference(r);
let time = distance/s;

console.log(`The mission will travel ${distance} km around the planet, and it will take ${time} hours to complete.`)
return time
}

// Copy/paste your selectRandomEntry function here:
function selectRandomEntry(array){
   let index = Math.floor(Math.random()*array.length);
   return array[index];
}

// Code your oxygenExpended function here:
function oxygenExpended(candidate,r,s){
const swTime = missionDuration(3,r,s);
let o2Consumed = candidate.o2Used(swTime);
return (`${candidate.name} will perform the spacewalk, which will last ${swTime} hours and require ${o2Consumed} kg of oxygen.`);
}

// Candidate data & crew array.
let candidateA = {
  'name':'Gordon Shumway',
  'species':'alf',
  'mass':90,
  'o2Used':function(hrs){return 0.035*hrs},
  'astronautID':414
};
let candidateB = {
  'name':'Lassie',
  'species':'dog',
  'mass':19.1,
  'o2Used':function(hrs){return 0.030*hrs},
  'astronautID':503
};
let candidateC = {
  'name':'Jonsey',
  'species':'cat',
  'mass':3.6,
  'o2Used':function(hrs){return 0.022*hrs},
  'astronautID':796
};
let candidateD = {
  'name':'Paddington',
  'species':'bear',
  'mass':31.8,
  'o2Used':function(hrs){return 0.047*hrs},
  'astronautID':291
};
let candidateE = {
  'name':'Pete',
  'species':'tortoise',
  'mass':417,
  'o2Used':function(hrs){return 0.010*hrs},
  'astronautID':599
};
let candidateF = {
  'name':'Hugs',
  'species':'ball python',
  'mass':2.3,
  'o2Used':function(hrs){return 0.018*hrs},
  'astronautID':890
};

let crew = [candidateA,candidateC,candidateE];

let lowestO2 = function(crew){
  let choice = crew[0].o2Used(1);
  let name = crew[0].name;
  let i = 0
  for(item in crew){
    if (crew[i].o2Used(1)<choice){
      choice = crew[i].o2Used(1);
        name = crew[i].name;
     
    }
    i++
  }
  return name;
  }

  console.log(lowestO2(crew))
oxygenExpended(candidateB,5000,20000)