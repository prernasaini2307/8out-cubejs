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
            granularity: "day",
            dateRange: "This week"
          }
        ],
        order: {},
        filters: [
          {
            dimension: "CmsBartendrPrintings.storeId",
            operator: "equals",
            values: [
              "10"
            ]
          },
          {
            dimension: "CmsBartendrPrintings.status",
            operator: "equals",
            values: [
              "Active"
            ]
          },
          {
            dimension: "CmsBartendrPrintings.type",
            operator: "equals",
            values: [
              "Invoice",
              "InvoiceReturn",
              "Receipt",
              "ReceiptReturn",
              "SelfDelivery",
              "InvoiceCancel",
              "Cancel"
            ]
          }
        ]
      },
      chartType: "number"
    },
    size: 6
  },
  {
    id: 2,
    name: "Total Vat 13",
    vizState: {
      query: {
        measures: [
          "CmsBartendrOrderprintinglineitems.TotalVatsum13"
        ],
        timeDimensions: [
          {
            dimension: "CmsBartendrPrintings.createddate",
            granularity: "day",
            dateRange: "This week"
          }
        ],
        order: {},
        filters: [
          {
            dimension: "CmsBartendrPrintings.storeId",
            operator: "equals",
            values: [
              "10"
            ]
          },
          {
            dimension: "CmsBartendrPrintings.status",
            operator: "equals",
            values: [
              "Active"
            ]
          },
          {
            dimension: "CmsBartendrPrintings.type",
            operator: "equals",
            values: [
              "Invoice",
              "InvoiceReturn",
              "Receipt",
              "ReceiptReturn",
              "SelfDelivery",
              "InvoiceCancel",
              "Cancel"
            ]
          }
        ]
      },
      chartType: "number"
    },
    size: 6
  },
  {
    id: 3,
    name: "Total Vat 24",
    vizState: {
      query: {
        measures: [
          "CmsBartendrOrderprintinglineitems.TotalVatsum24"
        ],
        timeDimensions: [
          {
            dimension: "CmsBartendrPrintings.createddate",
            granularity: "day",
            dateRange: "This week"
          }
        ],
        order: {},
        filters: [
          {
            dimension: "CmsBartendrPrintings.storeId",
            operator: "equals",
            values: [
              "10"
            ]
          },
          {
            dimension: "CmsBartendrPrintings.status",
            operator: "equals",
            values: [
              "Active"
            ]
          },
          {
            dimension: "CmsBartendrPrintings.type",
            operator: "equals",
            values: [
              "Invoice",
              "InvoiceReturn",
              "Receipt",
              "ReceiptReturn",
              "SelfDelivery",
              "InvoiceCancel",
              "Cancel"
            ]
          }
        ]
      },
      chartType: "number"
    },
    size: 6
  },
  {
    id: 4,
    name: "Total Amount",
    vizState: {
      query: {
        measures: [
          "CmsBartendrPrintings.totalVatAmount"
        ],
        timeDimensions: [
          {
            dimension: "CmsBartendrPrintings.createddate",
            granularity: "day",
            dateRange: "This week"
          }
        ],
        order: {
          "CmsBartendrPrintings.createddate": "asc"
        },
        filters: [
          {
            dimension: "CmsBartendrPrintings.storeId",
            operator: "equals",
            values: [
              "10"
            ]
          },
          {
            dimension: "CmsBartendrPrintings.status",
            operator: "equals",
            values: [
              "Active"
            ]
          },
          {
            dimension: "CmsBartendrPrintings.type",
            operator: "equals",
            values: [
              "Receipt"
            ]
          }
        ],
        dimensions: []
      },
      chartType: "number"
    },
    size: 6
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
  },
];

const VatPage = () => {
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
        <Dashboard dashboardItems={DashboardItems}>
          {DashboardItems.map(dashboardItem)}
        </Dashboard>
    </div>
  ) : (
    <Empty />
  );
};

export default VatPage;
