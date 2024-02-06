import { useState,useEffect } from 'react';
import { StatusBar } from 'expo-status-bar';
import { 
Button, Image,
StyleSheet, Text, View
} from 'react-native';
import Face from './components/Face';

export default function App() {
    const [faceNumber, setFaceNumber] = useState(0)

    const beHappier = () => {
        if (faceNumber < 4) {
            setFaceNumber( oldFace => oldFace  + 1)
        }

    }
    const beSadder = () => {
        if (faceNumber > 0) {
            setFaceNumber( oldFace => oldFace -1)
        }
    }
    useEffect(() => {
        const timeout = setTimeout(() => {
            beSadder()
        }, 5000)
        return (() => clearTimeout(timeout))
    })
  return (
    <View style={styles.container}>
          <Text>Egbert the Emoji</Text>
          <Face whichFace={faceNumber} />
          <Button
              title='Click me'
              onPress={() => {beHappier() }}
          />
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
