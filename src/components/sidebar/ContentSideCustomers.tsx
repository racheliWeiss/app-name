import React from "react";
import { Nav } from "@fluentui/react/lib/Nav";
import "../../scss/sidebar.scss";

import { INavStyles, INavLinkGroup, INavLink } from "@fluentui/react/lib/Nav";
import { initializeIcons } from "@fluentui/react/lib/Icons";
import { withRouter } from "react-router-dom";

import { useTranslation } from "react-i18next";

const navStyles: Partial<INavStyles> = { root: { width: 160 } };
initializeIcons();

const Sidebar = (props: any) => {
  const [t, i18n] = useTranslation(); ///function of translate
  const handleNavClick = (
    ev?: React.MouseEvent<HTMLElement>,
    item?: INavLink
  ) => {
    ev?.preventDefault();
    props.history.push(item?.url);
  };
  const navLinkGroups: INavLinkGroup[] = [
    {
      links: [
        {
          key: "Breadcrumb",
          iconProps: { iconName: "Sunny" },
          name: t("siderbar.customerSearch"),
          url: "/customer-search",
          onClick: handleNavClick
        },
        {
          key: "customer-details",
          iconProps: { iconName: "Sunny" },
          url: "/customer-details",
          name: t("siderBar.customerDetails"),
          component: "CustomerDetails",
          onClick: handleNavClick
        },
        {
          key: "3",
          iconProps: { iconName: "Sunny" },
          url: "/contact",
          component: "Contact",
          name: t("siderbar.contact"),
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
          iconProps: { iconName: "Sunny" },
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
          iconProps: { iconName: "Sunny" },
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
    
      <Nav className="items" styles={navStyles} groups={navLinkGroups} />
    
  );
};
export default withRouter(Sidebar);
