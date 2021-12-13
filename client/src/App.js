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

import Nav from './components/Nav';
import Footer from './components/Footer';
import Signup from './pages/Signup';
import Home from './components/FundraiserCard/FundraiserCard'
import NoMatch from './pages/NoMatch';
import FundraiserInfoCard from './components/FundraiserInfoCard/FundraiserInfoCard';
import Donate from './pages/Donate';
import Login from './pages/Login';
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
        <Nav />
        <div>
            <Routes>
              <Route exact path="/" element={<Home/>} />
              <Route exact path="/signup" element={<Signup/>}/>
              <Route exact path="/login" element={<Login/>}/>
              <Route exact path="/fundraiserInfoCard" element={<FundraiserInfoCard/>}/>
              <Route exact path="/donate" element={<Donate/>}/>
              <Route element={<NoMatch/>} />
            </Routes>
          <Footer />
        </div>
      </Router>
    </ApolloProvider>
  );
}

export default App;