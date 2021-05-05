function convert(actionType: string) {
    return actionType.toLowerCase().replace(/_(\w)/g,v=>v[1].toUpperCase()) 
}

export default function creatReducer(state:string,action:any,handlers:any) {
    const key=convert(action.type)
    const handler=handlers[key]
    if(handler){
        handler(state,action);
    }
}