Highcharts.chart('rogue_assassination_beastlord', 
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
                248438,
                0,
                0,
                0,
                0,
                0,
                0,
                0,
                0,
                0,
                0,
                0,
                0,
                0,
                0,
                0,
                0,
                0,
                0,
                0,
                0,
                0,
                0,
                0,
                0,
                0,
                0,
                0,
                0,
                0,
                0,
                0,
                0,
                0,
                0,
                0,
                0,
                0,
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
                12357,
                7878,
                15410,
                13749,
                11864,
                11813,
                10016,
                13766,
                9824,
                10625,
                14459,
                8403,
                11756,
                7280,
                8161,
                7568,
                7145,
                9633,
                11923,
                16406,
                9137,
                6605,
                10639,
                5859,
                5794,
                9818,
                9068,
                16154,
                8487,
                9892,
                9241,
                10538,
                0,
                0,
                2331,
                5908,
                6585,
                2439,
                0,
                7802,
                11560,
                6481,
                3381,
                3464,
                7982,
                124,
                0
            ],
            name: "940"
        },
        {
            color: "#db843d",
            data: [
                0,
                16178,
                10396,
                2992,
                10280,
                12603,
                23495,
                8054,
                7730,
                18189,
                16702,
                7688,
                11320,
                6607,
                12319,
                11772,
                16209,
                12719,
                12721,
                11720,
                11999,
                12081,
                4679,
                5845,
                10721,
                6278,
                14810,
                10635,
                4504,
                12976,
                12132,
                5073,
                751,
                0,
                0,
                8753,
                3798,
                5140,
                5064,
                4505,
                802,
                6011,
                364,
                13308,
                4957,
                5316,
                7917,
                2353
            ],
            name: "930"
        },
        {
            color: "#4198af",
            data: [
                0,
                12673,
                13871,
                11293,
                14710,
                6595,
                6559,
                8553,
                11562,
                1437,
                8087,
                4108,
                7725,
                10214,
                5749,
                6718,
                10171,
                8259,
                17051,
                6420,
                3190,
                4982,
                9019,
                8082,
                6757,
                4377,
                5377,
                7444,
                7372,
                8947,
                5960,
                8216,
                9159,
                0,
                0,
                0,
                8504,
                8582,
                7580,
                4573,
                885,
                5020,
                5587,
                572,
                3530,
                2649,
                3889,
                0
            ],
            name: "920"
        },
        {
            color: "#71588f",
            data: [
                0,
                9592,
                10199,
                10158,
                10534,
                8454,
                8142,
                10303,
                5362,
                14280,
                13882,
                14671,
                9427,
                8170,
                8735,
                9309,
                5798,
                7119,
                5410,
                7881,
                8203,
                11406,
                7811,
                10644,
                6817,
                2735,
                9624,
                3800,
                3308,
                7712,
                6733,
                6081,
                3958,
                0,
                0,
                10046,
                2011,
                0,
                1008,
                2846,
                5262,
                8913,
                6064,
                5284,
                3402,
                0,
                6279,
                65
            ],
            name: "910"
        },
        {
            color: "#89a54e",
            data: [
                0,
                9846,
                7945,
                10012,
                105283,
                10061,
                5607,
                5148,
                8009,
                5061,
                7979,
                7586,
                9763,
                11223,
                7749,
                10037,
                7467,
                9531,
                1486,
                5862,
                12746,
                9271,
                12478,
                9618,
                10774,
                1834,
                8582,
                5968,
                7079,
                4973,
                8276,
                6045,
                4799,
                11426,
                10557,
                781,
                3644,
                4887,
                5221,
                1884,
                1373,
                1647,
                0,
                1437,
                510,
                3651,
                0,
                1254
            ],
            name: "900"
        },
        {
            color: "#aa4643",
            data: [
                0,
                6195,
                111976,
                6534,
                0,
                8969,
                7104,
                5510,
                10177,
                14203,
                85085,
                5421,
                4208,
                2024,
                7451,
                5839,
                4523,
                7181,
                4029,
                6755,
                5232,
                8998,
                251,
                77837,
                5792,
                3023,
                3230,
                6692,
                6770,
                10670,
                3695,
                75162,
                3540,
                6475,
                2774,
                8390,
                1875,
                2794,
                58563,
                4926,
                8060,
                4867,
                5980,
                3578,
                2736,
                1552,
                651,
                1558
            ],
            name: "890"
        },
        {
            color: "#4572a7",
            data: [
                0,
                95791,
                0,
                101188,
                0,
                92903,
                84087,
                95672,
                86259,
                79560,
                0,
                88374,
                90999,
                91638,
                89392,
                85992,
                83357,
                81433,
                78632,
                77757,
                69623,
                70789,
                85233,
                0,
                75114,
                97657,
                69233,
                74317,
                72196,
                61801,
                66026,
                0,
                73682,
                85014,
                81282,
                58794,
                57708,
                55542,
                0,
                61267,
                52026,
                36837,
                50268,
                32471,
                40434,
                29548,
                27277,
                28912
            ],
            name: "880"
        }
    ],
    subtitle: {
        text: "Last generated: 2017-08-15 02:16:11"
    },
    title: {
        text: "Rogue - Assassination - Beastlord"
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
            "Engine of Eradication",
            "Stat Stick (Mastery)",
            "Specter of Betrayal",
            "Eye of Command",
            "Chaos Talisman",
            "Convergence of Fates",
            "Stat Stick (Versatility)",
            "Nightblooming Frond",
            "Cradle of Anguish",
            "Thrice-Accursed Compass",
            "Memento of Angerboda",
            "Gift of Radiance",
            "Entwined Elemental Foci",
            "Bloodthirsty Instinct",
            "PVP Badge of Conquest",
            "Stat Stick (Crit)",
            "Stat Stick (Haste)",
            "Chrono Shard",
            "Tirathon's Betrayal",
            "Six-Feather Fan",
            "Terrorbound Nexus",
            "Vial of Ceaseless Toxins",
            "Nightmare Egg Shell",
            "Unstable Arcanocrystal",
            "Bloodstained Handkerchief",
            "PVP Insignia of Conquest",
            "Horn of Valor",
            "Tempered Egg of Serpentrix",
            "Splinters of Agronax",
            "Umbral Moonglaives",
            "Tiny Oozeling in a Jar",
            "Darkmoon Deck: Dominion",
            "Infernal Alchemist Stone",
            "The Devilsaur's Bite",
            "Spontaneous Appendages",
            "Mark of Dargrul",
            "Infernal Cinders",
            "Nature's Call",
            "Windscar Whetstone",
            "Draught of Souls",
            "Giant Ornamental Pearl",
            "Toe Knee's Promise",
            "Faulty Countermeasure",
            "Spiked Counterweight",
            "Ravaged Seed Pod",
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
                    text: "mean at 116783",
                    verticalAlign: "bottom",
                    x: 10,
                    y: -25
                },
                value: 116783.625,
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