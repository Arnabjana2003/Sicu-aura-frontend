import axios from "axios"

const backendUrl = String(import.meta.env.VITE_BACKEND_BASE_ENDPOINT)

const adminApi = {
    getAllHospitals : async()=>{
        try {
            const res = await axios.get(`${backendUrl}/admin/hospital/all`);
            return res.data;
          } catch (error) {
            console.log("ERROR AT GET ALL HOSPITAL API::", error);
            throw error;
          }
    },
    search : async(query)=>{
        try {
            const res = await axios.post(`${backendUrl}/admin/hospital/search`,{query});
            return res.data;
          } catch (error) {
            console.log("ERROR AT GET SEARCH API::", error);
            throw error;
          }
    },
}

export default adminApi