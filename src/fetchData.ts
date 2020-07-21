import axios from 'axios';

export default async (url: string) => {
    const res = await axios(url);
    return res;
}