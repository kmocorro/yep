import React, { Fragment, useState } from 'react';
import SignInForm from '../components/SignInForm';

export default function SignIn () {

    const username = useForm('');
    const password = useForm('');

    function useForm(init){
        const [ values, setValues ] = useState(init);

        function handleOnChange(e){
            setValues(e.target.value);
        }

        return {
            values,
            onChange: handleOnChange
        }
    }

    const handleOnSubmit = (e) =>{
        e.preventDefault();
        
        /*
        const credentials = {username: username.value, password: password.value};

        return axios.post(`http://dev-metaspf401.sunpowercorp.com:8080/api/login`, credentials, {withCredentials: true})
        .then(res => {
            if(res.status >= 200 && res.status < 300 ){
                let token = res.data.token // api/login return object {token: e...}
                
                if(token){

                    setToken(token);
                    
                    location.reload();
                } else {
                    
                    setLoginResponse('Invalid username/password')

                }

            }
        })
        .catch(err => {
            console.log(err);
        });

        */

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

            console.log(content);

            if(content.success){

                let loadStatusPage = `/`;
                let asStatusPage = `/`;
                
                setTimeout(() => {
                    Router.push(loadStatusPage, asStatusPage);
                }, 600);
                

            } else if(content.error){

                console.log(content.error);

            }

        })();
    }

    return (
        <Fragment>
            <SignInForm username={username} password={password} handleOnSubmit={handleOnSubmit} />
        </Fragment>
    )
}