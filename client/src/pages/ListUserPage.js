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
Visibility,


}  from '@material-ui/icons';


class ListUserPage extends React.Component {
   
    render()
    {
      const { Users ,  dispatch, classes } = this.props
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
           
     
        // headerStyle={{
        //   color:'blue'
        // }}
title = { <div style={{fontSize:'2rem', color:'#1c88b' , fontStyle:'italic'}}>Speedex Users Data</div>}
        columns={[
       
          { title: 'Name', field: 'name',filtering:false},
          { title: 'Email', field: 'email', filtering:false },
          { title: 'Status', field: 'status' , },
          
        ]}
// data = a.map(()=>{
//   return {[]}
// })
     data =  {Users.map((data)=>{
       return  { name: `${data.firstName} ${data.lastName}`, email: data.email, status: data.isVerified ? 'Verified User': 'Not Verified', _id: data._id }
     })}
             
        actions={[
          {
            icon:Visibility,
            tooltip: 'View User',
            iconProps:{style:{color:'white'}},
            onClick: (event, rowData) => this.props.history.push(`/viewprofile/${rowData._id}`)
          }
        ]}
        options={{
          headerStyle: {
            backgroundColor: '#1c88bf',
            fontSize:'1.5rem',
            color: '#FFF'
          },
          rowStyle: {
            backgroundColor: '#f7f7f7',
          
          },
          titleStyle:{
            color:'#1c88bf',
            backgroundColor: '#1c88bf',
            fontSize: '5rem'
          },
          actionsCellStyle:{
            backgroundColor: '#1c88bf',
  
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
   Users: state.users
    };
}



export default connect(mapStateToProps)(ListUserPage);
 