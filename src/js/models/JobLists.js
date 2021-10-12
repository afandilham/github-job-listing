import { proxy } from '../config';

export default class JobLists {
  constructor(description, location) {
    this.description = description;
    this.location = location;
  }

  async getJobs() {
    try {
      const response = await fetch(`https://jobs.github.com/positions.json?description=${this.description}&location=${this.location}`);
      const responseJson = await response.json();
      this.result = responseJson;
    } catch (error) {
      console.log(error);
    }
  }
}
