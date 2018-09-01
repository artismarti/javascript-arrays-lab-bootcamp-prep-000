var kittens = ["Milo", "Otis", "Garfield"]
function destructivelyAppendKitten() {
  return kittens.push("Ralph")
}
function destructivelyPrependKitten() {
  return kittens.unshift("Bob")
}
function destructivelyRemoveLastKitten() {
  return kittens.pop()
}
function destructivelyRemoveFirstKitten() {
  kittens.shift()
  return kittens
}
function appendKitten(name) {
  var newArr = kittens.push(name)
  return newArr
}
function prependKitten(name) {
  
}
function removeLastKitten() {
  
}
function removeFirstKitten() {
  
}