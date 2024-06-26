import axios from "axios"
import { toast } from "react-toastify"

const server = 'prod'
// const url = server === 'prod' ? 'https://pure-checker-server.onrender.com/api' : 'http://localhost:9999/api'
const url = server === 'prod' ? 'https://pure-checker-server.vercel.app/api' : 'http://localhost:9999/api'
export const checkerApi = axios.create({ baseURL: `${url}/v1/gmail` })
export const userApi = axios.create({ baseURL: `${url}/v2/user` })

export const greenToast = (msg) => {
    return toast.success(msg, {
    })
}
export const redToast = (msg) => {
    return toast.error(msg, {

    })
}