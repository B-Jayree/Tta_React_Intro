import React from 'react'


export default function Teams({ members}) {
    console.log(members)
  return (
    <div className="main-container">
        {members.map((member, index) => (
            <div className="member-container" key={index}>
                <img src={member.image} alt={member.name} height="200" width="200" />
                 <p className="member-title">{member.title}</p>
                <h3>{member.name}</h3>
                <p>{member.symbol}</p>
                </div>

        ) )}
        
    </div>
  )
}
