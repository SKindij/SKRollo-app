//* saving data to file on client side without involving server
function createSpecificationObject() {
    specificationObject = {
      orderNumber: orderNumber.value,
  
      productDimensions: { // розміри ролети
        rolloWidth: rolloWidth.textContent,
        rolloHeight: rolloHeight.textContent
      },
  
      measurablePositions: {
      // list of measurement positions
      rollBox: [protBoxArt.textContent, protBoxLength.textContent, protBoxQuant.textContent], // 1
      rollTube: [octaShaftArt.textContent, octaShaftLength.textContent, octaShaftQuant.textContent], // 2
      rollProfile: [ profileArt.textContent, profileLength.textContent, profileQuant.textContent], // 3
      rollConnector: [connectArt.textContent, connectLength.textContent, connectQuant.textContent], // 4
      rollEndBar: [endBarArt.textContent, endBarLength.textContent, endBarQuant.textContent], // 5
      rollLane: [laneArt.textContent, laneLength.textContent, laneQuant.textContent], // 6
      rollLowRubber: [lowRubberArt.textContent, lowRubberLength.textContent, lowRubberQuant.textContent], // 7
      rollGuideRails: [guideRailsArt.textContent, guideRailsLength.textContent, guideRailsQuant.textContent], // 8
      rollBrushInsert: [brushInsertArt.textContent, brushInsertLength.textContent, brushInsertQuant.textContent] // 8
        },
  
        quantitativePositions: {
      // list of artificial positions
        rollSideCovers: [sideCoversArt.textContent, sideCoverQuant.textContent], // 1
        rollTubeRings: [ringsShaftArt.textContent, ringsShafQuant.textContent], // 2
        rollCanvaseHangers: [hangersArt.textContent, hangersQuant.textContent], // 3
        rollCapsule: [capsuleArt.textContent, capsuleQuant.textContent], // 4
        rollBearing: [bearingArt.textContent, bearingQuant.textContent], // 5
        rollBracket: [bearBracketArt.textContent, bearBracketQuant.textContent], // 6
        rollSpring: [springArt.textContent, springQuant.textContent], // 7
        rollPlate: [plateArt.textContent, plateQuant.textContent], // 8
        rollBoltLock: [boltLockArt.textContent, boltLockQuant.textContent], // 9
        rollStopper: [stopperArt.textContent, stopperQuant.textContent], // 10
        rollPlugs: [plugsArt.textContent, plugsQuant.textContent] // 11
      }
    }
      console.log(specificationObject);
    return specificationObject;
}

export default createSpecificationObject;
