import axios from "axios";
//Định nghĩa cấu hình chung cho các yêu cầu HTTP, bao gồm header Content-Type và Accept
const commonConfig = {
    headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
    },
};
//Xuất một hàm tạo ra một instance của axios với baseURL và commonConfig. Hàm này được sử dụng để tạo các API client cho các endpoint khác nhau.
export default (baseURL) => {
    return axios.create({
        baseURL,
        ...commonConfig,
    });
};