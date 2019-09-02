import React, { Fragment } from 'react';
import Layout from '../components/Layout';
import SurveyCard from '../components/SurveyCard';
import Router from 'next/router';

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

Index.getInitialProps = async ({res, query}) => {

  if(!loggedIn()){

    let loadStatusPage = `/signin`;
    let asStatusPage = `/`;
    
    Router.push(loadStatusPage, asStatusPage);
    return {}

  } else {
    
    res.end()
    return {}

  }

}
