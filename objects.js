function destructivelyUpdateObjectWithKeyAndValue(obj, key, value) {
  
  return Object.assign({}, obj, { [key]: value } )
}

const recipe = { eggs: 3 }

destructivelyUpdateObjectWithKeyAndValue(recipe, 'chocolate', '1 cup')

console.log(recipe)