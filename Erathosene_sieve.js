//Task: get number from 2 to 25. Take only the prime numbers and throw away the rest.



//array defined and assign
arr=[]

// get numbers from 2 to 25
total_num=1000000 
for (i=2;i<=total_num;i++){ arr.push(i)}
console.log(arr)




divisor=0

//Take only prime numbers
do{
    for (start=1;start<=arr.length; start+=1){
      if(arr[start]%arr[divisor]===0){
             if (arr[divisor]===arr[start]){continue}
             else {arr[start]=0;} 
     
     }
   
    }
    
   start+=1; 
   value=0; 
arr=arr.filter(data=>data!==value);// remove all zero

divisor+=1; //changing the index d

 decoder=(3/100)*(total_num)
}while(divisor<=decoder)


console.log(arr)
console.log(arr.length)

