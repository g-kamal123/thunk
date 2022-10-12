import { List } from "@shopify/polaris";
import React from "react";
import { connect } from "react-redux";
import { mapToState } from "../Map/Map";
import Skeleton from "./Skeleton";

const Printdata = (props) => {
  return (
    <>
      <List type="bullet">
        {props.data.map((item, i) => (
          <List.Item key={i}>{item.login}</List.Item>
        ))}
      </List>
      {props.loader && <Skeleton />}
    </>
  );
};

export default connect(mapToState)(Printdata);
