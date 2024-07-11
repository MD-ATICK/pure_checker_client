import axios from "axios"
import { toast } from "react-toastify"

const server = 'local'
export const url = server === 'prod' ? 'https://pure-checker-server.vercel.app' : 'http://localhost:9999'
export const checkerApi = axios.create({ baseURL: `${url}/api/v1/gmail` })
export const userApi = axios.create({ baseURL: `${url}/api/v2/user` })
export const postApi = axios.create({ baseURL: `${url}/api/v3/post` })
export const maintenanceApi = axios.create({ baseURL: `${url}/api/v4/maintenance` })

export const greenToast = (msg) => {
    return toast.success(msg, {
    })
}
export const redToast = (msg) => {
    return toast.error(msg, {

    })
}