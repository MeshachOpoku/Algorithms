//Task: get number from 2 to 25. Take only the prime numbers and throw away the rest.



//array defined and assign
arr=[]

//start: get numbers from 2 to 1000000 
total_num=1000000 
for (i=2;i<=total_num;i++){ arr.push(i)}
console.log(arr)
//end: get numbers from 2 to 1000000 




divisor=0  // is an index  for divisor  element in arr 


//start :Take only prime numbers
do{
    for (start=1;start<=arr.length;start+=1){
      if(arr[start]%arr[divisor]===0){
              if (arr[divisor]===arr[start]){continue} // dont assign zero for primes,  given a/b then a===b if true skip 
              else {arr[start]=0;}  // assign zero for non-prime numbers
     
       }
   
    }
    
   start+=1;  // changing the divisor index
   value=0; 
arr=arr.filter(data=>data!==value);// remove all zero and keep only primes

divisor+=1; //changing the index of divisor

 decoder=(3/100)*(total_num)
}while(divisor<=decoder)
//end:Take only prime numbers


//display  the output: arr and its contents
console.log(arr)

//display number of element in the arr 
console.log(arr.length)


//if you still donot understand : send me mail on :meshachboadi230@gmail.com
