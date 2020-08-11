import React from 'react';
import {GlobalFormProvider} from "../contexts/FormContext";
import MainNavbar from "../components/MainNavbar";
import 'bootstrap/dist/css/bootstrap.min.css';
import "react-datepicker/dist/react-datepicker.css";
import { BrowserRouter } from "react-router-dom";

function MyApp({ Component, pageProps }) {
    return (
        <>
                <GlobalFormProvider>
                            <MainNavbar/>
                            <Component {...pageProps} />
                </GlobalFormProvider>
        </>
        )
}

// Only uncomment this method if you have blocking data requirements for
// every single page in your application. This disables the ability to
// perform automatic static optimization, causing every page in your app to
// be server-side rendered.
//
// MyApp.getInitialProps = async (appContext) => {
//   // calls page's `getInitialProps` and fills `appProps.pageProps`
//   const appProps = await App.getInitialProps(appContext);
//
//   return { ...appProps }
// }

export default MyApp
