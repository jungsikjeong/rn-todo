import { Colors, Typography } from "@/constants/theme";
import { Ionicons } from "@expo/vector-icons";
import { StyleSheet, Text, View } from "react-native";

interface HeaderProps {
  title: string;
  showSettings?: boolean;
}

export default function Header({ title, showSettings = true }: HeaderProps) {
  return (
    <View style={styles.header}>
      <Text style={Typography.title1.bold}>{title}</Text>
      {showSettings && (
        <Ionicons
          name="settings-outline"
          size={24}
          color={Colors.light.textSecondary}
        />
      )}
    </View>
  );
}

const styles = StyleSheet.create({
  header: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    paddingHorizontal: 20,
    paddingVertical: 16,
  },
});
