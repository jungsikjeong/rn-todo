import AddTodoSheet from "@/components/add-todo-sheet";
import CategoryList from "@/components/category-list";
import Header from "@/components/header";
import TodaySection from "@/components/today-section";
import { Colors, Spacing } from "@/constants/theme";
import { useAddTodoSheet } from "@/hooks/use-add-todo-sheet";
import { format } from "date-fns";
import { ko } from "date-fns/locale";
import { StyleSheet, Text, TouchableOpacity } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

const CATEGORIES = [
  { id: 1, emoji: "🐶", label: "담비 산책", color: "#A8C8F9" },
  { id: 2, emoji: "⚽", label: "다시보기", color: "#C8F9A8" },
  { id: 3, emoji: "💗", label: "데이트", color: "#F9A8D8" },
  { id: 4, emoji: "📘", label: "토익 공부", color: "#A8D8F9" },
  { id: 5, emoji: "🐚", label: "다꾸", color: "#F9E8A8" },
];

export default function HomeScreen() {
  const { ref: addTodoSheetRef, open: openAddTodoSheet } = useAddTodoSheet();

  return (
    <SafeAreaView style={styles.container}>
      <Header title="할 일 리스트" />

      <CategoryList categories={CATEGORIES} />

      <TodaySection date={format(new Date(), "MM.dd(EEE)", { locale: ko })} />

      {/* 플로팅 버튼 */}
      <TouchableOpacity style={styles.fab} onPress={openAddTodoSheet}>
        <Text style={styles.fabText}>+</Text>
      </TouchableOpacity>

      <AddTodoSheet ref={addTodoSheetRef} />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Colors.light.background,
    paddingHorizontal: Spacing.lg,
  },
  fab: {
    position: "absolute",
    bottom: 30,
    right: 20,
    width: 56,
    height: 56,
    borderRadius: 28,
    backgroundColor: Colors.light.tint,
    justifyContent: "center",
    alignItems: "center",
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.25,
    shadowRadius: 4,
    elevation: 5,
  },
  fabText: {
    fontSize: 28,
    color: "#fff",
    fontWeight: "bold",
  },
});
