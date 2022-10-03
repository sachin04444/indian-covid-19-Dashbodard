import { useEffect,useState} from "react";
import "./index.css"


function ApIData() {
    const [data, setData] = useState([]);
    const getCovidData = async () => {
      const res = await fetch ('https://data.covid19india.org/data.json'); 
      const actuldata= await res.json();
      console.log("actuldata.statewise")
      setData(actuldata.statewise)
    }

     useEffect(()=>{
        getCovidData();
     },[] );
    
  return (
    <>
     <h1> indian covid 19 Dashbodard </h1>
     <table class ="table sticky">
        <thead>
            <tr>
                <th>State</th>
                <th>confirmed </th>
                <th>Recovered</th>
                <th>Deaths</th>
                <th>Active</th>
                <th>Updates</th>
            </tr>
        </thead>
        <tbody>
            {
            data.map((curElem) =>{
                return(
                  <tr>
                    <td>{curElem.state}</td>
                    <td>{curElem.confirmed}</td>
                    <td>{curElem.recovered}</td>
                    <td>{curElem.deaths}</td>
                    <td>{curElem.active}</td>
                    <td>{curElem.lastupdatedtime}</td>
                  </tr>
                );
            })
            }
        </tbody>
     </table>
    </>
  );
}

export default ApIData
