import { Text } from 'react-native';

export default function Error({ error }) {
  return (
      <Text className="leading-4 p-2 text-red-700 font-bold">Error! { error.message }</Text>
  );
};
