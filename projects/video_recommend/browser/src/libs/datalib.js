import axios from 'axios';

const baseURL = 'http://localhost:8080/api/';
const timeout = 1000 * 60;
let instance = null;


let loadToken = async () => {
  let res = (await axios.get('http://localhost:8080/user/token/')).data;
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

async function getAxios() {
  if (instance) return instance;
  let token = await getToken();
  instance = axios.create({
    baseURL,
    timeout,
    headers: {
      'x-token': token
    }
  });

  return instance;
}
export async function resetToken(){
  let token = await loadToken();
  instance = axios.create({
    baseURL,
    timeout,
    headers: {
      'x-token': token
    }
  });
}

export default getAxios;