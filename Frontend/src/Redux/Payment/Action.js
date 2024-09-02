import api from "@/config/api"

// eslint-disable-next-line no-unused-vars
export const createPayment=async({planType,jwt})=>{

    try {
        const {data}=await api.post(`/api/payments/${planType}`)
        if(data.payment_link_url){
            window.location.href=data.payment_link_url;

        }
    } catch (error) {
        console.log("error",error)
    }
}