//! * Authored by SKindij. * MIT Licence *
//! This project is my personal idea and development, which I do as much as possible in my free time.
//! I will be glad and grateful to everyone for advice on its improvement.
import './SKRollo.css';

//* initialization of parameters 
const openingWidth = document.querySelector("#openingWidth");
const openingHeight = document.querySelector("#openingHeight");
  const profileType = document.querySelector("#profileType");
  const controlType = document.querySelector("#controlType");
  const instalType = document.querySelector("#instalType");
const beginCalc = document.querySelector("#beginCalc");
const Section2 = document.querySelector("#Section2");
  const roletColor = document.querySelector("#roletColor");
  const hangers = document.querySelector("#hangers");
  const tubeType = document.querySelector("#tubeType");
  const boxType = document.querySelector("#boxType");
  const guideRails = document.querySelector("#guideRails");
const continueCalc = document.querySelector("#continueCalc");
const Section3 = document.querySelector("#Section3");
let rolloWidth = document.querySelector("#rolloWidth");
let rolloHeight = document.querySelector("#rolloHeight");
  const lockingType = document.querySelector("#lockingType");
const finishCalc = document.querySelector("#finishCalc");
  const orderNumber = document.querySelector("#orderNumber");
const downloadCalc = document.querySelector("#downloadCalc");
const Section4 = document.querySelector("#Section4");

Section2.style.visibility = "hidden";
Section3.style.visibility = "hidden";
downloadCalc.style.visibility = "hidden";
Section4.style.visibility = "hidden";

//* beginning of configuration based on initial parameters
function setBoxType() {
  switch (profileType.value) {
    case "RP39n" : //TODO: here you need to enter the correct parameters
      if (openingHeight.value <= 1200) {  
        boxType.value = "Box150";
      } else if (openingHeight.value <= 1800) {
        boxType.value = "Box165";
      } else if (openingHeight.value <= 2000) {
        boxType.value = "Box180";
      } else if (openingHeight.value <= 2300) {
        boxType.value = "Box205";
      } else {
        alert ('too high for the spring');
        boxType.value = "";
      }
      break;
    case "RP45s" : //TODO: here you need to enter the correct parameters
      if (openingHeight.value <= 1200) {  
        boxType.value = "Box150";
      } else if (openingHeight.value <= 1800) {
        boxType.value = "Box165";
      } else if (openingHeight.value <= 2000) {
        boxType.value = "Box180";
      } else if (openingHeight.value <= 2300) {
        boxType.value = "Box205";
      } else {
        alert ('too high for the spring');
      }
      break;
    case "RP55n" : //TODO: here you need to enter the correct parameters
      if (openingHeight.value <= 1200) {  
        boxType.value = "Box150";
      } else if (openingHeight.value <= 1800) {
        boxType.value = "Box165";
      } else if (openingHeight.value <= 2000) {
        boxType.value = "Box180";
      } else if (openingHeight.value <= 2300) {
        boxType.value = "Box205";
      } else if (openingHeight.value <= 2800) {
        boxType.value = "Box250";
      } else if (openingHeight.value <= 3100) {
        boxType.value = "Box300";
      } else {
        alert ('too high for the spring');
      }			
      break;
    case "RP55s" :
      alert ('it is better to choose another profile');
      break;
    case "RP77n" : //TODO: here you need to enter the correct parameters
      if (openingHeight.value <= 2400) {  
        boxType.value = "Box250";
      } else if (openingHeight.value <= 2800) {
        boxType.value = "Box300";
      } else if (openingHeight.value <= 3300) {
        boxType.value = "Box350";
      } else if (openingHeight.value <= 3400) {
        boxType.value = "Box375";
      } else {
        alert ('too high for the spring');
      }
      break;
      case "cord": // for future software versions
        console.log ('selection of the box for the cord');
        break;
      case "motor": // for future software versions
      case "motorNHK":
        console.log ('selection of the box for the motor');
        break;
    }
}

function setTubeType() {
  switch (controlType.value) {
    case "sim":   
        switch (profileType.value) {
          case "RP39n" : //TODO: here you need to enter the correct parameters
            if (openingWidth.value <= 1900) {	  
              tubeType.value = "RT40";
            } else if (openingWidth.value <= 2700) {
              tubeType.value = "RT60";
            } else {
              alert ('width too large for 39n profile');
              tubeType.value = "";
            }
          break;
          case "RP45s" : //TODO: here you need to enter the correct parameters
            if (openingWidth.value <= 1400) {	  
              tubeType.value = "RT40";
            } else if (openingWidth.value <= 2100) {
              tubeType.value = "RT60";
            } else if (openingWidth.value <= 2600) {
			        tubeType.value = "RT70";
            } else {
              alert ('width too large for 45s profile');
            }
          break;
          case "RP55n" : //TODO: here you need to enter the correct parameters
            if (openingWidth.value <= 2600) {
              tubeType.value = "RT60";
            } else if (openingWidth.value <= 3300) {
              tubeType.value = "RT70";
            } else {
              alert ('width too large for 55n profile');
            }
          break;
          case "RP55s" :
            alert ('краще вибрати інший профіль');
          break;
          case "RP77n" : //TODO: here you need to enter the correct parameters
            if (openingWidth.value <= 2600) {
              tubeType.value = "RT60";
            } else if (openingWidth.value <= 3600) {
			        tubeType.value = "RT70";
            } else {
              alert ('width too large for 77n profile');
            }
          break;
        }
    break;
    case "cord": // for future software versions
      console.log ('selection of the shaft for the cord');
      break;
    case "motor": // for future software versions
    case "motorNHK":
      console.log ('selection of the shaft for the motor');
    break;
  }
}

function setHangersTypeAndArticles() {
	let springsArticles = ['HS130', 'HS170', 'HS190'];
  switch (controlType.value) {
    case "sim":
      hangers.value = 'springs';
        switch (profileType.value) {
		   case "RP39n" :
	      hangersArt.textContent = springsArticles[0];
		     break;
	    case "RP45s" :
		    case "RP55n" :
	      hangersArt.textContent = springsArticles[1];
	      break;
	    case "RP55s" :
	    case "RP77n" :
	      hangersArt.textContent = springsArticles[2];
		    break;
		    }
		break;
    case "cord": // for future software versions
      hangers.value = 'springs';
      break;
    case "motor": // for future software versions
    case "motorNHK":
      hangers.value = 'blockades';
      break;
  }
}

function setRailsType() {
        switch (profileType.value) {
          case "RP39n" :
          case "RP45s" :
            guideRails.value = "GR53s";
            brushInsertArt.textContent = 'under development';
          break;
          case "RP55n" :
          case "RP55s" :
            if (boxType.value === "Box250" || boxType.value === "Box300") {
              guideRails.value = "GR77b";
              brushInsertArt.textContent = 'under development';
            } else {
              guideRails.value = "GR70m";
              brushInsertArt.textContent = 'under development';
            }
          break;
          case "RP77n" :
            guideRails.value = "GR90b";
            brushInsertArt.textContent = 'under development
        }
}

//** FIRST FUNCTIONAL BUTTON
function beginCalculation() {
  try {
      if (openingWidth.value === '' || openingHeight.value === '') { 
      throw new Error('Empty fields') 
      } 
      let initialParameters = [profileType.value, controlType.value, instalType.value];
      initialParameters.forEach((item) => {
        if (item === '') { 
          throw new Error('Option is not selected') 
          } 
      });
  console.log(`beginning of calculation for opening: ${openingWidth.value} x ${openingHeight.value}`);
  console.log('profile:', profileType.value);
  console.log('control:', controlType.value);
  console.log('installation type:', instalType.value);
    //** call the functions
    setBoxType();
    setTubeType();
    setHangersTypeAndArticles();
    setRailsType();
    setTimeout(() => {Section2.style.visibility = "visible";}, 500);
  } catch (Error) {
  console.log(Error); // Option is not selected
      alert('Not all options are selected');
      return false;
  }
}
beginCalc.addEventListener('click', beginCalculation);

//* continuation of calculation taking into account additional parameters
function setRolletsDimensions() {
  switch (instalType.value) {
    case "inHole":
      rolloWidth.textContent = openingWidth.value;
      rolloHeight.textContent = openingHeight.value;
      break;
    case "plusBox":
      rolloWidth.textContent = openingWidth.value;
      rolloHeight.textContent = openingHeight.value;
      break;
    case "plusGuides":
      rolloWidth.textContent = openingWidth.value;
      rolloHeight.textContent = openingHeight.value;
      break;
      case "onHole":
        rolloWidth.textContent = openingWidth.value;
        rolloHeight.textContent = openingHeight.value;
        break;
  }
  console.log('overall dimensions of roller shutter', Number(rolloWidth.textContent), 'x', Number(rolloHeight.textContent));
}

function setSideCoverType() {
  switch (boxType.value) {
    case "Box150":
      sideCoversArt.textContent = 'BSC150' + roletColor.value;
      break;
    case "Box165":
      sideCoversArt.textContent = 'BSC165' + roletColor.value;
      break;
    case "Box180":
      sideCoversArt.textContent = 'BSC180' + roletColor.value;
      break;
    case "Box205":
      sideCoversArt.textContent = 'BSC205' + roletColor.value;
      break;
    case "Box250":
      sideCoversArt.textContent = 'BSC250' + roletColor.value;
      break;
    case "Box300":
      sideCoversArt.textContent = 'BSC300' + roletColor.value;
      break;
    case "Box350":
      sideCoversArt.textContent = 'BSC350' + roletColor.value;
      break;
    case "Box375":
      sideCoversArt.textContent = 'BSC375' + roletColor.value;
      break;
  }
}

function setEndBarType() {
  switch (profileType.value) {
    case "RP39n":
    case "RP45s":
      if (lockingType.value === 'keyLock' || lockingType.value === 'latch') {
        connectArt.textContent = 'connector';
        endBarArt.textContent = 'bar under the lock';
        lowRubberArt.textContent = 'lower rubber band';
        laneArt.textContent = 'closed lane';
      } else {
        endBarArt.textContent = 'solid bar';
        lowRubberArt.textContent = 'lower rubber band';
      }
      break;
    case "RP55n":
    case "RP55s":
      if (lockingType.value === 'keyLock' || lockingType.value === 'latch') {
        connectArt.textContent = 'connector';
        endBarArt.textContent = 'bar under the lock';
        lowRubberArt.textContent = 'lower rubber band';
        laneArt.textContent = 'closed lane';
      } else {
        endBarArt.textContent = 'solid bar';
        lowRubberArt.textContent = 'lower rubber band';
      }
        break;
    case "RP77n":
      if (lockingType.value === 'keyLock' || lockingType.value === 'latch') {
        connectArt.textContent = 'connector';
        endBarArt.textContent = 'bar under the lock';
        lowRubberArt.textContent = 'lower rubber band';
        laneArt.textContent = 'closed lane';
      } else {
        endBarArt.textContent = 'solid bar';
        lowRubberArt.textContent = 'lower rubber band';
      }
      break;
  }
}

let canvasWeight = 0;
const RP39nWeigt = 2;
const RP45sWeigt = 4; //*? check the information
const RP55nWeigt = 2.3;
const RP55sWeigt = 10.3;
const RP77nWeigt = 4.5;
function calculateCanvasWeight() {
  switch (profileType.value) {
    case "RP39n" :
      canvasWeight = Number(rolloWidth.textContent)/1000 * Number(rolloHeight.textContent)/1000 * RP39nWeigt;
      break;
    case "RP45s" :
      canvasWeight = Number(rolloWidth.textContent) * Number(rolloHeight.textContent) * RP45sWeigt;
    case "RP55n" :
      canvasWeight = Number(rolloWidth.textContent) * Number(rolloHeight.textContent) * RP55nWeigt;
      break;
    case "RP55s" :
      canvasWeight = Number(rolloWidth.textContent) * Number(rolloHeight.textContent) * RP55sWeigt;
    case "RP77n" :
      canvasWeight = Number(rolloWidth.textContent) * Number(rolloHeight.textContent) * RP77nWeigt;
      break;
  }
console.log(`weight of canvas: ${canvasWeight} кг`)
return canvasWeight;
}

function setSmallDetails() {
  switch (tubeType.value) {
    case "RT40":
      capsuleArt.textContent = 'KUP40';
      bearingArt.textContent = 'BM28';
      bearBracketArt.textContent = 'none';
//*TODO: SIM
/*
      if (canvasWeight) {
        
      } else {
        
      }
*/
    break;
    case "RT60": //*? how to choose different types of capsules?
      capsuleArt.textContent = 'KUP60';
      bearingArt.textContent = 'BM28';
    break;
    case "RT70": //*? how to choose different types of capsules?
      capsuleArt.textContent = 'KBM70';
      bearingArt.textContent = 'BM42';
    break;
    case "RT102": 
      capsuleArt.textContent = 'KBM102';
      bearingArt.textContent = 'BM42';
    break;
  }

  switch (lockingType.value) {
    case "keyLock":
      boltLockArt.textContent = 'BL';
    break;
    case "latch":
      boltLockArt.textContent = 'SL';
    break;
    case "comb":
      boltLockArt.textContent = 'CB';
    break;
    default:
      boltLockArt.textContent = 'none';
    break;
}
  stopperArt.textContent = 'ST' + roletColor.value;
  plugsArt.textContent = 'PP12 or PP14' + roletColor.value;
} 

//** SECOND FUNCTIONAL BUTTON
function continueCalculation() {
  try {
    let initialParameters = [roletColor.value, hangers.value, tubeType.value, boxType.value, lockingType.value];
    initialParameters.forEach((item) => {
      if (item === '') { 
        throw new Error('Option is not selected') 
        } 
    });
    console.log('continuation of calculation');
    //** call the functions
    setRolletsDimensions();
    console.log('roller shutter color:', roletColor.value);
      profileArt.textContent = profileType.value + '-' + roletColor.value;
    console.log('box size:', boxType.value);
      protBoxArt.textContent = boxType.value + '-' + roletColor.value;
      setSideCoverType();
    console.log('shaft diameter:', tubeType.value);
      octaShaftArt.textContent = tubeType.value;
      calculateCanvasWeight();
      setSmallDetails();
    console.log('guide rails:', guideRails.value);
      guideRailsArt.textContent = guideRails.value + '-' + roletColor.value;
    console.log('locking:', lockingType.value);
      setEndBarType();
      setTimeout(() => {Section3.style.visibility = "visible";}, 500);
  } catch (Error) {
    console.log(Error); // Option is not selected
    alert('Not all options are selected');
    return false;
  }
}
continueCalc.addEventListener('click', continueCalculation);



















