import axios from 'axios';

export async function getBearerToken() {
  const response = await axios.post('https://api.foleon.com/oauth', {
    grant_type: 'client_credentials',
    // client_id:  process.env.VITE_CLIENT_ID,
    // client_secret: process.env.VITE_CLIENT_SECRET,
    client_id:  import.meta.env.VITE_CLIENT_ID,
    client_secret: import.meta.env.VITE_CLIENT_SECRET,
  });
  return response.data.access_token;
};
