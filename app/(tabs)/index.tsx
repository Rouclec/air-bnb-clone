import { SafeAreaView } from "react-native";
import React, { useMemo, useState } from "react";
import { Stack } from "expo-router";
import { exploreStyles as styles } from "@/styles";
import {
  ExploreHeader,
  Listings,
  ListingsBottomSheet,
  Map,
} from "@/components";

import listingsData from "@/assets/data/air-bnb-listings.json";
import listingsDataGeo from "@/assets/data/airbnb-listings.geo.json";
import { Listing, ListingGeo } from "@/interfaces";

const Page = () => {
  const [category, setCategory] = useState("Tiny homes");
  const items = useMemo(() => listingsData as Listing[], []);
  const geoItems = useMemo(() => listingsDataGeo as ListingGeo, []);

  const onDataChanged = (category: string) => {
    //TODO: change data when categories is changed
    setCategory(category);
  };
  return (
    <SafeAreaView style={styles.container}>
      <Stack.Screen
        options={{
          header: () => <ExploreHeader onCategoryChanged={onDataChanged} />,
        }}
      />
      {/* <Listings listings={items} category={category} /> */}
      <Map listing={geoItems} />
      <ListingsBottomSheet listings={items} category={category} />
    </SafeAreaView>
  );
};

export default Page;
