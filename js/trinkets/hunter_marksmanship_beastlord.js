Highcharts.chart('hunter_marksmanship_beastlord', 
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
                292892,
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
                9667,
                19267,
                4524,
                17613,
                13229,
                17812,
                7353,
                11559,
                10668,
                6788,
                17650,
                16447,
                13420,
                11795,
                17033,
                12890,
                13776,
                13214,
                17827,
                8499,
                1116,
                17793,
                12125,
                10824,
                8525,
                4184,
                16028,
                9810,
                0,
                9120,
                11224,
                6208,
                5944,
                4386,
                13384,
                8470,
                4426,
                7034,
                0,
                9336,
                6299,
                10324,
                3749,
                10632,
                1357,
                9965,
                6949
            ],
            name: "940"
        },
        {
            color: "#db843d",
            data: [
                0,
                6966,
                24248,
                11928,
                15898,
                15109,
                7524,
                11999,
                12869,
                12516,
                11354,
                6872,
                10025,
                7074,
                13715,
                5421,
                13528,
                7563,
                5865,
                6426,
                18159,
                9440,
                7267,
                5834,
                3244,
                9616,
                10259,
                7244,
                7961,
                10114,
                7667,
                12055,
                11724,
                9189,
                11469,
                5925,
                11796,
                6139,
                0,
                0,
                6019,
                2218,
                9580,
                7111,
                1365,
                8073,
                4866,
                0
            ],
            name: "930"
        },
        {
            color: "#4198af",
            data: [
                0,
                13659,
                15930,
                6209,
                8022,
                6070,
                17046,
                16570,
                9843,
                9290,
                19223,
                11423,
                9146,
                14905,
                10901,
                10408,
                15000,
                6873,
                13077,
                5868,
                5729,
                5700,
                8565,
                4934,
                12280,
                0,
                1933,
                3540,
                9395,
                12805,
                9560,
                7540,
                9103,
                6127,
                6735,
                9755,
                5863,
                518,
                8755,
                0,
                8600,
                11759,
                3721,
                1765,
                7137,
                7177,
                0,
                3770
            ],
            name: "920"
        },
        {
            color: "#71588f",
            data: [
                0,
                2508,
                20521,
                13970,
                6999,
                13137,
                7053,
                5751,
                8761,
                9662,
                6700,
                3859,
                3843,
                3391,
                9924,
                7872,
                7290,
                8601,
                8248,
                9286,
                13497,
                9027,
                9714,
                7797,
                5403,
                9215,
                7553,
                12013,
                8132,
                4814,
                5240,
                13814,
                10250,
                8720,
                7133,
                12869,
                9581,
                8759,
                2222,
                0,
                8427,
                5699,
                6630,
                7073,
                14318,
                7432,
                5611,
                0
            ],
            name: "910"
        },
        {
            color: "#89a54e",
            data: [
                0,
                2337,
                8709,
                8628,
                14671,
                12283,
                9424,
                10813,
                4890,
                6928,
                11541,
                10802,
                14420,
                7557,
                9424,
                9077,
                16462,
                9886,
                6782,
                11704,
                107930,
                10526,
                12000,
                10676,
                10880,
                52,
                4426,
                2468,
                6753,
                4785,
                7476,
                8167,
                10951,
                4767,
                7613,
                627,
                9797,
                2875,
                2278,
                11904,
                5739,
                99,
                1675,
                6454,
                1184,
                302,
                579,
                2717
            ],
            name: "900"
        },
        {
            color: "#aa4643",
            data: [
                0,
                15840,
                178103,
                2069,
                11983,
                13099,
                12645,
                142969,
                11082,
                9443,
                7587,
                11390,
                121680,
                128986,
                11472,
                7086,
                4187,
                10898,
                10785,
                3712,
                0,
                1855,
                4867,
                1878,
                7563,
                12874,
                3262,
                9921,
                93381,
                102175,
                896,
                3060,
                8162,
                3610,
                10447,
                9974,
                5009,
                0,
                9698,
                8362,
                7802,
                6891,
                6742,
                1264,
                5588,
                0,
                0,
                3446
            ],
            name: "890"
        },
        {
            color: "#4572a7",
            data: [
                0,
                236162,
                0,
                198650,
                158310,
                129086,
                129138,
                0,
                129279,
                125640,
                118401,
                115974,
                0,
                0,
                105469,
                114819,
                98157,
                104294,
                98099,
                100568,
                0,
                115041,
                80593,
                96825,
                87474,
                98887,
                104637,
                84940,
                0,
                0,
                91882,
                72985,
                69758,
                87698,
                76953,
                67417,
                65170,
                91087,
                82461,
                89314,
                62069,
                73391,
                65149,
                67039,
                51702,
                67815,
                63304,
                48541
            ],
            name: "880"
        }
    ],
    subtitle: {
        text: "UTC 2017-10-24 18:22 SimC build: <a href=\"https://github.com/simulationcraft/simc/commit/04bdb16ef310da8dd10607d537f94af64966705e\" target=\"blank\">04bdb16</a>"
    },
    title: {
        text: "Hunter - Marksmanship - Beastlord"
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
            "Convergence of Fates",
            "Spectral Thurible",
            "Unstable Arcanocrystal",
            "Bloodthirsty Instinct",
            "Fury of the Burning Sky",
            "Aran's Relaxing Ruby",
            "Cradle of Anguish",
            "Stat Stick (Haste)",
            "Chrono Shard",
            "Icon of Rot",
            "Entwined Elemental Foci",
            "Tarnished Sentinel Medallion",
            "Engine of Eradication",
            "Thrice-Accursed Compass",
            "Stat Stick (Mastery)",
            "Deteriorated Construct Core",
            "Stormsinger Fulmination Charge",
            "Stat Stick (Crit)",
            "Stat Stick (Versatility)",
            "Tome of Unraveling Sanity",
            "Moonlit Prism",
            "Twisting Wind",
            "Caged Horror",
            "PVP Badge of Conquest",
            "Toe Knee's Promise",
            "Obelisk of the Void",
            "PVP Insignia of Conquest",
            "Terror From Below",
            "Astral Alchemist Stone",
            "Corrupted Starlight",
            "Void Stalker's Contract",
            "Six-Feather Fan",
            "Horn of Valor",
            "Eye of Skovald",
            "Tirathon's Betrayal",
            "Nightblooming Frond",
            "Ley Spark",
            "Unstable Horrorslime",
            "Infernal Alchemist Stone",
            "Tempered Egg of Serpentrix",
            "Elementium Bomb Squirrel Generator",
            "Splinters of Agronax",
            "Oakheart's Gnarled Root",
            "Arcanogolem Digit",
            "Mrrgria's Favor",
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
                    text: "mean at 152923",
                    verticalAlign: "bottom",
                    x: 10,
                    y: -25
                },
                value: 152923.60416666666,
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