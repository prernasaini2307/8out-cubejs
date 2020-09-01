import React from "react";
import { Col, Row } from "antd";
import ChartRenderer from "../components/ChartRenderer";
import Dashboard from "../components/Dashboard";
import DashboardItem from "../components/DashboardItem";

const DashboardItems = [
  {
    id: 1,
    name: "Total Orders",
    vizState: {
      query: {
        "measures": [
          "CmsBartendrOrders.count"
        ],
        "timeDimensions": [
          {
            "dimension": "CmsBartendrOrderlineitems.createddate",
            "dateRange": "This year"
          }
        ],
        "order": {},
        "filters": [
          {
            "dimension": "CmsBartendrOrders.storeId",
            "operator": "equals",
            "values": [
              "10"
            ]
          }
        ],
        "dimensions": [],
        "segments": [
          "CmsBartendrOrderlineitems.istreat"
        ]
      },
      chartType: "number"
    },
    size: 12
  },
  {
    id: 2,
    name: "Total Amount",
    vizState: {
      query: {
        "measures": [
          "CmsBartendrOrderprintinglineitems.originalpricesum"
        ],
        "timeDimensions": [
          {
            "dimension": "CmsBartendrOrderlineitems.createddate",
            "dateRange": "This year"
          }
        ],
        "order": {},
        "filters": [
          {
            "dimension": "CmsBartendrOrders.storeId",
            "operator": "equals",
            "values": [
              "10"
            ]
          }
        ],
        "dimensions": [],
        "segments": [
          "CmsBartendrOrderlineitems.istreat"
        ]
      },
      chartType: "number"
    },
    size: 12
  },
/*  {
    id: 3,
    name: "Progress",
    vizState: {
      query: {
        order: {
          "CmsBartendrOrders.createddate": "asc"
        },
        measures: [
          "CmsBartendrOrders.totalamount"
        ],
        timeDimensions: [
          {
            "dimension": "CmsBartendrOrders.createddate",
            "granularity": "hour",
            "dateRange": "Today"
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
            "dimension": "CmsBartendrOrders.status",
            "operator": "equals",
            "values": [
              "5"
            ]
          }
        ],
        dimensions: [],
        segments: [
          "CmsBartendrOrders.shiftStatus"
        ]
      },
      chartType: "line"
    },
    size: 12
  },
  {
    id: 4,
    name: "Top 5 in revenue",
    vizState: {
      query: {
        order: {},
        measures: [
          "CmsBartendrOrders.totalamount"
        ],
        timeDimensions: [
          {
            "dimension": "CmsBartendrOrders.createddate",
            "granularity": "day",
            "dateRange": "Today"
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
            "dimension": "CmsBartendrOrders.status",
            "operator": "equals",
            "values": [
              "5"
            ]
          }
        ],
        dimensions: [
          "CmsBartendrBartendrusers.firstname",
          "CmsBartendrOrders.user",
          "CmsBartendrBartendrusers.lastname"
        ],
        segments: [
          "CmsBartendrOrders.shiftStatus"
        ],
      },
      chartType: "pie"
    },
    size: 12
  },
  {
    id: 5,
    name: "Report",
    vizState: {
      query: {
        timeDimensions: [
          {
            dimension: "CmsBartendrOrderprintinglineitems.createddate",
            granularity: "day"
          }
        ],
        order: {
          "CmsBartendrOrderprintinglineitems.totalpricesum": "desc"
        },
        filters: [
          {
            dimension: "CmsBartendrPrintings.storeId",
            operator: "equals",
            values: [
              "10"
            ]
          }
        ],
        measures: [
          "CmsBartendrOrderprintinglineitems.totalpricesum",
          "CmsBartendrOrderprintinglineitems.netpricesum",
          "CmsBartendrOrderprintinglineitems.vatpricesum"
        ],
        dimensions: [
          "CmsBartendrVats.Percentage"
        ]
      },
      chartType: "table",
      colums: [
        { title: "Created At", dataIndex: "CmsBartendrOrderprintinglineitems.createddate" },
        { title: "Vat Percent", dataIndex: "CmsBartendrVats.Percentage" },
        { title: "Net Amount", dataIndex: "CmsBartendrOrderprintinglineitems.netpricesum" },
        { title: "Vat Amount", dataIndex: "CmsBartendrOrderprintinglineitems.vatpricesum"},
        { title: "Total", dataIndex: "CmsBartendrOrderprintinglineitems.totalpricesum"}
      ]
    },
    size: 24
  },*/
];

const TreatPage = () => {
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
      <h2>There are no charts on this Page</h2>
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

export default TreatPage;
