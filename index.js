var recipes = {
  cookies: "dough",
  cake: "batter",
  iceCream: "cream"
};

function updateObjectWithKeyAndValue (object, key, value) {
  return Object.assign( {}, recipes, {key: value})
}