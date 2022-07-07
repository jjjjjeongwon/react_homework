import React from "react";
import Days from "./Days";
import './App.css';
import styled from "styled-components";
import {Route,Routes} from "react-router-dom";
import Review from "./Review";


function App() {

  const arrow ={"월":Math.floor(Math.random()*5),
                "화":Math.floor(Math.random()*5),
                "수":Math.floor(Math.random()*5),
                "목":Math.floor(Math.random()*5),
                "금":Math.floor(Math.random()*5),
                "토":Math.floor(Math.random()*5),
                "일":Math.floor(Math.random()*5),}

  const [avg, setAvg] =React.useState(0);  //state 즐값, 이 값을 바꿔주는 함수
  React.useEffect(()=>{

    let sum =0;
    Object.values(list).map((x)=>{
      sum += x;
    })
    setAvg((sum/7).toFixed(1))
  },[avg])   

  const scoreReset =() => {
    Object.keys(list).map((x)=> {
      list[x] =0;
    });
    setList(list);      //뭔망린지 모르겟ㅅ름
    setAvg("0.0");
  }


  // const save =() => {
  //   Object.keys(list).map((day)=> {
  //     list[day] =0;
  //   });
  //   setList(list);   
    
  // }



  const [list, setList] =React.useState(arrow);

  console.log(arrow);

                                      
  const text = React.useRef(null);

  const addBucketList = () => {
    // 스프레드 문법! 기억하고 계신가요? :) 
    // 원본 배열 list에 새로운 요소를 추가해주었습니다.
    setList([...list, text.current.value]);
  }


     
    
  return (

    <div className ="App">
      <Routes>
      <Route path="/review/:day" element={<Review list ={list} setList={setList}/>}/> 
    </Routes>
      
      <Container>
      <Title>내 일주일은?</Title>
      
    
      <Days list={list}/>
      

      <Score>
      <div>평균 평점</div>

      <div>{avg}</div>
      <Button className="reset" onClick={scoreReset}>
        <P2>
          Reset
        </P2>
      </Button>
      </Score>
      
      </Container>
    </div>
    
    );
  }



const Container = styled.div`
  max-width: 350px;
    width: 80vw;
    height: 90vh;
    margin: 5vh auto;
    padding: 5vh 0px;
    border: 1px solid rgb(221, 221, 221);
    box-sizing: border-box;
    border-radius: 5px;
`;

const Title = styled.h3`
      display: block;
    font-size: 1.17em;
    margin-block-start: 1em;
    margin-block-end: 1em;
    margin-inline-start: 0px;
    margin-inline-end: 0px;
    font-weight: bold;
`;

const Score = styled.div`
  width: 8rem;
    margin: 1rem auto;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    text-align: center;
    color: blue;
    padding: 9px;
    font-size: 25px;
    font-weight: bold;
`;

const Button =styled.div`
   width: inherit;
    height: fit-content;
    background-color: dodgerblue;
    border-radius: 6px;
    text-align: center;
    margin: 10px 0px 0px;
`;

const P2 =styled.div`
    color: white;
    font-size: 18px;
    display: block;
    margin-block-start: 1em;
    margin-block-end: 1em;
    margin-inline-start: 0px;
    margin-inline-end: 0px;
`;

export default App;

