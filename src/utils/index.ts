


export function checkHttpStatus(response:any) {
    if (response.status >= 200 && response.status < 300) {
        return response
    } else {
         let error:any = new Error(response.statusText)
        error.response = response
        throw error
    }
}

export function parseJSON(response:any) {
     return response.json()

}