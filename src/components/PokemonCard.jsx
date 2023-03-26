import { View, Text, Image, StyleSheet, TouchableOpacity } from "react-native";
import React, { memo } from "react";
import { getPokemonByColorType } from "../utils/getColorByPokemonType";
import { useNavigation } from "@react-navigation/native";

const PokemonCard = ({ pokemon }) => {
  const navigation = useNavigation();
  const goToPokemon = () => {
    navigation.navigate("PokemonDetail", { id: pokemon.id });
  };

  const bgStyle = {
    backgroundColor: getPokemonByColorType(pokemon.type),
    ...styles.card,
  };

  return (
    <TouchableOpacity
      style={bgStyle}
      onPress={goToPokemon}
      pressDuration={0.05}
    >
      <View style={styles.all}>
        <View style={styles.title}>
          <Text style={styles.name}>
            {pokemon.name.charAt(0).toUpperCase() + pokemon.name.slice(1)}
          </Text>
          <Text style={styles.id}>#{`${pokemon.id}`.padStart(3, 0)}</Text>
        </View>
        <Image source={{ uri: pokemon.image }} style={styles.image} />
      </View>
    </TouchableOpacity>
  );
};

export default memo(PokemonCard);

const styles = StyleSheet.create({
  card: {
    flex: 1,
    width: 100,
    height: 90,
    margin: 8,
    borderRadius: 10,
    marginBottom: 10,
  },
  all: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    height: "100%",
  },
  title: {
    flexDirection: "column",
    marginLeft: 10,
  },
  image: {
    marginRight: 5,
    width: 75,
    height: 75,
    resizeMode: "contain",
  },
  name: {
    color: "#fff",
    fontWeight: "bold",
    fontSize: 15,
  },
  id: {
    color: "#f5f5f5",
    fontWeight: "bold",
    fontSize: 12,
  },
});
