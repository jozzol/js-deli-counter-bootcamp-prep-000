var katzDeli = [];
function takeANumber(line, name){
  line.push(name)
  console.log("Welcome, "+ name +". You are number "+ line.length +" in line.")
  return "Welcome, "+ name +". You are number "+ line.length +" in line."
}
takeANumber(katzDeli, "Ada")
takeANumber(katzDeli, "Grace")
takeANumber(katzDeli, "Kent")
function nowServing(line){
  if(line === []){
    console.log("the line is empty")
    return "the line is empty"
  }else {
    return "currently serving" + line.shift()
  }
}
function currentline(line){
  if(line === []){
    console.log("the line is currently empty")
    return "the line is currently empty"
  }
}