import Cookies from 'universal-cookie';

const cookies = new Cookies();

function getToken(){
    return cookies.get('ldap');
}

function loggedIn(){
    const token = getToken();
    return !!token;
}

function setToken(token){
    cookies.set('ldap', token, {path: '/'});
}

export { getToken, loggedIn, setToken }