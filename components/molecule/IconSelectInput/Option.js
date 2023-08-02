import { Animated } from "react-native";
import styled from "styled-components/native";

export const Option = ({ name, size, onPress, isSelected = false, tintable = true, ...props }) => {
    const animated = new Animated.Value(1);

    const fadeIn = () => {
        Animated.timing(animated, {
            toValue: 0.3,
            duration: 100,
            useNativeDriver: true,
        }).start();
    };

    const fadeOut = () => {
        Animated.timing(animated, {
            toValue: 1,
            duration: 200,
            useNativeDriver: true,
        }).start();
    };

    return (
        <Animated.View style={{ opacity: animated }}>
            <Container
                size={size}
                onPressIn={fadeIn}
                onPressOut={fadeOut}
                onPress={onPress}
                isSelected={isSelected}
                activeOpacity={0.8}
                {...props}
            >
                <>
                    <Icon
                        size={size}
                        source={require("assets/dollarCoin.png")}
                        style={{ tintColor: tintable && isSelected ? "#FFAF42" : "black" }}
                    />
                    <NameText size={size}>{name}</NameText>
                </>
            </Container>
        </Animated.View>
    );
};

const Container = styled.Pressable`
    width: ${({ size }) => size + 2}px;
    align-items: center;
    justify-content: space-between;
`;

const Icon = styled.Image`
    width: ${({ size }) => size}px;
    height: ${({ size }) => size}px;
`;

const NameText = styled.Text`
    padding-top: 5px;
    padding-bottom: 3px;
    width: ${({ size }) => size}px;
    font-size: 12px;
    text-align: center;
`;
