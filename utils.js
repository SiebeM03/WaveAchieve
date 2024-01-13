import { useEffect } from 'react'

export const handleStackReset = (navigation, screenName) => {
  const isFocused = navigation.isFocused() // Check if the screen is focused

  useEffect(() => {
    const unsubscribe = navigation.addListener('tabPress', (e) => {
      // Reset the stack if the tab is pressed and the screen is focused
      if (isFocused) {
        navigation.navigate(screenName);
      }
      return unsubscribe
    }, [navigation, isFocused])
  })
};

export const formatInterval = (intervalString) => {
  const [hours, minutes, seconds] = intervalString.split(':')

  if (parseInt(hours, 10) > 0) {
    return intervalString
  } else {
    return `${ parseInt(minutes, 10) }'${ parseInt(seconds, 10) }"`
  }
}