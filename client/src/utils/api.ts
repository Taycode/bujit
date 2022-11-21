import axios from 'axios';

export async function getRequest(path : string)  {
    try {
        const token = localStorage.getItem('token');
        const header = {
            Authorization : `Bearer ${token}`
        }
        const response = await axios.get(`${process.env.REACT_APP_API_URL}/${path}`, {
            headers : header
        })
        return response;
    } catch (e : any) {
        return e?.response
    }
}
export async function postRequest(path : string, data : object)  {
    try {
        const token = localStorage.getItem('token');
        const header = {
            Authorization : `Bearer ${token}`
        }
        const response = await axios.post(`${process.env.REACT_APP_API_URL}/${path}`, data, {
            headers : header
        })
        return response;
    } catch (e : any) {
        return e?.response
    }
}
export async function putRequest(path : string, data : object)  {
    try {
        const token = localStorage.getItem('token');
        const header = {
            Authorization : `Bearer ${token}`
        }
        const response = await axios.put(`${process.env.REACT_APP_API_URL}/${path}`, data, {
            headers : header
        })
        return response;
    } catch (e : any) {
        return e?.response
    }
}
export async function deleteRequest(path : string)  {
    try {
        const token = localStorage.getItem('token');
        const header = {
            Authorization : `Bearer ${token}`
        }
        const response = await axios.delete(`${process.env.REACT_APP_API_URL}/${path}`, {
            headers : header
        })
        return response;
    } catch (e : any) {
        return e?.response
    }
}