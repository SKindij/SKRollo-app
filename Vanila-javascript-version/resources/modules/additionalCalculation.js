// additionalCalculation.js
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

export {
    setRolletsDimensions,
    setSideCoverType,
    setEndBarType,
    calculateCanvasWeight,
    setSmallDetails
};
