import { getCookies, setCookies, removeCookies } from 'cookies-next';
import Router from 'next/router';

function getToken(){
    return cookies.get('ldap');
}

function isLoggedIn(){
    const token = getCookies(ctx, 'ldap');
    return !!token;
}

function login(token){
    setCookies(ctx, 'ldap', token, { expires : 1 });
    Router.push('/');
}

function logout(){
    removeCookies(ctx, 'ldap');
    Router.push('/signin')
}


export { getToken, isLoggedIn, login, logout }