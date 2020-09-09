import rootStore from "store";
import { observable, computed, action, flow } from "mobx";

import { PostType, WriteType } from "./types";
import postService from "service/post/postService";

class postStore {
  root: rootStore;
  constructor(root: rootStore) {
    this.root = root;
  }

  @observable
  private _post: PostType = {};

  @observable
  private _posts!: PostType[];

  @computed
  get post() {
    return this._post;
  }

  @computed
  get posts() {
    return this._posts;
  }

  // @action
  // public setPost(payload: PostType) {
  //   this._post = payload;
  // }

  @action
  public setPosts(payload: PostType[]) {
    return (this._posts = payload);
  }

  write = flow(function* (this: postStore, payload: WriteType) {
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

  getPosts = flow(function* (this: postStore) {
    try {
      const { data } = yield postService.posts();
      this.setPosts(data);
    } catch (error) {
      throw error;
    }
  });

  getPost = flow(function* (this: postStore, id: string) {
    try {
      const { data } = yield postService.post(id);
      this._post = data;
    } catch (error) {}
  });
}

export default postStore;
