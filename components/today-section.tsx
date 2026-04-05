import { Colors, Spacing, Typography } from "@/constants/theme";
import { StyleSheet, Text, View } from "react-native";

interface TodaySectionProps {
  date: string;
}

export default function TodaySection({ date }: TodaySectionProps) {
  return (
    <View style={styles.container}>
      <Text style={Typography.title2.medium}>오늘</Text>
      <Text style={styles.date}>{date}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    alignItems: "baseline",
    gap: Spacing.xs,
    paddingTop: Spacing.xl,
  },
  date: {
    fontSize: 14,
    color: Colors.light.textSecondary,
  },
});
