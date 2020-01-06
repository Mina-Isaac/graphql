import React, { useEffect } from "react";
import { useDispatch, useSelector, shallowEqual } from "react-redux";
import { receiveLinks } from "../Store/actions";

export default () => {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(receiveLinks());
  }, []);

  const links = useSelector(store => store.links, shallowEqual());
  console.log(links);
  const lis = links.map(item => (
    <li key={item.id}>
      <a href={`//${item.url}`}>{item.title}</a>
    </li>
  ));

  return (
    <div>
      <h3>Links</h3>
      <ul>{lis}</ul>
    </div>
  );
};
