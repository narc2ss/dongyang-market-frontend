import rootStore from "store";
import { observable, flow, action, computed } from "mobx";

import { UserType } from "./types";
import userService from "service/user/userService";

class userStore {
  root: rootStore;
  constructor(root: rootStore) {
    this.root = root;
  }

  @observable
  private _user: UserType = null;

  @computed
  get getUser() {
    return this._user;
  }

  @action
  public setUser(payload: UserType) {
    this._user = payload;
  }

  login = flow(function* (this: userStore, payload: any) {
    try {
      const { data } = yield userService.login(payload);
      this.setUser(data.payload);
      localStorage.setItem("access_token", data.token);
      return data;
    } catch (error) {
      throw error;
    }
  });

  check = flow(function* (this: userStore) {
    try {
      const {
        data: { id, nickname },
      } = yield userService.check();
      return this.setUser({ id, nickname });
    } catch (error) {
      throw error;
    }
  });

  logout = flow(function* (this: userStore) {
    try {
      yield userService.logout();
      return this.setUser(null);
    } catch (error) {
      throw error;
    }
  });
}

export default userStore;
