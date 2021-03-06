import styled from "styled-components";
import { DeveloperInfo } from "./DeveloperInfo";

export const DeveloperContainer = styled(DeveloperInfo)`

  h3 {
    margin: 10px 0;
  }

  h6 {
    margin: 5px 0;
    text-transform: uppercase;
  }
  p {
    font-size: 14px;
    line-height: 21px;
  }

  .card-container {
    position: relative;
    padding-top: 30px;
    width: 350px;
    max-width: 100%;
    text-align: center;
    border-radius: 5px;
    color: #b3b8cd;
    box-shadow: 0px 10px 20px -10px rgba(0, 0, 0, 0.75);
    background-color: #231e39;
  }

  .card-container .pro {
    color: #231e39;
    background-color: #febb0b;
    border-radius: 3px;
    font-size: 14px;
    font-weight: bold;
    padding: 3px 7px;
    top: 30px;
    left: 30px;
    position: absolute;
    text-transform: uppercase;
  }
  .card-container .round {
    border: 1px solid #03bfcb;
    border-radius: 50%;
    padding: 7px;
  }
  .btns {
    display: flex;
    justify-content: center;
    align-items: center;
    flex-wrap: wrap;
    gap: 5px;
  }

  button.primary {
    background-color: #03bfcb;
    border: 1px solid #03bfcb;
    border-radius: 3px;
    color: #231e39;
    font-family: Montserrat, sans-serif;
    font-weight: 500;
    padding: 10px 25px;
  }

  button.primary.ghost {
    background-color: transparent;
    color: #02899c;
  }

  .skills {
    background-color: #1f1a36;
    text-align: left;
    padding: 15px;
    margin-top: 30px;
  }

  .skills ul {
    list-style-type: none;
    margin: 0;
    padding: 0;
  }

  .skills ul li {
    border: 1px solid #2d2747;
    border-radius: 2px;
    display: inline-block;
    font-size: 12px;
    margin: 0 7px 7px 0;
    padding: 7px;
  }
`;