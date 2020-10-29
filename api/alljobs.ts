import { NowRequest, NowResponse } from '@vercel/node';
import axios from 'axios';

export default async (request: NowRequest, response: NowResponse) => {
  let info: JSON;

  await axios.get('https://jobs.github.com/positions.json')
    .then( res => info = res.data )
    .catch( (err: Error) => console.log(err.message) );
  response.status(200).send( info );
}