import axios from 'axios';
import { proxy } from '../config';

export default class JobLists {
  constructor(description, location) {
    this.description = description;
    this.location = location;
  }

  async getJobs() {
    try {
      const response = await axios.get(`${proxy}https://jobs.github.com/positions.json`, {
        params: {
          description: this.description,
          location: this.location
        }
      });
      console.log(response.data);
      this.result = response.data;
    } catch (error) {
      console.log(error);
    }
  }
}
