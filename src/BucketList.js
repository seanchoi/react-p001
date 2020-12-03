import React from "react";
import styled from "styled-components";
import FlipMove from "react-flip-move";

import {useSelector, useDispatch} from "react-redux"

const BucketList = (props) => {
  const bucket_list = useSelector((state) => state.bucket.list)
   
  return (
    <ListStyle>
      <FlipMove>
        {bucket_list.map((list, idx) => {
          return (
            
              <ItemStyle key={idx} onClick={()=>{
                props.history.push('/detail/'+idx)
              }}>
                {list}
              </ItemStyle>            
            
          );
        })}
      </FlipMove>
    </ListStyle>
  );
};

const ListStyle = styled.div`
  display: flex;
  flex-direction: column;
  min-width:250px;
  height: 100%;
  overflow-x: hidden;
  overflow-y: auto;
`;

const ItemStyle = styled.div`
  padding: 16px;
  margin: 8px;
  background-color: aliceblue;
  border-radius:15px;
  text-decoration: none;
`;

export default BucketList;