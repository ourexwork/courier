import React from 'react';
import {connect } from 'react-redux';


import MaterialTable from 'material-table';
import { SaveAlt , 
  Delete, 
   Search, 
   Check, Clear, 
   FirstPage, 
LastPage,
 ChevronLeft,
ChevronRight,
FilterList, Remove, ViewColumn, ClearAll,
ViewCompactOutlined
}  from '@material-ui/icons';


class ListShipmentPage extends React.Component {
   
    render()
    {
      const { Shipments ,  dispatch } = this.props
        return(
        
            <div className="container mt-5">
            <MaterialTable
            icons ={{
              Search,
              Check,
              LastPage,
              FirstPage,
              DetailPanel: ChevronRight,
              NextPage: ChevronRight,
              PreviousPage:ChevronLeft,
              Export:SaveAlt,
              Filter:FilterList,
              ViewColumn,
              Clear:Clear,
              ResetSearch:Clear,
              ThirdStateCheck:Remove,

            }}
        title="Speedex Shipment Table"
        columns={[
          { title: 'S/N', field: 'index' },
          { title: 'Name', field: 'name' },
          { title: 'Status', field: 'status' },
          
        ]}
// data = a.map(()=>{
//   return {[]}
// })
     data =  {Shipments.map((data, index)=>{
       return  { index:index + 1,  name: data.name , status: data.shipmentStatus, _id: data._id }
     })}
             
        actions={[
          {
            icon: ViewCompactOutlined,
            tooltip: 'View User',
            onClick: (event, rowData) => this.props.history.push(`/edit/${rowData._id}`)
          },
          // {
          //   icon: Delete,
          //   tooltip: 'Delete User',
          //   onClick: (event, rowData) => alert("You want to delete " + rowData.name)
          // }
        ]}
      />

  </div>  
        )
    }
}

const mapStateToProps = (state) => {
    return {
   Shipments: state.shipments
    };
}



export default connect(mapStateToProps)(ListShipmentPage);
 