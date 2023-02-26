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








