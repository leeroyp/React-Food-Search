import React, { useState , useEffect} from "react";
import yelp from '../api/yelp';

export default () => {

    const [results, setResults]= useState([]);
    const [errorMessage, setErroMessage] = useState('');
  
    const searchApi = async searchTerm =>{
        try {
        const response = await yelp.get('/search', {
            params:{
                limit: 50,
                term: searchTerm,
                location: 'Toronto'
            }
        });
        setResults(response.data.businesses)
      }catch (err){
         setErroMessage('Something went wrong ')
      }
    }; 
  
  useEffect(() =>{ 
      searchApi('pasta');
  }, [])

  return [searchApi, results, errorMessage];
}