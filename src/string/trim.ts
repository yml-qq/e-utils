/**
 * @desc 清除字符串空格
 * @param {String} str 字符串
 * @param {String} pos 所要清除的位置，默认为两端：both。可选 左侧：left、右侧：right、全部：all
 */
export function trim(str: string, pos = "both"): string {
  if (pos === "both") {
    return str.replace(/(^\s*)|(\s*$)/g, "");
  } else if (pos === "left") {
    return str.replace(/^\s*/, "");
  } else if (pos === "right") {
    return str.replace(/(\s*$)/g, "");
  } else if (pos === "all") {
    return str.replace(/\s*/g, "");
  } else {
    return str;
  }
}
