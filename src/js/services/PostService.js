import axios from 'axios';

export default class PostService {
  constructor(url) {
    this.url = url;
  }

  getData() {
    return axios.get(this.url)
      .then(response =>
        response.status === 200 ? response.data : []
      )
      .catch(error =>
        console.log(error)
      );
  }
}
