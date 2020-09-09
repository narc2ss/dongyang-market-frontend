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

const EditContainer = ({ postStore, match }: Props) => {
  useEffect(() => {
    const { id } = match.params;
    (async () => await postStore?.getPost(id))();
  }, [postStore, match.params]);

  const onEdit = (payload: EditType) => {
    console.log(payload);
  };
  return useObserver(() => <Edit post={postStore.post} onEdit={onEdit} />);
};

export default inject("postStore")(withRouter(EditContainer));
