import React, { useState } from "react";
import { Nav } from "@fluentui/react/lib/Nav";
import "../../scssPages/sidebar.scss";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {faUniversity } from '@fortawesome/free-solid-svg-icons';

import { INavStyles, INavLinkGroup, INavLink } from "@fluentui/react/lib/Nav";
import { initializeIcons } from "@fluentui/react/lib/Icons";
import { useHistory, useLocation, withRouter } from "react-router-dom";
import '../../scssPages/sidebar.scss'
import { useTranslation } from "react-i18next";
import { registerIcons } from "@fluentui/react";
import { faFilter } from '@fortawesome/free-solid-svg-icons';
const navStyles: Partial<INavStyles> = { root: { width: 160 } };
initializeIcons();
// registerIcons({
//   icons: {
//     university: <FontAwesomeIcon icon='university' />
//   }
// });


registerIcons({
  icons: {
    Filter: <FontAwesomeIcon icon={faFilter} />
  }
});

const Sidebar = (props: any) => {
  const [t, i18n] = useTranslation(); ///function of translate
  const [selectedKey,setSelectedKey] = useState()
  const history = useHistory()
  const location =useLocation()
  const handleNavClick = (
    ev?: React.MouseEvent<HTMLElement>,
    item?: INavLink
  ) => {
    ev?.preventDefault();
    props.history.push(item?.url);
    // setSelectedKey=(location.pathname)
  };
  const navLinkGroups: INavLinkGroup[] = [
    {
      links: [
        {
           key:"home-page",
           className:"side-sub",
           iconProps: { iconName: "Home" }
           , styles: {
             icon: { color: '#1A1F71' }
           },
           name: t("siderbar.homePage"),
           url:"home-page",
           onClick: handleNavClick
           
        },
        {
          key: "customer-search",
          iconProps: { iconName: "Search" },
          styles: {
            icon: { color: '#1A1F71' }
          },
          name: t("siderbar.customerSearch"),
          url: "/customer-search",
          onClick: handleNavClick
        },
        {
          key: "customer-details",
          iconProps: { iconName: "Search" },
          styles: {
            icon: { color: '#1A1F71' }
          },
          url: "/customer-details",
          name: t("siderBar.customerDetails"),
          
          component: "CustomerDetails",
          onClick: handleNavClick
        },
        {
          key: "3",
          iconProps: { iconName: "ContactCard " },
         
          styles: {
            icon: { color: 'blue' }
          },
          url: "/contact",
          component: "Contact",
          name: t("siderbar.contactInformation"),
          onClick: handleNavClick
        },
        {
          key: "4",
          iconProps: { iconName: "Sunny" },
          url: "/representatives",
          component: "Representatives",
          name: t("siderbar.representativesOrInvolvedParties"),
          onClick: handleNavClick
        },
        {
          key: "5",
          iconProps: { iconName: "Sunny" },
          url: "/obligo",
          component: "Obligo",
          name: t("siderbar.obligo"),
          onClick: handleNavClick
        },
        {
          key: "6",
          iconProps: { iconName: "Sunny" },
          url: "/security",
          component: "Security",
          name: t("siderbar.security"),
          onClick: handleNavClick
        },
        {
          key: "7",
          iconProps: { iconName: "Sunny" },
          url: "/price-list",
          component: "PriceList",
          name: t("siderbar.priceList"),
          onClick: handleNavClick
        },
        {
          key: "8",
          
          iconProps:{iconName: 'Filter'} ,
          url: "/bank-accounts",
          component: "BankAccounts",
          name: t("siderbar.bankAccounts"),
          onClick: handleNavClick
        },
        {
          key: "9",
          iconProps: { iconName: "Sunny" },
          url: "/loans",
          component: "Loans",
          name: t("siderbar.loans"),
          onClick: handleNavClick
        },
        {
          key: "10",
          iconProps: { iconName: "Attach" },
          url: "/documents",
          component: "Documents",
          name: t("siderbar.documents"),
          onClick: handleNavClick
        },
        {
          key: "11",
          url: "/money-laundering",
          component: "MoneyLaundering",
          name: t("siderbar.moneyLaundering"),
          onClick: handleNavClick
        },
        {
          key: "12",
          url: "/concentration-of-ctions",
          component: "ConcentrationOfActions",
          name: t("siderbar.concentrationOfActions"),
          onClick: handleNavClick
        },
        {
          key: "13",
          url: "/log-changes",
          component: "LogChanges",
          name: t("siderbar.logChanges"),
          onClick: handleNavClick
        }
      ]
    }
  ];
  return (
    
      <Nav className="items" styles={navStyles} groups={navLinkGroups}   selectedKey={history.location.pathname} />
    
  );
};
export default withRouter(Sidebar);
