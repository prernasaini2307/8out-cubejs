import React from "react";
import { Col, Row } from "antd";
import ChartRenderer from "../components/ChartRenderer";
import Dashboard from "../components/Dashboard";
import DashboardItem from "../components/DashboardItem";

const DashboardItems = [
  {
    id: 1,
    name: "Total Line Item Amount",
    vizState: {
      query: {
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
        "measures": [
          "CmsBartendrOrderlineitems.price"
        ],
        "segments": []
      },
      chartType: "number"
    },
    size: 8
  },
  {
    id: 2,
    name: "Total Items",
    vizState: {
      query: {
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
        "measures": [
          "CmsBartendrOrderprintinglineitems.count"
        ],
        "segments": []
      },
      chartType: "number"
    },
    size: 8
  },
  {
    id: 3,
    name: "Total Cancelled Amount",
    vizState: {
      query: {
        timeDimensions: [
          {
            "dimension": "CmsBartendrOrderlineitems.createddate",
            "dateRange": "This year"
          }
        ],
        order: {},
        filters: [
          {
            dimension: "CmsBartendrOrders.storeId",
            operator: "equals",
            values: [
              "10"
            ]
          },
          {
            dimension: "CmsBartendrOrderlineitems.status",
            operator: "equals",
            values: [
              "4"
            ]
          }
        ],
        dimensions: [],
        measures: [
          "CmsBartendrOrderlineitems.price"
        ],
        segments: []
      },
      chartType: "number"
    },
    size: 8
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
        "timeDimensions": [
          {
            "dimension": "CmsBartendrOrderlineitems.createddate",
            "dateRange": "Today"
          }
        ],
        order: {
          "CmsBartendrOrderlineitems.price": "desc"
        },
        filters: [
          {
            dimension: "CmsBartendrOrders.storeId",
            operator: "equals",
            values: [
              "10"
            ]
          },
        ],
        dimensions: [
          "CmsBartendrBartendrusers.username"
        ],
        measures: [
          "CmsBartendrOrderlineitems.price"
        ],
        segments: [],
        limit: 5
      },
      chartType: "pie"
    },
    size: 12
  },
  {
    id: 7,
    name: "Items",
    vizState: {
      query: {
        "timeDimensions": [
          {
            "dimension": "CmsBartendrOrderlineitems.createddate",
            "granularity": "month",
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
        "dimensions": [
          "CmsBartendrBartendrusers.username",
          "CmsBartendrOrders.Type",
          "CmsBartendrOrders.OrderCode",
          "CmsBartendrPrintings.totalamountInd",
          "CmsBartendrOrderlineitems.statusInfo",
          "CmsBartendrOrders.statusInfo",
          "CmsBartendrOrderlineitems.cancellationreason",
          "CmsBartendrOrderlineitems.paymenttype",
          "CmsBartendrCatalogues.name",
          "CmsBartendrOrderlineitems.discounts",
          "CmsBartendrOrderprintinglineitems.productname",
          "CmsBartendrProducts.sku",
          "CmsBartendrVats.Percentage",
          "CmsBartendrOrderlineitems.netprice",
          "CmsBartendrOrderlineitems.vatamt",
          "CmsBartendrOrderlineitems.pricewithvat",
          "CmsBartendrOrderlineitems.quantityInd",
          "CmsBartendrOrderlineitems.weight",
          "CmsBartendrProducts.measurement"
        ],
        "measures": [],
        "segments": []
      },
      chartType: "table",
      colums: [
        { title: "Created At", dataIndex: "CmsBartendrOrderlineitems.createddate" },
        { title: "Order Type", dataIndex: "CmsBartendrOrders.Type" },
        { title: "Assigned User", dataIndex: "CmsBartendrBartendrusers.username"},
        { title: "Product Status", dataIndex: "CmsBartendrOrderlineitems.statusInfo"},
        { title: "Order Status", dataIndex: "CmsBartendrOrders.statusInfo"},
        { title: "Reason", dataIndex: "CmsBartendrOrderlineitems.cancellationreason" },
        { title: "Payment Type", dataIndex: "CmsBartendrOrderlineitems.paymenttype" },
        { title: "Catalogue", dataIndex: "CmsBartendrCatalogues.name" },
        { title: "Discounts", dataIndex: "CmsBartendrOrderlineitems.discounts" },
        { title: "Product", dataIndex: "CmsBartendrOrderprintinglineitems.productname" },
        { title: "Sku", dataIndex: "CmsBartendrProducts.sku" },
        { title: "Order Code", dataIndex: "CmsBartendrOrders.OrderCode"},
        { title: "Vat(in %)", dataIndex: "CmsBartendrVats.Percentage"},
        { title: "Net Price", dataIndex: "CmsBartendrOrderlineitems.netprice"},
        { title: "Vat Price", dataIndex: "CmsBartendrOrderlineitems.vatamt"},
        { title: "Price", dataIndex: "CmsBartendrOrderlineitems.pricewithvat"},
        { title: "Quantity", dataIndex: "CmsBartendrOrderlineitems.quantityInd"},
        { title: "Measurement Unit", dataIndex: "CmsBartendrProducts.measurement"},
        { title: "Weight", dataIndex: "CmsBartendrOrderlineitems.weight"}
      ]
    },
    size: 24
  },
];

const ProductsPage = () => {
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

export default ProductsPage;
