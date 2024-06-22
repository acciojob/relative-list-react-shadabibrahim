import React from 'react'

const App = () => {
  const relative = ["Doctor","Atif","Owais","Ehtesham"];
  return (
    <div id="main">
               {/* Do not remove the main div */}
              <ol key={"relativeList"}>
                {relative.map((data,index)=>{
                  return <li key={"relativeListItem"+index+1}>{data}</li>
                })}
              </ol>
    </div>
  )
}

export default App
