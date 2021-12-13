import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import {
  ApolloClient,
  InMemoryCache,
  ApolloProvider,
  createHttpLink,
} from '@apollo/client';
import { setContext } from '@apollo/client/link/context';
//materialize
import 'materialize-css';

import Home from './pages/Home';
import Nav from './components/Nav';
import Footer from './components/Footer';
import Signup from './pages/Signup';
import FundraiserCard from './components/FundraiserCard/FundraiserCard'
import DonationForm from './components/DonationForm';
import NoMatch from './pages/NoMatch';
import FundraiserInfoCard from './components/FundraiserInfoCard/FundraiserInfoCard';
import LoginSignup from './components/LoginSignup/LoginSignup'
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
        <LoginSignup />
        <div>
            <Routes>
              <Route exact path="/" component={Home} />
              <Route exact path="signup" component={Signup}/>
              <Route component={NoMatch} />
              <Route exact path="fundraiserCard" component={FundraiserCard}/>
            </Routes>
          <Footer />
        </div>
      </Router>
    </ApolloProvider>
  );
}

export default App;