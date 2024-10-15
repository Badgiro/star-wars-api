import{useEffect} from "react";
import { useParams } from "react-router";
import {withErrorApi} from '@helpers/withErrorApi'
import {getApiResource} from '@utils/network';
import { PERSON_API } from "@constants/api";
import PropTypes from "prop-types";

const PersonPage = ({setErrorApi}) => {
    const { id } = useParams();
useEffect(()=> {
    (async () =>{
      
        const res = await getApiResource(`${PERSON_API}/${id}/`)
        console.log(res)
        
      })() 
}, [id])

  

  return <></>;
};
PersonPage.propTypes = {
    setErrorApi: PropTypes.func,
}

export default withErrorApi(PersonPage)
