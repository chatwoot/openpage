import axios from "axios";

export default function (context, inject) {
  inject("dataApi", {
    getData,
  });

  async function getData(service, params) {
    console.log(service, params);
    const { data } = await axios.get(`/api/${service}`, {
      params,
    });
    return data.data.pinned;
  }
}
