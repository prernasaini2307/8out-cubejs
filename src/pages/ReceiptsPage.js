import React from "react";
import { Col, Row } from "antd";
import ChartRenderer from "../components/ChartRenderer";
import Dashboard from "../components/Dashboard";
import DashboardItem from "../components/DashboardItem";

const DashboardItems = [
  {
    id: 1,
    name: "Receipts",
    vizState: {
      query: {
        measures: [
          "CmsBartendrPrintings.count"
        ],
        timeDimensions: [
          {
            dimension: "CmsBartendrPrintings.createddate",
            dateRange: ["2020-11-16T18:30:00.000Z","2020-11-18T07:58:30.857Z"]
          }
        ],
        order: {},
        segments: [
          "CmsBartendrOrders.shiftStatus"
        ],
        filters: [
          {
            "dimension": "CmsBartendrOrders.storeId",
            "operator": "equals",
            "values": [
              "10"
            ]
          },
          {
            "dimension": "CmsBartendrPrintings.type",
            "operator": "equals",
            "values": [
              "Receipt", "ReceiptReturn", "Invoice", "InvoiceReturn", "SelfDelivery", "Cancel"
            ]
          }
        ]
      },
      chartType: "number"
    },
    size: 8
  },
  {
    id: 2,
    name: "Total Amount",
    vizState: {
      query: {
        measures: [
          "CmsBartendrPrintings.totalamount"
        ],
        timeDimensions: [
          {
            dimension: "CmsBartendrPrintings.createddate",
            dateRange: ["2020-11-16T18:30:00.000Z","2020-11-18T07:58:30.857Z"]
          }
        ],
        order: {},
        segments: [
          "CmsBartendrOrders.shiftStatus"
        ],
        filters: [
          {
            dimension: "CmsBartendrOrders.storeId",
            operator: "equals",
            values: [
              "10"
            ]
          },
          {
            dimension: "CmsBartendrPrintings.type",
            operator: "equals",
            values: [
              "Receipt", "ReceiptReturn", "Invoice", "InvoiceReturn", "SelfDelivery", "Cancel"
            ]
          }
        ]
      },
      chartType: "number"
    },
    size: 8
  },
  {
    id: 3,
    name: "Total Items",
    vizState: {
      query: {
        measures: [
          "CmsBartendrPrintinglineitems.count"
        ],
        timeDimensions: [
          {
            dimension: "CmsBartendrPrintings.createddate",
            dateRange: ["2020-11-16T18:30:00.000Z","2020-11-18T07:58:30.857Z"]
          }
        ],
        order: {},
        segments: [
          "CmsBartendrOrders.shiftStatus"
        ],
        filters: [
          {
            dimension: "CmsBartendrOrders.storeId",
            operator: "equals",
            values: [
              "10"
            ]
          },
          {
            dimension: "CmsBartendrPrintings.type",
            operator: "equals",
            values: [
              "Receipt", "ReceiptReturn", "Invoice", "InvoiceReturn", "SelfDelivery", "Cancel"
            ]
          }
        ]
      },
      chartType: "number"
    },
    size: 8
  },
  {
    id: 4,
    name: "Progress",
    vizState: {
      query: {
        order: {
          "CmsBartendrPrintings.totalamount": "desc"
        },
        measures: [
          "CmsBartendrPrintings.totalamount"
        ],
        timeDimensions: [
          {
            "dimension": "CmsBartendrPrintings.createddate",
            "granularity": "week",
            "dateRange": "Last year"
          }
        ],
        filters: [
          {
            "dimension": "CmsBartendrOrders.storeId",
            "operator": "equals",
            "values": [
              "10"
            ]
          },
          {
            "dimension": "CmsBartendrPrintings.type",
            "operator": "equals",
            "values": [
              "Receipt",
              "ReceiptReturn",
              "Invoice",
              "InvoiceReturn",
              "SelfDelivery",
              "Cancel"
            ]
          }
        ],
        dimensions: [],
        segments: []
      },
      chartType: "line"
    },
    size: 12
  },
  {
    id: 5,
    name: "Top 5 in revenue",
    vizState: {
      query: {
        order: {
          "CmsBartendrPrintings.totalamount": "desc"
        },
        measures: [
          "CmsBartendrPrintings.totalamount"
        ],
        timeDimensions: [
          {
            "dimension": "CmsBartendrPrintings.createddate",
            "granularity": "week",
            "dateRange": "Last year"
          }
        ],
        filters: [
          {
            "dimension": "CmsBartendrOrders.storeId",
            "operator": "equals",
            "values": [
              "10"
            ]
          },
          {
            "dimension": "CmsBartendrPrintings.type",
            "operator": "equals",
            "values": [
              "Receipt",
              "ReceiptReturn",
              "Invoice",
              "InvoiceReturn",
              "SelfDelivery",
              "Cancel"
            ]
          }
        ],
        dimensions: [
          "CmsBartendrBartendrusers.username"
        ],
        segments: [
          // "CmsBartendrOrders.shiftStatus"
        ],
        limit:5
      },
      chartType: "pie"
    },
    size: 12
  },
  {
    id: 6,
    name: "Orders",
    vizState: {
      query: {
        dimensions: [
          "CmsBartendrPrintings.type",
          "CmsBartendrOrders.Type",
          "CmsBartendrPrintings.cashdesk",
          "CmsBartendrPrintings.status",
          "CmsBartendrOrders.tableId",
          "CmsBartendrOrders.OrderCode",
          "CmsBartendrPrintings.serialnumber",
          "CmsBartendrPrintings.totalamountInd"
        ],
        timeDimensions: [
          {
            dimension: "CmsBartendrPrintings.createddate",
            "dateRange": "Today"
          }
        ],
        order: {
          "CmsBartendrPrintings.type": "asc"
        },
        filters: [
          {
            dimension: "CmsBartendrOrders.storeId",
            operator: "equals",
            values: [
              "10"
            ]
          }
        ],
        segments: [
          "CmsBartendrOrders.shiftStatus"
        ]
      },
      chartType: "table",
      colums: [
        { title: "Created At", dataIndex: "CmsBartendrPrintings.createddate" },
        { title: "Print Type", dataIndex: "CmsBartendrPrintings.type" },
        { title: "Order Type", dataIndex: "CmsBartendrOrders.Type" },
        { title: "Cash Desk", dataIndex: "CmsBartendrPrintings.cashdesk"},
        { title: "Print Status", dataIndex: "CmsBartendrPrintings.status"},
        { title: "Table Id", dataIndex: "CmsBartendrOrders.tableId"},
        { title: "Order Code", dataIndex: "CmsBartendrOrders.OrderCode"},
        { title: "Print Serial", dataIndex: "CmsBartendrPrintings.serialnumber"},
        { title: "Total Amount", dataIndex: "CmsBartendrPrintings.totalamountInd"}
      ]
    },
    size: 24
  },
];

const ReceiptsPage = () => {
  const dashboardItem = item => (
    <Col
      span={24}
      lg={item.size}
      key={item.id}
      style={{
        marginBottom: "24px"
      }}
    >
      <DashboardItem title={item.name}>
        <ChartRenderer vizState={item.vizState} />
      </DashboardItem>
    </Col>
  );

  const Empty = () => (
    <div
      style={{
        textAlign: "center",
        padding: 12
      }}
    >
      <h2>There are no charts on this dashboard</h2>
    </div>
  );

  return DashboardItems.length ? (
    <div
      style={{
        padding: "0 12px 12px 12px",
        margin: "10px 8px"
      }}>
      <Row
        style={{
          padding: "0 20px"
        }}
      ></Row>
      <Row>
        <Dashboard dashboardItems={DashboardItems}>
          {DashboardItems.map(dashboardItem)}
        </Dashboard>
      </Row>
    </div>
  ) : (
    <Empty />
  );
};

export default ReceiptsPage;
