import { styled } from "styled-components/native";
import { Octicons, MaterialIcons, Ionicons } from "@expo/vector-icons";

const getIcon = (name, props) => {
    let Icon = <Octicons name="location" {...props} />;

    switch (name) {
        case "address":
            Icon = <Octicons name="location" {...props} />;
            break;
        case "distance":
            Icon = <MaterialIcons name="directions-walk" {...props} />;
            break;
        case "menulist":
            Icon = <Ionicons name="restaurant" {...props} />;
            break;
    }

    return Icon;
};

export function InfoIcon({ name = "address", spaceSize = 20, size = 16, color = "#9d9d9d", ...props }) {
    const prop = { size: size, color: color, ...props };
    const Icon = getIcon(name, prop);
    return <Container size={spaceSize}>{Icon}</Container>;
}

const Container = styled.View`
    width: ${({ size }) => size}px;
    height: ${({ size }) => size}px;
    padding-right: 6px;
    align-items: center;
    justify-content: center;
`;
