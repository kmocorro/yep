import React, { useState, Fragment } from 'react';
import PageLayout from '../components/PageLayout';
import SurveyCard from '../components/SurveyCard';

export default function Pages(props){
    return (
        <Fragment>
            <PageLayout>
                <SurveyCard/>
            </PageLayout>
        </Fragment>

    )
}