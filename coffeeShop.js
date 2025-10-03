function placeOrder(drink){
    return new Promise (function (resolve , reject){
        if (drink === "coffee"){
            resolve ("Order for coffee has been placed,")
        }
            else{ 
                reject (" Sorry, We only serve coffee.")

            }
    
    })
}

function processOrder(order){
    return new Promise( function (resolve){
        console.log ('Order is being Processed')
        resolve(`${order} And is Served`)
    })
}

/*
placeOrder("coffee").then (function (orderPlaced){
    console.log (orderPlaced)
    let orderIsProcessed = processOrder(orderPlaced)
    return orderIsProcessed
}).then (function (orderProcessed){
    console.log (orderProcessed)    //chaining of promise
}).catch (function (err){
    console.log (err)   
}) //Solution With Promise
*/

//Async Await - keywords

async function serveOrder(){

    try {
         let orderPlaced = await placeOrder("Tea")
    console.log(orderPlaced)    
    let ProcessedOrder = await processOrder(orderPlaced)
    console.log(ProcessedOrder)

   } catch (error) {

    console.log(error)
        
    }
   
}
serveOrder()
