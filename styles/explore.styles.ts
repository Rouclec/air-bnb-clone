import Colors from "@/constants/Colors";
import { Platform, StyleSheet } from "react-native";

const exploreStyles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: -80,
  },
  headerContainer: {
    backgroundColor: "#fff",
    paddingBottom: Platform.OS === "ios" ? -20 : 10,
  },
  actionRow: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    paddingHorizontal: 24,
    paddingBottom: 16,
    gap: 10,
  },
  filterBtn: {
    padding: 10,
    borderWidth: 1,
    borderColor: Colors.grey,
    borderRadius: 24,
  },
  searchButton: {
    flexDirection: "row",
    alignItems: "center",
    gap: 10,
    borderColor: "#c2c2c2",
    borderWidth: StyleSheet.hairlineWidth,
    flex: 1,
    padding: 14,
    borderRadius: 30,
    backgroundColor: "#fff",
    elevation: 2,
    shadowColor: "#000",
    shadowOpacity: 0.12,
    shadowRadius: 8,
    shadowOffset: {
      width: 1,
      height: 1,
    },
  },
  searchTitleText: {
    fontFamily: "mon-bold",
  },
  searchSubtitleText: {
    fontFamily: "mon",
    color: Colors.grey,
  },
  scrollContainer: {
    alignItems: "center",
    gap: 30,
    paddingHorizontal: 16,
  },
  categoryText: {
    fontSize: 14,
    fontFamily: "mon-semibold",
    color: Colors.grey,
  },
  categoryBtn: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    paddingBottom: 8,
  },
  categoryActiveText: {
    fontSize: 14,
    fontFamily: "mon-semibold",
    color: "#000",
  },
  categoryActiveBtn: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    paddingBottom: 8,
    borderBottomColor: "#000",
    borderBottomWidth: 2,
  },
});

export default exploreStyles;
