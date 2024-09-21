import axios from 'axios';

export async function getBearerToken() {
  const response = await axios.post('https://api.foleon.com/oauth', {
    grant_type: 'client_credentials',
    client_id: 'eVOfzXYAzz',
    client_secret: 'f467185f0e8ed5c8125929c1d5fbedc15bd9f60b413f7d8629fad65b3ffa7ad5',
  });
  return response.data.access_token;
}
