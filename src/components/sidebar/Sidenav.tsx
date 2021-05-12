import * as React from "react";
import { getTheme } from "office-ui-fabric-react";
import { Sidebar } from "@uifabric/experiments";

const Sidenav = (props: any) => {
  return (
    <Sidebar
      theme={getTheme()}
      items={[
        {
          key: "collapsible-example-item1",
          name: "My Day",
          iconProps: { iconName: "RedEye" },

          active: true
        },
        {
          key: "collapsible-example-item2",
          name: "Important",
          iconProps: { iconName: "FavoriteStar" },
          active: false
        },
        {
          key: "collapsible-example-item3",
          name: "Tasks",
          iconProps: { iconName: "Home" },
          active: false
        },
        {
          key: "collapsible-example-item4",
          name: "Lists",
          iconProps: { iconName: "BulletedList" },
          active: false
        }
      ]}
      footerItems={[
        {
          key: "footer-settings",
          name: "Settings",
          iconProps: { iconName: "eye" }
        }
      ]}
    />
  );
};

export default Sidenav;
