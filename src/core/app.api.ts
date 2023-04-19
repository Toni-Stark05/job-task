import axios, { 
    AxiosInstance, 
    AxiosRequestConfig 
} from 'axios'
import * as dotenv from 'dotenv' 
dotenv.config()

const API_URL = process.env.API_URL

class Api {
    private api: AxiosInstance | null = null

    constructor(){
        this.api = axios.create({ baseURL: API_URL })
    }

    async request<T>(args: AxiosRequestConfig) {
        if (!this.api) throw new Error('API is not defined')
        return await this.api.request<T>(args)
    }

    async get<T>(url: string, args: Omit<AxiosRequestConfig, 'method'> = {}) {
        return await this.request<T>({ url, method: 'GET', ...args })
    }
}

export default new Api