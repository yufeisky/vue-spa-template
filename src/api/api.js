import axios from 'axios';
import { resolve } from 'url';
import { rejects } from 'assert';

export default function getGiftList(){
    return new Promise((resolve,rejects)=>{
        axios.get('/api/giftList').then((res)=>{
            let data = res.data.data;
            resolve(data);
        })
    })
}