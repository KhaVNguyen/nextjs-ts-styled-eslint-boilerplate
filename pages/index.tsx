import styled from 'styled-components';
import GlobalStyleWrapper from '../styles/GlobalStyleWrapper';

const Title = styled.h1`
  font-size: 32px;
  font-weight: bold;
  color: navy;
`;

const Home = () => (
  <GlobalStyleWrapper>
    <Title>Title</Title>
  </GlobalStyleWrapper>
);

export default Home;
