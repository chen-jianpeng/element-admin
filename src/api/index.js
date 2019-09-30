import request from "./request";

export default {
  getUsers() {
    return request.get("/users");
  }
};
