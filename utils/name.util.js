class NameUtil {
  static displayName(name) {
    const nameList = name.split(".");
    if (nameList.length > 1) {
      return nameList[1].replaceAll("_", " ");
    } else {
      return "-"
    }

  }
}

export default NameUtil;