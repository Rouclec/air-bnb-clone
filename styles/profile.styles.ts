import Colors from "@/constants/Colors";
import { StyleSheet } from "react-native";

const profileStyles = StyleSheet.create({
  headerContainer: {
    flexDirection: "row",
    padding: 24,
    alignItems: "center",
    justifyContent: "space-between",
  },
  header: {
    fontFamily: "mon-bold",
    fontSize: 24,
  },
  buttonContainer: {
    width: "100%",
    // backgroundColor: "red",
    alignItems: "center",
  },
  button: {
    backgroundColor: Colors.dark,
    width: 100,
    marginHorizontal: "auto",
  },
  card: {
    backgroundColor: "#fff",
    padding: 24,
    borderRadius: 16,
    marginHorizontal: 24,
    marginTop: 24,
    elevation: 2,
    shadowColor: "#000",
    shadowOpacity: 0.1,
    shadowRadius: 6,
    shadowOffset: {
      width: 1,
      height: 2,
    },
    alignItems: "center",
    gap: 14,
    marginBottom: 24,
  },
  avatar: {
    width: 100,
    height: 100,
    borderRadius: 50,
    backgroundColor: Colors.grey,
  },
  editContainer: {
    flexDirection: "row",
    gap: 6,
  },
  name: {
    fontSize: 22,
    fontFamily: "mon-semibold",
  },
  editRow: {
    height: 50,
    flex: 1,
    flexDirection: "row",
    alignItems: "center",
    gap: 8,
    justifyContent: "center",
  },
});

export default profileStyles;
