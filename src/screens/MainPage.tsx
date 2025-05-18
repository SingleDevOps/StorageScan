import { View, Button, StyleSheet } from 'react-native';



// Define MainPage props with typed navigation
type MainPageProps = {
  navigation: {
    navigate: any,
  };
};

const MainPage = ({ navigation }: MainPageProps) => {
  return (
    <View style={styles.container}>
      <Button
        title="扫描"
        onPress={() => navigation.navigate('Scan')}
      />
      <Button
        title="查看库存"
        onPress={() => navigation.navigate('Inventory')}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    gap: 20,
  },
});

export default MainPage;
