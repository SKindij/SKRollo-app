//** THIRD FUNCTIONAL BUTTON
function finishCalculation() {
    try {
      let initialParameters = [rolloWidth.textContent, rolloHeight.textContent, guideRails.value, orderNumber.value];
      initialParameters.forEach((item) => {
        if (item === '') { 
          throw new Error('Option is not selected') 
          } 
      });
    orderInfo.textContent = `Roller shutter ${rolloWidth.textContent} х ${rolloHeight.textContent} by order no №: ${orderNumber.value}`;
    console.log('we derive commodity for specification');
      //** call the functions
      addСanvasLength();
      addBoxAndRailsLength();
      addMeasPosQuantity();
      addPosQuantity();
      setTimeout(() => {Section4.style.visibility = "visible";}, 500);
      setTimeout(() => {downloadCalc.style.visibility = "visible";}, 2500);
    } catch (Error) {
      console.log(Error); // Option is not selected
          alert('Not all options are selected');
          return false;
      }
}

export default finishCalculation;
