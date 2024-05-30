import React from "react"
import ContentLoader from "react-content-loader"

const Skeleton = (props) => (
  <ContentLoader 
    className="pizza-block"
    speed={2}
    width={280}
    height={500}
    viewBox="0 0 280 500"
    backgroundColor="#f0f0f0"
    foregroundColor="#fcfcfc"
  >
    <circle cx="135" cy="125" r="120" /> 
    <rect x="1" y="268" rx="10" ry="10" width="280" height="25" /> 
    <rect x="1" y="315" rx="10" ry="10" width="280" height="88" /> 
    <rect x="0" y="430" rx="10" ry="10" width="95" height="30" /> 
    <rect x="126" y="424" rx="25" ry="25" width="155" height="45" />
  </ContentLoader>
)

export default Skeleton