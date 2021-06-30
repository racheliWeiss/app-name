import * as react from 'react';
import { Nav, INavLinkGroup } from '@fluentui/react/lib/Nav';
import '../../scssPages/sidebar.scss';

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
  export const SideMain: React.FunctionComponent = () => {
   
    function linkClickHandler(event:any){
      event.preventDefault();
     }
     return(
      <Nav className="catgory" onLinkClick={linkClickHandler} ariaLabel="Nav example similar to one found in this demo page" groups={navLinkGroups} />
    );
  };


  