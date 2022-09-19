import styled from 'styled-components';

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
  padding: 12px 16px;
  border-radius: 10px;
  width: 100%;
  box-sizing: border-box;
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
  border: none;
  border-radius: 10px;
  font-family: 'Inter', sans-serif;
  font-size: 18px;
  width: 100%;
  background-color: #2b09ff;
  color: #fff;
  padding: 20px 0;
`;

export const Page = styled.div`
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: #1a1a1a;
`;