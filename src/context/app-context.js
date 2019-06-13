import React from 'react';
import { createContext } from 'react';

export const appContext = createContext({
    name:'App Context',
    loading: false,
    startLoading: ()=> {
        console.log('Loading started')
    }
});