import '../styles/globals.css'
import 'antd/dist/reset.css';
import React, { useReducer } from 'react'
import { AppProps } from 'next/app'
import  {filterContext}  from '../src/context/filterContext';
import reducer from '../src/context/reducer';
import { defaultGlobalState } from '../src/context/defaultGlobalState';

export default function MyApp({ Component, pageProps }: AppProps) {

    const [state, dispatch] = useReducer(reducer, defaultGlobalState);

    const values = {
      state,
      dispatch
    }
  return(
    <filterContext.Provider value={values}>
        <Component {...pageProps} />
    </filterContext.Provider>
  )
}