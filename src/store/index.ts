import userStore from "./user";
import postStore from "./post";

class rootStore {
  userStore: userStore;
  postStore: postStore;
  constructor() {
    this.userStore = new userStore(this);
    this.postStore = new postStore(this);
  }
}

export default rootStore;
