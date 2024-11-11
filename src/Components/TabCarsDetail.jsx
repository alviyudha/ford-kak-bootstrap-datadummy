/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import React from 'react'
import DesignComp from './DesignComp'
import PerformanceComp from './PerformanceComp'
import SafetyComp from './SafetyComp'
import TechComp from './TechComp'
import { brochNextEvrTitanium, brochNextEvrXlt, brochNextRangBase, brochNextRangWild, brochNextRangXlt, brochNextRaptor } from '../assets/images/importImage'

export default function TabCarsDetail({designDataProps2,performanceProps2,safetyProps2,techProps2,brochProps}) {
  
  return (
    <>
    <nav className="mt-5 shadow p-3" id="tabModelsDetail">
    <div className="nav nav-underline justify-content-center " id="nav-tab-cars" role="tablist">
      <button className="nav-link nav-link-sec px-4 px-4 active" id="Design-tab" data-bs-toggle="tab" data-bs-target="#nav-Design" type="button" role="tab" aria-controls="nav-Design" aria-selected="true">Design
      </button>
      <button className="nav-link nav-link-sec px-4 px-4" id="Performance-tab" data-bs-toggle="tab" data-bs-target="#nav-Performance" type="button" role="tab" aria-controls="nav-Performance" aria-selected="false">Performance</button>
      <button className="nav-link nav-link-sec px-4 px-4" id="Technology-tab" data-bs-toggle="tab" data-bs-target="#nav-Technology" type="button" role="tab" aria-controls="nav-Technology" aria-selected="false">Technology</button>
      <button className="nav-link nav-link-sec px-4 px-4" id="Safety-tab" data-bs-toggle="tab" data-bs-target="#nav-Safety" type="button" role="tab" aria-controls="nav-Safety" aria-selected="false">Safety</button>
      <a href={brochProps} className="nav-link nav-link-sec px-4 px-4"  download id="catalog-tab" >E-Brochure</a>
    
    </div>
</nav>
    <div className="tab-content mt-5" id="nav-tabContent">
      {/* content 1 */}
      <div className="tab-pane fade show active" id="nav-Design" role="tabpanel" aria-labelledby="Design-tab" >
      <DesignComp
      designDataProps={designDataProps2}
      />
       
      </div>
      {/* content 2 */}
      <div className="tab-pane fade" id="nav-Performance" role="tabpanel" aria-labelledby="Performance-tab" >
       <PerformanceComp
       performanceProps={performanceProps2}
       />
       
        
      </div>
      {/* content 3 */}
        <div className="tab-pane fade" id="nav-Technology" role="tabpanel" aria-labelledby="Technology-tab" >
        <TechComp
        techProps={techProps2}
        />
      </div>
      {/* content 4 */}
      <div className="tab-pane fade" id="nav-Safety" role="tabpanel" aria-labelledby="Safety-tab" >
       <SafetyComp
       safetyProps={safetyProps2}
       />
      </div>
      {/* end content */}

    </div>   
    </>
  )
}