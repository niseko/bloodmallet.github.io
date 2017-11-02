Highcharts.chart('warlock_demonology_beastlord', 
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
                178076,
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
                14299,
                0,
                6785,
                5865,
                7250,
                4977,
                9635,
                9797,
                9857,
                10485,
                12991,
                6529,
                8636,
                10271,
                8474,
                7002,
                8344,
                9499,
                9488,
                9280,
                11361,
                9152,
                4720,
                4115,
                5629,
                10943,
                6055,
                6761,
                5965,
                9541,
                0,
                6365,
                7807,
                5512,
                5044,
                4437,
                2252,
                0,
                0,
                3820,
                7022,
                4010,
                12901,
                2581,
                3348,
                6805,
                8317,
                1700,
                504,
                0
            ],
            name: "940"
        },
        {
            color: "#db843d",
            data: [
                17243,
                0,
                1806,
                8338,
                10103,
                11382,
                11148,
                4162,
                11910,
                9415,
                6024,
                11043,
                9716,
                9491,
                5684,
                10433,
                5845,
                5912,
                7104,
                6790,
                9951,
                8059,
                10239,
                8612,
                8182,
                6776,
                7534,
                6449,
                7227,
                4554,
                8400,
                8288,
                0,
                1808,
                9647,
                8757,
                7402,
                0,
                0,
                7268,
                4034,
                365,
                3392,
                4192,
                3208,
                7368,
                93,
                6699,
                1495,
                1599
            ],
            name: "930"
        },
        {
            color: "#4198af",
            data: [
                12641,
                0,
                11363,
                6448,
                5646,
                8147,
                3169,
                11705,
                6309,
                2228,
                15760,
                10798,
                4244,
                11796,
                10267,
                1759,
                8283,
                10023,
                6818,
                7569,
                6732,
                3913,
                5122,
                9905,
                8624,
                7902,
                5984,
                13201,
                6940,
                4816,
                3442,
                98,
                12444,
                9743,
                4558,
                7723,
                6946,
                0,
                0,
                2641,
                0,
                6280,
                5810,
                3469,
                3156,
                1540,
                2874,
                0,
                3005,
                805
            ],
            name: "920"
        },
        {
            color: "#71588f",
            data: [
                17507,
                0,
                704,
                7872,
                10000,
                4622,
                11532,
                6821,
                5967,
                2697,
                5575,
                6400,
                8866,
                4491,
                7576,
                9361,
                7595,
                4720,
                5128,
                4060,
                3692,
                7112,
                8582,
                1442,
                6008,
                8714,
                6340,
                1185,
                9412,
                3489,
                6385,
                9161,
                4350,
                2568,
                3918,
                2653,
                3319,
                0,
                0,
                4548,
                8253,
                1028,
                1979,
                4163,
                3429,
                0,
                2875,
                1584,
                5428,
                0
            ],
            name: "910"
        },
        {
            color: "#89a54e",
            data: [
                6642,
                0,
                8938,
                6849,
                8786,
                6873,
                3645,
                6657,
                8018,
                11722,
                9124,
                3015,
                5161,
                10917,
                0,
                5280,
                7310,
                5095,
                9747,
                3773,
                12751,
                6122,
                4902,
                7375,
                78780,
                3622,
                3606,
                5032,
                0,
                2483,
                4004,
                1187,
                768,
                7136,
                4900,
                552,
                3273,
                3007,
                7647,
                0,
                2073,
                0,
                3419,
                1717,
                2075,
                5977,
                832,
                1544,
                0,
                4531
            ],
            name: "900"
        },
        {
            color: "#aa4643",
            data: [
                149532,
                0,
                2805,
                115107,
                8216,
                7911,
                5173,
                3741,
                6833,
                3642,
                3976,
                4506,
                4790,
                6137,
                10004,
                1263,
                6513,
                7585,
                3137,
                4835,
                5445,
                5632,
                6774,
                3909,
                0,
                8404,
                3088,
                10854,
                7209,
                76472,
                79089,
                5802,
                3800,
                3931,
                70760,
                7555,
                5728,
                8789,
                3089,
                10350,
                1904,
                2718,
                10657,
                5085,
                5634,
                0,
                5006,
                3563,
                974,
                999
            ],
            name: "890"
        },
        {
            color: "#4572a7",
            data: [
                0,
                0,
                130709,
                0,
                92824,
                92959,
                90945,
                91802,
                85346,
                91834,
                76255,
                86732,
                84351,
                72471,
                82025,
                88316,
                77717,
                77022,
                78091,
                82872,
                66084,
                74044,
                72729,
                75148,
                0,
                60454,
                72752,
                60080,
                68459,
                0,
                0,
                70078,
                71247,
                68598,
                0,
                63958,
                66495,
                80248,
                74883,
                56783,
                59412,
                66339,
                39904,
                55639,
                53002,
                48354,
                45972,
                41005,
                45659,
                37361
            ],
            name: "880"
        }
    ],
    subtitle: {
        text: "UTC 2017-10-24 18:22 SimC build: <a href=\"https://github.com/simulationcraft/simc/commit/04bdb16ef310da8dd10607d537f94af64966705e\" target=\"blank\">04bdb16</a>"
    },
    title: {
        text: "Warlock - Demonology - Beastlord"
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
            "Spectral Thurible",
            "Kil'jaeden's Burning Wish",
            "Unstable Arcanocrystal",
            "Charm of the Rising Tide",
            "Whispers in the Dark",
            "Aran's Relaxing Ruby",
            "Icon of Rot",
            "Fury of the Burning Sky",
            "Erratic Metronome",
            "Chrono Shard",
            "Star Gate",
            "Stat Stick (Haste)",
            "Dreadstone of Endless Shadows",
            "Deteriorated Construct Core",
            "Stat Stick (Mastery)",
            "Eyasu's Mulligan",
            "Padawsen's Unlucky Charm",
            "Stat Stick (Versatility)",
            "Stormsinger Fulmination Charge",
            "Stat Stick (Crit)",
            "Reality Breacher",
            "PVP Badge of Dominance",
            "Infernal Writ",
            "Toe Knee's Promise",
            "Tome of Unraveling Sanity",
            "Bough of Corruption",
            "Obelisk of the Void",
            "Twisting Wind",
            "Eye of Skovald",
            "Tarnished Sentinel Medallion",
            "Astral Alchemist Stone",
            "Corrupted Starlight",
            "Horn of Valor",
            "PVP Insignia of Dominance",
            "Terror From Below",
            "Moonlit Prism",
            "Caged Horror",
            "Darkmoon Deck: Hellfire",
            "Infernal Alchemist Stone",
            "Elementium Bomb Squirrel Generator",
            "Swarming Plaguehive",
            "Unstable Horrorslime",
            "Portable Manacracker",
            "Devilsaur Shock-Baton",
            "Oakheart's Gnarled Root",
            "Wriggling Sinew",
            "Mrrgria's Favor",
            "Pharameres Forbidden Grimoire",
            "Naraxas' Spiked Tongue",
            "Figurehead of the Naglfar"
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
                    text: "mean at 109547",
                    verticalAlign: "bottom",
                    x: 10,
                    y: -25
                },
                value: 109547.38,
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