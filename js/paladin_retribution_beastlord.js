Highcharts.chart('paladin_retribution_beastlord', 
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
                187124,
                0,
                0,
                0,
                0,
                0,
                0,
                0,
                0,
                0,
                0,
                0,
                0,
                0,
                0,
                0,
                0,
                0,
                0,
                0,
                0,
                0,
                0,
                0,
                0,
                0,
                0,
                0,
                0,
                0,
                0,
                0,
                0,
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
                34101,
                0,
                16324,
                10770,
                11552,
                15116,
                11482,
                10394,
                5552,
                13245,
                10761,
                12891,
                13577,
                11055,
                8536,
                3466,
                15650,
                6999,
                4953,
                7087,
                9444,
                11966,
                4327,
                11971,
                7598,
                5332,
                5150,
                10122,
                0,
                6879,
                10772,
                4005,
                2764,
                0,
                5572,
                1035,
                5998,
                7333,
                3031,
                2912,
                4277,
                8205,
                6797,
                9532
            ],
            name: "940"
        },
        {
            color: "#db843d",
            data: [
                17748,
                0,
                19574,
                19041,
                11820,
                5598,
                9313,
                8316,
                10361,
                5335,
                16163,
                14340,
                9810,
                5808,
                11152,
                8460,
                10275,
                11758,
                12576,
                12508,
                6376,
                11043,
                16944,
                6782,
                7307,
                12303,
                11909,
                13356,
                0,
                12857,
                9191,
                5713,
                11400,
                0,
                7713,
                13309,
                7688,
                1717,
                4819,
                4826,
                6121,
                1197,
                0,
                8423
            ],
            name: "930"
        },
        {
            color: "#4198af",
            data: [
                32554,
                0,
                9023,
                2680,
                1859,
                11461,
                7234,
                15791,
                10838,
                2326,
                1942,
                3212,
                12099,
                9640,
                5322,
                9003,
                5176,
                6313,
                4676,
                8209,
                12210,
                6285,
                4939,
                5712,
                14679,
                6163,
                1709,
                9446,
                0,
                10198,
                6672,
                9003,
                797,
                0,
                0,
                0,
                6762,
                0,
                2892,
                10791,
                7099,
                3234,
                6052,
                6707
            ],
            name: "920"
        },
        {
            color: "#71588f",
            data: [
                17530,
                0,
                12791,
                9368,
                9159,
                11624,
                10136,
                4651,
                6440,
                7059,
                12904,
                9700,
                6127,
                12204,
                11053,
                11140,
                10345,
                8269,
                10258,
                8832,
                11927,
                11083,
                0,
                6967,
                2473,
                7674,
                7766,
                1776,
                0,
                8519,
                5946,
                516,
                5682,
                0,
                1254,
                11199,
                0,
                9375,
                6410,
                1996,
                0,
                0,
                3210,
                4524
            ],
            name: "910"
        },
        {
            color: "#89a54e",
            data: [
                25998,
                0,
                8515,
                10200,
                7771,
                9490,
                8024,
                9810,
                11100,
                2417,
                5162,
                7724,
                97779,
                2738,
                9838,
                7849,
                5620,
                10469,
                3407,
                6859,
                1176,
                5722,
                17782,
                0,
                6070,
                8774,
                11065,
                5437,
                8321,
                3802,
                4763,
                8230,
                8807,
                444,
                7883,
                0,
                9355,
                0,
                2426,
                2206,
                581,
                2441,
                2522,
                8847
            ],
            name: "900"
        },
        {
            color: "#aa4643",
            data: [
                222125,
                0,
                11256,
                6674,
                2078,
                5484,
                102542,
                10070,
                6737,
                8163,
                5886,
                7982,
                0,
                12732,
                4870,
                3016,
                3410,
                3536,
                6134,
                2285,
                11446,
                78518,
                4716,
                15928,
                81433,
                77620,
                4249,
                9331,
                6898,
                7767,
                7420,
                6764,
                5833,
                11301,
                6170,
                13140,
                0,
                407,
                2948,
                2232,
                3684,
                4064,
                1169,
                4404
            ],
            name: "890"
        },
        {
            color: "#4572a7",
            data: [
                0,
                0,
                96778,
                105456,
                116118,
                90297,
                0,
                88524,
                92829,
                105235,
                90453,
                85271,
                0,
                84310,
                86138,
                92819,
                83785,
                85720,
                87842,
                82934,
                75111,
                0,
                76260,
                76955,
                0,
                0,
                71604,
                62856,
                93105,
                57121,
                59674,
                63880,
                61142,
                81250,
                60489,
                40868,
                51142,
                48880,
                41988,
                38687,
                43027,
                39988,
                37212,
                -4626
            ],
            name: "880"
        }
    ],
    subtitle: {
        text: "Last generated: 2017-08-15 02:01:40"
    },
    title: {
        text: "Paladin - Retribution - Beastlord"
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
            "Claw of the Crystalline Scorpid",
            "Eye of Command",
            "Convergence of Fates",
            "Chaos Talisman",
            "Cradle of Anguish",
            "Horn of Valor",
            "Fel-Oiled Infernal Machine",
            "Unstable Arcanocrystal",
            "Stat Stick (Crit)",
            "Entwined Elemental Foci",
            "Specter of Betrayal",
            "Stat Stick (Haste)",
            "Chrono Shard",
            "Stat Stick (Versatility)",
            "Ettin Fingernail",
            "Nightmare Egg Shell",
            "Memento of Angerboda",
            "PVP Badge of Victory",
            "Terrorbound Nexus",
            "Vial of Ceaseless Toxins",
            "Mark of Dargrul",
            "PVP Insignia of Victory",
            "Infernal Cinders",
            "Engine of Eradication",
            "Stat Stick (Mastery)",
            "Bloodstained Handkerchief",
            "Darkmoon Deck: Dominion",
            "Might of Krosus",
            "Ursoc's Rending Paw",
            "Faulty Countermeasure",
            "Gift of Radiance",
            "Infernal Alchemist Stone",
            "Nature's Call",
            "Tiny Oozeling in a Jar",
            "Toe Knee's Promise",
            "Spiked Counterweight",
            "The Devilsaur's Bite",
            "Ravaged Seed Pod",
            "Giant Ornamental Pearl",
            "Spontaneous Appendages",
            "Windscar Whetstone",
            "Draught of Souls"
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
                    text: "mean at 121312",
                    verticalAlign: "bottom",
                    x: 10,
                    y: -25
                },
                value: 121312.29545454546,
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