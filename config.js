const COLORS_v2 = {
  PRIMARY_COLOR: "#7C444F",
  SECONDARY_COLOR: "#9F5255",
  SECONDARY_COLOR_TRANSPARENT: "#9F525555",
  TERTIARY_COLOR: "#E16A54",
  QUATERNARY_COLOR: "#F39E60",
};

const COLORS_v1 = {
  PRIMARY_COLOR: "#441752",
  SECONDARY_COLOR: "#8174A0",
  TERTIARY_COLOR: "#A888B5",
  QUATERNARY_COLOR: "#EFB6C8",
};

export const COLORS = COLORS_v2;

export const CONFIG = {
  SCREEN: {
    OPTIONS: {
      headerStyle: {
        backgroundColor: COLORS.PRIMARY_COLOR,
      },
      headerTintColor: COLORS.QUATERNARY_COLOR,
      contentStyle: {
        backgroundColor: COLORS.PRIMARY_COLOR,
      },
      sceneStyle: {
        backgroundColor: COLORS.PRIMARY_COLOR,
      },
      drawerStyle: {
        backgroundColor: COLORS.PRIMARY_COLOR,
      },
      drawerActiveTintColor: COLORS.QUATERNARY_COLOR,
      drawerInactiveTintColor: COLORS.QUATERNARY_COLOR,
      drawerActiveBackgroundColor: COLORS.SECONDARY_COLOR,
    },
  },
};

export default CONFIG;
