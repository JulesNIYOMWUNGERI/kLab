console.log('connected successfull')

const items = [
    {
        name:'Bike',
        price:100
    },
    {
        name:'TV',
        price:200
    },
    {
        name:'Album',
        price:10
    },
    {
        name:'Book',
        price:5
    },
    {
        name:'Phone',
        price:500
    },
    {
        name:'Computer',
        price:1000
    }
]


const CheapProducts = items.filter((item) => item.price <= 100)
console.log(CheapProducts,'THIS IS THE CHEAP PRODUCTS');


const ExpensiveProducts = items.filter((item) => item.price > 100 )
console.log(ExpensiveProducts,'THIS IS THE EXPENSIVE PRODUCTS');

const TotalProductsPrice = items.reduce((currentTotal,item) => item.price + currentTotal,0)
console.log('full price of all products combined:',TotalProductsPrice)

const Under10DollarItem = items.filter((item) => item.price < 10)
const Under10DollarItemTotalPrice = Under10DollarItem.reduce((currentTotal,item) => item.price + currentTotal,0)
const TotalProductsPriceWhileUnder10dollarProductsRemoved = TotalProductsPrice - Under10DollarItemTotalPrice
console.log('Total Products Price While Under 10 dollar Products Removed:' ,TotalProductsPriceWhileUnder10dollarProductsRemoved)