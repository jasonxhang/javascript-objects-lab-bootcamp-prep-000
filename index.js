var recipes = {
  cookies: "dough",
  cake: "batter",
  iceCream: "cream"
};

function updateObjectWithKeyAndValue (recipes, key, value) {
  return Object.assign({}, recipes, {[key]: value}) //why does key need to be in square brackets
}

function destructivelyUpdateObjectWithKeyAndValue (recipes, key, value) {
  return Object.assign({}, recipes, {[key]: value}) //why does key need to be in square brackets
}