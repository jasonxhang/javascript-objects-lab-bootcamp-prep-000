var recipes = {
  cookies: "dough",
  cake: "batter",
  iceCream: "cream"
};

function updateObjectWithKeyAndValue (recipes, key, value) {
  return Object.assign( {}, recipes, {key: value})
}