import  {Route, Routes, } from "react-router-dom"
import Details from "../../../view/dashboards/Details"

const Dashboard = () => {
  return (
      <Routes>
          <Route path="/" element={<Details/>}/>
          <Route path="/" element={<Details/>}/>
      </Routes>
  )
}

export default Dashboard