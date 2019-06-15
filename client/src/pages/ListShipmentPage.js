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
Visibility,
ShoppingBasket 
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
            // backgroundColor:'#1c88bf',
            fontSize:'1.2rem',
            color:'#fff',
            width:'10px'
          } },
          { title: 'sender info', field: 'sender',cellStyle:{
            // backgroundColor:'#1c88bf',
            fontSize:'1.2rem',
            color:'#fff',
            width:'10px'
          } },
          { title: 'order name', field: 'name'
          ,cellStyle:{
            fontSize:'1.2rem',
            color:'#fff'
          }
          },
          { title: 'current location', field: 'current_location'
          ,cellStyle:{
            fontSize:'1.2rem',
            color:'#fff'
          }
        },
        { title: 'delivery location', field: 'delivery_location'
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
        { title: 'price', field: 'price'
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
       return  { index:index + 1,  name: data.name ,
        sender : `${data.sender.firstName} ${data.sender.lastName} ${(data.sender.email)}` ,
         status: data.shipmentStatus, 
         current_location:data.currentLocation,
         delivery_location: data.deliveryAddress.address,
          price: data.payment.amount, _id: data._id,  }
     })}
             
        actions={[
          {
            icon:Visibility,
            tooltip: 'View Shipment',
            iconProps:{style:{color:'white'}},
            onClick: (event, rowData) => this.props.history.push(`/edit/${rowData._id}`)
          },
           {
             icon: ShoppingBasket ,
             tooltip: 'View Order History',
             iconProps:{style:{color:'white'}},
             onClick: (event, rowData) => alert("You want to view history " + rowData.name)
          }
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
 