import client from "lib/client";

class userService {
  public login(payload: any) {
    return client.post("/auth/login/local", payload);
  }

  public check() {
    return client.get("/auth/check");
  }

  public logout() {
    return client.post("/auth/logout");
  }
}

export default new userService();
