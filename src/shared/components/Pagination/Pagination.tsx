import React from 'react'
import classnames from 'classnames'
import Paginate, { ReactPaginateProps } from 'react-paginate'
import styles from './IssuePagination.module.scss'
import './IssuePagination.scss'

export type OnPageChangeCallback = ReactPaginateProps['onPageChange']

interface Props {
  currentPage: number
  pageCount: number
  onPageChange?: OnPageChangeCallback
}


export const IssuePagination = ({
  currentPage,
  pageCount,
  onPageChange
  }: Props) => {
  return (
    <div className="main-content">
    <div className={classnames('issuesPagination', styles.pagination)}>
      
      <Paginate
        //forcePage={currentPage}
        pageCount={pageCount}
        marginPagesDisplayed={2}
        pageRangeDisplayed={2}
        onPageChange={onPageChange}
        nextLabel="&rarr;"
        previousLabel="&larr;"
      />
    </div>
    </div>
  )
}
