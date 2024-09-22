import axios from 'axios';

export async function getBearerToken() {
  const response = await axios.post('https://api.foleon.com/oauth', {
    grant_type: 'client_credentials',
    client_id:  'b4xfRRj0xL',
    client_secret: 'cb9c3aa77a15392f3bb4455d0194b07dc2953694485ed5ba844743323578ffeb',
  });
  return response.data.access_token;
};

// would have used import.meta.env.VITE_CLIENT_ID & import.meta.env.VITE_CLIENT_SECRET for security