import React from "react";
import styled from "styled-components";

const Rates = (props) => {
    
    const my_lists =props.list; 

    
    return (
        <div>
        
          {my_lists.map((list, index) => {
            return (
              <ItemStyle key={index}>
                
                <Circle/><Circle/><Circle/><Circle/><Circle/>
                
              </ItemStyle>
            );
          })}
        </div>
      );
    };

    const ItemStyle =styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    margin: 1rem 0px;
    width: 100%;
`;

const Circle =styled.div`
  width: 30px;
    height: 30px;
    border-radius: 30px;
    margin: 5px;
    background-color: rgb(255, 235, 59);
`;


export default Rates;