import {
  View,
  Text,
  FlatList,
  ListRenderItem,
  TouchableOpacity,
  Image,
} from "react-native";
import React, { FC, useEffect, useRef, useState } from "react";
import { listingsStyles as styles } from "@/styles";
import { defaultStyles } from "@/constants/Styles";
import { Link } from "expo-router";
import { Listing } from "@/interfaces";
import { Ionicons } from "@expo/vector-icons";
import Animated, { FadeInRight, FadeOutLeft } from "react-native-reanimated";
import {
  BottomSheetFlatList,
  BottomSheetFlatListMethods,
} from "@gorhom/bottom-sheet";

interface Props {
  listings: any[];
  category: string;
  refresh: number;
}
const Listings: FC<Props> = ({ listings, category, refresh }) => {
  const [loading, setLoading] = useState(false);
  const listRef = useRef<BottomSheetFlatListMethods>(null);

  useEffect(() => {
    if (refresh) {
      listRef.current?.scrollToOffset({ offset: 0, animated: true });
    }
  }, [refresh]);

  useEffect(() => {
    setLoading(true);

    setTimeout(() => {
      setLoading(false);
    }, 200);
  }, [category]);

  const renderRow: ListRenderItem<Listing> = ({ item }) => (
    <Link href={`/listing/${item.id}`} asChild>
      <TouchableOpacity>
        <Animated.View
          style={styles.listing}
          entering={FadeInRight}
          exiting={FadeOutLeft}
        >
          <Image source={{ uri: item.medium_url }} style={styles.image} />
          <TouchableOpacity style={styles.imageIcon}>
            <Ionicons name="heart-outline" size={24} color={"#000"} />
          </TouchableOpacity>

          <View style={styles.infoContainer}>
            <Text style={styles.nameText}>{item.name}</Text>
            <View style={styles.ratingContainer}>
              <Ionicons name="star" size={16} />
              <Text style={styles.ratingText}>
                {item.review_scores_rating / 20}
              </Text>
            </View>
          </View>

          <Text style={styles.normalText}>{item.room_type}</Text>

          <View style={styles.ratingContainer}>
            <Text style={styles.ratingText}>$ {item.price}</Text>
            <Text style={styles.normalText}>per night</Text>
          </View>
        </Animated.View>
      </TouchableOpacity>
    </Link>
  );

  return (
    <View style={defaultStyles.container}>
      <BottomSheetFlatList
        data={loading ? [] : listings.filter((item) => !!item.medium_url)}
        ref={listRef}
        renderItem={renderRow}
        ListHeaderComponent={
          <Text style={styles.info}>{listings.length} homes</Text>
        }
      />
    </View>
  );
};

export default Listings;
