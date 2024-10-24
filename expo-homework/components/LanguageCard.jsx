import React from 'react';
import { Text, View, Image, StyleSheet } from 'react-native';

const ProgrammingLanguageCard = ({ languageName, experienceYears, imageURL: uri }) => (
  <View style={styles.container}>
    <Image source={{ uri }} style={styles.imagePL} />
    <Text style={styles.titleText}>{languageName}</Text>
    <Text style={styles.secondaryText}>
      {`Опыт изучения (в годAХXX): ${experienceYears}`}
    </Text>
  </View>
);

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#002e32',
    borderRadius: 25,
    alignItems: 'center',
    justifyContent: 'center',
    padding: 25,
    marginVertical: 10,
    marginHorizontal: 20,
  },
  imagePL: {
    width: 200,
    height: 200,
    marginBottom: 10,
    resizeMode: 'contain',
  },
  titleText: {
    fontSize: 25,
    fontWeight: 'bold',
    marginBottom: 5,
    color: '#FFFFFF',
  },
  secondaryText: {
    fontSize: 16,
    marginBottom: 15,
    color: '#FFFFFF',
  },
});

export default ProgrammingLanguageCard;
