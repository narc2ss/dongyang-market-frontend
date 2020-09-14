import client from "lib/client";
import { WriteType, EditType } from "store/post/types";

class postService {
  public post(id: string) {
    return client.get(`/post/${id}`);
  }

  public posts() {
    return client.get("/posts");
  }

  public searchPosts(keyword: string) {
    return client.get(`/posts/${keyword}`);
  }

  public write(payload: WriteType) {
    return client.post("/post", payload);
  }

  public edit(payload: EditType) {
    return client.patch("/post", payload);
  }

  public remove(id: number) {
    return client.delete(`/post/${id}`);
  }
}

export default new postService();
