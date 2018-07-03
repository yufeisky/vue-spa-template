import axios from 'axios';
import { resolve } from 'url';
import { rejects } from 'assert';
let host = '//livetaskoffice.lizhifm.com';
let NODE_ENV = process.env.NODE_ENV;
export default function getGiftList(taskId, token) {
    return new Promise((resolve, rejects) => {
                axios.get(`${NODE_ENV==='development' ? `task/reward/get` : `${host}/task/reward/get`}`
            , {
                params: {
                    taskId,
                    token
                }
            }).then((res) => {
                let data = res.data;
                resolve(data);
            })
    })
}