//import { API_URL } from "../constants";

export class appServices {
  static fetchDataFromAPI() {
    console.log("1- in API");
    return fetch("/graphql", {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify({
        query: `{links{id: _id, url, title}}`
      })
    })
      .then(res => res.json())
      .then(res => res.data.links);
  }
}
