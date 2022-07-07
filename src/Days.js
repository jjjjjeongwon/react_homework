import React from "react";
import styled from "styled-components";
import { useNavigate } from "react-router-dom";

const Days = (props) => {
  const navigate = useNavigate();
  const my_lists = Object.keys(props.list);
  console.log(props.list);

  return (
    <div>
      {my_lists.map((list, index) => {
        return (
          <ItemStyle key={index}>
            <Day>{list}</Day>
            {Array.from({ length: 5 }, (item, ind) => {
              return props.list[list] <= ind ? (
                <Circlegray key={ind} />
              ) : (
                <Circle key={ind} />
              );
            })}
            <Arrow
              className="list_item"
              key={index}
              onClick={() => {
                navigate(`/review/${list}`);
              }}
            />
          </ItemStyle>
        );
      })}
    </div>
  );
};

const ItemStyle = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  margin: 1rem 0px;
  width: 100%;
`;

const Day = styled.div`
  margin: 0px 0.5rem 0px 0px;
  font-weight: bold;
`;

const Circle = styled.div`
  width: 30px;
  height: 30px;
  border-radius: 30px;
  margin: 5px;
  background-color: rgb(255, 235, 59);
`;

const Circlegray = styled.div`
  width: 30px;
  height: 30px;
  border-radius: 30px;
  margin: 5px;
  background-color: rgb(221, 221, 221);
`;

const Arrow = styled.div`
  appearance: none;
  background-color: transparent;
  border-color: transparent purple;
  width: 0px;
  height: 0px;
  border-top-width: 1rem;
  border-top-style: solid;
  border-bottom-width: 1rem;
  border-bottom-style: solid;
  border-left-width: 1.6rem;
  border-left-style: solid;
  color: rgb(255, 255, 255);
  cursor: pointer;
`;

export default Days;
