import styled from 'styled-components';

export const ButtonWrapped = styled.div`
  width: 400px;
  display: flex;
  gap: 10px;
  button {
    font-family: Lato;
    font-weight: 600;
    font-size: 16px;
    color: #77e851;
    background: linear-gradient(360deg, #0066cc 0%, #c500cc 50%);
    padding: 10px 25px;
    border: solid #0066cc 0px;
    box-shadow: none;
    border-radius: 25px 50px;
    transition: 468ms;
    transform: translateY(0);
    display: flex;
    flex-direction: row;
    align-items: center;
    cursor: pointer;
    text-transform: uppercase;

    &:hover {
      transition: 468ms;
      padding: 10px 30px;
      transform: translateY(-0px);
      background: linear-gradient(360deg, #0066cc 0%, #c500cc 50%);
      color: #27c759;
      border: solid 0px #e9c46a;
    }
  }
`;
