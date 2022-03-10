import { useState } from 'react';
import axios from 'axios';
import Airtable from 'airtable';

export default function useData() {
   const [data, setData] = useState(null);

   const apiKey = process.env.REACT_APP_AIRTABLE_API
   const baseId = process.env.REACT_APP_BASE_ID
   new Airtable({ apiKey }).base(baseId)

   axios.defaults.baseURL = `https://api.airtable.com/v0/${baseId}/card`
   axios.defaults.headers.post['Content-Type'] = 'application/json'
   axios.defaults.headers['Authorization'] = `Bearer ${apiKey}`

   const getData = async () => {
      return await axios.get('/').then(res =>
         setData(res.data.records)
      )
   }

   return {
      getData,
      data
   }
};