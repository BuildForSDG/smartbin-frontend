import styled from 'styled-components';
import media from 'styled-media-query';

const Text = styled.p`
  font-size: 1.2rem;
  color: ${(props) => (props.white ? '#fff' : '#090447')};
`;

const FooterBody = styled.div`background: #1ec46a;`;

const HeaderBody = styled.div`
  padding: 1rem 1rem;
  background: #fff;
  color: #1ec46a;
  ${media.lessThan('large')`
padding: 0.7rem 0.5rem;
 `};
  ${media.lessThan('medium')`
padding: 0.5rem 0.5rem;
 `};
  ${media.lessThan('small')`
padding: 0.5rem 0.5rem;
 `};
`;

const BannerBody = styled.div`
  padding: 2rem 1rem 0rem 10rem;
  background: transparent;
  ${media.lessThan('huge')`
padding: 5rem 5rem;
  background : transparent;
 `};
  ${media.lessThan('large')`
padding: 2rem 3rem;
  background : transparent;
 `};
  ${media.lessThan('medium')`vv
padding: 1.5rem 1rem;
  background : transparent;
 `};
  ${media.lessThan('small')`
padding: 2rem 0.5rem;
  background : transparent;
 `};
`;

const Flex = styled.div`
  display: flex;
  justify-content: ${(props) => props.justifyContent};
  flex-direction: ${(props) => (props.column ? 'column' : 'row')};
`;

const Hover = styled.div``;

const Body = styled.div`
  padding: 1rem 5rem;
  ${media.lessThan('huge')`
padding:1rem 3rem;
  background : transparent;
 `};
  ${media.lessThan('large')`
padding:1rem 2rem;
  background : transparent;
 `};
  ${media.lessThan('medium')`
padding:1rem 1rem;
  background : transparent;
 `};
  ${media.lessThan('small')`
padding:1rem 0.5rem;
  background : transparent;
 `};
`;

const Button = styled.button`
  padding: 0.5rem 2rem;
  background: ${(props) => props.color};
  border: 1px solid ${(props) => props.color};
  border-radius: 6px;
  text-align: center;
  color: ${(props) => props.textColor};
  margin: 0rem 0.7rem;
`;

const LgButton = styled.button`
  padding: 1rem 1rem;
  width: 20rem;
  background: transparent;
  border: 0px;
  border-radius: 7px;
  text-align: center;
  color: #fff;
  margin: 0rem 0.7rem;
  background: #1ec46a;
`;

const BigTitle = styled.h1`
  padding: 1rem;
  color: #090447;
`;

const Card = styled.div`
  padding: 2rem 1rem;
  width: 25rem;
  background: transparent;
  box-shadow: 0px 5px 7px grey;
  border-radius: 7px;
`;

const Title = styled.h2`
  text-align: ${(props) => (props.center ? 'center' : null)};
`;

const Grid = styled.div`
  display: grid;
  grid-gap: 2rem;
  grid-template-columns: 50% 50%;
  ${media.lessThan('medium')`
    display : flex;
    flex-direction : column;
    text-align  : center;
 `};
  ${media.lessThan('small')`
     display : flex;
    flex-direction : column;
    text-align  : center;
 `};
`;

export {
  Title,
  Card,
  Grid,
  Body,
  BannerBody,
  Text,
  FooterBody,
  Flex,
  BigTitle,
  HeaderBody,
  Hover,
  LgButton,
  Button,
};
