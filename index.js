var recipes = {
  cookies: "dough",
  cake: "batter",
  iceCream: "cream"
};

function updateObjectWithKeyAndValue (object, key, value) {
  return ObjectAssign recipes[key] = value;
  
}