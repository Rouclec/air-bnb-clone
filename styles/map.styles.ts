import { StyleSheet } from "react-native";

const mapStyles = StyleSheet.create({
  marker: {
    backgroundColor: "#fff",
    borderRadius: 12,
    alignItems: "center",
    justifyContent: "center",
    padding: 6,
    elevation: 5,
    shadowColor: "#000",
    shadowOpacity: 0.5,
    shadowRadius: 6,
    shadowOffset: {
      width: 1,
      height: 10,
    },
  },
  markerText: {
    fontSize: 14,
    fontFamily: "mon-semibold",
  },
  customMarkerText: {
    color: '#000',
    textAlign: 'center',
    fontFamily: 'mon-semibold'
  }
});

export default mapStyles;
