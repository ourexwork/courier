import React from "react";
import { connect } from "react-redux";
import { CircularProgress } from "@material-ui/core";
import {
  $grey,
  $blue,
  $dark_blue,
  $white,
  $light_red,
  $light_pink,
  $dark_green
} from "../materialstyle/baseStyle/baseStyle";

import MaterialTable from "material-table";
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
  Visibility,
  ShoppingBasket
} from "@material-ui/icons";

class ListShipmentPage extends React.Component {
  componentDidMount() {}

  render() {
    const { Shipments, data = "loading" } = this.props;

    const loadShipment = Shipments.map((data, index) => {
      return {
        index: index + 1,
        name: data.name,
        sender: `${data.sender.firstName} ${data.sender.lastName} ${
          data.sender.email
        }`,
        status: data.shipmentStatus,
        current_location: data.currentLocation,
        delivery_location: data.deliveryAddress.address,
        price: data.payment.amount,
        _id: data._id
      };
    });

    return (
      <div className="container mt-5">
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
          title={
            <div style={{ fontSize: "1rem", color: "#1c88b" }}>
              Speedex Shipment Data
            </div>
          }
          columns={[
            {
              title: "S/N",
              field: "index",
              cellStyle: {
                // backgroundColor:'#1c88bf',
                fontSize: "1.2rem",
                color: $dark_green,
                width: "10px"
              }
            },
            {
              title: "sender info",
              field: "sender",
              cellStyle: {
                // backgroundColor:'#1c88bf',
                fontSize: "1rem",
                color: $dark_green,
                width: "10px"
              }
            },
            {
              title: "order name",
              field: "name",
              cellStyle: {
                fontSize: "1.2rem",
                color: $dark_green
              }
            },
            {
              title: "current location",
              field: "current_location",
              cellStyle: {
                fontSize: "1.2rem",
                color: $dark_green
              }
            },
            {
              title: "delivery location",
              field: "delivery_location",
              cellStyle: {
                fontSize: "1rem",
                color: $dark_green
              }
            },
            {
              title: "shipment status",
              field: "status",
              cellStyle: {
                fontSize: "1.2rem",
                color: $dark_green
              }
            },
            {
              title: "price",
              field: "price",
              cellStyle: {
                fontSize: "1.2rem",
                color: $dark_green
              }
            }
          ]}
          // data = a.map(()=>{
          //   return {[]}
          // })
          data={loadShipment}
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
                  View Shipment
                </div>
              ),
              iconProps: { style: { color: $blue } },
              onClick: (event, rowData) =>
                this.props.history.push(`/edit/${rowData._id}`)
            },
            {
              icon: ShoppingBasket,
              tooltip: (
                <div
                  style={{
                    fontSize: "15px",
                    background: $dark_blue,
                    color: $white,
                    margin: "1px"
                  }}
                >
                  View Order History
                </div>
              ),
              iconProps: { style: { color: $light_red } },
              onClick: (event, rowData) =>
                alert("You want to view history " + rowData.name)
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
              backgroundColor: rowData.index % 2 === 0 ? $light_pink : "#f6edff"
            }),

            titleStyle: {
              color: $grey,
              backgroundColor: $grey,
              fontSize: "3rem"
            },
            actionsCellStyle: {
              // backgroundColor: $grey
            },
            rowData: {
              color: $white,
              fontSize: "1rem"
            },
            filterCellStyle: {
              fontSize: "3rem",
              color: $blue,
              fontColor: $blue
            },
            columnStyle: {
              // backgroundColor: $grey,
              fontSize: "3rem",
              textAlign: "center"
            },
            backgroundColor: $blue,
            filtering: true
          }}
          localization={{
            // pagination: {
            //     labelDisplayedRows: '{from}-{to} of {count}'
            // },
            // toolbar: {
            //     nRowsSelected: '{0} row(s) selected'
            // },
            // header: {
            //     actions: 'Actions'
            // },
            body: {
              emptyDataSourceMessage:
                data === "loading" ? (
                  <CircularProgress />
                ) : (
                  "No Records to Display"
                ),
              filterRow: {
                filterTooltip: "Filter"
              }
            }
          }}
        />
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    Shipments: state.shipments
  };
};

export default connect(mapStateToProps)(ListShipmentPage);
