var statsChart = null;
$(document).ready(function () {

    var data = {
        labels: [1, 2, 3, 4, 5, 6, 7],
        datasets: [
            {
                label: "Laurent",
                fillColor: "rgba(220,220,220,0.2)",
                strokeColor: "rgba(220,220,220,1)",
                pointColor: "rgba(220,220,220,1)",
                pointStrokeColor: "#fff",
                pointHighlightFill: "#fff",
                pointHighlightStroke: "rgba(220,220,220,1)",
                data: [14, 19, -2, 6, 14, 10, 1]
            }
        ]
    };

    var ctx = $("#stats").get(0).getContext("2d");
    statsChart = new Chart(ctx).Line(data, {bezierCurve: false});

    $("#legend").html(statsChart.generateLegend());
});

function test() {
    statsChart.addData([21], 1);
}

var app = angular.module('boardRecord', []);

app.controller('GameController', function ($scope) {
    $scope.games = [
        {
            'name': 'Ligretto'
            , 'img': {
                'grey': 'ligretto-grey.png'
                , 'colored': 'ligretto.png'
            }
        }
    ];
});

app.controller('PlayerController', function ($scope) {

    $scope.players = [];

    $scope.add = function (name) {
        if (name) {
            $scope.players.push({'name': name});
        }
    };
});