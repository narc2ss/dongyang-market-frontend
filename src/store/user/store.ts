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
  private _user: UserType | undefined;

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
      const res = yield userService.login(payload);
      console.log(res.data);
      this.setUser(res.data);
    } catch (error) {
      throw error;
    }
  });
}

export default userStore;