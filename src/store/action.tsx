// function convertActionNameToType(actionName:any) {
//     return actionName.replace(/([A-Z])/g, "_$1").toUpperCase();
// }

// export const actions = new Proxy(
//     {},
//     {
//         get: function (target:any, prop:any) {
//             if (target[prop] === undefined)
//                 return function (args:any) {
//                     return {
//                         type: convertActionNameToType(prop),
//                         payload: args
//                     }
//                 }
//             else return target[prop];
//         }
//     }
// )


// export const addToCart = (data: any) => ({
//     data: data,
//     type: 'ADD_CART'
// });

// export const removeFromCart = (id: any) => ({
//     data: id,
//     type: 'REMOVE_CART'
// });

export const saveUser = () => ({
    type: 'SAVE_USER'
});

// export const changeItemSum = (data: any) => ({
//     data,
//     type: 'CHANGE_SUM'
// });
// export const getProductsList = (data: any) => ({
//     data,
//     type: 'GET_LIST'
// });