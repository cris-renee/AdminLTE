// AdminLTE Dashboard JavaScript
// This file contains all the dashboard-specific JavaScript functionality

// OverlayScrollbars Configuration
const SELECTOR_SIDEBAR_WRAPPER = '.sidebar-wrapper';
const Default = {
  scrollbarTheme: 'os-theme-light',
  scrollbarAutoHide: 'leave',
  scrollbarClickScroll: true,
};

document.addEventListener('DOMContentLoaded', function () {
  const sidebarWrapper = document.querySelector(SELECTOR_SIDEBAR_WRAPPER);
  if (
    sidebarWrapper &&
    typeof OverlayScrollbarsGlobal?.OverlayScrollbars !== 'undefined'
  ) {
    OverlayScrollbarsGlobal.OverlayScrollbars(sidebarWrapper, {
      scrollbars: {
        theme: Default.scrollbarTheme,
        autoHide: Default.scrollbarAutoHide,
        clickScroll: Default.scrollbarClickScroll,
      },
    });
  }
});

// Sortable Configuration
document.addEventListener('DOMContentLoaded', function () {
  if (typeof Sortable !== 'undefined') {
    new Sortable(document.querySelector('.connectedSortable'), {
      group: 'shared',
      handle: '.card-header',
    });

    const cardHeaders = document.querySelectorAll('.connectedSortable .card-header');
    cardHeaders.forEach((cardHeader) => {
      cardHeader.style.cursor = 'move';
    });
  }
});

// ApexCharts Configuration
document.addEventListener('DOMContentLoaded', function () {
  if (typeof ApexCharts !== 'undefined') {
    // Sales Chart
    const sales_chart_options = {
      series: [
        {
          name: 'Digital Goods',
          data: [28, 48, 40, 19, 86, 27, 90],
        },
        {
          name: 'Electronics',
          data: [65, 59, 80, 81, 56, 55, 40],
        },
      ],
      chart: {
        height: 300,
        type: 'area',
        toolbar: {
          show: false,
        },
      },
      legend: {
        show: false,
      },
      colors: ['#0d6efd', '#20c997'],
      dataLabels: {
        enabled: false,
      },
      stroke: {
        curve: 'smooth',
      },
      xaxis: {
        type: 'datetime',
        categories: [
          '2023-01-01',
          '2023-02-01',
          '2023-03-01',
          '2023-04-01',
          '2023-05-01',
          '2023-06-01',
          '2023-07-01',
        ],
      },
      tooltip: {
        x: {
          format: 'MMMM yyyy',
        },
      },
    };

    const revenueChart = document.querySelector('#revenue-chart');
    if (revenueChart) {
      const sales_chart = new ApexCharts(revenueChart, sales_chart_options);
      sales_chart.render();
    }

    // Sparkline Charts
    const sparklineOptions = [
      {
        selector: '#sparkline-1',
        data: [1000, 1200, 920, 927, 931, 1027, 819, 930, 1021],
      },
      {
        selector: '#sparkline-2',
        data: [515, 519, 520, 522, 652, 810, 370, 627, 319, 630, 921],
      },
      {
        selector: '#sparkline-3',
        data: [15, 19, 20, 22, 33, 27, 31, 27, 19, 30, 21],
      },
    ];

    sparklineOptions.forEach((config) => {
      const element = document.querySelector(config.selector);
      if (element) {
        const options = {
          series: [
            {
              data: config.data,
            },
          ],
          chart: {
            type: 'area',
            height: 50,
            sparkline: {
              enabled: true,
            },
          },
          stroke: {
            curve: 'straight',
          },
          fill: {
            opacity: 0.3,
          },
          yaxis: {
            min: 0,
          },
          colors: ['#DCE6EC'],
        };

        const sparkline = new ApexCharts(element, options);
        sparkline.render();
      }
    });
  }
});

// JSVectorMap Configuration
document.addEventListener('DOMContentLoaded', function () {
  if (typeof jsVectorMap !== 'undefined') {
    const visitorsData = {
      US: 398, // USA
      SA: 400, // Saudi Arabia
      CA: 1000, // Canada
      DE: 500, // Germany
      FR: 760, // France
      CN: 300, // China
      AU: 700, // Australia
      BR: 600, // Brazil
      IN: 800, // India
      GB: 320, // Great Britain
      RU: 3000, // Russia
    };

    const worldMap = document.querySelector('#world-map');
    if (worldMap) {
      new jsVectorMap({
        selector: '#world-map',
        map: 'world',
        backgroundColor: 'transparent',
        regionStyle: {
          initial: {
            fill: 'rgba(13, 110, 253, 0.3)',
            stroke: '#007bff',
            strokeWidth: 1,
            'stroke-opacity': 1,
          },
          hover: {
            'fill-opacity': 0.7,
            cursor: 'pointer',
          },
        },
        series: {
          regions: [
            {
              values: visitorsData,
              scale: ['#E3F2FD', '#1565C0'],
              normalizeFunction: 'polynomial',
            },
          ],
        },
        onLoaded(map) {
          // Your custom functionality here if needed
        },
        onRegionTipShow(event, tip, code) {
          if (visitorsData[code]) {
            tip.html('<b>' + tip.html() + '</b></br>Visitors: ' + visitorsData[code]);
          }
        },
      });
    }
  }
});