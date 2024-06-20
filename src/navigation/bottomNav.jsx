import HomeScreen from '../ui/screens/home/homeScreen'
import RatingOverview from '../ui/screens/ratingOverview/ratingOverview'
import ProfileScreen from '../ui/screens/profile/profileScreen'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import NewRating from '../ui/screens/newRating/newRating'

const BottomTab = createBottomTabNavigator()

const BottomNav = () => {
  return (
      <BottomTab.Navigator screenOptions={ { headerShown: false } }>
        <BottomTab.Screen name="Home" component={ HomeScreen }/>
        <BottomTab.Screen name="New Rating" component={ NewRating }/>
        <BottomTab.Screen name="Rating Overview" component={ RatingOverview }/>
        <BottomTab.Screen name="Profile" component={ ProfileScreen }/>
      </BottomTab.Navigator>
  )
}

export default BottomNav