var recipes = {
  cookies: "dough",
  cake: "batter",
  iceCream: "cream"
};

function updateObjectWithKeyAndValue (object, key, value) {
  recipes[key] = value;
  return recipes;
}