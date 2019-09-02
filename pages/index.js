import React, { Fragment } from 'react';
import Layout from '../components/Layout';
import SurveyCard from '../components/SurveyCard';
import Cookies from 'universal-cookie';

import Head from 'next/head';

import { loggedIn } from '../utils/Auth';

export default function Index() {
  return (
    <Fragment>
      <Head>
        <title>2019 Year-End Party Survey - META</title>
        <meta name="viewport" content="initial-scale=1.0, width=device-width" key="viewport" />
      </Head>
      <Layout>
        <SurveyCard />
      </Layout>
    </Fragment>
  );
}

Index.getInitialProps = async ({req, query}) => {
  
  const cookieLdap = req.headers.cookie;
  const cookies = new Cookies();

  console.log(cookies.get('ldap'));
  console.log(cookieLdap);

  return {}

}
