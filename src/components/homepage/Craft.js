import React from "react"
import Highlight, { defaultProps } from "prism-react-renderer"
import {
  Div,
  Text,
  Row,
  Col,
  Container,
  Image,
  Icon,
  Button,
} from "react-atomize"
import styled, { keyframes } from "styled-components"
import codeTheme from "../common/codeTheme"
import ReactWOW from "react-wow"

// import craftImage from "../../images/craft.png"
import cardImg from "../../images/cardImg.png"
import strokes from "../../images/craft/strokes.svg"
import spiral from "../../images/craft/spiral.svg"
import circleBrush from "../../images/craft/circleBrush.svg"

import ill1 from "../../images/ill1.svg"
import ill2 from "../../images/ill2.svg"
import ill3 from "../../images/ill3.svg"

const translate = keyframes`
  from {
    transform: translateY(0);
  }

  to {
    transform: translateY(-100%);
  }
`

const Translate = styled.div`
  animation: ${translate} 6s linear infinite;
`

const TranslateContainer = styled.div`
  position: absolute;
  top: calc(100% - 3rem);
  left: 1rem;
  right: 1rem;
  overflow: hidden;
  zindex: 10;

  @media (min-width: 576px) {
    top: auto;
    left: auto;
    right: 2.5rem;
    bottom: -3.5rem;
    width: 18rem;
  }

  &:before {
    content: "";
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    height: 2rem;
    background-image: linear-gradient(
      rgba(247, 245, 244, 1),
      rgba(247, 245, 244, 0)
    );
    z-index: 10;
    filter: invert(1);
  }

  &:after {
    content: "";
    position: absolute;
    bottom: 1rem;
    left: 0;
    right: 0;
    height: 2rem;
    background-image: linear-gradient(
      rgba(255, 255, 255, 0),
      rgba(255, 255, 255, 1)
    );
    z-index: 10;
  }
`

const list = [
  {
    image: ill1,
    content: "Make any property responsive by just using an array.",
  },
  {
    image: ill2,
    content: "A consistant design language throughout the website.",
  },
  {
    image: ill3,
    content: "A large number of customisations to build anything.",
  },
]

const Craft = () => {
  return (
    <Div
      w="100vw"
      overflow="hidden"
      border={{ b: "1px solid" }}
      borderColor="gray300"
    >
      <Container>
        <Div d="flex" flexDir="column" align="center" p={{ t: "8rem" }}>
          <Text
            tag="h2"
            textSize="display2"
            textAlign="center"
            textWeight="500"
            maxW="40rem"
            m={{ b: "2rem" }}
          >
            Code the perfect design for each project using Atomize.
          </Text>
        </Div>
        <Div d="flex" justify="center" p={{ t: { xs: "3rem", md: "8rem" } }}>
          <Div
            maxW="53rem"
            w="100%"
            pos="relative"
            m={{ b: { xs: "70%", sm: "auto" } }}
          >
            <Div
              pos="relative"
              w="100%"
              bg="brandgray"
              p={{ b: "70%" }}
              rounded="xl"
              style={{ filter: "invert(1)" }}
            >
              <Div
                pos="absolute"
                top="0.5rem"
                left="0.5rem"
                bottom="0"
                right="0.5rem"
                overflow="hidden"
              >
                <Highlight
                  {...defaultProps}
                  theme={{
                    ...codeTheme,
                    plain: { ...codeTheme.plain, backgroundColor: "#f7f5f4" },
                  }}
                  code={code}
                  language="jsx"
                >
                  {({
                    className,
                    style,
                    tokens,
                    getLineProps,
                    getTokenProps,
                  }) => (
                    <pre className={className} style={style}>
                      {tokens.map((line, i) => (
                        <div {...getLineProps({ line, key: i })}>
                          {line.map((token, key) => (
                            <span {...getTokenProps({ token, key })} />
                          ))}
                        </div>
                      ))}
                    </pre>
                  )}
                </Highlight>
              </Div>
            </Div>
            <TranslateContainer>
              <Translate>
                <AnimatingBlock />
              </Translate>
              <Div pos="absolute" top="100%" left="0" right="0">
                <Translate>
                  <AnimatingBlock />
                </Translate>
              </Div>
              <Div
                h="1rem"
                pos="absolute"
                bottom="0"
                height="1rem"
                left="0"
                bg="white"
                zIndex="10"
                right="0"
              ></Div>
            </TranslateContainer>
          </Div>
        </Div>
      </Container>
    </Div>
  )
}

export default Craft

const AnimatingBlock = () => (
  <Div p={{ b: "1rem" }}>
    <Div bg="white" shadow="2" rounded="xl" m={{ b: "1rem" }} p="1.5rem">
      <Div
        border={{ b: "1px solid" }}
        borderColor="gray300"
        p={{ b: "0.75rem" }}
      >
        <Text textSize="title" textWeight="500">
          $1,410.16
        </Text>
        <Text textSize="caption" textColor="light">
          per month
        </Text>
      </Div>
      <Div d="flex" justify="space-between" p={{ t: "1rem", b: "1.5rem" }}>
        <Div>
          <Text textSize="caption" textColor="dark">
            Payment Card
          </Text>
          <Text textSize="caption" textColor="light">
            Component
          </Text>
        </Div>
        <Div>
          <Div d="flex" h="20px">
            {[1, 2, 3, 4, 5].map(num => (
              <Icon
                key={num}
                name="StarSolid"
                size="14px"
                color={num === 5 ? "gray400" : "info700"}
                m={{ r: "0.125rem" }}
              />
            ))}
          </Div>
          <Text textSize="caption" textColor="light">
            Rated 4.0/5
          </Text>
        </Div>
      </Div>
      <Button
        rounded="lg"
        bg="info700"
        hoverBg="info800"
        w="100%"
        textWeight="500"
      >
        Use this design system
      </Button>
    </Div>
    <Div
      p="1rem"
      bg="white"
      d="flex"
      shadow="2"
      align="center"
      rounded="xl"
      justify="space-between"
    >
      <Div d="flex" align="center">
        <Image
          src={cardImg}
          rounded="circle"
          h="2.5rem"
          w="2.5rem"
          m={{ r: "1rem" }}
        />
        <Text>Jogger Playyer</Text>
      </Div>
      <Icon name="Add" color="info700" size="20px" />
    </Div>
  </Div>
)

const code = `const PaymentCardBlock = () => (
  <Div bg="white" shadow="2" rounded="xl" m={{ b: "1rem" }} p="1.5rem">
    <Div
      border={{ b: "1px solid" }}
      borderColor="gray300"
      p={{ b: "0.75rem" }}
    >
      <Text textSize="title" textWeight="500">
        $1,410.16
      </Text>
      <Text textSize="caption" textColor="light">
        per month
      </Text>
    </Div>
    <Div d="flex" justify="space-between" p={{ t: "1rem", b: "1.5rem" }}>
      <Div>
        <Text textSize="caption" textColor="dark">
          Payment Card
        </Text>
        <Text textSize="caption" textColor="light">
          Component
        </Text>
      </Div>
      <Div>
        <Div d="flex" h="20px">
          {[1, 2, 3, 4, 5].map(num => (
            <Icon
              key={num}
              name="StarSolid"
              size="14px"
              color={num === 5 ? "gray400" : "info700"}
              m={{ r: "0.125rem" }}
            />
          ))}
        </Div>
        <Text textSize="caption" textColor="light">
          Rated 4.0/5
        </Text>
      </Div>
    </Div>
    <Button
      rounded="lg"
      bg="info700"
      hoverBg="info800"
      w="100%"
      textWeight="500"
    >
      Use this design system
    </Button>
  </Div>
)
`
