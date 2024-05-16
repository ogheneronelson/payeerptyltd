import React from 'react'
import "./style.css"
import Topbar from "../../components/usertopbar/Topbar";
import UserFooter from "../../components/minorfooter"


const KYC = () => {
  return (
    <div className='kyc-main'>
      <Topbar/>
      <div className='kyc-main-1'>
        KYC
      </div>
      <UserFooter/>
    </div>
  )
}

export default KYC