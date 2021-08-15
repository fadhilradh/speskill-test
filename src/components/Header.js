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
  height: 800px;
  width: 100%;
  position: relative;
`;

const Banner = styled.div`
  box-sizing: border-box;
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
  align-items: flex-start;
  padding: 16px;
  background: black;
  border-radius: 50px;
  border: 30px solid white;
  height: 100%;
  width: 100%;
  font-family: "Source Code Pro";
  transform: rotate(-25deg);
  margin-top: -300px;
  position: absolute;
  left: 0px;
  top: -160px;
`;

const Title = styled.p`
  color: #00ff00;
  text-transform: uppercase;
  font-size: 48px;
  text-align: left;
  margin: 0 0 0 144px;
`;

const Date = styled.p`
  writing-mode: vertical-rl;
  text-orientation: mixed;
  color: #00ff00;
  margin: 0 0 42px 0;
`;
