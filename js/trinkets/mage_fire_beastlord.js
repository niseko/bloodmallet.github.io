Highcharts.chart('mage_fire_beastlord', 
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
                0,
                259876,
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
                18280,
                0,
                21346,
                11626,
                18758,
                9398,
                24444,
                13138,
                14991,
                5317,
                0,
                0,
                9582,
                11529,
                16072,
                13159,
                11637,
                3043,
                16172,
                0,
                18809,
                598,
                15069,
                4653,
                9182,
                0,
                5499,
                7840,
                5588,
                10424,
                14377,
                13151,
                2769,
                13951,
                0,
                7288,
                2594,
                8880,
                0,
                6141,
                5659,
                0,
                13490,
                6780,
                0,
                6036,
                0,
                0,
                3512
            ],
            name: "940"
        },
        {
            color: "#db843d",
            data: [
                27914,
                28388,
                0,
                13824,
                13263,
                16638,
                20195,
                12681,
                10694,
                14356,
                10376,
                6269,
                7241,
                15217,
                7104,
                13708,
                10140,
                13467,
                13713,
                13345,
                4282,
                178,
                7137,
                5566,
                13760,
                7368,
                11100,
                14549,
                7125,
                16329,
                2967,
                2258,
                5764,
                14642,
                7095,
                0,
                8616,
                12998,
                576,
                0,
                0,
                14839,
                1410,
                1094,
                9230,
                501,
                3386,
                5072,
                1672,
                0
            ],
            name: "930"
        },
        {
            color: "#4198af",
            data: [
                20133,
                15748,
                0,
                14394,
                22954,
                16862,
                18856,
                4656,
                13702,
                10441,
                6375,
                16849,
                17577,
                1424,
                9468,
                11930,
                7309,
                5477,
                10458,
                2612,
                17651,
                16076,
                18807,
                14616,
                6286,
                5282,
                8973,
                10813,
                8864,
                4487,
                10067,
                9784,
                9841,
                8271,
                14764,
                0,
                8796,
                11258,
                8984,
                0,
                8749,
                2949,
                6301,
                1202,
                0,
                11081,
                9244,
                0,
                2937,
                7139
            ],
            name: "920"
        },
        {
            color: "#71588f",
            data: [
                23418,
                25386,
                0,
                14915,
                17115,
                9311,
                9082,
                17552,
                15080,
                12631,
                9066,
                11910,
                14601,
                15533,
                1833,
                15072,
                11790,
                4737,
                5989,
                13734,
                9622,
                4469,
                0,
                10289,
                3981,
                13335,
                6578,
                6587,
                11798,
                6391,
                11115,
                5637,
                2468,
                7111,
                4871,
                0,
                1537,
                0,
                10379,
                0,
                3,
                2420,
                9624,
                6351,
                0,
                9709,
                0,
                6699,
                4928,
                0
            ],
            name: "910"
        },
        {
            color: "#89a54e",
            data: [
                20552,
                9503,
                0,
                12772,
                3208,
                7998,
                19193,
                4741,
                206,
                9294,
                542,
                11434,
                13432,
                1526,
                15085,
                610,
                10441,
                9525,
                10055,
                10636,
                12382,
                12258,
                7361,
                4254,
                12022,
                4971,
                5489,
                7800,
                16319,
                12519,
                7418,
                11433,
                92052,
                2708,
                6739,
                2638,
                12369,
                4457,
                0,
                7886,
                4515,
                0,
                0,
                4205,
                12517,
                3885,
                0,
                0,
                11744,
                0
            ],
            name: "900"
        },
        {
            color: "#aa4643",
            data: [
                20708,
                185436,
                0,
                16735,
                12838,
                13734,
                986,
                8393,
                8269,
                13515,
                2427,
                13216,
                14077,
                11031,
                3995,
                9341,
                1688,
                103892,
                3478,
                12726,
                13958,
                7746,
                10737,
                14270,
                10633,
                95794,
                101934,
                6588,
                5138,
                2737,
                5547,
                3802,
                0,
                4814,
                0,
                12548,
                0,
                72087,
                11482,
                7103,
                3957,
                8739,
                8505,
                7307,
                2920,
                7076,
                8735,
                736,
                1152,
                9305
            ],
            name: "890"
        },
        {
            color: "#4572a7",
            data: [
                182410,
                0,
                0,
                113740,
                125212,
                116796,
                107774,
                111104,
                110398,
                92079,
                131435,
                121519,
                119674,
                103647,
                108018,
                82673,
                94574,
                0,
                101427,
                78716,
                107388,
                85472,
                99420,
                77667,
                88865,
                0,
                0,
                81244,
                75316,
                84289,
                83619,
                77217,
                0,
                80781,
                72401,
                92575,
                68582,
                0,
                62944,
                86092,
                70663,
                56408,
                59665,
                49341,
                49917,
                69075,
                37282,
                31341,
                48678,
                18169
            ],
            name: "880"
        }
    ],
    subtitle: {
        text: "UTC 2017-10-24 18:22 SimC build: <a href=\"https://github.com/simulationcraft/simc/commit/04bdb16ef310da8dd10607d537f94af64966705e\" target=\"blank\">04bdb16</a>"
    },
    title: {
        text: "Mage - Fire - Beastlord"
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
            "Toe Knee's Promise",
            "Spectral Thurible",
            "Kil'jaeden's Burning Wish",
            "Star Gate",
            "Fury of the Burning Sky",
            "Aran's Relaxing Ruby",
            "Deteriorated Construct Core",
            "Icon of Rot",
            "Horn of Valor",
            "Reality Breacher",
            "Unstable Arcanocrystal",
            "Moonlit Prism",
            "Obelisk of the Void",
            "PVP Badge of Dominance",
            "Erratic Metronome",
            "Twisting Wind",
            "Chrono Shard",
            "Tarnished Sentinel Medallion",
            "Stat Stick (Versatility)",
            "Bough of Corruption",
            "Stat Stick (Haste)",
            "Whispers in the Dark",
            "Padawsen's Unlucky Charm",
            "Stat Stick (Mastery)",
            "Dreadstone of Endless Shadows",
            "Charm of the Rising Tide",
            "Astral Alchemist Stone",
            "Stormsinger Fulmination Charge",
            "Infernal Writ",
            "Stat Stick (Crit)",
            "PVP Insignia of Dominance",
            "Eye of Skovald",
            "Tome of Unraveling Sanity",
            "Eyasu's Mulligan",
            "Portable Manacracker",
            "Infernal Alchemist Stone",
            "Corrupted Starlight",
            "Terror From Below",
            "Caged Horror",
            "Darkmoon Deck: Hellfire",
            "Unstable Horrorslime",
            "Elementium Bomb Squirrel Generator",
            "Oakheart's Gnarled Root",
            "Wriggling Sinew",
            "Devilsaur Shock-Baton",
            "Swarming Plaguehive",
            "Mrrgria's Favor",
            "Naraxas' Spiked Tongue",
            "Pharameres Forbidden Grimoire",
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
                    text: "mean at 137764",
                    verticalAlign: "bottom",
                    x: 10,
                    y: -25
                },
                value: 137764.98,
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