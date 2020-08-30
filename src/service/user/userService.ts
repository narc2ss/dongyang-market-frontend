import client from "lib/client";

class userService {
  public login(payload: any) {
    return client.post("/auth/login/local", {
      nickname: payload.nickname,
      password: payload.password,
    });
  }
}

export default new userService();
