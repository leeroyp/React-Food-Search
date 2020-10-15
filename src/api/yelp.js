import axios from 'axios';

export default axios.create({
    baseURL:'https://api.yelp.com/v3/businesses',
    headers: {
        Authorization: 'Bearer OwGbHR_MrSIBAQyGkYEPbWNWnkLc0dtHC8s8j3OEqVfpwDOQbyDb1FLowmNwj1mUn_QR8U3vnJy1tjYuvV3ardPWPkE-K2XkJoPvp72tIz5Iv0Tq6r_jLBy9UaOHX3Yx'
    }
});