import React from "react";
import { Col, Row } from "antd";
import ChartRenderer from "../components/ChartRenderer";
import Dashboard from "../components/Dashboard";
import DashboardItem from "../components/DashboardItem";

const DashboardItems = [
  {
    id: 1,
    name: "Invoices",
    vizState: {
      query: {
        timeDimensions: [
          {
            dimension: "CmsBartendrPrintings.createddate",
            dateRange: "Today"
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
          }
        ],
        dimensions: [],
        measures: [
          "CmsBartendrPrintings.count"
        ],
        segments: []
      },
      chartType: "number"
    },
    size: 8
  },
  {
    id: 2,
    name: "Total Net 13",
    vizState: {
      query: {
        timeDimensions: [
          {
            dimension: "CmsBartendrOrderprintinglineitems.createddate",
            dateRange: "Today"
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
          }
        ],
        dimensions: [],
        measures: [
          "CmsBartendrOrderprintinglineitems.TotalNetsum13"
        ],
        segments: []
      },
      chartType: "number"
    },
    size: 8
  },
  {
    id: 3,
    name: "Total Net 24",
    vizState: {
      query: {
        timeDimensions: [
          {
            dimension: "CmsBartendrOrderprintinglineitems.createddate",
            dateRange: "Today"
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
          }
        ],
        dimensions: [],
        measures: [
          "CmsBartendrOrderprintinglineitems.TotalNetsum24"
        ],
        segments: []
      },
      chartType: "number"
    },
    size: 8
  },
  {
    id: 4,
    name: "Total Vat 13",
    vizState: {
      query: {
        timeDimensions: [
          {
            dimension: "CmsBartendrOrderprintinglineitems.createddate",
            dateRange: "Today"
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
          }
        ],
        dimensions: [],
        measures: [
          "CmsBartendrOrderprintinglineitems.TotalVatsum13"
        ],
        segments: []
      },
      chartType: "number"
    },
    size: 8
  },
  {
    id: 5,
    name: "Total Vat 24",
    vizState: {
      query: {
        timeDimensions: [
          {
            dimension: "CmsBartendrOrderprintinglineitems.createddate",
            dateRange: "Today"
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
          }
        ],
        dimensions: [],
        measures: [
          "CmsBartendrOrderprintinglineitems.TotalVatsum24"
        ],
        segments: []
      },
      chartType: "number"
    },
    size: 8
  },
  {
    id: 6,
    name: "Total Amount",
    vizState: {
      query: {
        timeDimensions: [
          {
            dimension: "CmsBartendrPrintings.createddate",
            dateRange: "Today"
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
          }
        ],
        dimensions: [],
        measures: [
          "CmsBartendrPrintings.totalamount"
        ],
        segments: []
      },
      chartType: "number"
    },
    size: 8
  },
  {
    id: 7,
    name: "Details",
    vizState: {
      query: {
        timeDimensions: [
          {
            dimension: "CmsBartendrOrderprintinglineitems.createddate",
            granularity: "day",
            dateRange: "Today"
          }
        ],
        order: {
          "CmsBartendrOrderprintinglineitems.TotalNetsum13": "desc"
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
        dimensions: [
          "CmsBartendrCustomerinvoicedetails.companyname",
          "CmsBartendrCustomerinvoicedetails.afm",
          "CmsBartendrCustomerinvoicedetails.doy",
          "CmsBartendrPrintinglineitems.VatPercentage"
        ],
        measures: [
          "CmsBartendrOrderprintinglineitems.TotalVatsum24",
          "CmsBartendrOrderprintinglineitems.TotalNetsum24",
          "CmsBartendrOrderprintinglineitems.TotalVatsum13",
          "CmsBartendrOrderprintinglineitems.TotalVatsum13",
          "CmsBartendrOrderprintinglineitems.totalpricesum"        ]
      },
      chartType: "table",
      colums: [
        { title: "Created At", dataIndex: "CmsBartendrOrderprintinglineitems.createddate" },
        { title: "Company Name", dataIndex: "CmsBartendrCustomerinvoicedetails.companyname" },
        { title: "AFM", dataIndex: "CmsBartendrCustomerinvoicedetails.afm" },
        { title: "DOY", dataIndex: "CmsBartendrCustomerinvoicedetails.doy"},
        { title: "Net Amount 13", dataIndex: "CmsBartendrOrderprintinglineitems.TotalNetsum13"},
        { title: "Vat Amount 13", dataIndex: "CmsBartendrOrderprintinglineitems.TotalVatsum13"},
        { title: "Net Amount 24", dataIndex: "CmsBartendrOrderprintinglineitems.TotalNetsum24"},
        { title: "Vat Amount 24", dataIndex: "CmsBartendrOrderprintinglineitems.TotalVatsum24"},
        { title: "Total Amount", dataIndex: "CmsBartendrOrderprintinglineitems.totalpricesum"}
      ]
    },
    size: 24
  },
];

const InvoicesPage = () => {
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

export default InvoicesPage;
