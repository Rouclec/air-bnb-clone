import { View, Text, StyleSheet } from "react-native";
import React, { FC, memo } from "react";
import { ListingGeo } from "@/interfaces";
import { Marker, PROVIDER_GOOGLE } from "react-native-maps";
import MapView from "react-native-map-clustering";
import { mapStyles as styles } from "@/styles";
import { defaultStyles } from "@/constants/Styles";
import { useRouter } from "expo-router";

interface Props {
  listing: ListingGeo;
}

const API_KEY = process.env.MAP_API_KEY;

const Map: FC<Props> = memo(({ listing }) => {
  const router = useRouter();

  const initialRegion = {
    latitude: 52.52,
    longitude: 13.405,
    latitudeDelta: 0.0922,
    longitudeDelta: 0.0421,
  };

  const onMarkerSelected = (event: any) => {
    router.push(`/listing/${event.properties.id}`);
  };

  const renderCluster = (cluster: any) => {
    const { id, geometry, onPress, properties } = cluster;
    const points = properties?.point_count;

    return (
      <Marker
        key={`cluster-${id}
      `}
        coordinate={{
          longitude: geometry?.coordinates[0],
          latitude: geometry?.coordinates[1],
        }}
        onPress={onPress}
      >
        <View style={styles.marker}>
          <Text style={styles.customMarkerText}>{points}</Text>
        </View>
      </Marker>
    );
  };

  return (
    <View style={defaultStyles.container}>
      {/* <MapView
        style={StyleSheet.absoluteFill}
        showsUserLocation
        showsMyLocationButton
        provider={PROVIDER_GOOGLE}
        initialRegion={initialRegion}
        animationEnabled={false}
        clusterColor="#fff"
        clusterTextColor="#000"
        clusterFontFamily="mon-semibold"
        renderCluster={renderCluster}
      >
        {listing.features.map((item, index) => {
          return (
            <Marker
              key={item.properties.id}
              coordinate={{
                latitude: +item.properties.latitude,
                longitude: +item.properties.longitude,
              }}
              onPress={() => onMarkerSelected(item)}
            >
              <View style={styles.marker}>
                <Text style={styles.markerText}>${item.properties.price}</Text>
              </View>
            </Marker>
          );
        })}
      </MapView> */}
    </View>
  );
});

export default Map;
