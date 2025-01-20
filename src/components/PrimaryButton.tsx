import { View, Text} from "react-native";

type PrimaryButtonProps = {
    children: React.ReactNode
}
const PrimaryButton = ({children}:PrimaryButtonProps) => {
    return (
        <View>
            <Text>{children}</Text>
        </View>
    );
}

export default PrimaryButton;