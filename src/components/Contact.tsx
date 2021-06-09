import * as React from 'react';
import { IssuePagination, OnPageChangeCallback } from '../shared/components/Pagination/Pagination'
import { useState } from 'react';
import '.././scssPages/form.scss'
import { DetailsListBasicExample } from '../shared/components/DetailsList';
const Contact = () => {

  // const onPageChanged: OnPageChangeCallback = selectedItem => {
  //   const newPage = selectedItem.selected + 1
  //   // setJumpToPage(newPage)
      // }
      const headerStyle = {
        cellTitle: {
          color: "#1A1F71",
          background: '#F4F2FF',
          border: '8px'
        }
      }

      
      // let result: number = 10;
      
      // setPageCount(result / paginationData.lines);
      // const body = JSON.stringify(pageCount);
      const [data, setData] = useState([])
  

      // const onPageChanged=(e.target.v=>{
      //     axios.get(baseUrl+'/table',body)
      // }

      // const onPageChanged: OnPageChangeCallback = selectedItem => {
      //   const newPage = selectedItem.selected + 1
      //   setJumpToPage(newPage)
      // }
      
      return (
        <div className="content-wrapper">
          {/* <DetailsList
              items={data}
              columns={columns}
              selectionMode={SelectionMode.none}
              setKey="set"
            /> */}
          {/* <PluginExample/> */}
            <h1>herg</h1>
              
        </div>
      );

}
export default Contact;

