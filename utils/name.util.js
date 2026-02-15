class NameUtil {
  static displayName(name) {
    const nameList = name.split(".");
    if (nameList.length > 1) {
      console.log("return name", nameList[1].replace("_", " "));
      return nameList[1].replaceAll("_", " ");
    } else {
      return "-"
    }

  }
}

export default NameUtil;