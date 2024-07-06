import axios from "axios"

const axiosPublic = axios.create({
    baseURL: 'https://sprcbd-blue.vercel.app'
})
const useAxiosPublic = () => {
    return axiosPublic
};

export default useAxiosPublic;