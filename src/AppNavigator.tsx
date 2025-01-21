import { createNativeStackNavigator } from "@react-navigation/native-stack";
import StartGameScreen from "./screens/StartGameScreen/StartGameScreen";
import GameScreen from "./screens/GameScreen";
import GameOverScreen from "./screens/GameOverScreen";

type RootStackParamList = {
    StartGame: undefined;
    GameScreen: { theNumber: number };
    GameOver: { rounds: number; theNumber: number };
};

const stack = createNativeStackNavigator<RootStackParamList>();

const AppNavigator = () => {
    return (
        <stack.Navigator screenOptions={{headerShown:false}} initialRouteName="StartGame">
            <stack.Screen name="StartGame" component={StartGameScreen} />
            <stack.Screen name="GameScreen" component={GameScreen} />
            <stack.Screen name="GameOver" component={GameOverScreen} />
        </stack.Navigator>
    );
}

export default AppNavigator;