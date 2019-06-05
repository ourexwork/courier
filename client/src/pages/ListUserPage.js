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


}  from '@material-ui/icons';


class ListUserPage extends React.Component {
   
    render()
    {
      const { Users  } = this.props
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
title = { <div style={{fontSize:'1rem', color:'#1c88b'}}>Speedex Users Data</div>}
        columns={[
          { title: 'S/N', field: 'index',cellStyle:{
            backgroundColor:'#364051',
            width:'5px',
            fontSize:'1.2rem',
            color:'#fff'
          }, filtering:true},
          { title: 'Name', field: 'name',filtering:false,cellStyle:{
            fontSize:'1.2rem',
            color:'#fff'
          }},
          { title: 'Email', field: 'email', filtering:false ,cellStyle:{
            fontSize:'1.2rem',
            color:'#fff'
          }},
          { title: 'Status', field: 'status' ,cellStyle:{
            fontSize:'1.2rem',
            color:'#fff'
          } },
        
         ]
         
       
        }
// data = a.map(()=>{
//   return {[]}
// })
     data = {Users.map((data,index)=>{
       return  { index:index + 1, name:<span>{data.firstName}</span>, 
       email: data.email,
        status: 
        data.isVerified ? 'Verified User': 
         'Not Verified' , _id: data._id
        }
        
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
            backgroundColor: '#364051',
            fontSize:'1.2rem',
            color: '#FFF'
          },
          rowStyle:
           rowData => ({
 fontSize:'5px',backgroundColor:'#364051',

          }),
          fontSize:'5px'
                    ,
          titleStyle:{
            color:'#364051',
            backgroundColor: '#364051',
            fontSize: '3rem'
          },
          actionsCellStyle:{
            backgroundColor: '#364051',
  
          },
          rowData:{
            backgroundColor: '#364051',
            fontSize:'3rem'
          },
          filterCellStyle: {
            backgroundColor: '#fff',
            fontSize:'3rem'
          },
          columnStyle:{
            backgroundColor: '#364051',
            fontSize:'3rem',
            textAlign:'center'
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
 