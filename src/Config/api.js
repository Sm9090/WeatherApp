export const fetchingData = async(country ,errorMsg) =>{
try{
  const weatherResponse = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${country}&appid=117b15686ebd9c0345d2f25bd3449be5`)
  const weatherData = await weatherResponse.json()
  return weatherData;

} catch (error) {
  const errorMsg = error.message
  console.log(errorMsg)
  return errorMsg;
}
};