Highcharts.chart('demon_hunter_havoc_beastlord', 
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
                0,
                256504,
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
                34906,
                0,
                12678,
                20199,
                16341,
                4601,
                21358,
                16043,
                14605,
                12970,
                7996,
                18554,
                16035,
                13396,
                16754,
                17537,
                10042,
                14561,
                13236,
                11932,
                11474,
                14613,
                9492,
                0,
                18845,
                9987,
                16510,
                18659,
                8775,
                20991,
                12492,
                6093,
                16625,
                0,
                10967,
                0,
                6326,
                76,
                8926,
                2096,
                7220,
                10256,
                5679,
                0,
                5103,
                0,
                10973,
                6651,
                0,
                1877
            ],
            name: "940"
        },
        {
            color: "#db843d",
            data: [
                30608,
                0,
                11120,
                13683,
                18025,
                15361,
                11402,
                9506,
                6630,
                10580,
                18618,
                12524,
                10327,
                8547,
                13253,
                7139,
                7975,
                14947,
                6779,
                8769,
                15225,
                9379,
                14514,
                17561,
                16805,
                10648,
                16886,
                6188,
                13113,
                6155,
                20725,
                12888,
                8550,
                0,
                10868,
                0,
                6563,
                5125,
                5990,
                2466,
                0,
                4763,
                840,
                7828,
                3638,
                12580,
                2487,
                0,
                8386,
                4884
            ],
            name: "930"
        },
        {
            color: "#4198af",
            data: [
                11987,
                0,
                15082,
                14148,
                10480,
                12128,
                22042,
                10802,
                14211,
                10055,
                12372,
                7069,
                15928,
                9512,
                17635,
                9621,
                10791,
                2197,
                12174,
                14265,
                15856,
                13148,
                9497,
                8830,
                10293,
                8865,
                9152,
                11418,
                2580,
                16123,
                867,
                17069,
                15792,
                0,
                9309,
                0,
                8099,
                9747,
                5637,
                14230,
                12340,
                1173,
                13345,
                4115,
                6244,
                1917,
                5446,
                0,
                0,
                4085
            ],
            name: "920"
        },
        {
            color: "#71588f",
            data: [
                27622,
                0,
                5975,
                11894,
                14360,
                0,
                4983,
                12141,
                12232,
                10715,
                7205,
                11320,
                7465,
                8489,
                6625,
                7739,
                10880,
                14339,
                12237,
                6873,
                901,
                9381,
                14708,
                0,
                9692,
                4328,
                10930,
                6402,
                9370,
                10681,
                13491,
                7674,
                10012,
                0,
                9176,
                0,
                9596,
                11475,
                3545,
                0,
                4200,
                8546,
                1437,
                5454,
                4983,
                0,
                5412,
                5502,
                9579,
                1020
            ],
            name: "910"
        },
        {
            color: "#89a54e",
            data: [
                26995,
                0,
                24078,
                14599,
                7003,
                11341,
                13416,
                6471,
                13701,
                18189,
                10917,
                8018,
                12437,
                14298,
                130984,
                10175,
                14415,
                13987,
                0,
                12035,
                12970,
                7291,
                5854,
                14780,
                4964,
                12594,
                8318,
                17075,
                7104,
                2074,
                3718,
                8630,
                0,
                0,
                7955,
                6949,
                7185,
                4249,
                0,
                703,
                3892,
                178,
                5712,
                1650,
                3202,
                6515,
                6790,
                7289,
                5997,
                4886
            ],
            name: "900"
        },
        {
            color: "#aa4643",
            data: [
                242736,
                0,
                4258,
                7795,
                9499,
                2276,
                125424,
                20426,
                134138,
                447,
                4533,
                8230,
                3186,
                11902,
                0,
                15134,
                10283,
                2079,
                15803,
                11131,
                10032,
                17779,
                6752,
                128508,
                11862,
                9648,
                7213,
                11088,
                8525,
                11268,
                102492,
                9548,
                14615,
                11873,
                8988,
                7009,
                967,
                93792,
                9732,
                7216,
                7386,
                6515,
                2824,
                3750,
                7062,
                1681,
                3674,
                0,
                0,
                0
            ],
            name: "890"
        },
        {
            color: "#4572a7",
            data: [
                0,
                0,
                146942,
                121415,
                124801,
                155373,
                0,
                122883,
                0,
                132012,
                130754,
                125499,
                125712,
                123391,
                0,
                116560,
                118805,
                119074,
                119808,
                109971,
                107862,
                102191,
                111177,
                0,
                94255,
                108618,
                93215,
                88938,
                107019,
                87174,
                0,
                86958,
                83124,
                133492,
                85748,
                123833,
                94647,
                0,
                87093,
                88296,
                71583,
                68119,
                68952,
                76752,
                58560,
                67787,
                40657,
                61953,
                51701,
                54309
            ],
            name: "880"
        }
    ],
    subtitle: {
        text: "2017-09-08 02:02 SimC build: 43201b2"
    },
    title: {
        text: "Demon_Hunter - Havoc - Beastlord"
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
            "Umbral Moonglaives",
            "Kil'jaeden's Burning Wish",
            "Eye of Command",
            "Arcanogolem Digit",
            "Chaos Talisman",
            "Unstable Arcanocrystal",
            "Cradle of Anguish",
            "PVP Badge of Conquest",
            "Engine of Eradication",
            "Stat Stick (Crit)",
            "Stat Stick (Versatility)",
            "Bloodthirsty Instinct",
            "Entwined Elemental Foci",
            "Stat Stick (Mastery)",
            "Specter of Betrayal",
            "Horn of Valor",
            "Memento of Angerboda",
            "Thrice-Accursed Compass",
            "Convergence of Fates",
            "Chrono Shard",
            "Stat Stick (Haste)",
            "Nightmare Egg Shell",
            "Gift of Radiance",
            "Astral Alchemist Stone",
            "Six-Feather Fan",
            "PVP Insignia of Conquest",
            "Void Stalker's Contract",
            "Nightblooming Frond",
            "Terrorbound Nexus",
            "Bloodstained Handkerchief",
            "Vial of Ceaseless Toxins",
            "Tirathon's Betrayal",
            "Splinters of Agronax",
            "Darkmoon Deck: Dominion",
            "Tempered Egg of Serpentrix",
            "Infernal Alchemist Stone",
            "Mark of Dargrul",
            "Infernal Cinders",
            "Tiny Oozeling in a Jar",
            "Nature's Call",
            "Giant Ornamental Pearl",
            "Spontaneous Appendages",
            "Faulty Countermeasure",
            "The Devilsaur's Bite",
            "Toe Knee's Promise",
            "Windscar Whetstone",
            "Draught of Souls",
            "Ley Spark",
            "Spiked Counterweight",
            "Ravaged Seed Pod"
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
                    text: "mean at 159358",
                    verticalAlign: "bottom",
                    x: 10,
                    y: -25
                },
                value: 159358.16,
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