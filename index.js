// Code your solution here:
function driversWithRevenueOver(driver, revenue) {

	return driver.filter(function (obj){
		return obj.revenue > revenue;
	});
}

function driverNamesWithRevenueOver(driver, revenue){

	const result = driver.filter(function (obj){
		return obj['revenue'] > revenue;
	});
	return result.map(function(obj){
	  return obj.name;
	});
}

 //function exactMatch(driver, {key; value}){
   function exactMatch(driver, pair){
   return driver.filter(function (obj){
     for (const key in obj) {
     	  if(obj[key] === pair[key]){
       //have to loop thru keys of each obj
       //
       //if (key === 'key' && obj[key] === value) {
         return obj;
         //key is a string
        }
      }
   });
 }

function exactMatchToList(driver, pair){
   let result = driver.filter(function (obj){
     for (const key in obj) {
     	  if(obj[key] === pair[key]){
          return obj;
          //key is a string
        }
      }
   });
   return result.map(function (element) {
   	 return element.name;
   });
 }



