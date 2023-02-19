const sbb_components_data = {
    'question': '液晶テレビの売れ行きが悪くなった原因について考えてみよう',

    'theme': Blockly.Theme.defineTheme('argentina', {
        // Blocklyワークスペースのカラーテーマの設定
        'base': Blockly.Themes.Classic,
        'categoryStyles': {
            // おそらくブロックのカテゴリごとのスタイル設定
            // この部分は後々外側に書き出すか，ブロックの深さによって設定を変えるように設定変更
            'c1': {
                "colour": "#99FF66"
            },
            "c2": {
                "colour": "#3366CC",
            },
            "c3": {
                "colour": "#FF0033",
            },
            "c4": {
                "colour": "#FFCC33",
            },
            "c5": {
                "colour": "#CCCCCC"
            }
        },
        'componentStyles': {
            'workspaceBackgroundColour': '#FFFFFF',
            'toolboxBackgroundColour': '#FFFACD',
            'toolboxForegroundColour': '#000000',
            'flyoutBackgroundColour': '#252526',
            'flyoutForegroundColour': '#7b68ee',
            'flyoutOpacity': 0.5,
            'scrollbarColour': '#000000',
            'insertionMarkerColour': '#fff',
            'insertionMarkerOpacity': 0.3,
            'scrollbarOpacity': 0.4,
            'cursorColour': '#d0d0d0',
            'blackBackground': '#333'
        },
        'startHats': true
    }),
    
    'blockPartsComponents': [
        {
            'type': 'tv',
            'message0': '液晶テレビの売れ行きが悪くなった %1',
            'args0': [{
                'type': 'input_statement',
                'name': 'root',
            }],
            'colour': 90,
        },
        
        {
            "type": "_2t1",
            "message0": "★テレビを見る人が少なくなったからでは？ %1 データ： %2 分析： %3 結論：この仮説は %4 %5 その原因： %6",
            "args0": [
                { "type": "input_dummy" },
                { "type": "input_statement","name": "s210" },
                { "type": "input_statement", "name": "s211" },
                { "type": "field_dropdown", "name": "flag",
                  "options": [
                      ["検証中", "d"],
                      ["妥当だ", "yes"],
                      ["棄却される", "no"]
                  ],
                },
                { "type": "input_dummy" },
                { "type": "input_statement", "name": "s213", },
            ],
            "inputsInline": false,
            "previousStatement": null,
            "nextStatement": null,
            "colour": 330,
        },

        {
            "type": "_2t2",
            "message0": "★テレビの価格が値上がりしたからでは？ %1 データ： %2 分析： %3 結論：この仮説は %4 %5 その原因： %6",
            "args0": [
                { "type": "input_dummy" },
                { "type": "input_statement", "name": "s220" },
                { "type": "input_statement", "name": "s221" },
                { "type": "field_dropdown", "name": "NAME",
                  "options": [
                      ["検証中", "d"],
                      ["妥当だ", "yes"],
                      ["棄却される", "no"],
                    ],
                },
                { "type": "input_dummy" },
                { "type": "input_statement", "name": "s223" },
            ],
            "inputsInline": false,
            "previousStatement": null,
            "nextStatement": null,
            "colour": 330,
        },

        {
            "type": "_2t3",
            "message0": "★テレビを持たない単身世帯が増えたからでは？ %1 データ： %2 分析： %3 結論：この仮説は %4 %5 その原因： %6",
            "args0": [
                { "type": "input_dummy" },
                { "type": "input_statement", "name": "s230" },
                { "type": "input_statement", "name": "s231" },
                { "type": "field_dropdown", "name": "NAME",
                  "options": [
                      ["検証中", "d"],
                      ["妥当だ", "yes"],
                      ["棄却される", "no"]
                  ],
                },
                { "type": "input_dummy" },
                { "type": "input_statement", "name": "s233" },
            ],
            "inputsInline": false,
            "previousStatement": null,
            "nextStatement": null,
            "colour": 330,
        },
        
        {
            "type": "_3t1",
            "message0": "★テレビ番組の人気がないからでは？ %1 データ： %2 分析： %3 結論：この仮説は %4 %5 その原因： %6",
            "args0": [
                { "type": "input_dummy" },
                { "type": "input_statement", "name": "s310" },
                { "type": "input_statement", "name": "s311" },
                { "type": "field_dropdown", "name": "NAME",
                  "options": [
                      ["検証中", "d"],
                      ["正しい", "yes"],
                      ["棄却される", "no"],
                  ],
                },
                { "type": "input_dummy" },
                { "type": "input_statement", "name": "s313" },
            ],
            "inputsInline": false,
            "previousStatement": null,
            "nextStatement": null,
            "colour": 195,
        },
        
        {
            "type": "_3t2",
            "message0": "★ネット利用が増加したからでは？ %1 データ： %2 分析： %3 結論：この仮説は %4 %5 その原因： %6",
            "args0": [
                { "type": "input_dummy" },
                { "type": "input_statement", "name": "s320" },
                { "type": "input_statement", "name": "s321" },
                { "type": "field_dropdown", "name": "NAME",
                  "options": [
                      ["検証中", "d"],
                      ["正しい", "yes"],
                      ["棄却される", "no"],
                  ],
                },
                { "type": "input_dummy" },
                { "type": "input_statement", "name": "s323" },
            ],
            "inputsInline": false,
            "previousStatement": null,
            "nextStatement": null,
            "colour": 195,
        },
        
        {
            'type': 'visualizedata',
            'message0': 'VISUALIZE %1',
            'args0': [{
                'type': 'field_dropdown',
                'name': 'view',
                'options': [
                    ["折れ線グラフ", 'LineChart'],
                    ["グラフ", 'PieChart'],
                    ["棒グラフ", 'BarChart'],
                    ["布図", 'ScatterChart'],
                    ["統計量表", 'StaTable'],
                ],
            }],
            'inputsInline': false,
            'previousStatement': null,
            'nextStatement': null,
            'colour': 0,
        },

        {
            'type': 'visualizedata2',
            'message0': 'VISUALIZE %1',
            'args0': [{
                'type': 'field_dropdown',
                'name': 'view',
                'options': [
                    ["折れ線グラフ", 'LineChart'],
                    ["グラフ", 'PieChart'],
                    ["棒グラフ", 'BarChart'],
                    ["布図", 'ScatterChart'],
                    ["統計量表", 'StaTable'],
                ],
            }],
            'inputsInline': false,
            'previousStatement': null,
            'nextStatement': null,
            'colour': 0,
        },
        
        {
            'type': 'vivi',
            'message0': 'グラフで分析 %1 グラフのタイプ： %2',
            'args0': [
                {
                    'type': 'input_dummy',
                    'align': "CENTER",
                },
                {
                    'type': 'field_dropdown',
                    'name': 'd1',
                    'options': [
                        ['折れ線グラフ', 'LineChart'],
                        ['円グラフ', 'PieChart'],
                        ['棒グラフ', 'BarChart'],
                        ['散布図', 'ScatterChart'],
                        ['統計量表', 'StaTable'],
                    ],
                },
            ],
            'inputsInline': false,
            'previousStatement': null,
            'nextStatement': null,
            'colour': 0,
        },

        {
            'type': 'hypo',
            'message0': '仮説： %1',
            'args0': [{
                'type': 'field_input',
                'name': 'NAME',
                'text': '気温が上がったからだ',
            }],
            'colour': 230,
        },
        {
            'type': 'hypo2',
            'message0': '計画： %1',
            'args0': [{
                'type': 'field_dropdown',
                'name': 'NAME',
                'text': '気温が上がったからだ',
            }],
            'colour': 230,
        },        

        {
            "type": "LineChart",
            "message0": "折れ線グラフで可視化",
            "previousStatement": null,
            "nextStatement": null,
            "colour": 240,
        },
        {
            "type": "PieChart",
            "message0": "円グラフで可視化",
            "previousStatement": null,
            "nextStatement": null,
            "colour": 240,
        },
        {
            "type": "BarChart",
            "message0": "棒グラフで可視化",
            "previousStatement": null,
            "nextStatement": null,
            "colour": 240,
        },
        {
            "type": "ScatterChart",
            "message0": "散布図で可視化",
            "previousStatement": null,
            "nextStatement": null,
            "colour": 240,
        },

        {
            'type': 'data1',
            'message0': '平均視聴時間',
            'previousStatement': null,
            'nextStatement': null,
            'colour': 270,
        },
        {
            'type': 'data2',
            'message0': '32型テレビ一台あたりの価格推移',
            'previousStatement': null,
            'nextStatement': null,
            'colour': 270,
        },
        {
            'type': 'data3',
            'message0': '世帯別テレビ普及率',
            'previousStatement': null,
            'nextStatement': null,
            'colour': 270,
        },
        {
            'type': 'data4',
            'message0': '世帯別平均保有台数',
            'previousStatement': null,
            'nextStatement': null,
            'colour': 270,
        },
        {
            'type': 'data5',
            'message0': 'テレビ番組意識調査',
            'previousStatement': null,
            'nextStatement': null,
            'colour': 270,
        },
        {
            'type': 'data6',
            'message0': 'インターネット利用時間',
            'previousStatement': null,
            'nextStatement': null,
            'colour': 270,
        },
        {
            'type': 'data7',
            'message0': 'ダミーデータ',
            'previousStatement': null,
            'nextStatement': null,
            'colour': 270,
        },
    ],

    
    'toolboxBlocks': {
        'kind': 'categoryToolbox',
        'contents': [
            {
                'kind': 'category',
                'class': 'catego',
                'name': '仮説',
                'categoryStyle': 'c1',
                'contents': [
                    { 'kind': 'block', 'type': 'tv', },
                    { 'kind': 'block', 'type': '_2t1', },
                    { 'kind': 'block', 'type': '_2t2', },
                    { 'kind': 'block', 'type': '_2t3', },
                    { 'kind': 'block', 'type': '_3t1', },
                    { 'kind': 'block', 'type': '_3t2', },
                ],
            },
            {
                'kind': 'category',
                'class': 'catego',
                'name': 'データ',
                'categoryStyle': 'c2',
                'label': '使えるデータ',
                'contents': [
                    { 'kind': 'block', 'type': 'data1', },
                    { 'kind': 'block', 'type': 'data2', },
                    { 'kind': 'block', 'type': 'data3', },
                    { 'kind': 'block', 'type': 'data4', },
                    { 'kind': 'block', 'type': 'data5', },
                    { 'kind': 'block', 'type': 'data6', },
                ],
            },
            {
                'kind': 'category',
                'class': 'catego',
                'name': '分析',
                'categoryStyle': 'c3',
                'contents': [
                    { 'kind': 'block', 'type': 'visualizedata', },
                    { 'kind': 'block', 'type': 'vivi', },
                    { 'kind': 'block', 'type': 'LineChart', },
                    { 'kind': 'block', 'type': 'PieChart', },
                    { 'kind': 'block', 'type': 'BarChart', },
                    { 'kind': 'block', 'type': 'ScatterChart', },
                ],
            },
            {
                'kind': 'category',
                'class': 'catego',
                'name': '使ったブロック',
                'categoryStyle': 'c5',
                'custom': 'COMPOSED_BLOCKS',
            }
        ],
    },

    // これは先生の正解になる？
    'defaultDisplayBlocks': {
        "blocks": {
            "languageVersion": 0,
            "blocks": [
                {
                    "type": "tv",
                    "id": "|e}3!]6oI^4H:QR*fXtu",
                    "x": 12,
                    "y": 38,
                    "inputs": {
                        "root": {
                            "block": {
                                "type": "_2t1",
                                "id": "5a?nA6Rk=Y}!C~I)67w`",
                                "fields": {
                                    "flag": "d"
                                },
                                "inputs": {
                                    "s210": {
                                        "block": { 
                                            "type": "data1",
                                            "id": "3ottnu[#/vX[i;B2~BP)"
                                        }
                                    },
                                    "s211": {
                                        "block": {
                                            "type": "LineChart",
                                            "id": "HdOfJ[v6B~):%;9x9^vF"
                                        }
                                    },
                                    "s213": {
                                        "block": {
                                            "type": "_3t1",
                                            "id": "Kz9kdO+5l3?EVVHJ5l?x",
                                            "fields": {
                                                "NAME": "d"
                                            },
                                            "inputs": {
                                                "s310": {
                                                    "block": {
                                                        "type": "data5",
                                                        "id": "?:nrnkzeR!LA03OOd(x?"
                                                    }
                                                },
                                                "s311": {
                                                    "block": {
                                                        "type": "BarChart",
                                                        "id": "];8/Jhd7KHbN2U]rO0Kf"
                                                    }
                                                }
                                            },
                                            "next": {
                                                "block": {
                                                    "type": "_3t2",
                                                    "id": "B7RqjrO*/6TaYs^W3/?2",
                                                    "fields": {
                                                        "NAME": "d"
                                                    },
                                                    "inputs": {
                                                        "s320": {
                                                            "block": {
                                                                "type": "data6",
                                                                "id": "9D$Ck[]}DzIP8%hoZbrr"
                                                            }
                                                        },
                                                        "s321": {
                                                            "block": {
                                                                "type": "LineChart",
                                                                "id": "P,Hl!OjW+.Y1t{tdQ-/T"
                                                            }
                                                        }
                                                    }
                                                }
                                            }
                                        }
                                    }
                                },
                                "next": {
                                    "block": {
                                        "type": "_2t2",
                                        "id": "qf-9ClB$fC~!pKjt-p]r",
                                        "fields": {
                                            "NAME": "d"
                                        },
                                        "inputs": {
                                            "s220": {
                                                "block": {
                                                    "type": "data2",
                                                    "id": "LA:X$??+,biH[r-Uu5,+"
                                                }
                                            },
                                            "s221": {
                                                "block": {
                                                    "type": "BarChart",
                                                    "id": "E.wM%5pfweJw$;s|%Z{S"
                                                }
                                            }
                                        },
                                        "next": {
                                            "block": {
                                                "type": "_2t3",
                                                "id": "lMbMh[SxKsDVcN7lEHev",
                                                "fields": {
                                                    "NAME": "d"
                                                },
                                                "inputs": {
                                                    "s230": {
                                                        "block": {
                                                            "type": "data3",
                                                            "id": "e,,]nxqif|!pec;*1$d6",
                                                            "next": {
                                                                "block": {
                                                                    "type": "data4",
                                                                    "id": "wFk$y?8%}$hQDJ!%MPrW"
                                                                }
                                                            }
                                                        }
                                                    },
                                                    "s231": {
                                                        "block": {
                                                            "type": "BarChart",
                                                            "id": "Nd8h[lQA@g0h6Ia,f`G+"
                                                        }
                                                    }
                                                }
                                            }
                                        }
                                    }
                                }
                            }
                        }
                    }
                }
            ]
        }
    },
};
/*** ここまでデータ定義 ***/

/*** ここからコードへの変換プログラム ***/
/* ここからユーティリティ */
const sbbValToCode = (block, attr) => {
    // Blocklyの属性値をJSコードの変数に変換
    const ret = {};
    ret.attr = Blockly.JavaScript.valueToCode(block, attr, Blockly.JavaScript.ORDER_ATOMIC);
    return ret;
}

const sbbFieldToCode = (block, field_name) => {
    return [block.getFieldValue(field_name), Blockly.JavaScript.ORDER_ATOMIC];
}
const sbbCodeToCode = (block, code_text) => {
    return [code_text, Blockly.JavaScript.ORDER_ATOMIC];
}

const sbbStatementToCode = (block, statement_attr) => {
    return Blockly.JavaScript.statementToCode(block, statement_attr);
}
/* ここまでユーティリティ */

/* ここから実行用Javascriptプログラム */


/* ここから実行用Javascriptプログラム */
//const js_converter = {
const js_converter = {
    'setdata': (block) => {
        const vals = ['name', 'raw', 'area', 'time', 'filter'].map(attr => {
            return sbbValToCode(block, attr);
        });

        const dropdown_stats = block.getFieldValue('stats');
        return `const ${vals.name} = ${vals.raw};\n` +
               `const area_${vals.name} = ${vals.area};\n`+
               `${vals.time}`+
               `const stats_${vals.name} = ${dropdown_stats};\n`+
               `${vals.filter}`+
               `const DD${vals.name} = getData(${vals.name}, area_${vals.name}, timeFrom_${vals.name},\n`+
               `                               timeTo_${vals.name}, stats_${vals.name}, fmi_${vals.name}, fma_${vals.name}, '$');\n`;
    },
    
    'dataname': (block) => {
        return sbbFieldToCode('NAME');
    },

    'area': (block) => {
        return sbbFieldToCode('NAME');
    },

    'timefromto': (block) => {
        const vals = ['name', 'past', 'now'].map(attr => {
            return sbbValToCode(block, attr);
        });

        return sbbCodeToCode(`const timeFrom_${vals.name} = ${vals.past};\n`+
                             `const timeTo_${vals.name} = ${vals.now};\n`);
    },

    'filter': (block) => {
        const vals = ['name', 'mi', 'ma'].map(attr => {
            sbbValToCode(block, attr);
        });

        return sbbCodeToCode(`const fmi_${vals.name} = ${vals.mi};\n`+
                             `const fma_${vals.name} = ${vals.ma};\n`)
    },
    'number': (block) => {
        return sbbFieldToCode('NAME');
    },

    'visualizedata': (block) => {
        const vals = ['name'].map(attr => {
            return sbbValToCode(block, attr);
        });
        const dropdown_view = block.getFieldValue('view');
        
        return `Visualize(n${vals.name}, area_${vals.name}, timeFrom_${vals.name}, timeTo_${vals.name},\n`+
               `          stats_${vals.name}, fmi_${vals.name}, fma_${vals.name}, ${dropdown_view});\n`;
    },

    'vivi': (block) => {
        const dropdown_d1 = block.getFieldValue('d1');
        return `Visualize(n${vals.name}, area_${vals.name}, timeFrom_${vals.name}, timeTo_${vals.name}, ${dropdown_d1});\n`;
    },

    'visualizedata2': (block) => {
        return 'postForm("BuGn");\n';
    },

    'hypo': (block) => {
        return '...;\n';
    },

    'hypo2': (block) => {
        return '...;\n';
    },

    'conc': (block) => {
        return '...;\n';
    },

    'setodata': (block) => {
        const text_name = block.getFieldValue('NAME');
        const vals = ['v1', 'v2', 'v3'].map(attr => {
            return sbbValToCode(block, attr);
        });
        return '...;\n';
    },

    'time': (block) => {
        const vals = ['name'].map(attr =>{
            return sbbValToCode(block, attr);
        });
        const text_timefrom = block.getFieldValue('timefrom');
        const text_timeto = block.getFieldValue('timeto');
        return sbbCodeToCode(`const timeFrom_${vals.name} = ${text_timefrom};\n`+
                             `const timeTo_${vals.name} = ${text_timeto};\n`);
    },

    'setadata': (block) => {
        const vals = ['name', 'v1'].map(attr => {
            return sbbValToCode(block, attr);
        });
        const timestamp = Date.now().toString();
        //value_name=timestamp;
        const dropdown_d1 = block.getFieldValue('d1');
        const dropdown_d2 = block.getFieldValue('d2');

        //var value_v1 = Blockly.JavaScript.valueToCode(block, 'v1', Blockly.JavaScript.ORDER_ATOMIC);

        return `const n${vals.name} = ${dropdown_d1};\n`+
               `const area_${vals.name} = ${dropdown_d2};\n`+
               `${vals.v1}`+
               `const DD${vals.name} = getData(n${vals.name}, area_${vals.name}, timeFrom_${vals.name}, timeTo_${vals.name}, '$');\n`;
    },

    'tv': (block) => {
        const vals = sbbStatementToCode(block, 'root');
        return `${vals}\n`;
    },

    '_2t1': (block) => {
        const vals = ['s210', 's211', 's213'].map(attr => {
            return sbbStatementToCode(block, attr);
        });
        const dropdown_flag = block.getFieldValue('flag');
        return  `const hypo${block["type"]}_${block["id"]}_${block["id"]};\n`+
                `${vals[0]}\n`+
                `${vals[1]}\n`+
                `${vals[2]}\n`+
                `Visualize( hypo${block["type"]}_${block["id"]}_${block["id"]},data_${block["inputs"]["s210"]["block"]["type"]}_${block["inputs"]["s210"]["block"]["id"]},analysis_${block["inputs"]["s211"]["block"]["type"]}_${block["inputs"]["s211"]["block"]["id"]})\n`;
    },

    '_2t2': (block) => {
        const vals = ['s220', 's221', 's223'].map(attr => {
            return sbbStatementToCode(block, attr);
        });
        const dropdown_name = block.getFieldValue('NAME');
        return  `const hypo${block["type"]}_${block["id"]};\n`+
                `${vals[0]}\n`+
                `${vals[1]}\n`+
                `${vals[2]}\n`+
                `Visualize( hypo${block["type"]}_${block["id"]}_${block["id"]},data_${block["inputs"]["s220"]["block"]["type"]}_${block["inputs"]["s220"]["block"]["id"]},analysis_${block["inputs"]["s221"]["block"]["type"]}_${block["inputs"]["s221"]["block"]["id"]})\n`;
                ;
    },

    '_2t3': (block) => {
        const vals = ['s230', 's231', 's233'].map(attr => {
            return sbbStatementToCode(block, attr);
        });
        const dropdown_name = block.getFieldValue('NAME');
        return  `const hypo${block["type"]}_${block["id"]};\n`+
                `${vals[0]}\n`+
                `${vals[1]}\n`+
                `${vals[2]}\n`+
                `Visualize( hypo${block["type"]}_${block["id"]}_${block["id"]},data_${block["inputs"]["s230"]["block"]["type"]}_${block["inputs"]["s230"]["block"]["id"]},analysis_${block["inputs"]["s231"]["block"]["type"]}_${block["inputs"]["s231"]["block"]["id"]})\n`;
    },
    '_3t1': (block) => {
        const vals = ['s310', 's311', 's313'].map(attr => {
            return sbbStatementToCode(block, attr);
        });
        const dropdown_name = block.getFieldValue('NAME');
        return  `const hypo${block["type"]}_${block["id"]};\n`+
                `${vals[0]}\n`+
                `${vals[1]}\n`+
                `${vals[2]}\n`+
                `Visualize( hypo${block["type"]}_${block["id"]}_${block["id"]},data_${block["inputs"]["s310"]["block"]["type"]}_${block["inputs"]["s310"]["block"]["id"]},analysis_${block["inputs"]["s311"]["block"]["type"]}_${block["inputs"]["s311"]["block"]["id"]})\n`;
    },
    '_3t2': (block) => {
        const vals = ['s320', 's321', 's323'].map(attr => {
            return sbbStatementToCode(block, attr);
        });
        const dropdown_name = block.getFieldValue('NAME');
        return  `const hypo${block["type"]}_${block["id"]};\n`+
                `${vals[0]}\n`+
                `${vals[1]}\n`+
                `${vals[2]}\n`+
                `Visualize( hypo${block["type"]}_${block["id"]}_${block["id"]},data_${block["inputs"]["s320"]["block"]["type"]}_${block["inputs"]["s320"]["block"]["id"]},analysis_${block["inputs"]["s321"]["block"]["type"]}_${block["inputs"]["s321"]["block"]["id"]})\n`;
    },

    'LineChart': (block) => {
        return `const analysis_${block["type"]}_${block["id"]}};\n`;
    },
    
    'PieChart': (block) => {
        return `const analysis_${block["type"]}_${block["id"]}};\n`;
    },
    
    'BarChart': (block) => {
        return `const analysis_${block["type"]}_${block["id"]}};\n`;
    },
    
    'ScatterChart': (block) => {
        return `const analysis_${block["type"]}_${block["id"]}};\n`;
    },
    
    'data1': (block) => {
        return `const data_${block["type"]}_${block["id"]}};\n`;
    },
    
    'data2': (block) => {
        return `const data_${block["type"]}_${block["id"]}};\n`;
    },
    
    'data3': (block) => {
        return `const data_${block["type"]}_${block["id"]}};\n`;
    },
    
    'data4': (block) => {
        return `const data_${block["type"]}_${block["id"]}};\n`;
    },
    
    'data5': (block) => {
        return `const data_${block["type"]}_${block["id"]}};\n`;
    },
    
    'data6': (block) => {
        return `const data_${block["type"]}_${block["id"]}};\n`;
    },
    
    'data7': (block) => {
        return `const data_${block["type"]}_${block["id"]}};\n`;
    },
}

for(const [key, value] of Object.entries(js_converter)) {
    Blockly.JavaScript[key] = value;
}
