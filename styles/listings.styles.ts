import Colors from "@/constants/Colors";
import { Dimensions, StyleSheet } from "react-native";

const IMG_HEIGHT = 300;
const { width } = Dimensions.get("window");

const listingsStyles = StyleSheet.create({
  listing: {
    padding: 16,
    gap: 10,
    marginVertical: 16,
  },
  image: {
    width: "100%",
    height: 300,
    borderRadius: 10,
  },
  imageIcon: {
    position: "absolute",
    right: 30,
    top: 30,
  },
  infoContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
  nameText: {
    fontSize: 14,
    fontFamily: "mon-semibold",
  },
  ratingContainer: {
    flexDirection: "row",
    alignItems: "center",
    gap: 4,
  },
  ratingText: {
    fontFamily: "mon-semibold",
  },
  normalText: {
    fontFamily: "mon",
  },
  bottomSheetContainer: {
    backgroundColor: Colors.grey,
  },
  absoluteButtonContainer: {
    position: "absolute",
    bottom: 12,
    width: "100%",
    alignItems: "center",
  },
  absoluteButton: {
    backgroundColor: Colors.dark,
    padding: 16,
    height: 50,
    flexDirection: "row",
    gap: 8,
    alignItems: "center",
    borderRadius: 30,
  },
  absoluteBtnText: {
    fontFamily: "mon-semibold",
    color: "#fff",
  },
  sheetContainer: {
    backgroundColor: "#fff",
    elevation: 4,
    shadowColor: "#000",
    shadowOpacity: 0.3,
    shadowRadius: 4,
    shadowOffset: {
      width: 1,
      height: 1,
    },
  },
  info: {
    textAlign: "center",
    fontFamily: "mon-semibold",
    fontSize: 16,
    marginTop: 4,
  },
});

export default listingsStyles;
