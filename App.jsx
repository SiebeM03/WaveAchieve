import { NavigationContainer } from '@react-navigation/native'
import BottomNav from './src/navigation/bottomNav'

const App = () => {
  return (
      <NavigationContainer>
        <BottomNav/>
      </NavigationContainer>
  );
}

export default App