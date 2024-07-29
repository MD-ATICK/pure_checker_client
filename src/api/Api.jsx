import axios from "axios"
import { toast } from "react-toastify"

const server = 'prod'
export const url = server === 'prod' ? 'https://pure-checker-server.vercel.app' : 'http://localhost:9999'
export const checkerApi = axios.create({ baseURL: `${url}/api/v1/gmail` })
export const userApi = axios.create({ baseURL: `${url}/api/v2/user` })
export const postApi = axios.create({ baseURL: `${url}/api/v3/post` })
export const maintenanceApi = axios.create({ baseURL: `${url}/api/v4/maintenance` })
export const apisApi = axios.create({ baseURL: `${url}/api/v5/apis` })
export const paymentApi = axios.create({ baseURL: `${url}/api/v6/payment` })
export const mailSentApi = axios.create({ baseURL: `${url}/api/v7/mailSent` })
export const volumeApi = axios.create({ baseURL: `${url}/api/v8/volume` })
export const adminApi = axios.create({ baseURL: `${url}/api/v9/admin` })
export const planApi = axios.create({ baseURL: `${url}/api/v10/plan` })
export const otpApi = axios.create({ baseURL: `${url}/api/v11/otp` })

export const greenToast = (msg) => {
    return toast.success(msg, {
    })
}
export const redToast = (msg) => {
    return toast.error(msg, {

    })
}