import React, { useEffect } from "react";
import { Edit } from "components/write";
import { useObserver, inject } from "mobx-react";
import postStore from "store/post";
import { EditType } from "store/post/types";
import { RouteComponentProps, withRouter } from "react-router-dom";

interface Props extends RouteComponentProps<MatchParams> {
  postStore: postStore;
}

interface MatchParams {
  id: string;
}

const EditContainer = ({ postStore, match, history }: Props) => {
  const { id } = match.params;
  useEffect(() => {
    (async () => await postStore?.getPost(id))();
  }, [postStore, id]);

  const onEdit = async (payload: EditType) => {
    try {
      await postStore.edit(payload);
      alert("게시글이 수정되었습니다.");
      history.push(`/post/${id}`);
    } catch (error) {
      console.log(error);
    }
  };
  return useObserver(() => <Edit post={postStore.post} onEdit={onEdit} />);
};

export default inject("postStore")(withRouter(EditContainer));
