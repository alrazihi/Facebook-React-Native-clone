import React from "react";
import styled from "styled-components/native";
import Avatar from "./Avatar";
import {
  Ionicons,
  MaterialIcons,
  MaterialCommunityIcons,
} from "@expo/vector-icons";

const Container = styled.View`
  width: 100%;
  height: 92px;
`;
const Row = styled.View`
  width: 100%;
  flex-direction: row;
  background: #ffffff;
  padding: 0 11px;
  algin-items: center;
  justify-content: space-between;
`;
const Input = styled.TextInput`
  width: 100%;
  height: 50px;
  padding: 0 8px;
`;
const Divider = styled.View`
  width: 100%;
  height: 0.5px;
  background: #f0f0f0;
`;
const Menu = styled.View`
  flex-direction: row;
  align-items: center;
  justify-content: center;
  height: 42px;
`;
const MenuText = styled.View`
  padding-left: 11px;
  font-weight: 500;
  font-size: 12px;
`;
const Sparator = styled.View`
  width: 1px;
  height: 26px;
  background: #f0f0f0;
`;
const BottomDivider = styled.View`
  width: 100%;
  height: 9px;
  background: #f0f2f5;
`;
function ToolBar() {
  return (
    <>
      <Container>
        <Row>
          <Avatar source={require("../assets/users/u1.jpg")} />
          <Input placeholder="what's on your mind?" />
        </Row>
        <Divider />
        <Row>
          <Menu>
            <Ionicons name="ios-videocam" color="#F44337" size={22} />
            <MenuText>Live</MenuText>
          </Menu>
          <Sparator />
          <Menu>
            <MaterialIcons
              name="photo-size-select-actual"
              color="#4CAF50"
              size={20}
            />
            <MenuText>Photos</MenuText>
          </Menu>
          <Sparator />
          <Menu>
            <MaterialCommunityIcons
              name="video-plus"
              color="#F141FC"
              size={22}
            />
            <MenuText>Room</MenuText>
          </Menu>
        </Row>
      </Container>
      <BottomDivider />
    </>
  );
}

export default ToolBar;
