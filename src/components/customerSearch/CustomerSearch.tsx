import { PrimaryButton } from "@fluentui/react";
import axios from "axios";
import { useState, useEffect } from "react";
import { useTranslation } from "react-i18next";
import "./customerSearch.scss"
import { IssuePagination } from "../../shared/components/Pagination/Pagination";
import SearchBoxSmall from "../../shared/components/TextSearch";
import Subtitle from "../../shared/components/Subtitle";
import CustemTable from "../../shared/components/tabels/TableList";
import { basicUrl } from "../../shared/config";


export interface Iitem {
  key: Number;
  name: string;
  phone: string;
  address: string
}
export interface IitemList {
  item: Iitem[]
}

const CustomerSearch = () => {

  const [data, setData] = useState([]);
  const [allResult, setAllResult] = useState(0)
  const [curentPage, setCurentPage] = useState(1);
  const [pageCount, setPageCount] = useState(0);
  const [customerSearch, setCutomerSearch] = useState("אברהם");
  const [isLoading, setIsLoading] = useState<boolean>(false)
  const [searchDetail, setSearchDetail] = useState('')
  const [t, i18n] = useTranslation();
  const [item, setItem] = useState<any>([])
 


  useEffect(() => {
    getData();
  }, [])

  let result: number;

  const columns = [
    { key: '1', name: t('name'), fieldName: "name", entity_name: "name", minWidth: 100, maxWidth: 200 },
    { key: '2', name: t('address'), fieldName: "address", minWidth: 100, maxWidth: 200 },
    { key: '3', name: t('phone'), fieldName: "phone", minWidth: 100, maxWidth: 200 },
    { key: '4', name: '', fieldName: "link", minWidth: 100, maxWidth: 200 },
  ];

  let object: { key: number; name: any; phone: any; address: string; }[] =[]

  const paginationData = {
    lines: 5,
    numVisiblePages: 5,
  }
  const getDataPage = () => {
    //API call
    //   const body = JSON.stringify(pageCount,login);
    // const res = await axios.get(baseUrl+'/table',body)
    // const data = res.data;         
    //           setData(data)
  }

  //load and get data from search
  const getData = async () => {

      const search = {
        "id_initiator": 1,

        "id_client": 3,

        "search_fields": [

          "name",

          "address",

          "thelephone"

        ],

        "search_type": "like",

        "search_entity_type_id": [

          "customer",

          "user"

        ],

        "order_by": "DESC",

        "page_size": 10,

        "page_index": curentPage,

        "search_value": customerSearch
      }
      const config = {
        headers: {
          'Content-Type': 'application/json'
        }
      };
      const res = await axios.post(basicUrl + "/search", search, config)
      console.log("data",res)
      const objactData = res.data.search_results;
      console.log("data",objactData)
      setPageCount(res.data.page_size);
      setCurentPage(res.data.page_index)
      setAllResult(res.data.records_count)
      console.log("page_size", res.data.page_size)
      console.log("page_index", res.data.page_index)
      objactData.map((obj: any, index: number) => {
        const phoneObject = obj.telephones
        const resultPhone = phoneObject.find(({ is_default }: any) => is_default === true);
        const phoneNumber = resultPhone.telephone_number
        let addressObject = obj.addresses
        let resultAddress = addressObject.find(({ is_default }: any) => is_default === true);
        let address = resultAddress.address_name
        let cityAddress = resultAddress.address_city
        const addressFull = address + " " + cityAddress;
        // console.log("data obj",obj)
        // console.log("index",index)
      
        object.push({ key: index, name: obj.entity_name, phone: phoneNumber, address: addressFull })
          // setItem([...item, { key: index, name: obj.entity_name, phone: phoneNumber, address: addressFull }])
          // console.log("items ",item)  
          
    });
    setItem(object);
    console.log("items ",item)
    }
   
      // const emailObject = obj.emails
      // const resultEmail= emailObject.find( ({ is_default  }:any) =>  is_default=== true );
      // const mail=resultEmail.email_address


      //   const addressObject = res.data.search_results[0].addresses
      //   const resultAddress= addressObject.find( ({ is_default  }:any) =>  is_default=== true );
      //  console.log(resultAddress)
      //  let address=resultAddress.address_name
      // let cityAdress = resultAddress.address_city
      // address = address + " " + cityAdress;

     

    useEffect(() => {
      getData();
    }, [curentPage]);

    const onPageChanged = (selected: any) => {
      console.log("selected",selected)
      setCurentPage(selected);
    }
    // const onLoadCustomerClicked =()=>{   
    //   // setSearchDetail(customer)

    // }

    const onCustomerChanged = (key: string, value: any) => {
      setCutomerSearch(value);
    }
    return (
      <div>
        <Subtitle title={t('customerSearch')} />
        {/* <IconButton/> */}
        <div className="content-search">
          <SearchBoxSmall onChange={onCustomerChanged} label={t('search')} />
          <PrimaryButton className="bottun" onClick={getData} text={t("searchCustomer")} />
        </div>
        <CustemTable columns={columns} allItems={item} rederRow={"link"} isFooter={false} />
        <IssuePagination
          onPageChange={onPageChanged}
          pageCount={pageCount}
          currentPage={curentPage}
        />
      </div>

    );
  }
  export default CustomerSearch;