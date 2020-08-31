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
        order: {},
        measures: [
          "CmsBartendrOrders.count"
        ],
        timeDimensions: [
          {
            "dimension": "CmsBartendrOrders.createddate",
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
            "operator": "lte",
            "values": [
              "3"
            ]
          }
        ],
        dimensions: [],
        segments: [
          "CmsBartendrOrders.shiftStatus"
        ]
      },
      chartType: "number"
    },
    size: 6
  },
  {
    id: 2,
    name: "Total Amount",
    vizState: {
      query: {
        order: {},
        measures: [
          "CmsBartendrOrders.totalamount"
        ],
        timeDimensions: [
          {
            "dimension": "CmsBartendrOrderlineitems.createddate",
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
            "operator": "lte",
            "values": [
              "3"
            ]
          }
        ],
        dimensions: [],
        segments: [
          "CmsBartendrOrders.shiftStatus"
        ]
      },
      chartType: "number"
    },
    size: 6
  },
  {
    id: 3,
    name: "Total Items",
    vizState: {
      query: {
        order: {},
        measures: [
          "CmsBartendrOrderlineitems.quantity"
        ],
        timeDimensions: [
          {
            "dimension": "CmsBartendrOrderlineitems.createddate",
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
            "operator": "lte",
            "values": [
              "3"
            ]
          }
        ],
        dimensions: [],
        segments: [
          "CmsBartendrOrders.shiftStatus"
        ]
      },
      chartType: "number"
    },
    size: 6
  },
  {
    id: 4,
    name: "Per Guest",
    vizState: {
      query: {
        order: {},
        measures: [
          "CmsBartendrOrders.avgamount"
        ],
        timeDimensions: [
          {
            "dimension": "CmsBartendrOrders.createddate",
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
            "operator": "lte",
            "values": [
              "3"
            ]
          }
        ],
        dimensions: [],
        segments: [
          "CmsBartendrOrders.shiftStatus"
        ]
      },
      chartType: "number"
    },
    size: 6
  },
  {
    id: 5,
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
    id: 6,
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
  /*{
    id: 7,
    name: "Last Events",
    vizState: {
      query: {
        measures: [],
        timeDimensions: [
          {
            dimension: "Events.timestamp"
          }
        ],
        dimensions: [
          "Events.anonymousId",
          "Events.eventType",
          "Events.minutesAgoHumanized",
          "Events.timestamp"
        ],
        filters: [],
        order: {
          "Events.timestamp": "desc"
        },
        limit: 10
      },
      chartType: "table"
    },
    size: 24
  },*/
];

const RevenuePage = () => {
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

export default RevenuePage;
