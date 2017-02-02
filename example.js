import R from 'ramda'

const cartItems = [
    {quantity: 11, unitPrice: 1},
    {quantity: 12},
    {quantity: 13, unitPrice: 3}
]

const result = cartItems
    .filter(item => typeof item.unitPrice === 'number')
    .map(item => item.quantity * item.unitPrice)
    .reduce((prev, current) => prev + current, 0)
console.log(result)