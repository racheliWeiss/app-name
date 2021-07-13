import { DefaultButton, Link, PrimaryButton } from "@fluentui/react";
import axios from "axios";
import { useState, useEffect } from "react";
import { useTranslation } from "react-i18next";
import "./customerSearch.scss"
import { IssuePagination, OnPageChangeCallback } from "../../shared/components/Pagination/Pagination";
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
  const [item, setItem] = useState<any>()


//   const renderItemColumn = (item: any, index: any, column: any) => {

//     let fieldContent = item[column.fieldName];
//     switch (column.fieldName) {
//         case "link":
//           console.log("index in column",index)
//             return <DefaultButton> <Link to={{
//                 pathname: '/customer-details',
//                 state: [{id: 1, name: 'Ford', color: 'red'}]
//               }}> {t('details')} </Link> </DefaultButton>
//         default:
//             return <span >{fieldContent}</span>;
//     }
// }
  // useEffect(() => {
  //   getData();
  // }, [])

  let result: number;

  const columns = [
    { key: '1', name: t('name'), fieldName: "name", entity_name: "name", minWidth: 100, maxWidth: 200 },
    { key: '2', name: t('address'), fieldName: "address", minWidth: 100, maxWidth: 200 },
    { key: '3', name: t('phone'), fieldName: "phone", minWidth: 100, maxWidth: 200 },
    { key: '4', name: '', fieldName: "link", minWidth: 100, maxWidth: 200 },

  ];

  let objectItem:any[]=[];

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
      console.log("object search",search);
      const config = {
        headers: {
          'Content-Type': 'application/json'
        }
      };
      const res = await axios.post(basicUrl + "/search", search, config)
      const objactData = res.data.search_results;
      setPageCount(res.data.page_size);
      setCurentPage(res.data.page_index)
      setAllResult(res.data.records_count)
      objactData.map((obj: any, index: number) => {
        const phoneObject = obj.telephones
        const resultPhone = phoneObject.find(({ is_default }: any) => is_default === true);
        const phoneNumber = resultPhone.telephone_number.substring(0,11)
        const idEntity = obj.id_entity
        const addressObject = obj.addresses
        const resultAddress = addressObject.find(({ is_default }: any) => is_default === true);
        let address = resultAddress.address_name
        let cityAddress = resultAddress.address_city
        const addressFull = address + " " + cityAddress;
        objectItem.push({ key: ++index, name: obj.entity_name, phone: phoneNumber, address: addressFull ,idEntity:idEntity})
          // setItem([...item, { key: index, name: obj.entity_name, phone: phoneNumber, address: addressFull }])
          // console.log("items ",item)  
    });
  
      setItem(objectItem);
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

    const onPageChanged  :OnPageChangeCallback= selectedItem => {
      const newPage = ++selectedItem.selected;
      setCurentPage(newPage);
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
        <div className="content-search">
          <SearchBoxSmall onChange={onCustomerChanged} label={t('search')} />
          <PrimaryButton className="bottun" onClick={getData} text={t("searchCustomer")} />
        </div>
        {item?<CustemTable columns={columns} allItems={item}  renderItemColumn rederRow={"link"} isFooter={false} />:null}
        <IssuePagination
          onPageChange={onPageChanged}
          pageCount={pageCount}
          currentPage={curentPage}
        />
      </div>

    );
  }
  export default CustomerSearch;



  // [{"id_initiator":1,"date_modified":"2021-06-16 15:51:51.8612688","entity_sub_type_id":"1","entity_sub_type_name":"יחיד","entity_type_id":"customer","entity_type_name":"לקוח","is_deleted":0,"is_default":1}]