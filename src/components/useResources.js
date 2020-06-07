import {useState, useEffect} from 'react';
import axios from 'axios';

const useResources = resource => {
    const [resources, setResources] = useState([]);

    const fetchResource = async (resource) => {
        const response = await axios.get(`https://jsonplaceholder.typicode.com/${resource}`);
        
        setResources(response.data);
    };
    useEffect(() => {
        fetchResource(resource);
    }, [resource]); // for only change in resource, fetchResource xhrwill be caled
    
    return resources;
}
export default useResources;