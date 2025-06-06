import React from 'react'
import maleMember  from "../assets/male.jfif";
import femaleMember  from "../assets/female.jfif";

export default function Teams() {
  return (
    <div className="main-container">
        <div className="member-container">
            <img src={maleMember} alt="Male worker" height="200" width="200" />
                <p className="member-title">Medical Assistant</p>
                <h3>Wade Warren</h3>
                <p>&clubs;</p>
        </div>
        <div class="member-container">
                <img src={maleMember} alt="Male worker" height="200" width="200" />
                <p class="member-title">Nursing Assistant</p>
                <h3>Jenny Wilson</h3>
                <p>&diams;</p>
            </div>
             <div class="member-container">
                <img src={femaleMember} alt="Female worker" height="200" width="200" />
                <p class="member-title">Dog Trainer</p>
                <h3>Annette Black</h3>
                <p>&spades;</p>
            </div>
             <div class="member-container">
                 <img src={femaleMember} alt="Female worker" height="200" width="200" />
                <p class="member-title">President of sales</p>
                <h3>Savannah Nguyen</h3>
                <p>&hearts;</p>
            </div>  
    </div>
  )
}
