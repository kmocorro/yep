import React, { Fragment, useState } from 'react';
import SignInForm from '../components/SignInForm';
import { getToken, loggedIn, setToken } from '../utils/Auth';
import Router from 'next/router';

export default function SignIn () {

    const username = useForm('');
    const password = useForm('');
    const [ loginResponse, setLoginResponse ] = useState('');

    function useForm(init){
        const [ value, setValue ] = useState(init);

        function handleOnChange(e){
            setValue(e.target.value);
        }

        return {
            value,
            onChange: handleOnChange
        }
    }

    function handleOnSubmit(e){
        e.preventDefault();
        
        /*
        const credentials = {username: username.value, password: password.value};

        console.log(credentials);

        return axios.post(`http://dev-metaspf401.sunpowercorp.com:8080/api/login`, credentials, {withCredentials: true})
        .then(res => {
            console.log(res);
        })
        .catch(err => {
            console.log(err);
        });

        */

        if(!loggedIn()){

            (async () => {
                const res_submit = await fetch(`http://dev-metaspf401.sunpowercorp.com:8080/api/login`, {
                    method: 'POST',
                    headers: {
                        'Accept': 'application/json',
                        'Content-Type': 'application/json'
                    },
                    body: JSON.stringify({
                        username: username.value,
                        password: password.value 
                    })
                });
    
                const content = await res_submit.json();
    
                //console.log(content);
    
                if(content.token){
    
                    // set token
                    setToken(content.token);
    
                    let loadStatusPage = `/`;
                    let asStatusPage = `/`;
                    
                    setTimeout(() => {
                        Router.push(loadStatusPage, asStatusPage);
                    }, 600);
                    
    
                } else if(content.err){
    
                    setLoginResponse(content.err);
    
                }
    
            })();

        } else {
            console.log('Already signed in.');
            console.log(getToken());
        }

        
    }

    return (
        <Fragment>
            <SignInForm username={username} password={password} handleOnSubmit={handleOnSubmit} loginResponse={loginResponse}/>
        </Fragment>
    )
}