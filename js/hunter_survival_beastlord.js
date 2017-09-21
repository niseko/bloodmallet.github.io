Highcharts.chart('hunter_survival_beastlord', 
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
                231408,
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
                17871,
                7935,
                12804,
                10243,
                13002,
                9648,
                9272,
                11761,
                13504,
                13117,
                3084,
                11878,
                11680,
                13106,
                5565,
                10653,
                5557,
                7521,
                9612,
                6895,
                6613,
                14313,
                6181,
                10681,
                13822,
                9971,
                14758,
                6457,
                3986,
                10003,
                8606,
                0,
                4506,
                0,
                7560,
                7040,
                7093,
                0,
                9298,
                8466,
                2290,
                5168,
                4246,
                14967,
                3733,
                4713,
                1292
            ],
            name: "940"
        },
        {
            color: "#db843d",
            data: [
                0,
                12618,
                17925,
                14628,
                16148,
                9024,
                13741,
                7037,
                9580,
                13081,
                11651,
                18560,
                9034,
                6710,
                7456,
                10973,
                8693,
                12468,
                9286,
                11113,
                7404,
                15060,
                7526,
                6445,
                10233,
                7173,
                11139,
                4493,
                9978,
                9689,
                12392,
                6556,
                0,
                8360,
                0,
                6046,
                4714,
                8802,
                6140,
                0,
                2383,
                5898,
                5026,
                3331,
                2383,
                2373,
                0,
                1670
            ],
            name: "930"
        },
        {
            color: "#4198af",
            data: [
                0,
                12337,
                6983,
                8035,
                10582,
                4495,
                8527,
                8414,
                7597,
                5980,
                11443,
                7672,
                8524,
                12561,
                12322,
                11917,
                7674,
                10040,
                9028,
                7839,
                7269,
                10463,
                11127,
                11415,
                9508,
                9973,
                4319,
                9472,
                3509,
                9276,
                7474,
                455,
                0,
                3761,
                0,
                8859,
                10898,
                6064,
                7699,
                6150,
                5037,
                0,
                2868,
                582,
                6548,
                2305,
                4555,
                7135
            ],
            name: "920"
        },
        {
            color: "#71588f",
            data: [
                0,
                7406,
                11452,
                14065,
                3978,
                13778,
                8308,
                3579,
                9642,
                6575,
                12099,
                6203,
                6173,
                7927,
                1991,
                11145,
                3872,
                1014,
                8379,
                9484,
                6386,
                6498,
                6715,
                2919,
                8109,
                11672,
                8811,
                5372,
                10208,
                8959,
                3421,
                9618,
                0,
                6666,
                0,
                4875,
                2361,
                0,
                4787,
                0,
                9082,
                6658,
                4561,
                4836,
                11676,
                804,
                1405,
                0
            ],
            name: "910"
        },
        {
            color: "#89a54e",
            data: [
                0,
                15630,
                2736,
                4636,
                12385,
                7413,
                5689,
                2315,
                10866,
                7766,
                99519,
                11508,
                6366,
                2292,
                8623,
                2474,
                8035,
                12636,
                9030,
                725,
                11206,
                4858,
                5821,
                4927,
                9574,
                4601,
                10253,
                11094,
                4126,
                2244,
                8868,
                4076,
                6795,
                3668,
                4052,
                4679,
                4108,
                1882,
                8907,
                5348,
                1784,
                5979,
                771,
                5762,
                1066,
                9725,
                3406,
                5455
            ],
            name: "900"
        },
        {
            color: "#aa4643",
            data: [
                0,
                11584,
                9603,
                113835,
                8361,
                4954,
                9194,
                9530,
                3922,
                11512,
                0,
                7821,
                10265,
                12159,
                9608,
                6431,
                2134,
                4866,
                90179,
                15425,
                3563,
                12713,
                79862,
                9193,
                6101,
                4529,
                4042,
                5041,
                10443,
                8210,
                9163,
                4699,
                3276,
                78228,
                12205,
                70309,
                4909,
                7290,
                0,
                3024,
                0,
                0,
                2172,
                0,
                6011,
                605,
                2392,
                4983
            ],
            name: "890"
        },
        {
            color: "#4572a7",
            data: [
                0,
                96063,
                111916,
                0,
                100638,
                108755,
                99176,
                108420,
                95074,
                89435,
                0,
                90630,
                90705,
                88596,
                87997,
                92282,
                98039,
                88538,
                0,
                77819,
                85250,
                71058,
                0,
                84172,
                67076,
                68808,
                70827,
                68893,
                72408,
                73331,
                63670,
                73753,
                97419,
                0,
                88687,
                0,
                59074,
                58390,
                61590,
                65355,
                49186,
                55038,
                50292,
                52640,
                23404,
                40102,
                36518,
                29857
            ],
            name: "880"
        }
    ],
    subtitle: {
        text: "Last generated: 2017-08-15 01:36:19"
    },
    title: {
        text: "Hunter - Survival - Beastlord"
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
            "Bloodthirsty Instinct",
            "Cradle of Anguish",
            "Chaos Talisman",
            "Eye of Command",
            "Stat Stick (Haste)",
            "Unstable Arcanocrystal",
            "Stat Stick (Versatility)",
            "Chrono Shard",
            "Specter of Betrayal",
            "PVP Badge of Conquest",
            "Nightmare Egg Shell",
            "Entwined Elemental Foci",
            "Memento of Angerboda",
            "Stat Stick (Crit)",
            "Convergence of Fates",
            "Thrice-Accursed Compass",
            "Engine of Eradication",
            "Stat Stick (Mastery)",
            "Horn of Valor",
            "Six-Feather Fan",
            "Vial of Ceaseless Toxins",
            "PVP Insignia of Conquest",
            "Nightblooming Frond",
            "Tirathon's Betrayal",
            "Tempered Egg of Serpentrix",
            "Bloodstained Handkerchief",
            "Terrorbound Nexus",
            "Gift of Radiance",
            "Splinters of Agronax",
            "Mark of Dargrul",
            "Darkmoon Deck: Dominion",
            "Umbral Moonglaives",
            "Infernal Alchemist Stone",
            "Infernal Cinders",
            "Tiny Oozeling in a Jar",
            "Toe Knee's Promise",
            "Giant Ornamental Pearl",
            "Nature's Call",
            "The Devilsaur's Bite",
            "Spiked Counterweight",
            "Ravaged Seed Pod",
            "Faulty Countermeasure",
            "Draught of Souls",
            "Spontaneous Appendages",
            "Windscar Whetstone",
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
                    text: "mean at 120669",
                    verticalAlign: "bottom",
                    x: 10,
                    y: -25
                },
                value: 120669.375,
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