import React from 'react';
import {connect } from 'react-redux';
import { startLogin} from '../redux/actions/auth';
import ListUser from '../components/ListUser';
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


class ListUserPage extends React.Component {
   
    render()
    {
      const { Users ,  dispatch } = this.props
        return(
        
            <div className="container mt-5">
            {console.log(Users)}
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
        title="Speedex Users Table"
        columns={[
          { title: 'Name', field: 'name' },
          { title: 'Email', field: 'email' },
          { title: 'Status', field: 'status' },
          
        ]}
// data = a.map(()=>{
//   return {[]}
// })
     data =  {Users.map((data)=>{
       return  { name: `${data.firstName} ${data.lastName}`, email: data.email, status: String(data.isVerified), _id: data._id }
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
   Users: state.users
    };
}



export default connect(mapStateToProps)(ListUserPage);
 