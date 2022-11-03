import axios from 'axios';

// const BASE_URL = 'http://localhost:8500/';
const BASE_URL = 'https://amethyst-quail-coat.cyclic.app';

const apiClient = axios.create({ baseURL: BASE_URL });
apiClient.defaults.headers.common['Accept'] = 'application/json';
apiClient.defaults.headers.common['Content-Type'] = 'application/json';

export default apiClient;
