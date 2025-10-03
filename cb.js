const fs = require ('fs')

/*
let data = fs.readFileSync ('f1.txt')

console.log('File1 data ->' +data )

let data2 = fs.readFileSync ('f2.txt')

console.log('File2 data ->' +data2 )

*/

console.log ('first line')
fs.readFile ('f1.txt', cb1)
function cb1( err , data){
    if (err){
        console.log (err)
            
    }
    console.log('File1 data ->' +data ) 
    fs.readFile ('f2.txt', cb2)
}


function cb2( err , data){
    if (err){
        console.log (err)
      
    }
      console.log('File2 data ->' +data ) 
    fs.readFile ('f3.txt', cb3)
}


function cb3( err , data){
    if (err){
        console.log (err)
          
    }
  console.log('File3 data ->' +data )
}


console.log ('last line')