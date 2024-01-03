// import { EvilIcons, MaterialIcons } from "@expo/vector-icons";
// import React, { useState } from "react";
// import { Searchbar } from "react-native-paper";
// import tw from "../lib/tailwind";
// import { grey0, grey500 } from "../theme/style";

// interface Props {
//   searchText: string;
//   onChange: (text: string) => void;
//   placeholder: string;
// }

// const SearchBar = ({ searchText, onChange, placeholder }: Props) => {
//   const [text, setText] = useState<string>(searchText || "");

//   const handleChange = (newText: string) => {
//     setText(newText);
//     if (onChange) onChange(newText);
//   };

//   return (
//     <Searchbar
//       placeholder={placeholder}
//       icon={() => <EvilIcons name="search" size={24} color={grey500} />}
//       clearIcon={() => <MaterialIcons name="clear" size={20} color={grey500} />}
//       onChangeText={(newText) => handleChange(newText)}
//       value={text}
//       placeholderTextColor={grey500}
//       style={tw`bg-grey-100`} // text-grey-0 doesn't work
//       theme={{ colors: { text: grey0 } }}
//     />
//   );
// };

// export default SearchBar;
