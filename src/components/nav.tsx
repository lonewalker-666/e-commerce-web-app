import { Drawer, Menu } from "antd"
import SideNavigation from "./sideNavigation";
import { useEffect } from "react";


const Nav = (props:any) => {
    const {visible,onHide,closable} = props
useEffect(()=>{
    closable ? onHide() : false
})

return(
   <Drawer 
   open={visible}
   onClose={!closable && onHide} 
   closable={!closable}
   maskClosable={!closable}
   placement="left"
   width={"60%"}
   >
<SideNavigation />
   </Drawer>
)
}

export default Nav