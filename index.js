var cart_value = document.getElementById("cart-value")
var cart = document.getElementById("cart")





cart.addEventListener('click',function(){
    counting_item()
})

var count = 0

item_list = [ ]
item_price = [ ]

function add_item(name,price){
    count++
    cart_value.innerText = count
    item_list.push(name)
    item_price.push(price)
}

function counting_item(){
    const number_item = {}

    item_list.forEach(element => {
        if (number_item[element]){
            number_item[element] +=1;
        }else {
            number_item[element]=1;
        }
    
    });

    const number_price = {}

    item_price.forEach(ele =>{
        if (number_price[ele]){
            number_price[ele]+=1;

    } else{
        number_price[ele]=1;
    }
}
    )



    let book_name = Object.keys(number_item)
    let price_book = Object.values(number_item)

    for (let i=0 ; i<book_name.length ; i++){
        console.log(`Item name : ${book_name[i]} - Quantity ${price_book[i]}`)
    }

    console.log()





    let price_name = Object.keys(number_price)
    let price_amount = Object.values(number_price)

    let total =0

    for (let i=0 ; i<price_name.length ; i++){
        let t= price_name[i]*price_amount[i]
        total +=t
    }

    console.log(`The total amount is : ${total}`)



}



