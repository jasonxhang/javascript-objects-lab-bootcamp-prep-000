var recipes = {
  cookies: "dough",
  cake: "batter",
  iceCream: "cream"
};

function updateObjectWithKeyAndValue (object, key, value) {
  return recipes.assign( {}, recipes, {key: value})
  
}