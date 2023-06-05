import axios from "axios";


export const getAllClients  = async () => {
    //change
    let promiseResult = await axios.get('http://127.0.0.1:5000/client');
    return (promiseResult.data.items)
}

export const getClientById  = async (id) => {
    //change
    return (await axios.get(`http://127.0.0.1:5000/client/${id}`)
    .then((response)=>response.data))
}