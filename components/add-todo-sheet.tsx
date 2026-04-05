import { forwardRef, useCallback, useMemo } from "react";
import { StyleSheet, Text, View, Button } from "react-native";
import { BottomSheetModal, BottomSheetView } from "@gorhom/bottom-sheet";

export interface AddTodoSheetRef {
  open: () => void;
  close: () => void;
}

interface AddTodoSheetProps {
  onSubmit?: (todo: string) => void;
}

const AddTodoSheet = forwardRef<BottomSheetModal, AddTodoSheetProps>(
  ({ onSubmit }, ref) => {
    const snapPoints = useMemo(() => ["40%", "70%"], []);

    const handleClose = useCallback(() => {
      if (ref && "current" in ref) {
        ref.current?.dismiss();
      }
    }, [ref]);

    return (
      <BottomSheetModal
        ref={ref}
        snapPoints={snapPoints}
        enablePanDownToClose
      >
        <BottomSheetView style={styles.container}>
          <Text style={styles.title}>할 일 추가</Text>
          <View style={styles.content}>
            <Text>여기에 입력 폼을 추가하세요</Text>
          </View>
          <Button title="닫기" onPress={handleClose} />
        </BottomSheetView>
      </BottomSheetModal>
    );
  }
);

AddTodoSheet.displayName = "AddTodoSheet";

export default AddTodoSheet;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
  },
  title: {
    fontSize: 18,
    fontWeight: "bold",
    textAlign: "center",
    marginBottom: 20,
  },
  content: {
    flex: 1,
    alignItems: "center",
  },
});
