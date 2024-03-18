import React, { useState } from "react";
import {
  Modal,
  View,
  Text,
  TouchableOpacity,
  StyleSheet,
  Image,
} from "react-native";
import ImageTextInput from "./components/ImageTextInput"; // 导入新的图像输入框组件

interface Props {
  visible: boolean;
  onClose: () => void;
  theme: string;
  modalStyle?: any;
  atomImg: string;
  arrowImg: string;
  asmImg: string;
  handleSubmit: Function;
  maxAmount: boolean;
  estimatedTime: boolean;
}

const DepositAtomModal: React.FC<Props> = ({
  handleSubmit,
  visible,
  onClose,
  theme,
  modalStyle,
  atomImg,
  arrowImg,
  osmImg,
  maxAmount,
  estimatedTime,
}) => {
  const [currencyFrom, setCurrencyFrom] = useState<string>("");
  const [currencyTo, setCurrencyTo] = useState<string>("");
  const [amount, setAmount] = useState<string>("");
  const rightEdit = (
    <TouchableOpacity style={styles.rightEdit}>
      <Text style={{ color: "#667586" }}>✏</Text>
    </TouchableOpacity>
  );
  const rightCal = (
    <View style={{ width: 150 }}>
      <Text
        style={
          (styles.calResultText,
          { color: theme === "dark" ? "white" : "#2b3138" })
        }
      >
        ATOM <Text style={{ fontSize: 10, color: "#667586" }}> ≈ $1013 </Text>
      </Text>
    </View>
  );

  return (
    <Modal
      visible={visible}
      animationType="slide"
      transparent={true}
      onRequestClose={onClose}
      style={{ height: "100%" }}
    >
      <View style={[styles.modalContainer, modalStyle]}>
        <View
          style={[
            styles.modalContent,
            { backgroundColor: theme === "dark" ? "#202428" : "white" },
          ]}
        >
          <Text
            style={[
              styles.modalTitle,
              { color: theme === "dark" ? "#EDF2F9" : "#2B3138" },
            ]}
          >
            Deposit Atom
          </Text>
          {/* select part */}
          <View style={[styles.section]}>
            <View style={styles.selectContainer}>
              <Text
                style={[
                  styles.selectTitle,
                  { color: theme === "dark" ? "#647383" : "#667486" },
                ]}
              >
                From Cosmos Hub
              </Text>
              <ImageTextInput
                imageSource={atomImg}
                imageSize={0}
                placeholder="sc121xvh3231cj123"
                value={currencyFrom}
                onChangeText={setCurrencyFrom}
                inputFontStyle={{ color: "#647383" }}
                backgroundColor={theme === "dark" ? "#141417" : "#EDF2F9"}
                placeholderTextColor={theme === "dark" ? "#647383" : "#667486"}
              />
            </View>
            <Image imageSource={arrowImg} style={styles.arrowIcon} />
            <View style={styles.selectContainer}>
              <Text
                style={[
                  styles.selectTitle,
                  { color: theme === "dark" ? "#647383" : "#667486" },
                ]}
              >
                To Osmosis
              </Text>
              <ImageTextInput
                imageSource={osmImg}
                imageSize={0}
                placeholder="njda3xcm73rff"
                value={currencyTo}
                onChangeText={setCurrencyTo}
                backgroundColor={theme === "dark" ? "#141417" : "#EDF2F9"}
                inputFontStyle={{ color: "#647383" }}
                placeholderTextColor={theme === "dark" ? "#647383" : "#667486"}
                rightComponent={rightEdit}
              />
            </View>
          </View>
          {/* input part */}
          <View>
            <View style={styles.titleWrapper}>
              <Text
                style={[
                  styles.sectionTitle,
                  { color: theme === "dark" ? "#647383" : "#2b3138" },
                ]}
              >
                Select amount:
              </Text>
              <Text
                style={[
                  styles.availableText,
                  { color: theme === "dark" ? "#647383" : "#2b3138" },
                ]}
              >
                Available: <Text style={{ fontWeight: "bold" }}>{2} ATOM</Text>
              </Text>
            </View>
            <ImageTextInput
              imageSource={atomImg}
              imageSize={24}
              placeholder="2"
              value={amount}
              onChangeText={setAmount}
              showBorder={true}
              borderWidth={1}
              borderColor={"#d8dde5"}
              inputFontStyle={{
                fontSize: 20,
                color: theme === "dark" ? "white" : "#2b3138",
                fontWeight: "bold",
              }}
              containerStyle={{ height: 60 }}
              borderRadius={5}
              rightComponent={rightCal}
              placeholderTextColor={theme === "dark" ? "#647383" : "#2b3138"}
            />
            {/**qucik select part */}
            <View style={styles.quickSection}>
              <TouchableOpacity
                style={[
                  styles.quickButton,
                  { backgroundColor: theme === "dark" ? "#2b3138" : "#EDF2F9" },
                ]}
              >
                <Text style={styles.quickText}>Max</Text>
              </TouchableOpacity>
              <TouchableOpacity
                style={[
                  styles.quickButton,
                  { backgroundColor: theme === "dark" ? "#2b3138" : "#EDF2F9" },
                ]}
              >
                <Text style={styles.quickText}>1/2</Text>
              </TouchableOpacity>
              <TouchableOpacity
                style={[
                  styles.quickButton,
                  { backgroundColor: theme === "dark" ? "#2b3138" : "#EDF2F9" },
                ]}
              >
                <Text style={styles.quickText}>1/3</Text>
              </TouchableOpacity>
            </View>
          </View>
          {/* submit part */}
          <View
            style={[
              styles.estimatedTimeContainer,
              { backgroundColor: theme === "dark" ? "#141417" : "#EDF2F9" },
            ]}
          >
            <Text
              style={[
                styles.estimatedTimeIcon,
                { color: theme === "dark" ? "white" : "black" },
              ]}
            >
              ⏱️
            </Text>
            <Text
              style={[
                styles.estimatedTime,
                { color: theme === "dark" ? "#b6b8b0" : "#7c8289" },
              ]}
            >
              Estimated time:{" "}
              <Text style={{ color: theme === "dark" ? "white" : "black" }}>
                {20} seconds
              </Text>
            </Text>
          </View>
          <TouchableOpacity
            style={[
              styles.button,
              { backgroundColor: theme === "dark" ? "#EDF2F9" : "#2b3138" },
            ]}
            onPress={handleSubmit}
          >
            <Text
              style={[
                styles.transferText,
                { color: theme === "dark" ? "black" : "white" },
              ]}
            >
              Transfer
            </Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={[styles.button, { backgroundColor: "transparent" }]}
            onPress={onClose}
          >
            <Text style={styles.cancelText}>Cancel</Text>
          </TouchableOpacity>
        </View>
      </View>
    </Modal>
  );
};

const styles = StyleSheet.create({
  modalContainer: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "rgba(0, 0, 0, 0.5)",
  },
  modalContent: {
    width: "95%",
    height: "auto",
    padding: 20,
    borderRadius: 10,
  },
  modalTitle: {
    fontSize: 18,
    fontWeight: "bold",
    marginBottom: 30,
  },
  section: {
    flexDirection: "row",
    alignItems: "center",
    marginBottom: 20,
  },
  selectContainer: {
    flex: 1,
  },
  selectTitle: {
    fontSize: 14,
    color: "#2b3138",
    marginBottom: 5,
  },
  titleWrapper: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    marginBottom: 10,
  },
  sectionWithBorder: {
    borderColor: "gray",
    borderWidth: 1,
    borderRadius: 5,
  },
  sectionTitle: {
    marginRight: 10,
    fontSize: 16,
    fontWeight: "bold",
  },
  arrowIcon: {
    width: 24,
    height: 24,
    marginHorizontal: 10,
  },
  availableText: {
    fontSize: 14,
    marginLeft: 10,
  },
  calResultText: {
    fontSize: 15,
    fontWeight: "bold",
    color: "#2b318",
    marginRight: 5,
  },
  rightEdit: {
    flexDrection: "row",
    justifyContent: "flex-end",
    alignItems: "center",
    width: 50,
  },
  quickSection: {
    flexDirection: "row",
    justifyContent: "flex-end",
    marginBottom: 20,
    marginTop: 10,
  },
  quickButton: {
    marginLeft: 5,
    justifyContent: "center",
    alignItems: "center",
    height: 20,
    width: 50,
  },
  quickText: {
    fontSize: 10,
    color: "#657384",
  },
  estimatedTimeContainer: {
    backgroundColor: "#141418",
    flexDirection: "row",
    alignItems: "center",
    height: 35,
    borderRadius: 5,
    marginBottom: 10,
  },
  estimatedTimeIcon: {
    fontSize: 16,
    marginRight: 5,
    marginLeft: 5,
  },
  estimatedTime: {
    fontSize: 14,
    lineHeight: 25,
  },
  button: {
    borderRadius: 5,
    alignItems: "center",
    justifyContent: "center",
    height: 60,
    marginBottom: 10,
  },
  transferText: {
    fontSize: 18,
    color: "black",
  },
  cancelText: {
    color: "#647283",
    fontSize: 12,
  },
});

export default DepositAtomModal;
