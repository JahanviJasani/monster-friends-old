import React from 'react'

const Card = ({id, name, email}) => {
  return (
    <div className="tc bg-lightest-blue dib br3 pa3 ma3 grow bw2 shadow-5">
      <img src={`https://robohash.org/${id}?set=set2&size=300x300`} />
      <div>
        <h3 className="code ma4 mb2 navy">Monster Name</h3>
        <p className="courier ma0 mb3">monster email</p>
      </div>
    </div>
  )
}

export default Card