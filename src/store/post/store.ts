import rootStore from "store";
import { observable, computed, action, flow } from "mobx";

import { PostType, WriteType, EditType } from "./types";
import postService from "service/post/postService";

class postStore {
  root: rootStore;
  constructor(root: rootStore) {
    this.root = root;
  }

  @observable
  private _post: PostType = {
    User: {},
  };

  @observable
  private _posts: PostType[] = [];

  @observable
  private _searchPosts: PostType[] = [];

  @observable
  private _sellList: PostType[] = [];

  @computed
  get post() {
    return this._post;
  }

  @computed
  get posts() {
    return this._posts;
  }

  @computed
  get searchPosts() {
    return this._searchPosts;
  }

  @computed
  get sellList() {
    return this._sellList;
  }

  @action
  public setPost(payload: PostType) {
    this._post = payload;
  }

  @action
  public setPosts(payload: PostType[]) {
    return (this._posts = payload);
  }

  @action
  public setSearchPosts(payload: PostType[]) {
    return (this._searchPosts = payload);
  }

  @action
  public setSellList(payload: PostType[]) {
    return (this._sellList = payload);
  }

  getPosts = flow(function* (this: postStore) {
    try {
      const { data } = yield postService.posts();
      this.setPosts(data);
    } catch (error) {
      throw error;
    }
  });

  getSellList = flow(function* (this: postStore, id: number) {
    try {
      const { data } = yield postService.getSellList(id);
      this.setSellList(data);
    } catch (error) {
      throw error;
    }
  });

  getPost = flow(function* (this: postStore, id: string) {
    try {
      const { data } = yield postService.post(id);
      this.setPost(data);
    } catch (error) {
      throw error;
    }
  });

  getSearchPosts = flow(function* (this: postStore, keyword: string) {
    try {
      const { data } = yield postService.searchPosts(keyword);
      this.setSearchPosts(data);
    } catch (error) {
      throw error;
    }
  });

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

  edit = flow(function* (this: postStore, payload: EditType) {
    try {
      yield postService.edit(payload);
    } catch (error) {
      throw error;
    }
  });

  remove = flow(function* (this: postStore, id: number) {
    try {
      yield postService.remove(id);
    } catch (error) {
      throw error;
    }
  });
}

export default postStore;
