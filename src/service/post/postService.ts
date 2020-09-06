import client from "lib/client";
import { PostType } from "store/post/types";

class postService {
  public write(payload: PostType) {
    return client.post("/post", payload);
  }

  public posts() {
    return client.get("/posts");
  }

  public post(id: string) {
    return client.get(`/post/${id}`);
  }
}

export default new postService();
