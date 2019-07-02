import React from "react"
import {
  Div,
  Text,
  Row,
  Col,
  Container,
  Anchor,
  Icon,
  Image,
} from "react-atomize"

import blue from "../../images/design-dev/blue-line.svg"
import yellow from "../../images/design-dev/yellow-line.svg"
import logoSketch from "../../images/logo-sketch.svg"
import logoReact from "../../images/logo-react.svg"

const DesignDevelopment = () => {
  return (
    <Div tag="section">
      <Container>
        <Div
          p={{ t: "7.5rem", b: "12rem" }}
          border={{ b: "1px solid" }}
          borderColor="gray300"
        >
          <Div d="flex" flexDir="column" align="center">
            <Text
              textSize="display1"
              textAlign="center"
              textWeight="500"
              maxW="26rem"
              m={{ b: "2rem" }}
            >
              Learn more about our full stack of brand building tools
            </Text>
            <Text
              textSize="subheader"
              textAlign="center"
              textColor="medium"
              maxW="26rem"
              m={{ b: "3.5rem" }}
            >
              We’ve built a full stack of social media tools to help modern
              brands grow their awareness, engagement, and sales.
            </Text>
          </Div>
          <Div>
            <Row>
              <Col size={{ xs: 12, lg: 4 }} offset={{ xs: 0, lg: 2 }}>
                <Div
                  shadow="4"
                  rounded="xl"
                  p="2rem"
                  m={{ b: { xs: "2rem", md: "0" } }}
                >
                  <Div d="flex" align="center" m={{ b: "0.75rem" }}>
                    <Image
                      src={logoSketch}
                      h="1.75rem"
                      w="auto"
                      m={{ r: "0.75rem" }}
                    />
                    <Text textSize="heading" textWeight="500">
                      Design
                    </Text>
                  </Div>

                  <Text
                    textSize="subheader"
                    textColor="medium"
                    p={{ r: "0.5rem" }}
                    m={{ b: "1.5rem" }}
                  >
                    We’ve built a full stack of social media tools to help
                    modern modern modern.
                  </Text>
                  <Anchor d="flex" align="center">
                    Design Resources
                    <Icon
                      name="LongRight"
                      size="16px"
                      m={{ l: "1rem" }}
                      color="info700"
                    />
                  </Anchor>
                </Div>
              </Col>
              <Col size={{ xs: 12, lg: 4 }} pos="relative">
                <Image
                  src={blue}
                  pos="absolute"
                  w="24.5rem"
                  top="-3rem"
                  left="6rem"
                  zIndex="-1"
                />
                <Image
                  src={yellow}
                  pos="absolute"
                  w="14rem"
                  top="6rem"
                  left="16rem"
                  zIndex="-1"
                />
                <Div shadow="4" bg="white" rounded="xl" p="2rem">
                  <Div d="flex" align="center" m={{ b: "0.75rem" }}>
                    <Image
                      src={logoReact}
                      h="1.75rem"
                      w="auto"
                      m={{ r: "0.75rem" }}
                    />
                    <Text textSize="heading" textWeight="500">
                      Development
                    </Text>
                  </Div>
                  <Text
                    textSize="subheader"
                    textColor="medium"
                    p={{ r: "0.5rem" }}
                    m={{ b: "1.5rem" }}
                  >
                    We’ve built a full stack of social media tools to help
                    modern modern modern.
                  </Text>
                  <Anchor d="flex" align="center">
                    Design Resources
                    <Icon
                      name="LongRight"
                      size="16px"
                      m={{ l: "1rem" }}
                      color="info700"
                    />
                  </Anchor>
                </Div>
              </Col>
            </Row>
          </Div>
        </Div>
      </Container>
    </Div>
  )
}

export default DesignDevelopment
