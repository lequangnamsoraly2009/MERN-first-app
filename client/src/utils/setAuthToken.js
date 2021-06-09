import axios from 'axios';
//set Headers cho Authorization
const setAuthToken = token => {
    // console.log('Im here');
    // console.log(token)
    if(token){      
        axios.defaults.headers.common['Authorization'] = `Bearer ${token}`;
    }
    else{
        delete axios.defaults.headers.common['Authorization'];
    }
}

export default setAuthToken;