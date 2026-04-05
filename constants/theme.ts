// 색상 팔레트
export const Palette = {
  main: "#7DAEF9",
  dark: "#1F1F1F",
  white: "#FFFFFF",
  lightBlue: "#DDEEFF",
  lime: "#ECFFD5",
  pink: "#FDE7F8",
  peach: "#FFEBE5",
  gray: "#EDEDED",
} as const;

// 테마별 색상
export const Colors = {
  light: {
    text: Palette.dark,
    textSecondary: "#687076",
    background: Palette.white,
    backgroundSecondary: Palette.lightBlue,
    tint: Palette.main,
    icon: "#687076",
    tabIconDefault: "#687076",
    tabIconSelected: Palette.main,
    border: Palette.gray,
    // 카테고리 색상
    category: {
      blue: Palette.lightBlue,
      green: Palette.lime,
      pink: Palette.pink,
      peach: Palette.peach,
    },
  },
  dark: {
    text: Palette.white,
    textSecondary: "#9BA1A6",
    background: Palette.dark,
    backgroundSecondary: "#2A2A2A",
    tint: Palette.main,
    icon: "#9BA1A6",
    tabIconDefault: "#9BA1A6",
    tabIconSelected: Palette.main,
    border: "#3A3A3A",
    category: {
      blue: "#2A3A4A",
      green: "#2A3A2A",
      pink: "#3A2A3A",
      peach: "#3A2A2A",
    },
  },
} as const;

// Pretendard 폰트 패밀리
export const Fonts = {
  regular: "Pretendard-Regular",
  medium: "Pretendard-Medium",
  semiBold: "Pretendard-SemiBold",
  bold: "Pretendard-Bold",
} as const;

// 타이포그래피 스타일
export const Typography = {
  title1: {
    bold: {
      fontFamily: Fonts.bold,
      fontSize: 24,
      lineHeight: 32,
    },
    semiBold: {
      fontFamily: Fonts.semiBold,
      fontSize: 24,
      lineHeight: 32,
    },
  },
  title2: {
    medium: {
      fontFamily: Fonts.medium,
      fontSize: 20,
      lineHeight: 28,
    },
    regular: {
      fontFamily: Fonts.regular,
      fontSize: 20,
      lineHeight: 28,
    },
  },
  body: {
    medium: {
      fontFamily: Fonts.medium,
      fontSize: 16,
      lineHeight: 24,
    },
    regular: {
      fontFamily: Fonts.regular,
      fontSize: 16,
      lineHeight: 24,
    },
  },
  caption: {
    medium: {
      fontFamily: Fonts.medium,
      fontSize: 14,
      lineHeight: 20,
    },
    regular: {
      fontFamily: Fonts.regular,
      fontSize: 14,
      lineHeight: 20,
    },
  },
} as const;

// 간격
export const Spacing = {
  xs: 4,
  sm: 8,
  md: 16,
  lg: 24,
  xl: 32,
} as const;

// 모서리 둥글기
export const BorderRadius = {
  sm: 4,
  md: 8,
  lg: 16,
  full: 9999,
} as const;
