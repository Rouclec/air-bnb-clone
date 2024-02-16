import { View, Text, Platform } from "react-native";
import React, { FC, useMemo, useRef, useState } from "react";
import { Listing } from "@/interfaces";
import BottomSheet from "@gorhom/bottom-sheet";
import { defaultStyles } from "@/constants/Styles";
import Listings from "./Listings";
import { listingsStyles as styles } from "@/styles";
import { TouchableOpacity } from "react-native-gesture-handler";
import { Ionicons } from "@expo/vector-icons";

interface Props {
  listings: Listing[];
  category: string;
}

const ListingsBottomSheet: FC<Props> = ({ listings, category }) => {
  const bottomSheetRef = useRef<BottomSheet>(null);

  const [refresh, setRefresh] = useState(0);

  const snapPoints = useMemo(
    () => [Platform.OS === "ios" ? "10%" : "6%", "100%"],
    []
  );

  const showMap = () => {
    bottomSheetRef.current?.collapse();
    setRefresh(refresh + 1);
  };

  return (
    <BottomSheet
      ref={bottomSheetRef}
      snapPoints={snapPoints}
      handleIndicatorStyle={styles.bottomSheetContainer}
      index={1}
      enablePanDownToClose={false}
      style={styles.sheetContainer}
    >
      <View style={defaultStyles.container}>
        <Listings listings={listings} category={category} refresh={refresh} />
        <View style={styles.absoluteButtonContainer}>
          <TouchableOpacity onPress={showMap} style={styles.absoluteButton}>
            <Text style={styles.absoluteBtnText}>Map</Text>
            <Ionicons name="map" size={20} color={"white"} />
          </TouchableOpacity>
        </View>
      </View>
    </BottomSheet>
  );
};

export default ListingsBottomSheet;
