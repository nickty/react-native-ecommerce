import React from "react";
import { StyleSheet, View } from "react-native";
import { FlatList, Text } from "react-native-gesture-handler";
import { useSelector } from "react-redux";

const OrderScreen = () => {
  const orders = useSelector((state) => state.orders.orders);
  return (
    <FlatList
      data={orders}
      keyExtractor={(item) => item.id}
      renderItem={(itemData) => <Text>{itemData.item.totalAmount}</Text>}
    />
  );
};

const styles = StyleSheet.create({});
export default OrderScreen;
