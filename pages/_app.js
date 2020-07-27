import Navbar from '../components/Navbar';
import PageContent from '../components/PageContent';
import {LanguageProvider} from '../contexts/LanguageContext'
import {ThemeProvider} from "../contexts/ThemeContext";

function MyApp({ Component, pageProps }) {
    return (
        <>
            <ThemeProvider>
                <LanguageProvider>
                    <PageContent>
                        <Navbar/>
                        <Component {...pageProps} />

                    </PageContent>
                </LanguageProvider>
            </ThemeProvider>

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
