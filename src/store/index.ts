import userStore from "./user";

class rootStore {
  userStore: userStore;
  constructor() {
    this.userStore = new userStore(this);
  }
}

export default rootStore;
