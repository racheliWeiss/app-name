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







  const SideCustomers: React.FunctionComponent = (props:any) => {
    
    
    return (
      
        <div>
    
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
          
          
     
       
     
      </div>
    );
  };
  export default withRouter(SideCustomers)