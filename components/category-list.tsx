import { Colors, Spacing } from "@/constants/theme";
import { ScrollView, StyleSheet, Text, View } from "react-native";

export interface Category {
  id: number;
  emoji: string;
  label: string;
  color: string;
}

interface CategoryListProps {
  categories: Category[];
}

export default function CategoryList({ categories }: CategoryListProps) {
  return (
    <ScrollView
      horizontal
      showsHorizontalScrollIndicator={false}
      style={styles.scrollView}
      contentContainerStyle={styles.categoryList}
    >
      {categories.map((cat) => (
        <View key={cat.id} style={styles.categoryItem}>
          <View style={[styles.categoryIcon, { backgroundColor: cat.color }]}>
            <Text style={styles.categoryEmoji}>{cat.emoji}</Text>
          </View>
          <Text style={styles.categoryLabel}>{cat.label}</Text>
        </View>
      ))}
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  scrollView: {
    flexGrow: 0,
  },
  categoryList: {
    gap: Spacing.md,
  },
  categoryItem: {
    alignItems: "center",
    gap: Spacing.xs,
  },
  categoryIcon: {
    width: 64,
    height: 64,
    borderRadius: 20,
    justifyContent: "center",
    alignItems: "center",
  },
  categoryEmoji: {
    fontSize: 28,
  },
  categoryLabel: {
    fontSize: 13,
    color: Colors.light.text,
  },
});
