function convertActionNameToType(actionName:any) {
    return actionName.replace(/([A-Z])/g, "_$1").toUpperCase();
}

export const actions = new Proxy(
    {},
    {
        get: function (target:any, prop:any) {
            if (target[prop] === undefined)
                return function (args:any) {
                    return {
                        type: convertActionNameToType(prop),
                        payload: args
                    }
                }
            else return target[prop];
        }
    }
)