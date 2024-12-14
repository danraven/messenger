import styled from 'styled-components';


export const InputContainer = styled.form`
  padding: 0.5rem 1rem;
  background-color: #FFF;
  border-radius: 15px;
  position: relative;
  box-sizing: border-box;
  width: 100%;
`;

export const Fieldset = styled.fieldset`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: stretch;
  border: 0 none;
  padding: 0;
  margin: 0;
`;

export const Button = styled.button`
  border: 0 none;
  border-radius: 10px;
  margin-left: 1rem;
  padding: 0.3rem 0.6rem;
  cursor: pointer;

  &:hover {
    transition: 100ms;
  }

  &:disabled {
    cursor: auto;
  }
`;

export const InputField = styled.input.attrs(_ => ({
  type: 'text'
}))`
  border: 0 none;
  background: transparent;
  width: 100%;
`;

