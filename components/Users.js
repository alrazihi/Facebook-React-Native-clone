import React from "react";
import styled from "styled-components/native";
import { ScrollView, StyleSheet, View } from "react-native";
import {
  Ionicons,
  MaterialIcons,
  MaterialCommunityIcons,
} from "@expo/vector-icons";
import Avatar from "./Avatar";

const Container = styled.View`
  width: 100%;
  height: 58px;
  flex-direction: row;
  align-items: center;
`;
const Room = styled.TouchableOpacity`
  width: 115px;
  height: 40px;
  flex-direction: row;
  align-items: center;
  border-radius: 20px;
  border-width: 1px;
  border-color: #82b1ff;
  padding: 0 15px;
  margin-right: 12px;
`;
const Text = styled.View`
  color: #1777f2;
  font-size: 12px;
  padding-left: 6px;
  font-weight: bold;
  letter-spacing: -0.3px;
`;
const User = styled.View`
  padding-right: 13px;
`;
const BottomDivider = styled.View`
  width: 100%;
  height: 9px;
  background: #f0f2f5;
`;
function Users() {
  return (
    <>
      <Container>
        <ScrollView
          horizontal
          showsHorizontalScrollIndicator={false}
          style={{ paddingLeft: 11 }}
        >
          <Room>
            <MaterialCommunityIcons
              name="video-plus"
              size={26}
              color="#E141FC"
            />
            <Text>Create Room</Text>
          </Room>
          <User>
            <Avatar source={require("../assets/users/u1.jpg")} online={true} />
          </User>
          <User>
            <Avatar source={require("../assets/users/u1.jpg")} online={true} />
          </User>
          <User>
            <Avatar source={require("../assets/users/u1.jpg")} online={true} />
          </User>
          <User>
            <Avatar source={require("../assets/users/u1.jpg")} online={true} />
          </User>
          <User>
            <Avatar source={require("../assets/users/u1.jpg")} online={true} />
          </User>
          <User>
            <Avatar source={require("../assets/users/u1.jpg")} online={true} />
          </User>
          <User>
            <Avatar source={require("../assets/users/u1.jpg")} online={true} />
          </User>
          <User>
            <Avatar source={require("../assets/users/u1.jpg")} online={true} />
          </User>
          <User>
            <Avatar source={require("../assets/users/u1.jpg")} online={true} />
          </User>
        </ScrollView>
      </Container>
      <BottomDivider />
    </>
  );
}

export default Users;
