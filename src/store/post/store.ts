import rootStore from "store";
import { observable, computed, action, flow } from "mobx";

import { PostType } from "./types";
import postService from "service/post/postService";

class postStore {
  root: rootStore;
  constructor(root: rootStore) {
    this.root = root;
  }

  @observable
  private _post: PostType = null;

  @computed
  get getPost() {
    return this._post;
  }

  @action
  public setPost(payload: PostType) {
    return (this._post = payload);
  }

  write = flow(function* (this: postStore, payload: PostType) {
    try {
      const {
        status,
        data: { id },
      } = yield postService.write(payload);
      return { status, id };
    } catch (error) {
      throw error;
    }
  });
}

export default postStore;
