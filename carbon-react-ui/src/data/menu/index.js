import { Link } from "react-router-dom";

const getItem = (key, label, children) => {
  return {
    key,
    label: children ? label : <Link to={key}>{label}</Link>,
    children,
  };
};
const menu = [
  getItem("/", "首页"),
  getItem("/common", "常用工具", [
    {
      type: "group",
      label: "图片处理",
      children: [getItem("/common/base64image", "Base64转换")],
    },
  ]),
];

export default menu;
