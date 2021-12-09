import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import {
  ApolloClient,
  InMemoryCache,
  ApolloProvider,
  createHttpLink,
} from '@apollo/client';
import { setContext } from '@apollo/client/link/context';
import { StoreProvider } from './utils/GlobalState';

import Home from './pages/Home';
import FundraiserDetails from './pages/FundraiserDetails';
import NoMatch from './pages/NoMatch';
import Nav from './components/Nav';
import DonationHistory from './pages/DonationHistory';
import Success from './pages/Success';
import CreateFundraiser from './pages/CreateFundraiser';
import Donate from './pages/Donate';
import Footer from './components/Footer';

const httpLink = createHttpLink({
  uri: '/graphql',
});

const authLink = setContext((_, { headers }) => {
  const token = localStorage.getItem('id_token');
  return {
    headers: {
      ...headers,
      authorization: token ? `Bearer ${token}` : '',
    },
  };
});

const client = new ApolloClient({
  link: authLink.concat(httpLink),
  cache: new InMemoryCache(),
});

function App() {
  return (
    <ApolloProvider client={client}>
      <Router>
        <div>
          <StoreProvider>
            <Nav />
            <Switch>
              <Route exact path="/" component={Home} />
              <Route exact path="/donationHistory" component={DonationHistory} />
              <Route exact path="/fundraiser/:id" component={FundraiserDetails} />
              <Route exact path="/createFundraiser" component={CreateFundraiser} />
              <Route exact path="/success" component={Success} />
              <Route exact path="/fundraiser/:id/donate" component={Donate} />
              <Route component={NoMatch} />
            </Switch>
          </StoreProvider>
          <Footer />
        </div>
      </Router>
    </ApolloProvider>
  );
}

export default App;
