import axios from 'axios';
import { baseURL } from '../config';
const timeout = 1000 * 60;
let instance = axios.create({
  baseURL,
  timeout
});

let loadToken = async () => {
  let res = (await axios.get(`${baseURL}/user/token/`)).data;
  if (res.ok) {
    let token = res.token;
    localStorage.setItem('token', token);
    return token;
  } else {
    alert(res.msg);
    throw new Error(res.msg);
  }
}
let getToken = async () => {
  let token = localStorage.getItem('token');
  if (!/[a-z0-9]{32}/.test(token)) {
    token = await loadToken();
  }
  return token;
}

async function initToken() {
  let token = await getToken();
  instance = axios.create({
    baseURL,
    timeout,
    headers: {
      'x-token': token
    }
  });
}
initToken();

export async function resetToken() {
  let token = await loadToken();
  instance = axios.create({
    baseURL,
    timeout,
    headers: {
      'x-token': token
    }
  });
}

// export default getAxios;
export default instance;