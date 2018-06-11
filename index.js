var recipes = {
  cookies: "dough",
  cake: "batter",
  iceCream: "cream"
};

function updateObjectWithKeyAndValue (recipes, key, value) {
  return Object.assign({}, recipes, {[key]: value}) 
}

function destructivelyUpdateObjectWithKeyAndValue (recipes, key, value) {
  recipes[key] = value
  return recipes;
}

function deleteFromObjectsByKey (recipes, key) {
  return Object.assign({}, recipes, )
}