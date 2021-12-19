import { StatusBar } from "expo-status-bar";
import { ScrollView, StyleSheet, View } from "react-native";
import styled from "styled-components/native";
import AppBar from "./components/AppBar";
import ToolBar from "./components/ToolBar";
import Users from "./components/Users";

const Container = styled.SafeAreaView`
  flex: 1;
`;
export default function App() {
  return (
    <>
      <StatusBar backgroundColor="#FFFFF" barStyle="dark-content" />
      <Container>
        <ScrollView>
          <AppBar />
          <ToolBar />
          <Users />
        </ScrollView>
      </Container>
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});
