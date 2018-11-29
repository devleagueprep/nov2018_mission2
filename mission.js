/*Mission 1:
 Team Member: Davis
 
 @param Datatype: Number
 @return Datatype: Number
 
 Create a function named yenConverter that takes a parameter rate and will convert dollars to yen based on today's foreign exchange rate and returns the new yen amount.
 Console.log your result*/
 
 
 /*Mission 2:
 Team Member: Eunice
 
 @param Datatype: Number
 @return Datatype: Number
 
 Create a function named kmConverter that takes in a parameter miles and will convert miles to kilometers and returns the new kilometer amount
 Console.log your result.*/
 function kmConverter(miles){
     var kilometers = miles * 1.60934;
     return kilometers;
 } 

 console.log(kmConverter(60));

 /*Mission 3:
 Team Member: Tyler
 
 @param Datatype: Number
 @return Datatype: String
 
 Create a function named whatToEat that takes in a parameter budget. Create the following return statements based on the budget amount: 
 
 <=5 => "Mickey D's"
 <=10 => "Panda Express"
 >10 => "Peppas"
 
 Console.log your result*/
 
function whatToEat(budget){
    if (budget <= 5) {
        return 'Mickey D\'s';
    } else if (budget <= 10) {
        return 'Panda Express';
    } else {
        return 'Peppas';
    }
}

console.log(whatToEat(13));
 
 /*Mission 4:
 Team Member: Sylvia
 
 @param Datatype: Array
 @return Datatype: Array
 
 Create a function named countUp that takes in a parameter arr and will add 1 to each number in the array and returns the array.
 Console.log you result.*/


  
 /*Mission 5:
 Team Member: Roland
 
 @param Datatype: Array
 @return Datatype: Array
 
 Create a function named countDown that takes in a parameter arr and will subtract 1 to each number in the array and returns the array.

 Console.log you result.*/
 function countDown(arr){
     var newArray = [];
    for(i=0;i<arr.length;i++){
    newArray.push(arr[i]-1)
    }
    return newArray1;
 }
 countDown([10]);
 
