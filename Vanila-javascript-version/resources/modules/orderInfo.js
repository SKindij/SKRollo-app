//* forming a complete list of components for production
let orderInfo = document.querySelector("#orderInfo");
const measPosArticles = document.querySelector("#measPosArticles");
  let protBoxArt = measPosArticles.querySelector("#protBoxArt");  // 1
  let octaShaftArt = measPosArticles.querySelector("#octaShaftArt"); // 2
  let profileArt = measPosArticles.querySelector("#profileArt"); // 3
  let connectArt = measPosArticles.querySelector("#connectArt"); // 4
  let endBarArt = measPosArticles.querySelector("#endBarArt"); // 5
  let laneArt = measPosArticles.querySelector("#laneArt"); // 6
  let lowRubberArt = measPosArticles.querySelector("#lowRubberArt"); // 7
  let guideRailsArt = measPosArticles.querySelector("#guideRailsArt"); // 8
  let brushInsertArt = measPosArticles.querySelector("#brushInsertArt"); // 9

const measPosLength = document.querySelector("#measPosLength");
  let protBoxLength = measPosLength.querySelector("#protBoxLength");  // 1
  let octaShaftLength = measPosLength.querySelector("#octaShaftLength"); // 2
  let profileLength = measPosLength.querySelector("#profileLength"); // 3
  let connectLength = measPosLength.querySelector("#connectLength"); // 4
  let endBarLength = measPosLength.querySelector("#endBarLength"); // 5
  let laneLength = measPosLength.querySelector("#laneLength"); // 6
  let lowRubberLength = measPosLength.querySelector("#lowRubberLength"); // 7
  let guideRailsLength = measPosLength.querySelector("#guideRailsLength"); // 8
  let brushInsertLength = measPosLength.querySelector("#brushInsertLength"); // 9

const measPosQuanty = document.querySelector("#measPosQuanty");
  let protBoxQuant = measPosQuanty.querySelector("#protBoxQuant");  // 1
  let octaShaftQuant = measPosQuanty.querySelector("#octaShaftQuant"); // 2
  let profileQuant = measPosQuanty.querySelector("#profileQuant"); // 3
  let connectQuant = measPosQuanty.querySelector("#connectQuant"); // 4
  let endBarQuant = measPosQuanty.querySelector("#endBarQuant"); // 5
  let laneQuant = measPosQuanty.querySelector("#laneQuant"); // 6
  let lowRubberQuant = measPosQuanty.querySelector("#lowRubberQuant"); // 7
  let guideRailsQuant = measPosQuanty.querySelector("#guideRailsQuant"); // 8
  let brushInsertQuant = measPosQuanty.querySelector("#brushInsertQuant"); // 9

const PosArticles = document.querySelector("#PosArticles");
  let sideCoversArt = PosArticles.querySelector("#sideCoversArt");  // 1
  let ringsShaftArt = PosArticles.querySelector("#ringsShaftArt"); // 2
  let hangersArt = PosArticles.querySelector("#hangersArt"); // 3
  let capsuleArt = PosArticles.querySelector("#capsuleArt"); // 4
  let bearingArt = PosArticles.querySelector("#bearingArt"); // 5
  let bearBracketArt = PosArticles.querySelector("#bearBracketArt"); // 6
  let springArt = PosArticles.querySelector("#springArt"); // 7
  let plateArt = PosArticles.querySelector("#plateArt"); // 8
  let boltLockArt = PosArticles.querySelector("#boltLockArt"); // 9
  let stopperArt = PosArticles.querySelector("#stopperArt"); // 10
  let plugsArt = PosArticles.querySelector("#plugsArt"); // 11

  const PosQuanty = document.querySelector("#PosQuanty");
  let sideCoverQuant = PosQuanty.querySelector("#sideCoverQuant");  // 1
  let ringsShafQuant = PosQuanty.querySelector("#ringsShafQuant"); // 2
  let hangersQuant = PosQuanty.querySelector("#hangersQuant"); // 3
  let capsuleQuant = PosQuanty.querySelector("#capsuleQuant"); // 4
  let bearingQuant = PosQuanty.querySelector("#bearingQuant"); // 5
  let bearBracketQuant = PosQuanty.querySelector("#bearBracketQuant"); // 6
  let springQuant = PosQuanty.querySelector("#springQuant"); // 7
  let plateQuant = PosQuanty.querySelector("#plateQuant"); // 8
  let boltLockQuant = PosQuanty.querySelector("#boltLockQuant"); // 9
  let stopperQuant = PosQuanty.querySelector("#stopperQuant"); // 10
  let plugsQuant = PosQuanty.querySelector("#plugsQuant"); // 11

let specificationObject = {};

function addСanvasLength() { 
  switch (profileType.value) {
    case "RP39n": //TODO: describe calculating the dimensions for this Profile
      octaShaftLength.textContent = Number(rolloWidth.textContent) - 50;
      profileLength.textContent = Number(rolloWidth.textContent) - 72;
      connectLength.textContent = Number(rolloWidth.textContent) - 72;
      endBarLength.textContent = Number(rolloWidth.textContent) - 72;
      laneLength.textContent = (Number(rolloWidth.textContent) - 72) / 2;
      lowRubberLength.textContent = Number(rolloWidth.textContent) - 72;
    break;
    case "RP45s": //TODO: describe calculating the dimensions for this Profile
      octaShaftLength.textContent = Number(rolloWidth.textContent) - 50;
      profileLength.textContent = Number(rolloWidth.textContent) - 72;
      connectLength.textContent = Number(rolloWidth.textContent) - 72;
      endBarLength.textContent = Number(rolloWidth.textContent) - 72;
      laneLength.textContent = (Number(rolloWidth.textContent) - 72) / 2;
      lowRubberLength.textContent = Number(rolloWidth.textContent) - 72;
    break;
    case "RP55n": //TODO: describe calculating the dimensions for this Profile
      octaShaftLength.textContent = Number(rolloWidth.textContent) - 60;
      profileLength.textContent = Number(rolloWidth.textContent) - 88;
      connectLength.textContent = Number(rolloWidth.textContent) - 88;
      endBarLength.textContent = Number(rolloWidth.textContent) - 88;
      laneLength.textContent = (Number(rolloWidth.textContent) - 88) / 2;
      lowRubberLength.textContent = Number(rolloWidth.textContent) - 88;
    break;
    case "RP55s": //TODO: describe calculating the dimensions for this Profile
      octaShaftLength.textContent = Number(rolloWidth.textContent) - 60;
      profileLength.textContent = Number(rolloWidth.textContent) - 88;
      connectLength.textContent = Number(rolloWidth.textContent) - 88;
      endBarLength.textContent = Number(rolloWidth.textContent) - 88;
      laneLength.textContent = (Number(rolloWidth.textContent) - 88) / 2;
      lowRubberLength.textContent = Number(rolloWidth.textContent) - 88;
    break;
    case "RP77n": //TODO: describe calculating the dimensions for this Profile
      octaShaftLength.textContent = Number(rolloWidth.textContent) - 80;
      profileLength.textContent = Number(rolloWidth.textContent) - 102;
      connectLength.textContent = Number(rolloWidth.textContent) - 102;
      endBarLength.textContent = Number(rolloWidth.textContent) - 102;
      laneLength.textContent = (Number(rolloWidth.textContent) - 102) / 2;
      lowRubberLength.textContent = Number(rolloWidth.textContent) - 102;
    break;
  }
}

function addBoxAndRailsLength() { //TODO: describe calculating the dimensions for each type of Box
  switch (boxType.value) {
    case "Box150":
    case "Box165":
    case "Box180":
      protBoxLength.textContent = Number(rolloWidth.textContent) - 8;
    break;
    case "Box205":
      protBoxLength.textContent = Number(rolloWidth.textContent) - 10;
    break;
    case "Box250":
    case "Box300":
      protBoxLength.textContent = Number(rolloWidth.textContent) - 10;
    break;
    case "Box350":
    case "Box375":
      protBoxLength.textContent = Number(rolloWidth.textContent) - 12;
    break;
  }
  guideRailsLength.textContent = Number(rolloHeight.textContent) - Number.parseInt(boxType.value.replace(/[^\d]/g, '')) + 20;
  brushInsertLength.textContent = Number(rolloHeight.textContent) - Number.parseInt(boxType.value.replace(/[^\d]/g, ''));
}

function addMeasPosQuantity() {
	protBoxQuant.textContent = 1;
	octaShaftQuant.textContent = 1;
  profileQuant.textContent = Math.ceil((Number(rolloHeight.textContent) - Number.parseInt(boxType.value.replace(/[^\d]/g, '')) / 2) / Number.parseInt(profileType.value.replace(/[^\d]/g, '')));
  connectQuant.textContent = 1;
  endBarQuant.textContent = 1;
  laneQuant.textContent = 2;
  lowRubberQuant.textContent = 1;
  guideRailsQuant.textContent = 2;
	brushInsertQuant.textContent = 4;
}

function addPosQuantity() {
  sideCoverQuant.textContent = 1;
  ringsShafQuant.textContent = Math.ceil(Number(rolloWidth.textContent) / 400);
  hangersQuant.textContent = Math.ceil(Number(rolloWidth.textContent) / 400);
  capsuleQuant.textContent = 1;
  bearingQuant.textContent = 1;
  bearBracketQuant.textContent = 'under development'; //*? must be function
  springQuant.textContent = 1;
  plateQuant.textContent = 1;
  boltLockQuant.textContent = 1;
  stopperQuant.textContent = 2;
  plugsQuant.textContent = Math.ceil((Number(rolloHeight.textContent) - Number.parseInt(boxType.value.replace(/[^\d]/g, ''))) / 400) * 2;
}

export {
    addСanvasLength,
    addBoxAndRailsLength,
    addMeasPosQuantity,
    addPosQuantity,
};
