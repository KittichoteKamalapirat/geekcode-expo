import { useNavigation } from "@react-navigation/native";
import { NativeStackNavigationProp } from "@react-navigation/native-stack";
import React from "react";
import { Image, TouchableOpacity, View } from "react-native";
import { User } from "../../graphql/generated/graphql";
import tw from "../../lib/tailwind";
import { HomeStackParamList } from "../../navigations/HomeStackScreen";
import { formatDate } from "../../util/formatDate";
import MyText from "../MyTexts/MyText";

type NavigationProp = NativeStackNavigationProp<HomeStackParamList, "Account">;

interface Props {
  user: User;
}
const AccountCard = ({ user }: Props) => {
  const navigation = useNavigation<NavigationProp>();
  return (
    <TouchableOpacity
      style={tw`flex-row items-center gap-2 mt-2 bg-white p-4 rounded-md`}
      onPress={() => navigation.navigate("Account")}
    >
      <Image
        style={tw`w-20 h-20 rounded-full bg-grey-500 mr-2`}
        source={{ uri: user.photoUrl }}
      />
      <View>
        <MyText className="mt-2 text-sm">
          {user.isGuest ? "Guest User" : user.email}
        </MyText>
        <MyText className="text-grey-300 text-sm">
          Joined {formatDate(user.createdAt)}
        </MyText>
      </View>
    </TouchableOpacity>
  );
};

export default AccountCard;
