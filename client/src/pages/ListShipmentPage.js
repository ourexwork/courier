import React from 'react';
import {connect } from 'react-redux';


import MaterialTable from 'material-table';
import { SaveAlt ,  
   Search, 
   Check, Clear, 
   FirstPage, 
LastPage,
 ChevronLeft,
ChevronRight,
FilterList, Remove, ViewColumn, 
ViewCompactOutlined
}  from '@material-ui/icons';


class ListShipmentPage extends React.Component {
   
    render()
    {
      const { Shipments  } = this.props
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
            title = { <div style={{fontSize:'1rem', color:'#1c88b'}}>Speedex Shipment Data</div>}
        columns={[
          { title: 'S/N', field: 'index',cellStyle:{
            backgroundColor:'#1c88bf',
            fontSize:'1.2rem',
            color:'#fff',
            width:'10px'
          } },
          { title: 'Name', field: 'name'
          ,cellStyle:{
            fontSize:'1.2rem',
            color:'#fff'
          }
          },
          { title: 'shipment status', field: 'status'
          ,cellStyle:{
            fontSize:'1.2rem',
            color:'#fff'
          }
        },
        { title: 'prrice', field: 'price'
          ,cellStyle:{
            fontSize:'1.2rem',
            color:'#fff'
          }
        },
   
          
        ]}
// data = a.map(()=>{
//   return {[]}
// })
     data =  {Shipments.map((data, index)=>{
       return  { index:index + 1,  name: data.name , status: data.shipmentStatus, price: data.payment.amount, _id: data._id,  }
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


        options={{
          headerStyle: {
            backgroundColor: '#364051',
            fontSize:'1.2rem',
            color: '#FFF'
          },
        
            rowStyle:{
          backgroundColor: '#364051'
         },
      
          titleStyle:{
            color:'#364051',
            backgroundColor: '#364051',
            fontSize: '1rem'
          },
          actionsCellStyle:{
            backgroundColor: '#364051',
  
          },

         
          // rowData:{
          //   backgroundColor: '#fff',
           
          // },
          filterCellStyle: {
            backgroundColor: '#fff',
            fontSize:'3rem'
          },
          columnStyle:{
            backgroundColor: '#fff',
            fontSize:'3rem',
            
          },
          filtering:true


        }}
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
 