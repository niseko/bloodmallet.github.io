Highcharts.chart('death_knight_frost_patchwerk',
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
                    click: function (event) {                var chart = this.series.yAxis;                chart.removePlotLine('helperLine');                chart.addPlotLine({                    value: this.stackY,                    color: '#000',                    width: 2,                    id: 'helperLine',                    zIndex: 5,                    label: {                      text: this.series.name + ' ' + this.category + ': ' + Intl.NumberFormat().format(this.stackY),                      align: 'left',                      verticalAlign: 'bottom',                      rotation: 0,                      y: -5                    }                });              }
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
            color: "#fdbf6f",
            data: [
                283406,
                280076,
                268637,
                39311,
                40094,
                39906,
                33083,
                213937,
                0,
                0,
                0,
                36231,
                0,
                0,
                0,
                0,
                0,
                0,
                0,
                0,
                0,
                0,
                0,
                0,
                0,
                0,
                0,
                0,
                0,
                0,
                0,
                0,
                0,
                0,
                0,
                0,
                0,
                0,
                0,
                0,
                0,
                0,
                0,
                0,
                0,
                0,
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
            name: "1000"
        },
        {
            color: "#cab2d6",
            data: [
                0,
                0,
                0,
                18389,
                15621,
                18407,
                17768,
                0,
                15656,
                14603,
                14985,
                14095,
                8908,
                13459,
                19943,
                11559,
                15131,
                14267,
                13865,
                13787,
                15103,
                14862,
                14289,
                14553,
                14872,
                14987,
                13412,
                13498,
                15583,
                13518,
                16252,
                16373,
                11731,
                15921,
                11352,
                14330,
                12641,
                10582,
                10006,
                8847,
                8625,
                5712,
                0,
                7831,
                3946,
                4072,
                5894,
                3231,
                3520,
                3343,
                6195,
                4505,
                2715,
                2033,
                10004,
                5312
            ],
            name: "980"
        },
        {
            color: "#ff7f00",
            data: [
                0,
                0,
                0,
                15751,
                16136,
                12482,
                190549,
                0,
                11688,
                15011,
                10619,
                13148,
                6637,
                13376,
                13435,
                12595,
                12885,
                12400,
                13668,
                13237,
                12242,
                11014,
                10389,
                13156,
                11948,
                12695,
                13559,
                11818,
                14855,
                12020,
                12427,
                12142,
                11769,
                11280,
                10336,
                11019,
                11689,
                13006,
                7449,
                9225,
                9809,
                7189,
                0,
                6238,
                5974,
                6284,
                5608,
                7651,
                7278,
                2713,
                419,
                2960,
                5789,
                5319,
                8306,
                1818
            ],
            name: "970"
        },
        {
            color: "#fb9a99",
            data: [
                0,
                0,
                0,
                15706,
                14604,
                15678,
                0,
                0,
                12105,
                12146,
                12806,
                12423,
                7170,
                12366,
                15580,
                13754,
                9802,
                11297,
                10557,
                9728,
                11306,
                13685,
                11869,
                10287,
                11615,
                10107,
                9911,
                11732,
                13864,
                9813,
                11264,
                10934,
                6273,
                9552,
                7528,
                9669,
                11022,
                8351,
                9471,
                6670,
                8043,
                8528,
                0,
                6820,
                4054,
                6382,
                2614,
                2849,
                1519,
                1790,
                5984,
                3842,
                3399,
                2380,
                8106,
                3696
            ],
            name: "960"
        },
        {
            color: "#e31a1c",
            data: [
                0,
                0,
                0,
                14138,
                14990,
                13418,
                0,
                0,
                12967,
                10271,
                13340,
                10692,
                7770,
                11515,
                13456,
                11760,
                13971,
                9412,
                11495,
                11671,
                11093,
                9007,
                10335,
                12183,
                8601,
                11209,
                11595,
                10266,
                11073,
                10541,
                11376,
                12352,
                7213,
                11098,
                10149,
                11254,
                9070,
                12484,
                6028,
                8807,
                6755,
                7686,
                0,
                4657,
                4049,
                3224,
                6140,
                2318,
                3006,
                5928,
                1720,
                3001,
                2639,
                1080,
                7262,
                3862
            ],
            name: "950"
        },
        {
            color: "#b2df8a",
            data: [
                0,
                0,
                0,
                161976,
                158956,
                151550,
                0,
                0,
                9910,
                11468,
                8845,
                115909,
                5353,
                11270,
                12919,
                8989,
                9238,
                11919,
                11423,
                10621,
                9434,
                10729,
                11550,
                10365,
                11023,
                8652,
                11065,
                8505,
                10997,
                8913,
                8807,
                8426,
                9458,
                10065,
                5706,
                9502,
                9962,
                7925,
                7107,
                5384,
                5958,
                5532,
                0,
                7309,
                3595,
                3956,
                4747,
                4891,
                3173,
                1521,
                2185,
                2268,
                4586,
                4313,
                6126,
                2650
            ],
            name: "940"
        },
        {
            color: "#33a02c",
            data: [
                0,
                0,
                0,
                0,
                0,
                0,
                0,
                0,
                9341,
                11054,
                10608,
                0,
                6592,
                9183,
                10196,
                10524,
                9501,
                8835,
                7325,
                7841,
                9419,
                7870,
                7015,
                8358,
                9722,
                8960,
                5892,
                10386,
                10179,
                9008,
                7035,
                8643,
                9499,
                8550,
                9681,
                8969,
                9912,
                6926,
                7201,
                6762,
                8010,
                6194,
                6226,
                6783,
                927,
                4159,
                4063,
                4372,
                4990,
                5000,
                5007,
                4667,
                3736,
                3356,
                5864,
                2734
            ],
            name: "930"
        },
        {
            color: "#a6cee3",
            data: [
                0,
                0,
                0,
                0,
                0,
                0,
                0,
                0,
                9888,
                8414,
                9532,
                0,
                6313,
                125570,
                8953,
                6939,
                6624,
                7721,
                7908,
                6304,
                8040,
                8936,
                10620,
                6949,
                8541,
                8789,
                115217,
                8882,
                8785,
                7449,
                9163,
                7717,
                5395,
                7257,
                4150,
                9089,
                5135,
                9223,
                93712,
                90348,
                5447,
                4326,
                9070,
                3803,
                4791,
                3813,
                2284,
                3761,
                3934,
                2887,
                2140,
                144,
                618,
                199,
                6894,
                779
            ],
            name: "920"
        },
        {
            color: "#1f78b4",
            data: [
                0,
                0,
                0,
                0,
                0,
                0,
                0,
                0,
                126879,
                125088,
                122726,
                0,
                151024,
                0,
                101434,
                117878,
                114948,
                114946,
                114437,
                115869,
                111690,
                112156,
                110063,
                108920,
                108263,
                108534,
                0,
                104196,
                90479,
                99900,
                87384,
                82803,
                95554,
                80067,
                94636,
                75103,
                78220,
                73838,
                0,
                0,
                80782,
                76472,
                103174,
                73670,
                83004,
                67300,
                63107,
                63735,
                61016,
                57664,
                55942,
                57501,
                53958,
                58596,
                22709,
                53772
            ],
            name: "910"
        }
    ],
    subtitle: {
        text: "UTC 2017-12-13 21:45 SimC build: <a href=\"https://github.com/simulationcraft/simc/commit/2143d84bc98dd1d780b61e851198f81cf756e317\" target=\"blank\">2143d84</a>",
        useHTML: true
    },
    title: {
        text: "Death_Knight - Frost - Patchwerk",
        useHTML: true
    },
    tooltip: {
        backgroundColor: "#eee",
        borderColor: "#bbb",
        formatter: function() {
            var s = '<div style=\"padding:12px;\"><b>'+ this.x +'</b>';
            var cumulative_amount = 0;
            for (var i = this.points.length - 1 ; i >= 0 ; i--) {
                cumulative_amount += this.points[i].y;
                if (this.points[i].y !== 0){
                    s += '<br/><span style=\"color: ' + this.points[i].series.color + '; font-weight: bold;\">' + this.points[i].series.name +'</span>: ' + Intl.NumberFormat().format(cumulative_amount);
                }
            }
            s += '</div>';
            return s;
        },
        headerFormat: "<b>{point.x}</b>",
        shared: true,
        style: {
            color: "black"
        },
        useHTML: true,
    },
    xAxis: {
        categories: [
            "<a href=\"http://www.wowhead.com/item=154172\">Aman'Thul's Vision +20</a>",
            "<a href=\"http://www.wowhead.com/item=154172\">Aman'Thul's Vision +15</a>",
            "<a href=\"http://www.wowhead.com/item=154172\">Aman'Thul's Vision +10</a>",
            "<a href=\"http://www.wowhead.com/item=154176\">Khaz'goroths Courage +20</a>",
            "<a href=\"http://www.wowhead.com/item=154176\">Khaz'goroths Courage +15</a>",
            "<a href=\"http://www.wowhead.com/item=154176\">Khaz'goroths Courage +10</a>",
            "<a href=\"http://www.wowhead.com/item=144259\">Kil'jaeden's Burning Wish</a>",
            "<a href=\"http://www.wowhead.com/item=154172\">Aman'Thul's Vision</a>",
            "<a href=\"http://www.wowhead.com/item=142167\">Eye of Command</a>",
            "<a href=\"http://www.wowhead.com/item=137459\">Chaos Talisman</a>",
            "<a href=\"http://www.wowhead.com/item=147010\">Cradle of Anguish</a>",
            "<a href=\"http://www.wowhead.com/item=154176\">Khaz'goroths Courage</a>",
            "<a href=\"http://www.wowhead.com/item=141482\">Unstable Arcanocrystal</a>",
            "<a href=\"http://www.wowhead.com/item=151968\">Shadow-Singed Fang</a>",
            "<a href=\"http://www.wowhead.com/item=151190\">Specter of Betrayal</a>",
            "<a href=\"http://www.wowhead.com/item=147015\">Engine of Eradication</a>",
            "<a href=\"http://www.wowhead.com/item=140796\">Entwined Elemental Foci</a>",
            "<a href=\"http://www.wowhead.com/item=142508,bonus_id=604\">Stat Stick (Haste)</a>",
            "<a href=\"http://www.wowhead.com/item=142508,bonus_id=605\">Stat Stick (Mastery)</a>",
            "<a href=\"http://www.wowhead.com/item=144482\">Fel-Oiled Infernal Machine</a>",
            "<a href=\"http://www.wowhead.com/item=141535\">Ettin Fingernail</a>",
            "<a href=\"http://www.wowhead.com/item=133644\">Memento of Angerboda</a>",
            "<a href=\"http://www.wowhead.com/item=137419\">Chrono Shard</a>",
            "<a href=\"http://www.wowhead.com/item=137312\">Nightmare Egg Shell</a>",
            "<a href=\"http://www.wowhead.com/item=142508,bonus_id=607\">Stat Stick (Versatility)</a>",
            "<a href=\"http://www.wowhead.com/item=142508,bonus_id=603\">Stat Stick (Crit)</a>",
            "<a href=\"http://www.wowhead.com/item=151964\">Seeping Scourgewing</a>",
            "<a href=\"http://www.wowhead.com/item=142669\">PVP Badge of Victory</a>",
            "<a href=\"http://www.wowhead.com/item=147011\">Vial of Ceaseless Toxins</a>",
            "<a href=\"http://www.wowhead.com/item=133647\">Gift of Radiance</a>",
            "<a href=\"http://www.wowhead.com/item=140806\">Convergence of Fates</a>",
            "<a href=\"http://www.wowhead.com/item=139328\">Ursoc's Rending Paw</a>",
            "<a href=\"http://www.wowhead.com/item=142784\">PVP Insignia of Victory</a>",
            "<a href=\"http://www.wowhead.com/item=142159\">Bloodstained Handkerchief</a>",
            "<a href=\"http://www.wowhead.com/item=133642\">Horn of Valor</a>",
            "<a href=\"http://www.wowhead.com/item=151307\">Void Stalker's Contract</a>",
            "<a href=\"http://www.wowhead.com/item=140799\">Might of Krosus</a>",
            "<a href=\"http://www.wowhead.com/item=140790\">Claw of the Crystalline Scorpid</a>",
            "<a href=\"http://www.wowhead.com/item=152093\">Gorshalach's Legacy</a>",
            "<a href=\"http://www.wowhead.com/item=151963\">Forgefiend's Fabricator</a>",
            "<a href=\"http://www.wowhead.com/item=147009\">Infernal Cinders</a>",
            "<a href=\"http://www.wowhead.com/item=137539\">Faulty Countermeasure</a>",
            "<a href=\"http://www.wowhead.com/item=151607\">Astral Alchemist Stone</a>",
            "<a href=\"http://www.wowhead.com/item=147012\">Umbral Moonglaives</a>",
            "<a href=\"http://www.wowhead.com/item=139334\">Nature's Call</a>",
            "<a href=\"http://www.wowhead.com/item=139325\">Spontaneous Appendages</a>",
            "<a href=\"http://www.wowhead.com/item=137406\">Terrorbound Nexus</a>",
            "<a href=\"http://www.wowhead.com/item=136715\">Spiked Counterweight</a>",
            "<a href=\"http://www.wowhead.com/item=142164\">Toe Knee's Promise</a>",
            "<a href=\"http://www.wowhead.com/item=137439\">Tiny Oozeling in a Jar</a>",
            "<a href=\"http://www.wowhead.com/item=137369\">Giant Ornamental Pearl</a>",
            "<a href=\"http://www.wowhead.com/item=140034\">Impact Tremor</a>",
            "<a href=\"http://www.wowhead.com/item=137357\">Mark of Dargrul</a>",
            "<a href=\"http://www.wowhead.com/item=139320\">Ravaged Seed Pod</a>",
            "<a href=\"http://www.wowhead.com/item=140808\">Draught of Souls</a>",
            "<a href=\"http://www.wowhead.com/item=137486\">Windscar Whetstone</a>"
        ],
        labels: {
            useHTML: true
        }
    },
    yAxis: {
        labels: {
            enabled: false
        },
        min: 0,
        plotLines: [
            {
                color: "#0973DA",
                label: {
                    align: "left",
                    rotation: 0,
                    style: {
                        color: "#0973DA"
                    },
                    text: 'mean: ' + Intl.NumberFormat().format(165751),
                    verticalAlign: "bottom",
                    x: 10,
                    y: -23
                },
                value: 165751.0357142857,
                width: 2,
                zIndex: 2
            }
        ],
        stackLabels: {
            enabled: true,
            formatter: function() {          return Intl.NumberFormat().format(this.total);        },
            style: {
                textOutline: false
            }
        },
        title: {
            text: "\u0394 Damage per second"
        }
    }
});
