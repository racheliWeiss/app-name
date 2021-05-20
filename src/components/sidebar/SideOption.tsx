import * as React from 'react';
import {Nav, INavStyles, INavLinkGroup } from '@fluentui/react/lib/Nav';
import { } from '@fluentui/react/lib/Button';
import { BrowserRouter, Route, Switch, useHistory,Link } from "react-router-dom";
import { useTranslation } from 'react-i18next';


const navStyles: Partial<INavStyles> = { root: { width: 70 } };

    

 const navLinkGroups: INavLinkGroup[] = [
  {
   
  
    links: [
      {
        key: 'Breadcrumb',
        iconProps: { iconName: "Sunny" },
         name:'aששג',
        //  , // name:{t('a')},///כאן אני רוצה לרשום
        url: '#/examples/button',
        

        // iconProps={iconProps},
      },
      // {
      //   key: 'Button',
      //   iconProps: { iconName: "Sunny" },
      //   name: 'B',
      //   url: '#/examples/buton',
      // },
      // {
      //   key: 'Button',
      //   iconProps: { iconName: "Sunny" },
      //   name: 'c',
      //   url: '#/examples/buon',
      // },
      {
        key: 'Button',
        iconProps: { iconName: "Sunny" },
        name: 'f',
        url: '#/examples/btton',
      },
    ],
  }]
  export const SideOption: React.FunctionComponent = () => {
   
    function linkClickHandler(event:any){
      event.preventDefault();
     }
     return(
      <Nav className="catgory" onLinkClick={linkClickHandler} ariaLabel="Nav example similar to one found in this demo page" groups={navLinkGroups} />
    );
  };


  