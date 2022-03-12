import styled from 'styled-components';

export const Container = styled.main`
  margin: 0 auto;
  max-width: 1000px;
  width: 100%;
`;

export const Header = styled.header`
  h1 {
    color: #e5e5e5;
    letter-spacing: 1px;
    margin-top: 4rem;
    text-align: center;

    &::after {
      background-color: #f36444;
      content: '';
      display: block;
      height: 2px;
      margin: 4px auto;
      max-width: 250px;
      width: 100%;
    }
  }
  
`;

export const Form = styled.form`
  display: flex;
  flex-direction: column;
  margin-top: 2.5rem;

  input {
    background-color: rgba(191, 191, 191, 0.89); 
    border: none;
    border-radius: 4px;
    color: #525151;
    font-size: 1rem;
    height: 2.5rem;
    margin: 0 auto;
    max-width: 500px;
    padding: 0 8px;
    width: 100%;
  }

  input:focus {
    background-color: #e5e5e5;
    box-shadow: 0 0 0 3px rgba(243, 100, 68, 0.85);
    outline: none;
    transition: 0.2s;
  }

  button {
    background-color: #f36444;
    border: none;
    border-radius: 4px;
    color: #e5e5e5;
    font-size: 1rem;
    font-weight: bold;
    height: 2rem;
    letter-spacing: 1px;
    margin: 0.6rem auto;
    max-width: 500px;
    width: 100%;

    &:hover {
      filter: brightness(90%);
      transition: 0.2s;
    }
  }
`;

export const Ul = styled.ul`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 1.6rem;
  justify-items: center;
  margin: 0 auto;
  margin-top: 3rem;
`;


