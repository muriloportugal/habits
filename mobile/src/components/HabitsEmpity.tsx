import { useNavigation } from "@react-navigation/native";
import { Text } from "react-native";

export function HabitsEmpity(){
  const {navigate} = useNavigation();
  return(
    <Text
      className="text-zinc-400 text-base"
    >
      Você ainda não esta monitorando nenhum hábito {' '}
      <Text
        className="text-violet-400 text-base underlin active:text-violet-500"
        onPress={()=>navigate('new')}
      >
        comece cadastrando um.
      </Text>
    </Text>
  )
}