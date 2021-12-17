import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';

import userEvent from '@testing-library/user-event';
import MutationObserver from 'mutationobserver-shim';

import Article from './Article';

test('renders component without errors', ()=> {
    render (<Article article={
        {
            id: "",
            author: "",
            headline: "",
            createdOn: "",
            summary: "", 
            body: "" 
        } 
    } />)
});

test('renders headline, author from the article when passed in through props', ()=> {
    render (<Article article={
        {
            id: "",
            author: "author",
            headline: "headline",
            createdOn: "",
            summary: "summary", 
            body: "body" 
        } 
    } />) 

    const headline = screen.queryByText(/headline/i);    
    const author = screen.queryByText(/author/i);   
    const summary = screen.queryByText(/summary/i);   
    const body = screen.queryByText(/body/i);   
    
    expect(headline).toBeInTheDocument();
    expect(author).toBeInTheDocument();
    expect(summary).toBeInTheDocument();
    expect(body).toBeInTheDocument();
});

test('renders "Associated Press" when no author is given', ()=> {
    render (<Article article={
        {
            id: "",            
            headline: "",
            createdOn: "",
            summary: "", 
            body: "" 
        } 
    } />) 

    const alterAuthor = screen.queryByText (/associated press/i);    
    expect(alterAuthor).toBeInTheDocument();
});

// test('executes handleDelete when the delete button is pressed', ()=> {
// });

//Task List: 
//1. Complete all above tests. Create test article data when needed.