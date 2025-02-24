const account_Id= 14569877
let account_Email = "kartikbhosale@69"
var account_Password = "behenkelundd"
account_City = "Lasalgaon"

console.log(account_Id);
// constant are the ones which cannot be changed once its declared it remains the same 
//therefore account_Id=4678 not possible 

account_Email="baburaoapte@69"
account_Password="shyamraju"
account_City="Pune"

// instead of writing console.log() repeteadley we will use console.table([]) 
console.table([account_Id,account_Email,account_Password,account_City])

// we dont use var keyword because it does not support scope
/* scope means ={} that means if one programmer has set the value of account_Password in one code and another programmer is
   using the another code and if he/she uses account_Password variable and changes the vlaue or sets the other value it gets reflected
   in the first programmers code as well.... therefore we dont use var 

*/
//we will use let keyword