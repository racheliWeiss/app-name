import { IIconProps, ISearchBoxStyles, SearchBox } from '@fluentui/react';
import { useTranslation } from 'react-i18next';


interface MyProps  {
    onChange ?: any
    label?: string,
    required?:boolean,
    iconProps ?: IIconProps,
    type?:string,
    nameOfClassStyle?:string
    // ?:IIconProps
}

const searchBoxStyles: Partial<ISearchBoxStyles> = { root: { width: 280 } };

const  SearchBoxSmall= (props:MyProps) =>{
    const [t, i18n] = useTranslation();
    const { onChange, label} = props;    
    return(

       /* eslint-disable react/jsx-no-bind */
      <SearchBox
        styles={searchBoxStyles}
        placeholder={label}
        // onEscape={ev => {
        //   console.log('Custom onEscape Called');
        // }}
        // onClear={ev:any => {
        //   console.log('Custom onClear Called');
        // }}
        onChange={onChange}
        // onSearch={newValue => console.log('SearchBox onSearch fired: ' + newValue)}
      />
    );

    // return(
    // <>
    //     <h1>tojrhj</h1>
    //     <CustomTextField required={true} label={t('lastName')} onChange={onChange} id={'LastName'} />
    // </>
    
}
export default SearchBoxSmall