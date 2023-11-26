import React from 'react';
import { Page } from './Page';
import { useParams } from 'react-router-dom';

export const QuestionPage: React.FC = () => {
    const { questionId } = useParams();
    return <Page>Question Page { questionId }</Page>
}