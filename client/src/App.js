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
import Login from './pages/Login';
import Signup from './pages/Signup';
import CreateFundraiser from './pages/CreateFundraiser';
import FundraiserCard from './components/FundraiserCard/FundraiserCard'
import DonationForm from './components/DonationForm';
import NoMatch from './pages/NoMatch';

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
            <Nav />
            <Login />
            <Signup />
            <FundraiserCard />
            <DonationForm />
            <CreateFundraiser />
            <Routes>
              <Route exact path="/" component={Home} />
              <Route exact path="/login" component={Login}/>
              <Route exact path="signup" component={Signup}/>
              <Route component={NoMatch} />
            </Routes>
          <Footer />
        </div>
      </Router>
    </ApolloProvider>
  );
}

export default App;
