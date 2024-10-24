import React, { useState } from 'react';
import { StatusBar } from 'expo-status-bar';
import { View, StyleSheet, FlatList } from 'react-native';
import ProgrammingLanguageCard from './components/LanguageCard';
import { programmingLangList } from './src/data/programmingLang';

export default function App() {
  const [isRefreshing, setIsRefreshing] = useState(false);

  const handleRefresh = () => {
    setIsRefreshing(true);
    setTimeout(() => {
      setIsRefreshing(false);
    }, 1000);
  };

  return (
    <View style={styleApp.containerApp}>
      <FlatList
        data={programmingLangList}
        renderItem={({ item }) => (
          <ProgrammingLanguageCard
            imageURL={item.imageURL}
            languageName={item.name}
            experienceYears={item.experienceYears}
          />
        )}
        keyExtractor={(item) => item.id.toString()}
        onRefresh={handleRefresh}
        refreshing={isRefreshing}
        showsVerticalScrollIndicator={false} 
      />
      <StatusBar style="auto" />
    </View>
  );
}

const styleApp = StyleSheet.create({
  containerApp: {
    flex: 1,
    backgroundColor: '#1D0032',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
