import axios from 'axios';

export const getDataFromServer = ()=>dispatch=>{
    axios.get('/api/getData').then(response=>{
         dispatch({ type:'SETDATA', payload:response.data })
    }).catch(response=>{
       console.log(response);
    })
}