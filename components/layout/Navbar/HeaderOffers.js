import Link from 'next/Link';
import Image from 'next/image';
import React ,{useEffect ,useState} from 'react';
import { withTranslation } from 'react-multi-lang';
const Offers  =[
  {title:"Cash On Delivery",icon:"icon.png"},
  {title:"Free Shipping",icon:"icon.png"},
  {title:"Free Refund",icon:"icon.png"}
];
 function HeaderOffers() {
    const [data, setData]=useState();

    useEffect(()=>{
      async function fetchData() {
        // const res = await fetch(
        //   'https://proton.api.atomicassets.io/atomicmarket/v1/sales'
        // );
        const data =Offers ;
        setData(data)
      }
      fetchData()
    },[]);
    return (
        <ul>
        {data && data.map((offer,index) =>{
            return (
                <li key={index}>
                    <img src={"../img/"+offer.icon} alt="ecommerce" width="16" height="16"/>
                    <Link href="#">
                    {offer.title}
                    </Link>
                   
                    </li>
            )
        })}
            
        </ul>
    )
}


export default withTranslation(HeaderOffers)