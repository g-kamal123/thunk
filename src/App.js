import { Button, Page } from '@shopify/polaris';
import { connect } from 'react-redux';
import './App.css';
import Printdata from './components/Printdata';
import { mapToDispatch, mapToState } from './Map/Map';

function App(props) {
  const btnHandler =()=>{
    props.fetchData()
  }
  console.log(props)
  return (
   <Page title='middleware'>
    <Button onClick={btnHandler}>Fetch Api</Button>
    <Printdata />
   </Page>
  );
}

export default connect(mapToState,mapToDispatch)(App);
