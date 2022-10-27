import React from "react";
import "./App.css";
import styled from "styled-components";
import { useParams } from "react-router-dom";
import { useNavigate } from "react-router-dom";

const Review = ({list, setList}) => {
  const navigate = useNavigate();
  const params = useParams();
  
  const [rate, setRate] = React.useState(0); //가상돔에 있는 rate를 바꿔주는 함수
  //요골 하자마자 가상돔이 ㅇㅇ




  
  const save = (day) => {
      
      list[day] = rate ;  //rate 변경
    
    setList(list); //state 
    navigate("/");
  };


  console.log(params.day); 
  return (
    <div className="App">
      <Container>
        <T>
          <Day>
            {params.day}
            요일
          </Day>
          평점 남기기
        </T>

        <div
          style={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            margin: "1rem 0",
            width: "100%",
          }}
        >
          {Array.from({ length: 5 }, (item, idx) => {
            return (
              <div
                key={idx}
                onClick={() => {
                  setRate(idx + 1);
                }}
                style={{
                  width: "30px",
                  height: "30px",
                  borderRadius: "30px",
                  margin: "5px",
                  backgroundColor: rate < idx + 1 ? "#ddd" : "#ffeb3b",
                }}
              ></div>
            );
          })}
        </div>

        {/* <Circle/><Circle/><Circle/><Circle/><Circle/> */}

        <button
          onClick={() => save(params.day) }
        >
          평점 남기기
        </button>
      </Container>
    </div>
  );
};

const Container = styled.div`
  max-width: 350px;
  width: 80vw;
  height: 90vh;
  margin: 5vh auto;
  padding: 5vh 5vw;
  border: 1px solid rgb(221, 221, 221);
  box-sizing: border-box;
  border-radius: 5px;

  button {
    width: 100%;
    background-color: purple;
    border: none;
    border-radius: 5px;
    padding: 1rem;
    color: rgb(255, 255, 255);
  }
`;

const T = styled.div`
  text-align: center;
  display: block;
  font-size: 1.17em;
  margin-block-start: 1em;
  margin-block-end: 1em;
  margin-inline-start: 0px;
  margin-inline-end: 0px;
  font-weight: bold;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const Day = styled.div`
  color: rgb(255, 255, 255);
  font-weight: 900;
  background: orange;
  padding: 0.2rem;
  border-radius: 5px;
`;

// const Rates =styled.div`
//    display: flex;
//     justify-content: center;
//     align-items: center;
//     margin: 1rem 0px;
//     width: 100%;
// `;

// const Circle =styled.div`
//   width: 30px;
//     height: 30px;
//     border-radius: 30px;
//     margin: 5px;
//     background-color: rgb(255, 235, 59);
// `;

// const Circlegray=styled.div`
//       width: 30px;
//     height: 30px;
//     border-radius: 30px;
//     margin: 5px;
//     background-color: rgb(221, 221, 221);
// `;

export default Review;
