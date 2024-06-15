import axios from "axios"
import { toast } from "react-toastify"


export const checkerApi = axios.create({ baseURL: 'http://localhost:9999/api/v1/gmail' })
export const userApi = axios.create({ baseURL: 'http://localhost:9999/api/v2/user' })

export const greenToast = (msg) => {
    return toast.success(msg, {
    })
}
export const redToast = (msg) => {
    return toast.error(msg, {

    })
}