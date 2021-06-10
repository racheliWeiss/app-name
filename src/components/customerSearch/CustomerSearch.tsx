import { PrimaryButton } from "@fluentui/react";
import axios from "axios";
import React from "react";
import { useState,useEffect } from "react";
import { useTranslation } from "react-i18next";
import "./customerSearch.scss"
import { IssuePagination } from "../../shared/components/Pagination/Pagination";
import { CustomTextField } from "../../shared/components/TextField";
import SearchBoxSmall from "../../shared/components/TextSearch";
import { TableList } from "../table";
import { DetailsListBasicExample } from "../../shared/components/tabels/tableList";
import SubHeader from "../SubHeader";
import Subtitle from "../../shared/components/Subtitle";
import SubTitle from "../../shared/components/TitleText";
import Title from "../../shared/components/Title";

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
   
    const headerStyle = {
        cellTitle: {
          color: "#1A1F71",
          background: '#F4F2FF',
          border: '8px'
        }
    }  
    const columns = [
        { styles: headerStyle, key: 'column1', name: 'Name', fieldName: 'name', minWidth: 100, maxWidth: 200, isResizable: true, isModalSelection: false, styleHeader: 'dataListHeader' },
        { styles: headerStyle, key: 'column2', name: 'Value', fieldName: 'value', minWidth: 100, maxWidth: 200, isResizable: true, isModalSelection: false, styleHeader: 'dataListHeader' },
        { styles: headerStyle, key: 'column2', name: 'Value', fieldName: 'value', minWidth: 100, maxWidth: 200, isResizable: true, isModalSelection: false, styleHeader: 'dataListHeader' },
      ];
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
           <SubHeader/>
           <Subtitle title={t('customerSearch')}/>
            {/* <IconButton/> */}
            <div className="content-search">
              <SearchBoxSmall onChange={onCustomerChanged} label={t('search')} />
             {/* <CustomTextField required={true} label={t('lastName')} onChange={onCustomerChanged} id={'LastName'}/> */}
           <PrimaryButton onClick={onLoadCustomerClicked} text={t("searchCustomer")}/>
           </div>
            {/* <DetailsListBasicExample columns={columns} allItems={[]} /> */}
          
           <TableList/>
           <IssuePagination
                onPageChange={onPageChanged}
                pageCount={27}
                currentPage={1}
            />
        </div>
       
    );
}
export default CustomerSearch;