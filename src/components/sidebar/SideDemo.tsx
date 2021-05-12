import * as React from 'react';
import { Nav, INavStyles, INavLinkGroup, INavLink } from '@fluentui/react/lib/Nav';
import {initializeIcons} from '@fluentui/react/lib/Icons';
import {  Route, Switch,withRouter } from "react-router-dom";
//import{navItems,nav} from '../../Models/NavItems';
//import { styled } from '@fluentui/react/lib/Utilities';
import { useTranslation } from 'react-i18next';
import CustomerLocator from '../CustomerLocator';
import CustomerDetails from '../CustomerDetails';
import Contact from '../Contact';
import Representatives from '../Representatives';
import Obligo from '../Obligo';
import Security from '../Security';
import PriceList from '../PriceList';
import BankAccounts from '../BankAccounts';
import Loans from '../Loans';
import Documents from '../Documents';
import MoneyLaundering from '../MoneyLaundering';
import ConcentrationOfActions from '../ConcentrationOfActions';
import LogChanges from '../LogChanges';



const navStyles: Partial<INavStyles> = { root: { width: 70 } };
initializeIcons();



  const SideDemo: React.FunctionComponent = (props:any) => {
    const [t, i18n] = useTranslation();  ///זה הפוקציה של state
    const  handleNavClick= (ev?: React.MouseEvent<HTMLElement>, item?: INavLink) => {
    ev?.preventDefault();
            
  props.history.push(item?.url);
      }
    const navLinkGroups: INavLinkGroup[] = [
      {
       
        
        
        links:[
        {  key: "Breadcrumb",
           iconProps: { iconName: "Sunny" },
            name:t('siderbar.customer-search'),
            // name: {t('customer_locator')},
            // target:"_blank",
            url:"/customer-search",
            // text:"siderBar.customer_locator",
            // component:'CustomerLocator',
          
            onClick: handleNavClick
           },
           {
            key:'customer-details',
            iconProps: { iconName: "Sunny" },
            url:'/customer-details',
            name:t("siderBar.customer-details"),
            component:'CustomerDetails',
            onClick: handleNavClick
    
           },
          {
           key:'3',
           iconProps: { iconName: "Sunny" },
           url:'/contact',
           component:'Contact' , 
           name:t("siderbar.contact"),
           onClick: handleNavClick
           
          },
          {
            key:'4',
            iconProps: { iconName: "Sunny" },
            url:'/representatives',
            component:'Representatives',
            name:t("siderbar.representatives-or-involved parties"),
            onClick: handleNavClick
         },
         {
            key:'5',
            iconProps: { iconName: "Sunny" },
            url:'/obligo',
            component:'Obligo',
            name:t("siderbar.obligo") ,  
            onClick: handleNavClick 
          
        },{
            key:'6',
            iconProps: { iconName: "Sunny" },
            url:'/security',
            component:'Security',
            name:t("siderbar.security"),
            onClick: handleNavClick
            
        },{
            key:'7',
            iconProps: { iconName: "Sunny" },
            url:'/price-list',
            component:'PriceList',
            name:t("siderbar.price-list"),
            onClick: handleNavClick
    
        },{
            key:'8',
            iconProps: { iconName: "Sunny" },
            url:'/bank-accounts',
            component:'BankAccounts',
            name:t("siderbar.bank-accounts"),
            onClick: handleNavClick
        },{
            key:'9',
            iconProps: { iconName: "Sunny" },
            url:'/loans',
            component:'Loans',
            name:t("siderbar.loans"),
            onClick: handleNavClick
        },{
            key:'10',
            iconProps: { iconName: "Sunny" },
            url:'/documents',
            component:'Documents',
            name:t("siderbar.documents"),
            onClick: handleNavClick
        },
        {
            key:'11',
            url:'/money-laundering',
            component:'MoneyLaundering',
            name:t("siderbar.money-laundering"),
            onClick: handleNavClick
        },{
            key:'12',
            url:'/concentration-of-ctions',
            component:'ConcentrationOfActions',
            name:t("siderbar.concentration-of-actions"),
            onClick: handleNavClick
        },{
            key:'13',
            url:'/log-changes',
            component:'LogChanges',
            name:t("siderbar.log-changes"),
            onClick: handleNavClick
        },
        ],
      }]
    
    return (
      
        <div>
     <div>{t('siderbar.customer-search')}</div>
         <Switch>
            <Route exact path="/customer-search" component={CustomerLocator} />
            <Route exact path='/customer-details' component={CustomerDetails}/> 
            <Route exact path='/contact' component={Contact}/> 
            <Route exact path='/representatives' component={Representatives}/> 
            <Route exact path='/customer-details' component={CustomerDetails}/> 
            <Route exact path='/security' component={Security}/>   
            <Route exact path='/price-list' component={PriceList}/>    
            <Route exact path='/obligo' component={Obligo}/> 
            <Route exact path='/bank-accounts' component={BankAccounts}/> 
            <Route exact path='/loans' component={Loans}/> 
            <Route exact path='/documents' component={Documents}/> 
             <Route exact path='/money-laundering' component={MoneyLaundering}/> 
            <Route exact path='/concentration-of-actions' component={ConcentrationOfActions}/> 
            <Route exact path='/log-changes' component={LogChanges}/> 
            {/* <Route component={Notfound} /> */}
        </Switch>
          
          
     
        <Nav className="items"  styles={navStyles}  groups={navLinkGroups} />
     
      </div>
    );
  };
  export default withRouter(SideDemo)