// continueCalculation.js
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

export default continueCalculation;
