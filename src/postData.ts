import axios from 'axios';

export default async (url: string, data: any, config: object) => {
    const res = await axios.post(url, data, config);
    console.log(res.data);
    return res;
}