import React from "react";
import {
  View,
  TextInput,
  Image,
  StyleSheet,
  ImageSourcePropType,
  StyleProp,
  ViewStyle,
} from "react-native";

interface Props {
  imageSource: ImageSourcePropType;
  imageSize: number;
  placeholder: string;
  inputFontStyle?: StyleProp<ViewStyle>;
  value: string;
  onChangeText: (text: string) => void;
  containerStyle?: StyleProp<ViewStyle>;
  showBorder?: boolean;
  borderWidth?: number;
  borderColor?: string;
  backgroundColor?: string;
  placeholderTextColor?: string;
  editable?: boolean;
  rightComponent?: React.ReactNode;
}

const ImageTextInput: React.FC<Props> = ({
  imageSource,
  imageSize,
  inputFontStyle = {},
  placeholder,
  value,
  onChangeText,
  containerStyle = {},
  showBorder = false,
  showImageBorder = false,
  borderColor = "gray",
  borderWidth = 0,
  backgroundColor = "transparent",
  placeholderTextColor = "rgba(0, 0, 0, 0.5)",
  editable = true,
  rightComponent,
}) => {
  return (
    <View
      style={[
        styles.container,
        showBorder && { borderWidth, borderColor },
        { backgroundColor, placeholderTextColor },
        containerStyle,
      ]}
    >
      <Image
        source={imageSource}
        style={[
          styles.image,
          showImageBorder && {
            borderRightWidh: borderWidth,
            borderRightColor: borderColor,
          },
          { width: imageSize, height: imageSize, borderRadius: imageSize / 2 },
        ]}
      />
      <TextInput
        style={[styles.input, inputFontStyle]}
        placeholder={placeholder}
        value={value}
        editable={editable}
        onChangeText={onChangeText}
      />
      {rightComponent && (
        <div style={styles.rightComponentContainer}>{rightComponent}</div>
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    alignItems: "center",
    borderRadius: 5,
  },
  image: {
    marginRight: 5,
    padding: 3,
    flex: 1,
  },
  input: {
    width: "100%",
    borderLeft: 0,
    lineHeight: 30,
  },
  rightComponentContainer: {
    width: 220,
  },
});

export default ImageTextInput;
