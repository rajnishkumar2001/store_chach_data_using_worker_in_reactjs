import React, { useState, useEffect } from 'react'

export default function Home() {
  const [user, setUser] = useState([]);

  useEffect(() => {
    fetch("https://reqres.in/api/users?page=1").then((response) => {
      response.json().then((result) => {
        console.log("🚀 ~ file: Home.js:12 ~ response.json ~ result:", result.data)
        setUser(result.data)
      })
    })
  }, [])

  user.map((data) => {

  })

  return (
    <>
      <div className="container">
        <center><h1>User table</h1></center>
        <table className="table table-dark my-3">
          <thead>
            <tr>
              <th scope="col">#</th>
              <th scope="col">First</th>
              <th scope="col">Last</th>
              <th scope="col">Handle</th>
            </tr>
          </thead>
          <tbody>
            {
              user.map((data) => {
                <tr>
                  <td>{data.id}</td>
                  <td>Mark</td>
                  <td>Otto</td>
                  <td>@mdo</td>

                </tr>
              })
            }
          </tbody>
        </table>
      </div>
    </>

  )
}
