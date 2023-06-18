import { StyleSheet, TouchableOpacity } from "react-native";

export function Button(props) {
    return <TempButton style={styles.TempButton} {...props} />;
}

const styles = StyleSheet.create({
    TempButton: {
        borderWidth: 2,
        borderColor: "#000000",
        borderRadius: 8,
    },
});
