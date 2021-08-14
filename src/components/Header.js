import styled from "styled-components";
import moment from "moment";
import { useEffect, useState } from "react";

const Header = () => {
  const [time, setTime] = useState(moment());

  useEffect(() => {
    setInterval(() => {
      setTime(moment());
    }, 1000);
  }, []);

  return (
    <Wrapper>
      <Banner>
        <Date>{time.format("MMMM Do YYYY, h:mm:ss")}</Date>
        <Title> &#60; SPE / Frontend &#62; </Title>
      </Banner>
    </Wrapper>
  );
};

export default Header;

const Wrapper = styled.div`
  background-image: linear-gradient(
    to right,
    #00dbde,
    #00cfff,
    #00b8ff,
    #6a8cff,
    #fc00ff
  );
  height: 600px;
  width: 100%;
`;

const Banner = styled.div`
  box-sizing: border-box;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: flex-start;
  padding: 16px;
  background: black;
  border-radius: 12px;
  border: 20px solid white;
  height: 70%;
  width: 100%;
  font-family: "Source Code Pro";
`;

const Title = styled.p`
  color: #00ff00;
  text-transform: uppercase;
  font-size: 36px;
  text-align: left;
  margin: 0 0 0 56px;
`;

const Date = styled.p`
  writing-mode: vertical-rl;
  text-orientation: mixed;
  color: #00ff00;
`;
