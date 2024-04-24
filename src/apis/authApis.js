import axios from "axios"

const backendUrl = String(import.meta.env.VITE_BACKEND_BASE_ENDPOINT)

const authApi = {
    register : async(data)=>{
        try {
            const res = await axios.post(`${backendUrl}/hospital/register`,data);
            return res.data;
          } catch (error) {
            console.log("ERROR AT GET REGISTER HOSPITAL API::", error);
            throw error;
          }
    },
    login: async(data)=>{
        try {
            const res = await axios.post(`${backendUrl}/hospital/login`,data);
            return res.data;
        } catch (error) {
            console.log("ERROR AT GET Login HOSPITAL API::", error);
            throw error;
        }
    }
}

export default authApi