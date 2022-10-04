import styled from 'styled-components';
import { PageProps } from './styleTypes';

export const InputField = styled.input`
  background-color: inherit;
  outline: none;
  border: none;
  color: white;
  font-family: 'Inter', sans-serif;
  font-size: 18px;
  box-sizing: border-box;
  width: 100%;
  padding: 0;
  margin: 4px 0;
`;

export const InputContainer = styled.div`
  background-color: #131313;
  border: 2px solid #131313;
  padding: 10px 16px;
  margin: 0 0 8px 0;
  border-radius: 10px;
  width: 100%;
  box-sizing: border-box;
  transition: 150ms border ease;

  &:focus-within {
    border-color: #fff
  }
`;

export const InputLabel = styled.label`
  display: block;
  color: #8f8f8f;
  font-size: 14px;
  font-weight: bold;
  margin: 4px 0;
`;

export const Button = styled.button`
  outline: none;
  border: 2px solid #2b09ff;
  border-radius: 10px;
  font-family: 'Inter', sans-serif;
  font-size: 18px;
  width: 100%;
  background-color: #2b09ff;
  color: #fff;
  padding: 25px 0;
  font-weight: 500;
  transition: 500ms all ease;

  &:active,
  &:focus,
  &:hover {
    background-color: #4e33ff;
    border-color: #4e33ff;
  }

  &:hover {
    cursor: pointer;
  }

  &:focus {
    border-color: #4e33ff;
  }
`;

export const Page = styled.div<PageProps>`
  height: 100%;
  background-color: #1a1a1a;
`;

export const PageCenter = styled(Page)`
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const AuthCallout = styled.div`
  text-align: center;
  margin: 30px;
  color: #f3f3f3;

  span {
    margin: 6px;
  }

  a {
    padding: 0 2px;
    color: inherit;
    transition: 250ms color ease;

    &:hover,
    &:focus {
      color: #b9b9b9
    }

    &:focus {
      text-decoration: none;
      padding: 0 1px;
      border: solid 1px #b9b9b9;
    }
  }
`;


export const ConversationsSidebarStyle = styled.aside`
  height: 100%;
  width: 350px;
  background-color: #1f1f1f;
  position: absolute;
  left: 0;
  top: 0;
`;

export const ConversationChannelPageStyle = styled.div`
  height: 100%;
  margin-left: 350px;
`;