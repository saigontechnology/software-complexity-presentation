import R from 'ramda'

const cartItems = [
    {quantity: 11, unitPrice: 1},
    {quantity: 12},
    {quantity: 13, unitPrice: 3}
]

console.log(R.compose( 
    R.reduce(R.add, 0), 
    R.map(
        R.compose(
            R.apply(R.multiply),
            R.props(['quantity', 'unitPrice'])
        )
    ), 
    R.filter(
        R.compose(
            R.is(Number), 
            R.prop('unitPrice')
        )
    ) 
)(cartItems))