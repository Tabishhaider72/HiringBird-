import React from "react";
import { Button } from "./styles/Hero.styled";
import styled from "styled-components";
import { Container } from "./styles/CommonComponents/Container.styled";

function Hero() {
  return (
    <Container>
      <TopSplit>
        <Left>
          <div className="heading">
            <h2>Find your dream</h2>
            <h1>Internship</h1>
          </div>
          <div className="bottom">
            <Button>Get started</Button>
            <p>
              The only way to do great work is to love what you do. If you
              haven’t found it yet, keep looking. Don’t settle. As with all
              matters of the heart, you’ll know when you find it.” -Steve Jobs
            </p>
          </div>
        </Left>
        <Right>
          <img src="./home.png" alt="adobe illutstration" />
        </Right>
      </TopSplit>

      <BottomSplit>
        <img src="./search.svg" alt="" />
        <input type="text" placeholder="Search for interships" />
        <button>Search</button>
      </BottomSplit>
    </Container>
  );
}

export default Hero;

const TopSplit = styled.div`
  display: flex;
  * {
    flex-basis: 100%;
  }
  @media (max-width: 600px) {
    flex-direction: column;
  }
`;
const Left = styled.div`
  display: flex;
  flex-direction: column;
  .heading {
    h2 {
      font-style: normal;
      font-weight: bold;
      font-size: 64px;
      color: #404366;
    }
    h1 {
      font-style: normal;
      font-weight: bold;
      font-size: 72px;
      color: #404366;
    }
    @media (max-width: 600px) {
      h1 {
        font-size: 40px;
        margin-bottom: 2rem;
      }
    }
    @media (max-width: 800px) {
      h1 {
        font-size: 60px;
      }
    }
  }
  .bottom {
    p {
      font-style: italic;
      font-weight: 500;
      font-size: 20px;
      line-height: 30px;
      color: #404366;
    }
  }
`;
const Right = styled.div`
  img {
    display: block;
    max-width: 100%;
    margin-inline: auto;
  }
`;
const BottomSplit = styled.div`
  display: flex;
  align-items: center;
  margin-top: 2rem;
  width: 90%;
  border: 1px solid #c9cbe2;
  padding: 6px 10px;
  border-radius: 4px;
  margin-inline: auto;
  img {
    height: 2rem;
  }
  input {
    flex: 1;
    padding: 0.7rem;
    margin: 0 0.5rem;
    border: none;
    outline: none;
    font-size: 1rem;
  }
  button {
    background: #404366;
    border-radius: 4px;
    padding: 0.8rem 1.3rem;
    color: #fff;
    cursor: pointer;
    border: none;
  }
`;