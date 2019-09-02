import Cookies from 'universal-cookie';
import Router from 'next/router';

const cookies = new Cookies();

function getToken(){
    return cookies.get('ldap');
}

function isLoggedIn(){
    const token = getToken();
    return !!token;
}

function login(token){
    cookies.set('ldap', token, {path: '/'});
    Router.push('/');
}


export { getToken, isLoggedIn, login }