import React, {useContext} from 'react';
import GlobalContext from '../Context/GlobalContext';

function TransNotification() {
    const {theme, trans_notification}=useContext(GlobalContext);

    

  return (
  <div>
         
  <div className="table-responsive" >
    <table className={`table table-${theme} table-striped table-hover table-condensed `}>
<thead>
  
  <th>
    Desc
  </th>
  <th>
    Amt
  </th>
  
  <th>
    Date/Time
  </th>

</thead>
<tbody>
{trans_notification.sort().map((note, key)=>{
    return <tr key={key} >
    <td >
      {note.description}
    </td>
    <td >
  {note.amount}  </td>
    <td >
     {note.date}
    </td>
  </tr>
  
})}



</tbody>
</table>
        </div>
      </div>
  )
}

export default TransNotification;