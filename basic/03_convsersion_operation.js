//1.
let value = "33"
console.log(typeof value)// type of a value var
console.log(typeof (value))// value var ko method mein convert karke type pucha 

let convertintonum = Number(value) // mene string ko num ke andar convert kiya with the help of//Number
console.log(typeof convertintonum);
console.log(convertintonum);

//"33"=>33:number

// value="33abc"=> convert toh hua number ke andar but output NaN aya
//NaN: Not a Number 

// value="abc"=> convert toh hua number ke andar but output NaN aya
//NaN: Not a Number 

// value="null"=> convert toh hua number ke andar but output 0 aya
// dataype object ayega due to bug of js

// value="true"=> convert toh hua number ke andar but output 1 aya
// value="false"=> convert toh hua number ke andar but output 0 aya

//2.
let value1=1
console.log(typeof value1)//number
console.log(typeof (value1))//number

let convertintobool= Boolean(value1)
console.log(typeof convertintobool);
console.log(convertintobool);

//1=>true
//0=>false
//""=>false
//null=>false
//"kartik"=>true
//undefined=>false
// 1234=> true ie other tah 0 or 1 the the conversion will be always true

//3. 
let value2=1
console.log(typeof value2)//number
console.log(typeof (value2))//number

let convertintostring= String(value2)
console.log(typeof convertintostring);
console.log(convertintostring);

// true=> true
// false=> false
// 1=> "1"
// 0=> "0"
// null=> "null"
// undefined=> "undefined"
// 1234=> "1234"
// "kartik"=> "kartik"
