import theme from "./colors";

export default styleObject = {
  buttonsContainerRow: {
    borderColor: "#ddd",
    borderWidth: 0,
    padding: 20,
    flexDirection: "row",
    justifyContent: "space-between",
    paddingLeft: 50,
    paddingRight: 50,
  },
  buttonsContainerColumn: {
    borderColor: "#ddd",
    borderWidth: 5,
    padding: 20,
    justifyContent: "space-between",
  },
  button: {
    borderWidth: 1,
    backgroundColor: "red",
    borderColor: "#ddd",
  },
  touchable: {
    borderWidth: 5,
    borderColor: "#ddd",
    height: 40,
    width: 100,
    borderRadius: 25,
    padding: 5,
    alignSelf: "center",
    justifyContent: "center",
    backgroundColor: theme.primary,
    borderColor: theme.primary,
  },

  touchableText: {
    color: "#ddd",
    fontWeight: "bold",
    paddingLeft: 20,
    paddingRight: 20,
    textAlign: "center",
    alignSelf: "center",
  },
};
