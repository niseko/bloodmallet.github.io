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
                242554,
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
                16049,
                5158,
                9351,
                9097,
                9547,
                18453,
                10509,
                6162,
                8753,
                9353,
                6401,
                8290,
                6953,
                13261,
                14191,
                6068,
                6796,
                8736,
                10944,
                14046,
                5864,
                9963,
                11314,
                16090,
                5816,
                10267,
                5116,
                9286,
                10786,
                0,
                2197,
                8127,
                7661,
                7727,
                10852,
                0,
                12410,
                3814,
                6448,
                4740,
                8157,
                539,
                6722,
                4210,
                1827,
                2789,
                0
            ],
            name: "940"
        },
        {
            color: "#db843d",
            data: [
                0,
                13028,
                6390,
                11366,
                11370,
                8641,
                5251,
                17996,
                13035,
                13625,
                10028,
                11666,
                8920,
                8716,
                11881,
                8359,
                15022,
                9675,
                11882,
                7297,
                5506,
                9723,
                3003,
                3336,
                13129,
                10712,
                15256,
                4653,
                6323,
                583,
                0,
                9671,
                991,
                5826,
                3610,
                5988,
                0,
                3018,
                4836,
                0,
                7723,
                1314,
                3951,
                1885,
                1817,
                4394,
                1208,
                9426
            ],
            name: "930"
        },
        {
            color: "#4198af",
            data: [
                0,
                19607,
                8482,
                16678,
                6421,
                9051,
                15014,
                7437,
                8521,
                2985,
                7219,
                9333,
                9580,
                10398,
                13288,
                4829,
                4353,
                11967,
                3223,
                9407,
                9551,
                6149,
                13134,
                6460,
                778,
                10554,
                7936,
                13130,
                6572,
                7828,
                0,
                7135,
                7723,
                3341,
                4177,
                4116,
                0,
                7815,
                4296,
                2273,
                0,
                4796,
                7434,
                6320,
                4025,
                0,
                2635,
                0
            ],
            name: "920"
        },
        {
            color: "#71588f",
            data: [
                0,
                10217,
                5939,
                4354,
                5231,
                11242,
                10805,
                4857,
                11159,
                12929,
                13595,
                5855,
                11436,
                15281,
                6412,
                10183,
                6536,
                4261,
                9205,
                6541,
                5570,
                8450,
                7218,
                7374,
                10761,
                5778,
                6579,
                3761,
                2994,
                0,
                0,
                1830,
                8589,
                6813,
                8211,
                0,
                0,
                10086,
                810,
                4981,
                7063,
                3778,
                1645,
                0,
                1329,
                5063,
                2377,
                0
            ],
            name: "910"
        },
        {
            color: "#89a54e",
            data: [
                0,
                14757,
                6196,
                13574,
                4753,
                6174,
                8502,
                10370,
                1255,
                4538,
                7577,
                8134,
                1988,
                0,
                11243,
                6714,
                11525,
                10020,
                4632,
                9363,
                7049,
                7312,
                966,
                5059,
                10845,
                92622,
                5782,
                7706,
                10331,
                13741,
                5520,
                1270,
                0,
                5348,
                5917,
                10031,
                7010,
                883,
                5785,
                1141,
                6517,
                5664,
                5358,
                4556,
                3441,
                4316,
                0,
                7249
            ],
            name: "900"
        },
        {
            color: "#aa4643",
            data: [
                0,
                143741,
                3152,
                119022,
                9047,
                9430,
                12536,
                4033,
                12171,
                13228,
                10498,
                4124,
                6525,
                9068,
                4144,
                2948,
                1480,
                6075,
                7789,
                3382,
                7012,
                608,
                10280,
                2608,
                4988,
                0,
                7947,
                9872,
                2748,
                1108,
                9633,
                7424,
                77751,
                71989,
                9761,
                5548,
                524,
                8053,
                2118,
                28,
                0,
                1316,
                3655,
                1460,
                2638,
                3062,
                2357,
                0
            ],
            name: "890"
        },
        {
            color: "#4572a7",
            data: [
                0,
                0,
                153059,
                0,
                125420,
                103525,
                85750,
                100676,
                102981,
                97550,
                93417,
                102931,
                101100,
                100555,
                85040,
                95765,
                96891,
                91242,
                90924,
                89293,
                87127,
                96805,
                88052,
                92180,
                70294,
                0,
                69567,
                73994,
                79226,
                76285,
                94515,
                72632,
                0,
                0,
                61506,
                64387,
                88915,
                51287,
                70258,
                74974,
                63658,
                58450,
                57742,
                50189,
                47955,
                49515,
                42090,
                39234
            ],
            name: "880"
        }
    ],
    subtitle: {
        text: "Last generated: 2017-08-15 03:12:14"
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
            "Kil'jaeden's Burning Wish",
            "Spectral Thurible",
            "Unstable Arcanocrystal",
            "Charm of the Rising Tide",
            "Whispers in the Dark",
            "Erratic Metronome",
            "Star Gate",
            "Fury of the Burning Sky",
            "Stat Stick (Haste)",
            "Chrono Shard",
            "Aran's Relaxing Ruby",
            "Icon of Rot",
            "Dreadstone of Endless Shadows",
            "Padawsen's Unlucky Charm",
            "Deteriorated Construct Core",
            "Stat Stick (Mastery)",
            "Eyasu's Mulligan",
            "Stat Stick (Crit)",
            "Stat Stick (Versatility)",
            "Stormsinger Fulmination Charge",
            "Infernal Writ",
            "Toe Knee's Promise",
            "PVP Badge of Dominance",
            "Obelisk of the Void",
            "Twisting Wind",
            "Tome of Unraveling Sanity",
            "Bough of Corruption",
            "PVP Insignia of Dominance",
            "Horn of Valor",
            "Moonlit Prism",
            "Darkmoon Deck: Hellfire",
            "Eye of Skovald",
            "Terror From Below",
            "Tarnished Sentinel Medallion",
            "Corrupted Starlight",
            "Caged Horror",
            "Infernal Alchemist Stone",
            "Portable Manacracker",
            "Swarming Plaguehive",
            "Unstable Horrorslime",
            "Elementium Bomb Squirrel Generator",
            "Devilsaur Shock-Baton",
            "Oakheart's Gnarled Root",
            "Mrrgria's Favor",
            "Wriggling Sinew",
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
                    text: "mean at 125024",
                    verticalAlign: "bottom",
                    x: 10,
                    y: -25
                },
                value: 125024.02083333333,
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