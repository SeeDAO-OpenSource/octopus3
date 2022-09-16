<template>
  <div class="panel br-6 ">
    <div class="custom-table panel-body p-0">
      <!-- <div
        class="d-flex flex-wrap px-3 pt-3 pb-0"
        style="justify-content: end;"
      >
        <b-button variant="primary" class="m-1" @click="export_table('csv')"
          >CSV</b-button
        >
        <json-excel
          class="btn btn-primary m-1"
          name="table.xls"
          :fields="excel_columns()"
          :data="excel_items()"
          >Excel</json-excel
        >
        <b-button variant="primary" class="m-1" @click="export_table('print')"
          >Print</b-button
        >
        <b-button variant="primary" class="m-1" @click="export_table('pdf')"
          >PDF</b-button
        >
      </div> -->
      <div class="table-header">
        <div class="d-flex align-items-center">
          <span>Results :</span>
          <span class="ml-2">
            <b-select v-model="table_option.page_size" size="sm">
              <b-select-option value="5">5</b-select-option>
              <b-select-option value="10">10</b-select-option>
              <b-select-option value="20">20</b-select-option>
              <b-select-option value="50">50</b-select-option>
            </b-select>
          </span>
        </div>
        <div class="header-search">
          <b-input
            v-model="table_option.search_text"
            size="sm"
            placeholder="Search..."
          />
          <div class="search-image">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              stroke-width="2"
              stroke-linecap="round"
              stroke-linejoin="round"
              class="feather feather-search"
            >
              <circle cx="11" cy="11" r="8"></circle>
              <line x1="21" y1="21" x2="16.65" y2="16.65"></line>
            </svg>
          </div>
        </div>
      </div>

      <b-table
        ref="basic_table"
        responsive
        hover
        :items="orders"
        :fields="columns"
        :per-page="table_option.page_size"
        :current-page="table_option.current_page"
        :filter="table_option.search_text"
        sort-by="name"
        :show-empty="true"
        @filtered="on_filtered"
      >
        <template #cell(openTime)="row">
          {{
            new Date(1000 * row.item.openTime).getUTCFullYear() +
            "/" +
            (1 + new Date(1000 * row.item.openTime).getUTCMonth()) +
            "/" +
            new Date(1000 * row.item.openTime).getUTCDate() +
            " " +
            new Date(1000 * row.item.openTime)
              .getUTCHours()
              .toString()
              .padStart(2, "0") +
            ":" +
            new Date(1000 * row.item.openTime)
              .getUTCMinutes()
              .toString()
              .padStart(2, "0") +
            ":" +
            new Date(1000 * row.item.openTime)
              .getUTCSeconds()
              .toString()
              .padStart(2, "0")
          }}
        </template>
        
      </b-table>

      <div class="table-footer">
        <div class="dataTables_info">
          Showing {{ meta.total_items ? meta.start_index + 1 : 0 }} to
          {{ meta.end_index + 1 }} of {{ meta.total_items }}
        </div>
        <div
          class="paginating-container pagination-solid flex-column align-items-right"
        >
          <b-pagination
            v-model="table_option.current_page"
            :total-rows="table_option.total_rows"
            :per-page="table_option.page_size"
            prev-text="Prev"
            next-text="Next"
            first-text="First"
            last-text="Last"
            first-class="first"
            prev-class="prev"
            next-class="next"
            last-class="last"
            class="rounded"
          >
            <template #first-text>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="M11 19l-7-7 7-7m8 14l-7-7 7-7"
                />
              </svg>
            </template>
            <template #prev-text>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="M15 19l-7-7 7-7"
                />
              </svg>
            </template>
            <template #next-text>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="M9 5l7 7-7 7"
                />
              </svg>
            </template>
            <template #last-text>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="M13 5l7 7-7 7M5 5l7 7-7 7"
                />
              </svg>
            </template>
          </b-pagination>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
//excel export
// import JsonExcel from "vue-json-excel";

//pdf export
import jsPDF from "jspdf";
import "jspdf-autotable";

export default {
  props: ["orders"],
  metaInfo: { title: "Bootstrap Export Table" },
  components: {  }, // JsonExcel
  data() {
    return {
      items: [],
       columns: [
        {
          key: "openTime",
          label: "GMT Time",
          thClass: "text-center w-90",
          sortable: true,
        },
        { key: "quotation.name", label: "Quotation", sortable: true },
        { key: "side", label: "Side", sortable: true },
        { key: "orderPrice", label: "Price", sortable: true },
        { key: "totalVolume", label: "Total Volume", sortable: true },      
        { key: "orderId", label: "Order Id", sortable: true },
      ],
      table_option: {
        total_rows: 0,
        current_page: 1,
        page_size: 50,
        search_text: "",
      },
      meta: {},
    };
  },
  watch: {
    table_option: {
      handler: function() {
        this.get_meta();
      },
      deep: true,
    },
  },
  mounted() {
    this.bind_data();
  },
  methods: {
    bind_data() {
      
      this.items = [
        {
          time: "2011/04/25",
          side: "sell",
          type: "Limit",
          volume: "20000",
          price: "9.998888",
          order_id: "3132006684",
        }
      ];

      this.table_option.total_rows = this.orders.length;
      this.get_meta();
    },
    on_filtered(filtered_items) {
      this.refresh_table(filtered_items.length);
    },
    refresh_table(total) {
      this.table_option.total_rows = total;
      this.table_option.currentPage = 1;
    },
    get_meta() {
      var startPage;
      var endPage;
      var totalPages =
        this.table_option.page_size < 1
          ? 1
          : Math.ceil(
              this.table_option.total_rows / this.table_option.page_size
            );
      totalPages = Math.max(totalPages || 0, 1);

      var maxSize = 5;
      var isMaxSized = typeof maxSize !== "undefined" && maxSize < totalPages;
      if (isMaxSized) {
        startPage = Math.max(
          this.table_option.current_page - Math.floor(maxSize / 2),
          1
        );
        endPage = startPage + maxSize - 1;

        if (endPage > totalPages) {
          endPage = totalPages;
          startPage = endPage - maxSize + 1;
        }
      } else {
        startPage = 1;
        endPage = totalPages;
      }
      let startIndex =
        (this.table_option.current_page - 1) * this.table_option.page_size;
      let endIndex = Math.min(
        startIndex + this.table_option.page_size - 1,
        this.table_option.total_rows - 1
      );

      var pages = Array.from(Array(endPage + 1 - startPage).keys()).map(
        (i) => startPage + i
      );
      this.meta = {
        total_items: this.table_option.total_rows,
        current_page: this.table_option.current_page,
        page_size: this.table_option.page_size,
        total_pages: totalPages,
        start_page: startPage,
        end_page: endPage,
        start_index: startIndex,
        end_index: endIndex,
        pages: pages,
      };
    },

    //Export pdf/csv/print
    export_table(type) {
      let cols = this.columns.filter(
        (d) => d.key != "thumb" && d.key != "action"
      );
      let records = this.items;
      let filename = "table";

      if (type == "csv") {
        let coldelimiter = ",";
        let linedelimiter = "\n";
        let result = cols
          .map((d) => {
            return d.label;
          })
          .join(coldelimiter);
        result += linedelimiter;
        records.map((item) => {
          cols.map((d, index) => {
            if (index > 0) {
              result += coldelimiter;
            }
            let val = item[d.key] ? item[d.key] : "";
            result += val;
          });
          result += linedelimiter;
        });

        if (result == null) return;
        if (
          !result.match(/^data:text\/csv/i) &&
          !window.navigator.msSaveOrOpenBlob
        ) {
          var data =
            "data:application/csv;charset=utf-8," + encodeURIComponent(result);
          var link = document.createElement("a");
          link.setAttribute("href", data);
          link.setAttribute("download", filename + ".csv");
          link.click();
        } else {
          var blob = new Blob([result]);
          if (window.navigator.msSaveOrOpenBlob) {
            window.navigator.msSaveBlob(blob, filename + ".csv");
          }
        }
      } else if (type == "print") {
        var rowhtml = "<p>" + filename + "</p>";
        rowhtml +=
          '<table style="width: 100%; " cellpadding="0" cellcpacing="0"><thead><tr style="color: #515365; background: #eff5ff; -webkit-print-color-adjust: exact; print-color-adjust: exact; "> ';
        cols.map((d) => {
          rowhtml += "<th>" + d["label"] + "</th>";
        });
        rowhtml += "</tr></thead>";
        rowhtml += "<tbody>";

        records.map((item) => {
          rowhtml += "<tr>";
          cols.map((d) => {
            let val = item[d.key] ? item[d.key] : "";
            rowhtml += "<td>" + val + "</td>";
          });
          rowhtml += "</tr>";
        });
        rowhtml +=
          "<style>body {font-family:Arial; color:#495057;}p{text-align:center;font-size:18px;font-weight:bold;margin:15px;}table{ border-collapse: collapse; border-spacing: 0; }th,td{font-size:12px;text-align:left;padding: 4px;}th{padding:8px 4px;}tr:nth-child(2n-1){background:#f7f7f7; }</style>";
        rowhtml += "</tbody></table>";
        var winPrint = window.open(
          "",
          "",
          "left=0,top=0,width=1000,height=600,toolbar=0,scrollbars=0,status=0"
        );
        winPrint.document.write("<title>Print</title>" + rowhtml);
        winPrint.document.close();
        winPrint.focus();
        winPrint.print();
        winPrint.close();
      } else if (type == "pdf") {
        cols = cols.map((d) => {
          return { header: d.label, dataKey: d.key };
        });
        const doc = new jsPDF("l", "pt", cols.length > 10 ? "a3" : "a4");
        doc.autoTable({
          headStyles: { fillColor: "#eff5ff", textColor: "#515365" },
          columns: cols,
          body: records,
          styles: { overflow: "linebreak" },
          pageBreak: "auto",
          margin: { top: 45 },
          didDrawPage: () => {
            doc.text("Export Table", cols.length > 10 ? 535 : 365, 30);
          },
        });
        doc.save(filename + ".pdf");
      }
    },
    excel_columns() {
      return {
        Name: "name",
        Position: "position",
        Office: "office",
        Age: "age",
        "Start Date": "start_date",
        Salary: "salary",
      };
    },
    excel_items() {
      return this.items;
    },
  },
};
</script>
