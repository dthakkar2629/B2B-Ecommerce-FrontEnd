export const initialState = {
    basket: [{
            id: "876796",
            title: "OnePlus Y Series",
            price: 85000,
            rating: 4,
            image: "https://m.media-amazon.com/images/I/81RhUZoFGUL._AC_UY327_FMwebp_QL65_.jpg",
        },
        {
            id: "876796",
            title: "OnePlus Y Series",
            price: 85000,
            rating: 4,
            image: "https://m.media-amazon.com/images/I/81RhUZoFGUL._AC_UY327_FMwebp_QL65_.jpg",
        },
    ],
    user: null,
};
export const getBasketTotal = (basket)=> basket?.reduce((amount,item)=> item.price+amount,0);


const reducer = (state, action) => {
    console.log(action);
    switch (action.type) {
        case 'ADD_TO_BASKET':
            //logic for adding item to basket
            return {
                ...state,
                basket: [...state.basket, action.item],
            };

        case 'REMOVE_FROM_BASKET':
            // we cloned the basket
            let newBasket = [...state.basket]
                // we check to see if product exists
            const index = state.basket.findIndex((basketItem) => basketItem.id === action.id);

            if (index >= 0) {
                // item exists
                newBasket.splice(index, 1);
            } else {
                console.warn('Cant remove product (id: ${action.id}) as its not in the basket');
            }
            return {...state, basket: newBasket };
            //Logic for removing item from basket

        default:
            return state;

    }
}
export default reducer;