Highcharts.chart('druid_feral_beastlord', 
{
    chart: {
        type: "bar"
    },
    legend: {
        align: "right",
        backgroundColor: (Highcharts.theme && Highcharts.theme.background2) || 'white',
        borderColor: "#CCC",
        borderWidth: 1,
        floating: false,
        reversed: true,
        shadow: false,
        verticalAlign: "bottom",
        x: 0,
        y: 0
    },
    plotOptions: {
        bar: {
            dataLabels: {
                color: (Highcharts.theme && Highcharts.theme.dataLabelsColor) || 'white',
                enabled: false
            },
            point: {
                events: {
                    click: function (event) {                var chart = this.series.yAxis;                chart.removePlotLine('helperLine');                chart.addPlotLine({                    value: this.stackY,                    color: '#000',                    width: 2,                    id: 'helperLine',                    zIndex: 5,                    label: {                      text: this.series.name + ' ' + this.category,                      align: 'left',                      verticalAlign: 'bottom',                      rotation: 0,                      y: -5                    }                });              }
                }
            },
            stacking: "normal"
        },
        series: {
            borderColor: "#151515",
            events: {
                legendItemClick: function() { return false; }
            }
        }
    },
    series: [
        {
            color: "#ffeb3b",
            data: [
                217937,
                0,
                0,
                0,
                0,
                0,
                0,
                0,
                0,
                0,
                0,
                0,
                0,
                0,
                0,
                0,
                0,
                0,
                0,
                0,
                0,
                0,
                0,
                0,
                0,
                0,
                0,
                0,
                0,
                0,
                0,
                0,
                0,
                0,
                0,
                0,
                0,
                0,
                0,
                0,
                0,
                0,
                0,
                0,
                0,
                0,
                0,
                0,
                0,
                0
            ],
            name: "970"
        },
        {
            color: "#00E676",
            data: [
                0,
                10300,
                9188,
                9949,
                12219,
                14506,
                8642,
                8897,
                8853,
                8978,
                10680,
                8019,
                11122,
                8220,
                5777,
                8783,
                8481,
                10381,
                6393,
                9821,
                8588,
                7289,
                11667,
                8316,
                9131,
                8578,
                7000,
                9844,
                0,
                7652,
                6064,
                8404,
                10436,
                13810,
                3891,
                9505,
                0,
                1861,
                0,
                6170,
                3629,
                6261,
                5345,
                4876,
                8470,
                4909,
                8257,
                0,
                5433,
                3493
            ],
            name: "940"
        },
        {
            color: "#db843d",
            data: [
                0,
                17244,
                8803,
                15699,
                10753,
                11106,
                8900,
                4520,
                10085,
                5779,
                5317,
                11112,
                7319,
                9470,
                3591,
                7021,
                7061,
                4926,
                10302,
                5345,
                7662,
                6247,
                7288,
                11028,
                7833,
                9176,
                9528,
                6539,
                10699,
                6961,
                3601,
                11920,
                4160,
                4044,
                7197,
                2393,
                0,
                5975,
                0,
                1639,
                4854,
                728,
                4802,
                4052,
                465,
                2367,
                11830,
                7083,
                0,
                289
            ],
            name: "930"
        },
        {
            color: "#4198af",
            data: [
                0,
                7912,
                8050,
                6451,
                7739,
                8560,
                10688,
                12319,
                5750,
                9958,
                11441,
                5323,
                10230,
                5593,
                2099,
                5260,
                6669,
                10859,
                6298,
                6625,
                8426,
                13409,
                6121,
                4527,
                5787,
                8319,
                6618,
                10305,
                3540,
                3746,
                12209,
                6116,
                7485,
                8742,
                5363,
                7937,
                0,
                8126,
                0,
                7147,
                4823,
                8375,
                1554,
                6513,
                5523,
                8762,
                5888,
                2162,
                6136,
                3246
            ],
            name: "920"
        },
        {
            color: "#71588f",
            data: [
                0,
                10037,
                9209,
                5169,
                11008,
                3472,
                4910,
                3714,
                4936,
                6866,
                6372,
                8158,
                6298,
                5085,
                4602,
                7499,
                9282,
                6784,
                7661,
                7775,
                2010,
                7475,
                4711,
                9224,
                4343,
                5639,
                7531,
                5015,
                6731,
                8805,
                215,
                6370,
                5277,
                4071,
                8212,
                3733,
                0,
                3621,
                0,
                5452,
                3278,
                4556,
                8519,
                2550,
                1084,
                1774,
                976,
                3506,
                2920,
                0
            ],
            name: "910"
        },
        {
            color: "#89a54e",
            data: [
                0,
                9394,
                4188,
                99373,
                6857,
                7136,
                8902,
                8553,
                5046,
                4951,
                7335,
                7814,
                5096,
                7395,
                5857,
                9349,
                2415,
                6052,
                5463,
                3937,
                10441,
                5612,
                8928,
                8766,
                9797,
                3456,
                7221,
                4853,
                1871,
                774,
                10921,
                5225,
                8677,
                4715,
                2466,
                3456,
                5659,
                4463,
                8871,
                664,
                5699,
                1552,
                141,
                3389,
                701,
                565,
                8981,
                0,
                272,
                2238
            ],
            name: "900"
        },
        {
            color: "#aa4643",
            data: [
                0,
                7251,
                6532,
                0,
                7433,
                84449,
                4967,
                86887,
                8340,
                6348,
                0,
                4192,
                2122,
                83486,
                1175,
                6607,
                5841,
                1518,
                7841,
                9623,
                4737,
                9055,
                2996,
                3921,
                4115,
                5324,
                4204,
                66969,
                79999,
                8079,
                1784,
                3933,
                4419,
                1873,
                4979,
                67848,
                7956,
                4568,
                4031,
                581,
                3061,
                5732,
                5111,
                5364,
                5918,
                3734,
                4115,
                4965,
                3440,
                379
            ],
            name: "890"
        },
        {
            color: "#4572a7",
            data: [
                0,
                87816,
                91747,
                0,
                73470,
                0,
                81186,
                0,
                80405,
                79341,
                80543,
                75310,
                77587,
                0,
                95806,
                74380,
                78886,
                77929,
                73748,
                73557,
                74444,
                65462,
                70127,
                64958,
                68554,
                68499,
                62194,
                0,
                0,
                63806,
                64653,
                56437,
                57619,
                60768,
                63667,
                0,
                79101,
                58250,
                70292,
                61224,
                55203,
                52999,
                46507,
                44972,
                48418,
                47755,
                29235,
                44195,
                41493,
                42015
            ],
            name: "880"
        }
    ],
    subtitle: {
        text: "UTC 2017-10-24 18:22 SimC build: <a href=\"https://github.com/simulationcraft/simc/commit/04bdb16ef310da8dd10607d537f94af64966705e\" target=\"blank\">04bdb16</a>"
    },
    title: {
        text: "Druid - Feral - Beastlord"
    },
    tooltip: {
        backgroundColor: "#eee",
        borderColor: "#bbb",
        formatter: function() {        var s = '<b>'+ this.x +'</b>';        var cumulative_amount = 0;        for (var i = this.points.length - 1 ; i >= 0 ; i--) {            cumulative_amount += this.points[i].y;            if (this.points[i].y !== 0){                s += '<br/><span style=\"color: ' + this.points[i].series.color + '; font-weight: bold;\">' + this.points[i].series.name +'</span>: ' + cumulative_amount;            }        }        return s;      },
        headerFormat: "<b>{point.x}</b>",
        shared: true,
        style: {
            color: "black"
        }
    },
    xAxis: {
        categories: [
            "Kil'jaeden's Burning Wish",
            "Arcanogolem Digit",
            "Eye of Command",
            "Specter of Betrayal",
            "Void Stalker's Contract",
            "Umbral Moonglaives",
            "Chaos Talisman",
            "Cradle of Anguish",
            "Convergence of Fates",
            "Bloodthirsty Instinct",
            "Stat Stick (Crit)",
            "Terrorbound Nexus",
            "Stat Stick (Mastery)",
            "Engine of Eradication",
            "Unstable Arcanocrystal",
            "Stat Stick (Versatility)",
            "PVP Badge of Conquest",
            "Entwined Elemental Foci",
            "Memento of Angerboda",
            "Thrice-Accursed Compass",
            "Stat Stick (Haste)",
            "Nightblooming Frond",
            "Chrono Shard",
            "Six-Feather Fan",
            "Nightmare Egg Shell",
            "Gift of Radiance",
            "Tirathon's Betrayal",
            "Vial of Ceaseless Toxins",
            "Astral Alchemist Stone",
            "PVP Insignia of Conquest",
            "Horn of Valor",
            "Tempered Egg of Serpentrix",
            "Bloodstained Handkerchief",
            "Splinters of Agronax",
            "Mark of Dargrul",
            "Infernal Cinders",
            "Darkmoon Deck: Dominion",
            "Tiny Oozeling in a Jar",
            "Infernal Alchemist Stone",
            "Nature's Call",
            "Windscar Whetstone",
            "Giant Ornamental Pearl",
            "The Devilsaur's Bite",
            "Toe Knee's Promise",
            "Ravaged Seed Pod",
            "Faulty Countermeasure",
            "Draught of Souls",
            "Spontaneous Appendages",
            "Spiked Counterweight",
            "Ley Spark"
        ]
    },
    yAxis: {
        labels: {
            enabled: false
        },
        min: 0,
        plotLines: [
            {
                color: "#1E90FF",
                label: {
                    align: "left",
                    rotation: -90,
                    style: {
                        color: "#1E90FF"
                    },
                    text: "mean at 105737",
                    verticalAlign: "bottom",
                    x: 10,
                    y: -25
                },
                value: 105737.54,
                width: 2,
                zIndex: 2
            }
        ],
        stackLabels: {
            enabled: false,
            formatter: function() {            /* I need to figure out how to get the mean value here,            ** to allow the percent diff to mean as label            ** console.log(this); */            return;          },
            style: {
                color: (Highcharts.theme && Highcharts.theme.textColor) || 'white',
                fontWeight: "bold"
            }
        },
        title: {
            text: "\u0394 Damage per second"
        }
    }
});