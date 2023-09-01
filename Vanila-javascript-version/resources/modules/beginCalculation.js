import {
    setBoxType,
    setTubeType,
    setHangersTypeAndArticles,
    setRailsType,
} from './configuration';

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

export default beginCalculation;
