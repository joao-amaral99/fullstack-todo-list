import styled from 'styled-components';

export const Container = styled.li`
  align-items: center;
  background-color: rgba(191, 191, 191, 0.89); 
  border-radius: 4px;
  box-shadow: 0 0 14px rgba(0, 0, 0, 0.3);
  display: flex;
  height: 6rem;
  margin-bottom: 1.5rem;
  position: relative;
  width: 300px;


  svg {
    color: #333;
    position: absolute;
    right: 0.2rem;
    top: 0.3rem;
    

    &:hover {
      color: #f36444;
      cursor: pointer;
      transition: 0.2s;
    }
  }
  
`;

export const TextArea = styled.textarea`
  background-color: transparent;
  border: none;
  color: #272727;
  font-size: 1.05rem;
  height: 100%;
  letter-spacing: 1px;
  padding-left: 1rem;
  padding-top: 0.8rem;
  resize: none;
  width: 100%;

  &:focus {
    box-shadow: 0 0 15px rgba(0, 0, 0, 0.6);
    outline: none;
    transition: 0.2s;
  }
`;
