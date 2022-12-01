import { Collapse, Menu } from "antd";
import { useContext } from "react";
import { PRODUCTS_DATA } from "../context/action";
import { filterContext } from "../context/filterContext";
import { products } from "../lib/constants";

const SideNavigation = () => {
  const { Panel } = Collapse;
  const { dispatch } = useContext(filterContext);
  const onClick = (key: any) => {
    if (key == "All") {
      dispatch({
        type: PRODUCTS_DATA,
        payload: products,
      });
    } else {
      const filtered_data = products.filter((r) => r.category_id == key);
      dispatch({
        type: PRODUCTS_DATA,
        payload: filtered_data,
      });
    }
  };

  return (
    <Collapse defaultActiveKey={1} key={1} style={{height:"91vh"}}>
      <Panel header="Products" key="1">
        <Menu>
        <Menu.Item key={1} onClick={() => onClick("All")}>
            All
          </Menu.Item>
          <Menu.Item key={2} onClick={() => onClick("1")}>
            Mobiles
          </Menu.Item>
          <Menu.Item key={3} onClick={() => onClick("2")}>
            Laptops
          </Menu.Item>
          <Menu.Item key={4} onClick={() => onClick("3")}>
            Clothings
          </Menu.Item>
        </Menu>
      </Panel>
    </Collapse>
  );
};

export default SideNavigation;
