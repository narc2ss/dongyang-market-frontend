import client from "lib/client";
import { PostType } from "store/post/types";

class postService {
  public write(payload: PostType) {
    return client.post("/post", payload);
  }
}

export default new postService();
