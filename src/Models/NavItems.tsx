import { initializeIcons} from '@fluentui/font-icons-mdl2';
initializeIcons();
export const navItems:object=[
    {
        key: 1,
        path:'customer_locator',
        text:"siderBar.customer_locator",
        component:'CustomerLocator',
        iconProps: { iconName: "Setting" }
        
    },
    {
        key:2,
        path:'customer_details',
        text:"siderBar.customer_details",
        component:'CustomerDetails',
        iconProps: { iconName: "Setting" }

    },
    {
       key:3,
       path:'contact',
       component:'Contact' , 
       text:"siderBar.contact",
       iconProps: { iconName: "Setting" }
       
    },
    {
        key:4,
        path:'Representatives',
        component:'Representatives',
        text:"siderBar.Representatives or involved parties",
        iconProps: { iconName: "Setting" }
    },
    {
        key:5,
        path:'Obligo',
        component:'Obligo',
        text:"siderBar.Obligo" ,   
        iconProps: { iconName: "Setting" }
    },{
        key:6,
        path:'Security',
        component:'Security',
        text:"siderBar.security",
        iconProps: { iconName: "Setting" }
    },{
        key:7,
        path:'Price_list',
        component:'PriceList',
        text:"siderBar.price_list"

    },{
        key:8,
        path:'Bank_accounts',
        component:'BankAccounts',
        text:"siderBar.Bank_accounts"
    },{
        key:9,
        path:'Loans',
        component:'Loans',
        text:"siderBar.Loans"
    },{
        key:10,
        path:'Documents',
        component:'Documents',
        text:"siderBar.Documents"
    },{
        key:11,
        path:'Money_laundering',
        component:'MoneyLaundering',
        text:"siderBar.money_laundering"
    },{
        key:12,
        path:'Concentration_of_actions',
        component:'ConcentrationOfActions',
        text:"siderBar.Concentration of actions"
    },{
        key:13,
        path:'Log_changes',
        component:'LogChanges',
        text:"siderBar.Log_changes"
    }
];


export type nav={
    key:Number,
    path:string,
    component:string,
    text:string,
    icon:object
}