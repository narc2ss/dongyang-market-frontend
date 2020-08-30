import rootStore from "store";
import { observable, flow } from "mobx";
import { UserType } from "./types";
import userService from "service/user/userService";

class userStore {
  root: rootStore;
  constructor(root: rootStore) {
    this.root = root;
  }

  @observable
  private _user: UserType | undefined;

  login = flow(function* (this: userStore, payload: any) {
    try {
      const res = yield userService.login(payload);
      console.log(res);
    } catch (error) {
      throw error;
    }
  });
}

export default userStore;
