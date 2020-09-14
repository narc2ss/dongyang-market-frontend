import React, { useEffect } from "react";
import Search from "components/search";
import { inject, useObserver } from "mobx-react";
import { withRouter, RouteComponentProps } from "react-router-dom";
import postStore from "store/post";

interface Props extends RouteComponentProps<MatchParams> {
  postStore?: postStore;
}

interface MatchParams {
  keyword: string;
}

const SearchContainer = ({ postStore, match }: Props) => {
  const { keyword } = match.params;
  useEffect(() => {
    (async () => await postStore?.getSearchPosts(keyword))();
  }, [postStore, keyword]);

  return useObserver(() => (
    <Search keyword={keyword} posts={postStore!.searchPosts} />
  ));
};

export default inject("postStore")(withRouter(SearchContainer));
