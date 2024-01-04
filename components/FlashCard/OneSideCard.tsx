import React from "react";
import { Card, Title } from "react-native-paper";
import { cn } from "../../lib/tailwind";
import { Dimensions } from "react-native";

type Props = {
  title: string;
  onPress: () => void;
};

const OneSideCard: React.FC<Props> = ({ title, onPress }) => {
  const screenW = Dimensions.get("window").width;
  const screenH = Dimensions.get("window").height;

  return (
    <Card
      onPress={onPress}
      style={{
        width: screenW,
        height: screenH / 3,
        paddingTop: 16,
        alignItems: "center",
        display: "flex",
        flexDirection: "column",
      }}
    >
      <Card.Content>
        <Title>{title}</Title>
      </Card.Content>
    </Card>
  );
};

export default OneSideCard;
