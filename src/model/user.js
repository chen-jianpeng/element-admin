import api from "@/api";

class User {
  constructor() {
    this.users = [];
  }

  async getUsersFromApi() {
    let res = await api.getUsers();
    this.users = res.data;
  }

  async getUsers() {
    if (this.users.length <= 0) {
      await this.getUsersFromApi();
      return this.users;
    } else {
      return this.users;
    }
  }

  async refreshUsers() {
    await this.getUsersFromApi();
    return this.users;
  }
}

export default User;
