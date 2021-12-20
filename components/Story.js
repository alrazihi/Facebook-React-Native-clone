import React from "react";
import styled from "styled-components/native";
import { ScrollView } from "react-native";
import { AntDesign } from "@expo/vector-icons";
import Avatar from "./Avatar";

const Container = styled.View`
  width: 100%;
  height: 192px;

  padding: 0 11px;
  align-items: center;
  flex-direction: row;
  justify-content: space-between;
`;
const Card = styled.View`
  width: 106px;
  height: 170px;
  position: relative;
  margin-right: 8px;
`;
const CardStory = styled.Image`
  width: 100%;
  height: 170px;
  border-radius: 12px;
`;
const CardUser = styled.View`
  position: absolute;
  top: 8px;
  left: 8px;
  background: #ffffff;
  border-radius: 20px;
  width: 39px;
  height: 39px;
  align-items: center;
  justify-content: center;
`;
const CardFooter = styled.View`
  width: 100%;
  position: absolute;
  bottom: 12px;
  left: 9px;
`;
const Text = styled.Text`
  font-size: 13px;
  font-weight: bold;
  color: #ffffff;
  text-shadow: 1px 1px 1px rgba(0, 0, 0, 0);
`;
const BottomDivider = styled.View`
  width: 100%;
  height: 9px;
  background: #f0f2f5;
`;
const ContainerList = () => (
  <Card>
    <CardStory source={require("../assets/users/u1.jpg")} />
    <CardUser>
      <Avatar source={require("../assets/users/u1.jpg")} story={true} />
    </CardUser>
    <CardFooter>
      <Text>Alrazihi Towfik</Text>
    </CardFooter>
  </Card>
);

function Story() {
  return (
    <>
      <Container>
        <ScrollView
          horizontal
          showsHorizontalScrollIndicator={false}
          style={{ paddingLeft: 11 }}
        >
          <Card>
            <CardStory source={require("../assets/users/u1.jpg")}></CardStory>
            <CardUser>
              <AntDesign name="plus" size={24} color="#1777f2" />
            </CardUser>
            <CardFooter>
              <Text>Add To story</Text>
            </CardFooter>
          </Card>
          {_.range(20).map((_n, i) => (
            <ContainerList key={i} />
          ))}
        </ScrollView>
      </Container>
      <BottomDivider />
    </>
  );
}

export default Story;
