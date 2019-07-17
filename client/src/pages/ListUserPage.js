import React from "react";
import { connect } from "react-redux";
import {
  $grey,
  $blue,
  $dark_blue,
  $white,
  $light_pink
} from "../materialstyle/baseStyle/baseStyle";

import MaterialTable from "material-table";
import { withStyles } from "@material-ui/core/styles";
import clsx from "clsx";
import {
  SaveAlt,
  Search,
  Check,
  Clear,
  FirstPage,
  LastPage,
  ChevronLeft,
  ChevronRight,
  FilterList,
  Remove,
  ViewColumn,
  Visibility
} from "@material-ui/icons";
import Grid from "@material-ui/core/Grid";

class ListUserPage extends React.Component {
  render() {
    const { Users, classes } = this.props;
    const fixedHeightPaper = clsx(classes.paper, classes.fixedHeight);
    return (
      // <div className="container mt-5">

      <Grid container spacing={3}>
        <Grid item xs={12} md={8} lg={9}>
          <div className={classes.fixedHeightPaper}>
            <MaterialTable
              icons={{
                Search,
                Check,
                LastPage,
                FirstPage,
                DetailPanel: ChevronRight,
                NextPage: ChevronRight,
                PreviousPage: ChevronLeft,
                Export: SaveAlt,
                Filter: FilterList,
                ViewColumn,
                Clear: Clear,
                ResetSearch: Clear,
                ThirdStateCheck: Remove
              }}
              // headerStyle={{
              //   color:'blue'
              // }}
              title={
                <div
                  style={{
                    fontSize: "1.2rem",
                    fontWeight: "0.185",
                    color: $blue
                  }}
                >
                  Speedex Users Data
                </div>
              }
              columns={[
                {
                  title: "S/N",
                  field: "index",
                  cellStyle: {
                    // backgroundColor:$grey,
                    width: "3px",
                    fontSize: "1.2rem",
                    color: $grey
                  },
                  filtering: true
                },
                {
                  title: "Name",
                  field: "name",
                  filtering: false,
                  cellStyle: {
                    fontSize: "1.2rem",
                    color: $grey
                  }
                },
                {
                  title: "Email",
                  field: "email",
                  filtering: false,
                  cellStyle: {
                    fontSize: "1.2rem",
                    color: $grey
                  }
                },
                {
                  title: "Status",
                  field: "status",
                  cellStyle: {
                    fontSize: "1.2rem",
                    color: $grey
                  }
                }
              ]}
              // data = a.map(()=>{
              //   return {[]}
              // })
              data={Users.map((data, index) => {
                return {
                  index: index + 1,
                  name: <span>{data.firstName}</span>,
                  email: data.email,
                  status: data.isVerified ? "Verified User" : "Not Verified",
                  _id: data._id
                };
              })}
              actions={[
                {
                  icon: Visibility,
                  tooltip: (
                    <div
                      style={{
                        fontSize: "15px",
                        background: $dark_blue,
                        color: $white,
                        margin: "1px"
                      }}
                    >
                      View User
                    </div>
                  ),
                  iconProps: { style: { color: $blue } },
                  onClick: (event, rowData) =>
                    this.props.history.push(
                      `/dashboard/viewprofile/${rowData._id}`
                    )
                }
              ]}
              options={{
                headerStyle: {
                  backgroundColor: "#01579b",
                  fontSize: "1rem",

                  color: $white,
                  fontWeight: "0.185"
                },

                rowStyle: rowData => ({
                  backgroundColor:
                    rowData.index % 2 === 0 ? $light_pink : "#f6edff"
                }),
                titleStyle: {
                  color: $grey,
                  backgroundColor: $grey,
                  fontSize: "3rem"
                },
                actionsCellStyle: {
                  // backgroundColor: $grey
                },
                filterCellStyle: {
                  fontSize: "3rem",
                  color: $blue,
                  fontColor: $blue
                },
                // columnStyle: {
                //   // backgroundColor: $grey,
                //   fontSize: "3rem",
                //   textAlign: "center"
                // },
                backgroundColor: $blue,
                filtering: true,
                isLoading: true
              }}
              style={{
                backgroundColor: $dark_blue
              }}
            />
          </div>
        </Grid>
      </Grid>
    );
  }
}

const styles = theme => ({
  icon: {
    spacing: theme.spacing.unit,
    fontSize: 32
  },
  paper: {
    padding: theme.spacing(2),
    display: "flex",
    overflow: "auto",
    flexDirection: "column"
  },
  fixedHeight: {
    height: 240
  }
});

const mapStateToProps = state => {
  return {
    Users: state.users
  };
};

export default connect(mapStateToProps)(withStyles(styles)(ListUserPage));
