import '../styles/globals.css';
import { Provider } from 'react-redux';
import withRedux from 'next-redux-wrapper';
import { store, wrapper } from '../store';

function MyApp({ Component, pageProps }) {
  return (
    <Provider store={store}>
      <Component {...pageProps} />
    </Provider>
  )  
}

export default wrapper.withRedux(MyApp);
