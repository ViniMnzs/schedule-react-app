import styled from 'styled-components';

export const Heading = styled.div`
    cursor: pointer !important;
    display: flex;
    justify-content: space-between;
    width: 100%;
    height: 5vh;
    padding-left: 10px;
    align-items: center;
    justify-content:space-between;
    background-color: transparent;
    :hover {
        background-color: rgba(0, 0, 0, 0.1);
        svg{
            background-color: rgba(0, 0, 0, 0.1);
        };
    }
    svg {
        align-self: center;
    }
`;

const Content = styled.div`
  opacity: ${(props) => (props.open ? '1' : '0')};
  max-height: ${(props) => (props.open ? '100%' : '0')};
  overflow: hidden;
  padding: ${(props) => (props.open ? '0' : '4px 0 0 ')};
  transition: all 0.6s;
  display: flex;

  width: 100%;
  height: auto;
  background-color: transparent;
`;
export default Content;
