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
  {
    id: 3,
    name: "Progress",
    vizState: {
      query: {
        "measures": [
          "CmsBartendrOrderlineitems.discountsSum"
        ],
        "timeDimensions": [
          {
            "dimension": "CmsBartendrOrderlineitems.createddate",
            "granularity": "day",
            "dateRange": "This year"
          }
        ],
        "order": {},
        "dimensions": [],
        "filters": [
          {
            "dimension": "CmsBartendrOrders.storeId",
            "operator": "equals",
            "values": [
              "10"
            ]
          }
        ],
        "segments": [
          "CmsBartendrOrderlineitems.istreat"
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
        "measures": [
          "CmsBartendrOrderlineitems.discountsSum"
        ],
        "timeDimensions": [
          {
            "dimension": "CmsBartendrOrderlineitems.createddate",
            "dateRange": "This year"
          }
        ],
        "order": {
          "CmsBartendrOrderlineitems.discountsSum": "desc"
        },
        "dimensions": [
          "CmsBartendrBartendrusers.username"
        ],
        "filters": [
          {
            "dimension": "CmsBartendrOrders.storeId",
            "operator": "equals",
            "values": [
              "10"
            ]
          }
        ],
        "segments": [
          "CmsBartendrOrderlineitems.istreat"
        ],
        limit: 5,
      },
      chartType: "pie"
    },
    size: 12
  },
  {
    id: 5,
    name: "Treat",
    vizState: {
      query: {
        "dimensions": [
          "CmsBartendrCategories.name",
          "CmsBartendrBartendrusers.username",
          "CmsBartendrOrderlineitems.discounts",
          "CmsBartendrOrderlineitems.quantityInd",
          "CmsBartendrOrderprintinglineitems.productname",
          "CmsBartendrOrderprintinglineitems.vatPercentage",
          "CmsBartendrOrderprintinglineitems.OriginalVat",
          "CmsBartendrOrderprintinglineitems.OriginalNet",
          "CmsBartendrOrderprintinglineitems.OriginalPrice"
        ],
        "timeDimensions": [
          {
            "dimension": "CmsBartendrOrderlineitems.createddate",
            "granularity": "day",
            "dateRange": "This year"
          }
        ],
        "order": {
          "CmsBartendrCategories.name": "desc"
        },
        "filters": [
          {
            "dimension": "CmsBartendrOrders.storeId",
            "operator": "equals",
            "values": [
              "10"
            ]
          }
        ],
        "segments": [
          "CmsBartendrOrderlineitems.istreat"
        ]
      },
      chartType: "table",
      colums: [
        { title: "Created At", dataIndex: "CmsBartendrOrderlineitems.createddate" },
        { title: "Category", dataIndex: "CmsBartendrCategories.name" },
        { title: "Product", dataIndex: "CmsBartendrOrderprintinglineitems.productname" },
        { title: "By", dataIndex: "CmsBartendrBartendrusers.username"},
        { title: "Quantity", dataIndex: "CmsBartendrOrderlineitems.quantityInd"},
        { title: "Discount Amount", dataIndex: "CmsBartendrOrderlineitems.discounts"},
        { title: "Vat(%)", dataIndex: "CmsBartendrOrderprintinglineitems.vatPercentage"},
        { title: "Vat(amt)", dataIndex: "CmsBartendrOrderprintinglineitems.OriginalVat"},
        { title: "Net Price", dataIndex: "CmsBartendrOrderprintinglineitems.OriginalNet"},
        { title: "Total", dataIndex: "CmsBartendrOrderprintinglineitems.OriginalPrice"}
      ]
    },
    size: 24
  },
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
