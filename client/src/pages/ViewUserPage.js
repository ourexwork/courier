import React  from 'react';
import ViewProfile from '../components/ViewProfile'
import {connect } from 'react-redux'

class ViewUserPage extends React.Component {

render(){
    const {user } = this.props
    return (
        <div>
    
        <ViewProfile {...user} />
        </div>
    )
}

}

const mapStateToProps = (state, props) => ({
user: state.users.find((data)=>{
    return data._id === props.match.params.id
    
})
});

export default connect(mapStateToProps)(ViewUserPage)