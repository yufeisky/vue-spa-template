import axios from 'axios';
import { resolve } from 'url';
import { rejects } from 'assert';
let host = 'http://livetaskoffice.lizhifm.com';
export default function getGiftList(taskId) {
    return new Promise((resolve, rejects) => {
        axios.get(`${host}/task/reward/get`, {
            params: {
                taskId
            }
        }).then((res) => {
            let data = res.data.data;
            resolve(data);
        })
    })
}