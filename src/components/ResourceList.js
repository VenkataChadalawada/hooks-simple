import React from 'react';
import useResources from './useResources';

const ResourceList = ({resource}) => {
    const resources = useResources(resource);
    return (<ul>
        {resources.map(record => <li key={record.id}>{record.title}</li>)}
    </ul>);
}
export default ResourceList;

/*
import React from 'react';
import axios from 'axios';

class ResourceList extends React.Component{
    state = {resources: []};
    async componentDidMount(){
        const response = await axios.get(`https://jsonplaceholder.typicode.com/${this.props.resource}`);
        this.setState({resources: response.data});
    }
    async componentDidUpdate(prevProps){
        console.log("----", prevProps);
        if(prevProps.resource!== this.props.resource){ //without this condition its gonna be infinite loop
            const response = await axios.get(`https://jsonplaceholder.typicode.com/${this.props.resource}`);
            this.setState({resources: response.data});
        }
    }
    render() {
        return <div>{this.state.resources.length}</div>;
    }
}
export default ResourceList;

/*
1) app component created, initilizes state 'resource' of 'posts'
2) app renders ResourceList
3) ResourceList's 'componentDidMount' called, fetches posts
4) Fetch completed, setState called, number of posts rendered
5) we click todos button, app updates its state, rerenders itself and ResourceList
6) ResourceList was already 'mounted', so 'componentDidMount' is not called a second time!
so we need componentDidUpdate
*/

/*
No second argumrnt: useEffect(()=>{})  -->  useEffect(()=>{}) CALLED every single time.
empty array as second argument: useEffect(()=>{},[]) -->  useEffect(()=>{},[]) NOTCALLED (only CALLED only first time)
array with same number eg 1: useEffect(()=>{},[1]) -->  useEffect(()=>{},[1]) NOTCALLED (only CALLED only first time)
array with a change: useEffect(()=>{},['hi']) -->  useEffect(()=>{},[1]) CALLED 
array with a different object change: useEffect(()=>{},[{color:'red'}]) -->  useEffect(()=>{},[{color:'red}]) CALLED - because object instantiation make everytime a different object with same value in this case
array with multiple number eg 1: useEffect(()=>{},[10,10]) --> useEffect(()=>{},[10,10]) NOTCALLED
array with multiple number eg 1: useEffect(()=>{},[10,10]) --> useEffect(()=>{},[10]) CALLED
*/
/*
##### why below calling things in a separate function in useEffect?

const fetchResource = async (resource) => {
    const response = await axios.get(`https://jsonplaceholder.typicode.com/${resource}`);
    
    setResources(response.data);
};

useEffect(() => {
    fetchResource(resource);
}, [resource]);

##### instead of directly like below causes error

useEffect(
    async () => {
        const response = await axios.get(`https://jsonplaceholder.typicode.com/${resource}`);
    
         setResources(response.data);
    }, 
    [resource]
);
Not allowed only  functions - No promises or async functions

##### another correct way is below
//or
    
    useEffect(() => {
        (async (resource) => {
            const response = await axios.get(`https://jsonplaceholder.typicode.com/${resource}`);
            setResources(response.data);
        })(resource);
    }, [resource]);
    
*/