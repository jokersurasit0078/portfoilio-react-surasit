import themes from "../../../constants/themes";

interface CustomDividerProps {}

export default function CustomDivider(props: CustomDividerProps) {
  const {} = props;
  return (
    <div
      style={{
        backgroundColor: "white",
        width: "100%",
        height: "1px",
        marginTop: themes.marginComponent / 3,
        marginBottom: themes.marginComponent / 3,
      }}
    />
  );
}
