import React from 'react';
import agendas from '../assets/Asset 2.png'

function Agenda() {
  return (
    <div className="relative h-[25rem]">
      <img src={agendas}/>
        <div className="to-bg-black-5 absolute inset-0 h-full w-full bg-gradient-to-t"></div>
      </div>
  );
}

export default Agenda
