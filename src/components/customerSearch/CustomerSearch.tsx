import { PrimaryButton } from "@fluentui/react";
import axios from "axios";
import React from "react";
import { useState,useEffect } from "react";
import { useTranslation } from "react-i18next";
import "./customerSearch.scss"
import { IssuePagination } from "../../shared/components/Pagination/Pagination";
import SearchBoxSmall from "../../shared/components/TextSearch";
import { TableList } from "../table";
import SubHeader from "../SubHeader";
import Subtitle from "../../shared/components/Subtitle";
import SubTitle from "../../shared/components/TitleText";
import Title from "../../shared/components/Title";
import CustemTable from "../../shared/components/tabels/tableList";

const CustomerSearch = () =>
{

    const [data, setData] = useState([]);
    const [curentPage,setCurentPage] = useState(0);
    const [pageCount, setPageCount] = useState(0);
    const [customer,setCutomer] = useState("");
    const [isLoading, setIsLoading] = useState<boolean>(false)
    const[searchDetail,setSearchDetail]=useState('')
    const [t, i18n] = useTranslation();
    let result:number;

    const columns = [       
      {key: 'column1', name: 'Name', fieldName: 'name', minWidth: 100, maxWidth: 200},
      {key: 'column2', name: 'Value', fieldName: 'value',minWidth: 100, maxWidth: 200 },
      {key: 'column3', name: 'Value', fieldName: 'value',minWidth: 100, maxWidth: 200},
      {key: 'link', name: 'link', fieldName: 'link',minWidth: 100, maxWidth: 200},
    ]; 
    
    const item=[
      {key: 1, name:"good",value:1},
      {key:2, name:"good",value:12},
      
     ]
      const paginationData = {
        lines: 5,
        numVisiblePages: 5,
    }
   const  getDataPage =()=>{
       //API call
        //   const body = JSON.stringify(pageCount,login);
        // const res = await axios.get(baseUrl+'/table',body)
        // const data = res.data;         
        //           setData(data)
   }

    //load and get data from search
    const getData = async() => {
        //api call
        // const res = axios.get(baseUrl+'/table')
        const res = await axios.get(`https://jsonplaceholder.typicode.com/photos`)
        const data = res.data;         
                  setData(data)
                //   result=data.lengh,number
                  setPageCount(Math.ceil(result/paginationData.lines));
    }
        
    useEffect(() => {
        getData();
    }, [searchDetail])

    
    useEffect(() => {
        getDataPage();
       }, [curentPage])

    const onPageChanged = (selected: any)=>
    { 
           setCurentPage(selected);
        //     //switch
        //     //move the currentPage state
    }          
      const onLoadCustomerClicked =()=>{   
        setSearchDetail(customer)
      }

      const onCustomerChanged =(key:string, value:any) =>{
        setCutomer(value);
      }
     return(
        <div>
        
           <Subtitle title={t('customerSearch')}/>
            {/* <IconButton/> */}
            <div className="content-search">
              <SearchBoxSmall onChange={onCustomerChanged} label={t('search')} />
             {/* <CustomTextField required={true} label={t('lastName')} onChange={onCustomerChanged} id={'LastName'}/> */}
           <PrimaryButton onClick={onLoadCustomerClicked} text={t("searchCustomer")}/>
           </div>
            {/* <DetailsListBasicExample columns={columns} allItems={[]} /> */}
          
             <CustemTable columns={columns} allItems={item} rederRow={"link"} isFooter={false}/>
             <IssuePagination
                onPageChange={onPageChanged}
                pageCount={27}
                currentPage={1}
              />
        </div>
       
    );
}
export default CustomerSearch;