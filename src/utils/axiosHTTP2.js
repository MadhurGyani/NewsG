import axios from 'axios';
import { Agent } from 'http2-wrapper';

const agent = new Agent();

const axiosInstance = axios.create({
  http2: true,
  http2Agent: agent,
});

export default axiosInstance;
