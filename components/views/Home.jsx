import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';

const Home = () => {
    const styles = StyleSheet.create({
        container: {
          flex: 1,
          backgroundColor: '#fff',
          alignItems: 'center',
          justifyContent: 'center',
        },
      });
      
    return (
        <>
            <View style={styles.container}>
                <Text>View Home</Text>
                <StatusBar style="auto" />
            </View>
        </>
    );

    
};

export default Home;