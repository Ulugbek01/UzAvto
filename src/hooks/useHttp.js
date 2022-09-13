export const useHttp = (method, body) => {
    return {
        method: method ? method : '',
        headers: {
            Authorization: `Bearer ${localStorage.getItem('token')}` 
        },
        body: JSON.stringify({
            ...body
        })
    }
}