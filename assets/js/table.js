$( document ).ready(function() {

    // Datatables and chart
    var table = $('#posts_table').DataTable({
        "lengthMenu": [[5, 10, 25, 50, -1], [5, 10, 25, 50, "All"]],
        responsive: {
            details: {
                type: 'column'
            }
        },
        searchPanes:{
            threshold: 1,
            columns: [ 4, 5 ] // which columns are tagged in the filtering pane
        },
        columnDefs: [{
                className: 'dtr-control',
                orderable: false,
                targets:   0
            },
            { visible: false, searchable: false, targets: -1 },
            { responsivePriority: 1, targets: 0 },
            { responsivePriority: 1, targets: -2 },
            { 
                // categories and tages need to be rendered as a array for the search panes
                targets: 4,
                render: function (data, type, row) {
                  if (type === 'sp') {
                    return data.split(', ') 
                  }
                  return data;
                },
                searchPanes: {
                  orthogonal:'sp'
                }
            },
            {
                targets: 5,
                render: function (data, type, row) {
                  if (type === 'sp') {
                    return data.split(', ')
                  }
                  return data;
                },
                searchPanes: {
                  orthogonal:'sp'
                }
            }
        ]
    });

    // To be able to click on the whole row to go to the post page, show mouse cursor and add link to row
    $('#posts_table tbody').on('mouseenter', 'tr > td:not(.child)', function () {
        if (table.cell(this).index().column>0) {
            this.style.cursor = 'pointer';
        }
    });

    $('#posts_table tbody').on('click', 'tr > td:not(.child)', function () {
        if (table.cell(this).index().column>0) {
            var data = table.row(this).data();
            window.location.href = data[data.length-1];
        }
    });

    var chartContainer = $('#table_chart');
    var searchContainer = $('#table_filter');


    table.searchPanes.container().prependTo(searchContainer);
    table.searchPanes.rebuildPane();


    // // Comment out this to show the categories chart
    // // The tags showns as a chart, see chartdata function to select which column is shown
    // var chart = Highcharts.chart(chartContainer[0], {
    //     chart: {
    //         type: 'pie',
    //         backgroundColor: '#fff',
    //     },
    //     title: {
    //         text: '',
    //     },
    //     series: [
    //         {
    //             data: chartData(table),
    //         },
    //     ],
    // });
 
    // // On each draw, update the data in the chart
    // table.on('draw', function () {
    //     chart.series[0].setData(chartData(table));
    // });

});


// // Comment out this to show the categories chart
// function chartData(table) {
//     var split_data = [];
//     var counts = {};
 
//     // Split the entries as they are string lists
//     table
//         .column(4, { search: 'applied' })
//         .data()
//         .each(function (val) {
//             split_data.push(...val.split(', '));
//         });

//     // Count the number of entries for each position
//     split_data.forEach(function (val) {
//             if (counts[val]) {
//                 counts[val] += 1;
//             } else {
//                 counts[val] = 1;
//             }
//         });
 
//     // And map it to the format highcharts uses
//     return $.map(counts, function (val, key) {
//         return {
//             name: key,
//             y: val,
//         };
//     });
// }