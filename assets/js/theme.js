$( document ).ready(function() {

    // jQuery to collapse the navbar on scroll
    $(window).scroll(function() {
        if ($(".navbar").offset().top > 50) {
            $(".fixed-top").addClass("top-nav-collapse navbar-light");
        } else {
            $(".fixed-top").removeClass("top-nav-collapse navbar-light");
        }
    });

    // Smooth Scroll
    $('a.page-scroll').click(function(){
        $('html, body').animate({
            scrollTop: $( $.attr(this, 'href') ).offset().top
        }, 800);
        return false;
    });

    // Closes the Responsive Menu on Menu Item Click
    $('.navbar-collapse ul li a').click(function() {
        $('.navbar-toggle:visible').click();
    });


    // // Datatables and chart
    // var table = $('#posts_table').DataTable({
    //     "lengthMenu": [[5, 10, 25, 50, -1], [5, 10, 25, 50, "All"]],
    //     responsive: {
    //         details: {
	// 			type: 'column',
    //             target: 'tr',
	// 		}
    //     },
    //     columnDefs: [
    //         { responsivePriority: 1, targets: -1 },
    //     ]
    // });

    // var chartContainer = $('#table_chart');
    // var searchContainer = $('#table_filter');


    // new $.fn.dataTable.SearchPanes(table, {});
    // table.searchPanes.container().prependTo(searchContainer);
    // table.searchPanes.rebuildPane();


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

// function chartData(table) {
//     var counts = {};
 
//     // Count the number of entries for each position
//     table
//         .column(3, { search: 'applied' })
//         .data()
//         .each(function (val) {
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