import { Tabs } from "antd";
import Base64ImageConverter from "./converter";
import Base64ImagePrefix from "./prefix";

const items = [
  {
    key: "imageBase64",
    label: "图片/Base64转换",
    children: <Base64ImageConverter />,
  },
  {
    key: "prefix",
    label: "Base64头部处理",
    children: <Base64ImagePrefix />,
  },
];

const Base64Image = () => {
  return (
    <>
      <Tabs defaultActiveKey="imageBase64" items={items} />
    </>
  );
};
export default Base64Image;
