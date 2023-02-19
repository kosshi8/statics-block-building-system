Blockly.defineBlocksWithJsonArray(
    [{
      "type": "setdata",
      "message0": "SETDATA %1 name: %2 %3 raw： %4 area： %5 time： %6 %7 %8 filter: %9",
      "args0": [
        {
          "type": "input_dummy"
        },
        {
          "type": "field_image",
          "src": "https://www.gstatic.com/codesite/ph/images/star_on.gif",
          "width": 50,
          "height": 50,
          "alt": "image",
          "flipRtl": false
        },
        {
          "type": "input_value",
          "name": "name",
          "check": "String"
        },
        {
          "type": "input_value",
          "name": "raw",
          "check": "String",
          "align": "RIGHT"
        },
        {
          "type": "input_value",
          "name": "area",
          "check": "String",
          "align": "RIGHT"
        },
        {
          "type": "input_value",
          "name": "time",
          "check": "Array",
          "align": "RIGHT"
        },
        {
          "type": "field_dropdown",
          "name": "stats",
          "options": [
            [
              "array",
              "array"
            ],
            [
              "count",
              "count"
            ],
            [
              "average",
              "average"
            ],
            [
              "sum",
              "sum"
            ]
          ]
        },
        {
          "type": "input_dummy"
        },
        {
          "type": "input_value",
          "name": "filter"
        }
      ],
      "inputsInline": true,
      "previousStatement": null,
      "nextStatement": null,
      "colour": 230,
      "tooltip": "",
      "helpUrl": ""
    },
    {
        "type": "timefromto",
        "message0": "%1 ～ %2",
        "args0": [
          {
            "type": "input_value",
            "name": "past",
            "check": "Number"
          },
          {
            "type": "input_value",
            "name": "now",
            "check": "Number"
          }
        ],
        "inputsInline": true,
        "output": "Array",
        "colour": 270,
        "tooltip": "",
        "helpUrl": ""
      },
      {
        "type": "dataname",
        "message0": "%1",
        "args0": [
          {
            "type": "field_input",
            "name": "NAME",
            "text": "dataName1"
          }
        ],
        "output": null,
        "colour": 90,
        "tooltip": "",
        "helpUrl": ""
      },
      {
        "type": "filter",
        "message0": "%1 <X< %2",
        "args0": [
          {
            "type": "input_value",
            "name": "mi",
            "check": "Number"
          },
          {
            "type": "input_value",
            "name": "ma",
            "check": "Number"
          }
        ],
        "inputsInline": true,
        "output": null,
        "colour": 270,
        "tooltip": "",
        "helpUrl": ""
      },
      {
        "type": "area",
        "message0": "%1",
        "args0": [
          {
            "type": "field_dropdown",
            "name": "NAME",
            "options": [
                [
                  "北海道",
                  "'01000'"
                ],
                [
                  "青森県",
                  "'02000'"
                ],
                [
                  "秋田県",
                  "'03000'"
                ],
                [
                  "岩手県",
                  "'04000'"
                ], 
                [
                  "宮城県",
                  "'05000'"
                ],
                [
                  "山形県",
                  "'06000'"
                ],
                [
                  "福島県",
                  "'07000'"
                ],
                [
                  "option",
                  "OPTIOnnAME"
                ],
                [
                  "option",
                  "OPTIOnnAME"
                ],
                [
                  "option",
                  "OPTIOnnAME"
                ],
              ]
          }
        ],
        "output": null,
        "colour": 230,
        "tooltip": "",
        "helpUrl": ""
      },
      {
        "type": "number",
        "message0": "%1",
        "args0": [
          {
            "type": "field_input",
            "name": "NAME",
            "text": "2000"
          }
        ],
        "inputsInline": true,
        "output": "Number",
        "colour": 195,
        "tooltip": "",
        "helpUrl": ""
   }
    ,
      {
        "type": "visualizedata",
        "message0": "VISUALIZE %1",
        "args0": [
          {
            "type": "field_dropdown",
            "name": "view",
            "options": [
              [
                "LineChart",
                "LineChart"
              ],
              [
                "PieChart",
                "PieChart"
              ],
              [
                "BarChart",
                "BarChart"
              ],
              [
                "ScatterChart",
                "ScatterChart"
              ],
              [
                "StaTable",
                "StaTable"
              ]
            ]
          }
        ],
        "inputsInline": false,
        "previousStatement": null,
        "nextStatement": null,
        "colour": 0,
        "tooltip": "",
        "helpUrl": ""
      },
      {
        "type": "visualizedata2",
        "message0": "VISUALIZE %1",
        "args0": [
          {
            "type": "field_dropdown",
            "name": "view",
            "options": [
              [
                "LineChart",
                "LineChart"
              ],
              [
                "PieChart",
                "PieChart"
              ],
              [
                "BarChart",
                "BarChart"
              ],
              [
                "ScatterChart",
                "ScatterChart"
              ],
              [
                "StaTable",
                "StaTable"
              ]
            ]
          }
        ],
        "inputsInline": false,
        "previousStatement": null,
        "nextStatement": null,
        "colour": 0,
        "tooltip": "",
        "helpUrl": ""
      },
      {
        "type": "vivi",
        "message0": "グラフで分析 %1 グラフのタイプ： %2",
        "args0": [
          {
            "type": "input_dummy",
            "align": "CENTRE"
          },
          {
            "type": "field_dropdown",
            "name": "d1",
            "options": [
              [
                "折れ線グラフ",
                "LineChart"
              ],
              [
                "円グラフ",
                "PieChart"
              ],
              [
                "棒グラフ",
                "BarChart"
              ],
              [
                "散布図",
                "ScatterChart"
              ],
              [
                "統計量表",
                "StaTable"
              ]
            ]
          }
        ],
        "inputsInline": false,
        "previousStatement": null,
        "nextStatement": null,
        "colour": 0,
        "tooltip": "",
        "helpUrl": ""
      },
      {
        "type": "hypo",
        "message0": "仮説： %1",
        "args0": [
          {
            "type": "field_input",
            "name": "NAME",
            "text": "気温が上がったからだ"
          }
        ],
        "inputsInline": true,
        "nextStatement": null,
        "colour": 230,
        "tooltip": "",
        "helpUrl": ""
      },
      {
        "type": "hypo2",
        "message0": "計画： %1",
        "args0": [
          {
            "type": "field_dropdown",
            "name": "NAME",
            "options": [
              [
                "医療従事者数とは何かについて調べる",
                "k1"
              ],
              [
                "医療需要の拡大について調べる",
                "k2"
              ],
              [
                "医療教育の発達について調べる",
                "k3"
              ],
              [
                "女性の社会進出について調べる",
                "k4"
              ]
            ]
          }
        ],
        "inputsInline": true,
        "nextStatement": null,
        "colour": 90,
        "tooltip": "",
        "helpUrl": ""
      },
      {
        "type": "conc",
        "message0": "考察： %1",
        "args0": [
          {
            "type": "field_input",
            "name": "NAME",
            "text": "米の収穫量と平均気温には比例の関係がありそうだ"
          }
        ],
        "inputsInline": true,
        "previousStatement": null,
        "colour": 45,
        "tooltip": "",
        "helpUrl": ""
      },
      {
        "type": "setodata",
        "message0": "データの設定 %1 %2 元データ： %3 地域： %4 時期： %5",
        "args0": [
          {
            "type": "field_input",
            "name": "NAME",
            "text": "dataName"
          },
          {
            "type": "input_dummy"
          },
          {
            "type": "input_value",
            "name": "v1",
            "align": "RIGHT"
          },
          {
            "type": "input_value",
            "name": "v2",
            "align": "RIGHT"
          },
          {
            "type": "input_value",
            "name": "v3",
            "align": "RIGHT"
          }
        ],
        "inputsInline": false,
        "previousStatement": null,
        "nextStatement": null,
        "colour": 230,
        "tooltip": "",
        "helpUrl": ""
      },
      {
        "type": "time",
        "message0": "%1 ～ %2 %3",
        "args0": [
          {
            "type": "field_input",
            "name": "timefrom",
            "text": "1980"
          },
          {
            "type": "input_dummy"
          },
          {
            "type": "field_input",
            "name": "timeto",
            "text": "2000"
          }
        ],
        "inputsInline": true,
        "output": null,
        "colour": 230,
        "tooltip": "",
        "helpUrl": ""
      },
      {
        "type": "setadata",
        "message0": "データの設定 %1  データ： %2 %3 地　　域　： %4 %5 期　　間　： %6",
        "args0": [
          {
            "type": "input_dummy",
            "align": "CENTRE"
          },
          {
            "type": "field_dropdown",
            "name": "d1",
            "options": [
              [
                "医療従事者数(看護師)",
                "'1504010001000010010'"
              ],
              [
                "医療従事者数(准看護師)",
                "'1504010013000010010'"
              ],
              [
                "医療従事者数(医師)",
                "'1505040000000010000'"
              ],
              [
                "医療従事者数(歯科医師)",
                "'1505050000000010000'"
              ],
              [
                "医療施設推計外来患者数",
                "'1505110201000010010'"
              ],
              [
                "65歳以上の人口",
                "'0201010010000010030'"
              ],
              [
                "病院病床数",
                "'1505030000000010000'"
              ],
              [
                "感染症病床数",
                "'1505030002000010030'"
              ],
              [
                "平均気温",
                "'0102010000000010010'"
              ]
            ]
          },
          {
            "type": "input_dummy"
          },
          {
            "type": "field_dropdown",
            "name": "d2",
            "options": [
              [
                "全国",
                "'00000'"
              ],
              [
                "北海道",
                "'01000'"
              ],
              [
                "沖縄",
                "'47000'"
              ]
            ]
          },
          {
            "type": "input_dummy"
          },
          {
            "type": "input_value",
            "name": "v1"
          }
        ],
        "inputsInline": false,
        "previousStatement": null,
        "nextStatement": null,
        "colour": 230,
        "tooltip": "",
        "helpUrl": ""
      },
      {
        "type": "tv",
        "message0": "液晶テレビの売れ行きが悪くなった %1",
        "args0": [
          {
            "type": "input_statement",
            "name": "root"
          }
        ],
        "colour": 90,
        "tooltip": "",
        "helpUrl": ""
      },
      {
        "type": "_2t1",
        "message0": "★テレビを見る人が少なくなったからでは？ %1 データ： %2 分析： %3 結論：この仮説は %4 %5 その原因： %6",
        "args0": [
          {
            "type": "input_dummy"
          },
          {
            "type": "input_statement",
            "name": "s210"
          },
          {
            "type": "input_statement",
            "name": "s211"
          },
          {
            "type": "field_dropdown",
            "name": "flag",
            "options": [
              [
                "検証中",
                "d"
              ],
              [
                "妥当だ",
                "yes"
              ],
              [
                "棄却される",
                "no"
              ]
            ]
          },
          {
            "type": "input_dummy"
          },
          {
            "type": "input_statement",
            "name": "s213"
          }
        ],
        "inputsInline": false,
        "previousStatement": null,
        "nextStatement": null,
        "colour": 330,
        "tooltip": "",
        "helpUrl": ""
      },
      {
        "type": "_2t2",
        "message0": "★テレビの価格が値上がりしたからでは？ %1 データ： %2 分析： %3 結論：この仮説は %4 %5 その原因： %6",
        "args0": [
          {
            "type": "input_dummy"
          },
          {
            "type": "input_statement",
            "name": "s220"
          },
          {
            "type": "input_statement",
            "name": "s221"
          },
          {
            "type": "field_dropdown",
            "name": "NAME",
            "options": [
              [
                "検証中",
                "d"
              ],
              [
                "妥当だ",
                "yes"
              ],
              [
                "棄却される",
                "no"
              ]
            ]
          },
          {
            "type": "input_dummy"
          },
          {
            "type": "input_statement",
            "name": "s223"
          }
        ],
        "inputsInline": false,
        "previousStatement": null,
        "nextStatement": null,
        "colour": 330,
        "tooltip": "",
        "helpUrl": ""
      },
      {
        "type": "_2t3",
        "message0": "★テレビを持たない単身世帯が増えたからでは？ %1 データ： %2 分析： %3 結論：この仮説は %4 %5 その原因： %6",
        "args0": [
          {
            "type": "input_dummy"
          },
          {
            "type": "input_statement",
            "name": "s230"
          },
          {
            "type": "input_statement",
            "name": "s231"
          },
          {
            "type": "field_dropdown",
            "name": "NAME",
            "options": [
              [
                "検証中",
                "d"
              ],
              [
                "妥当だ",
                "yes"
              ],
              [
                "棄却される",
                "no"
              ]
            ]
          },
          {
            "type": "input_dummy"
          },
          {
            "type": "input_statement",
            "name": "s233"
          }
        ],
        "inputsInline": false,
        "previousStatement": null,
        "nextStatement": null,
        "colour": 330,
        "tooltip": "",
        "helpUrl": ""
      },
      {
        "type": "_3t1",
        "message0": "★テレビ番組の人気がないからでは？ %1 データ： %2 分析： %3 結論：この仮説は %4 %5 その原因： %6",
        "args0": [
          {
            "type": "input_dummy"
          },
          {
            "type": "input_statement",
            "name": "s310"
          },
          {
            "type": "input_statement",
            "name": "s311"
          },
          {
            "type": "field_dropdown",
            "name": "NAME",
            "options": [
              [
                "検証中",
                "d"
              ],
              [
                "正しい",
                "yes"
              ],
              [
                "棄却される",
                "no"
              ]
            ]
          },
          {
            "type": "input_dummy"
          },
          {
            "type": "input_statement",
            "name": "s313"
          }
        ],
        "inputsInline": false,
        "previousStatement": null,
        "nextStatement": null,
        "colour": 195,
        "tooltip": "",
        "helpUrl": ""
      },
      {
        "type": "_3t2",
        "message0": "★ネット利用が増加したからでは？ %1 データ： %2 分析： %3 結論：この仮説は %4 %5 その原因： %6",
        "args0": [
          {
            "type": "input_dummy"
          },
          {
            "type": "input_statement",
            "name": "s320"
          },
          {
            "type": "input_statement",
            "name": "s321"
          },
          {
            "type": "field_dropdown",
            "name": "NAME",
            "options": [
              [
                "検証中",
                "d"
              ],
              [
                "正しい",
                "yes"
              ],
              [
                "棄却される",
                "no"
              ]
            ]
          },
          {
            "type": "input_dummy"
          },
          {
            "type": "input_statement",
            "name": "s323"
          }
        ],
        "inputsInline": false,
        "previousStatement": null,
        "nextStatement": null,
        "colour": 195,
        "tooltip": "",
        "helpUrl": ""
      },
      {
        "type": "analysis",
        "message0": "折れ線グラフで可視化",
        "previousStatement": null,
        "nextStatement": null,
        "colour": 240,
        "tooltip": "",
        "helpUrl": ""
      },
      {
        "type": "PieChart",
        "message0": "円グラフで可視化",
        "previousStatement": null,
        "nextStatement": null,
        "colour": 240,
        "tooltip": "",
        "helpUrl": ""
      },
      {
        "type": "BarChart",
        "message0": "棒グラフで可視化",
        "previousStatement": null,
        "nextStatement": null,
        "colour": 240,
        "tooltip": "",
        "helpUrl": ""
      },
      {
        "type": "ScatterChart",
        "message0": "散布図で可視化",
        "previousStatement": null,
        "nextStatement": null,
        "colour": 240,
        "tooltip": "",
        "helpUrl": ""
      },
      {
        "type": "data1",
        "message0": "平均視聴時間",
        "previousStatement": null,
        "nextStatement": null,
        "colour": 270,
        "tooltip": "",
        "helpUrl": ""
      },
      {
        "type": "data2",
        "message0": "32型テレビ一台あたりの価格推移",
        "previousStatement": null,
        "nextStatement": null,
        "colour": 270,
        "tooltip": "",
        "helpUrl": ""
      },
      {
        "type": "data3",
        "message0": "世帯別テレビ普及率",
        "previousStatement": null,
        "nextStatement": null,
        "colour": 270,
        "tooltip": "",
        "helpUrl": ""
      },
      {
        "type": "data4",
        "message0": "世帯別平均保有台数",
        "previousStatement": null,
        "nextStatement": null,
        "colour": 270,
        "tooltip": "",
        "helpUrl": ""
      },
      {
        "type": "data5",
        "message0": "テレビ番組意識調査",
        "previousStatement": null,
        "nextStatement": null,
        "colour": 270,
        "tooltip": "",
        "helpUrl": ""
      },
      {
        "type": "data6",
        "message0": "インターネット利用時間",
        "previousStatement": null,
        "nextStatement": null,
        "colour": 270,
        "tooltip": "",
        "helpUrl": ""
      },
      {
        "type": "data7",
        "message0": "ダミーデータ",
        "previousStatement": null,
        "nextStatement": null,
        "colour": 270,
        "tooltip": "",
        "helpUrl": ""
      },
      
  ]
  )
  

  Blockly.JavaScript['setdata'] = function(block) {
    value_name = Blockly.JavaScript.valueToCode(block, 'name', Blockly.JavaScript.ORDER_ATOMIC);
    var value_raw = Blockly.JavaScript.valueToCode(block, 'raw', Blockly.JavaScript.ORDER_ATOMIC);
    var value_area = Blockly.JavaScript.valueToCode(block, 'area', Blockly.JavaScript.ORDER_ATOMIC);
    var value_time = Blockly.JavaScript.valueToCode(block, 'time', Blockly.JavaScript.ORDER_ATOMIC);
    var dropdown_stats = block.getFieldValue('stats');
    var value_filter = Blockly.JavaScript.valueToCode(block, 'filter', Blockly.JavaScript.ORDER_ATOMIC);
    // TODO: Assemble JavaScript into code variable.
    var code =  'let '+value_name+'='+value_raw+';\n'+
                'let area_'+value_name+'='+value_area+';\n'+
                value_time+
                'let stats_'+value_name+'="'+dropdown_stats+'";\n'+
                value_filter+
                'let DD'+value_name+'='+"getData("+value_name+",area_"+value_name+",timeFrom_"+value_name+",timeTo_"+value_name+",stats_"+value_name+",fmi_"+value_name+",fma_"+value_name+",'$')"+';\n';
    return code;
  };

  Blockly.JavaScript['dataname'] = function(block) {
    var text_name = block.getFieldValue('NAME');
    // TODO: Assemble JavaScript into code variable.
    var code = text_name;
    // TODO: Change ORDER_NONE to the correct strength.
    return [code, Blockly.JavaScript.ORDER_ATOMIC];
  };

  Blockly.JavaScript['area'] = function(block) {
    var dropdown_name = block.getFieldValue('NAME');
    // TODO: Assemble JavaScript into code variable.
    var code = dropdown_name;
    // TODO: Change ORDER_NONE to the correct strength.
    return [code, Blockly.JavaScript.ORDER_NONE];
  };

  Blockly.JavaScript['timefromto'] = function(block) {
    var value_past = Blockly.JavaScript.valueToCode(block, 'past', Blockly.JavaScript.ORDER_ATOMIC);
    var value_now = Blockly.JavaScript.valueToCode(block, 'now', Blockly.JavaScript.ORDER_ATOMIC);
    // TODO: Assemble JavaScript into code variable.
    var code =  'let timeFrom_'+value_name+'='+value_past+';\n'+
                'let timeTo_'+value_name+'='+value_now+';\n'
    // TODO: Change ORDER_NONE to the correct strength.
    return [code, Blockly.JavaScript.ORDER_ATOMIC];
  };

  Blockly.JavaScript['filter'] = function(block) {
    var value_mi = Blockly.JavaScript.valueToCode(block, 'mi', Blockly.JavaScript.ORDER_ATOMIC);
    var value_ma = Blockly.JavaScript.valueToCode(block, 'ma', Blockly.JavaScript.ORDER_ATOMIC);
    // TODO: Assemble JavaScript into code variable.
    var code =  'let fmi_'+value_name+'='+value_mi+';\n'+
                'let fma_'+value_name+'='+value_ma+';\n'
    // TODO: Change ORDER_NONE to the correct strength.
    return [code, Blockly.JavaScript.ORDER_ATOMIC];
  };

  Blockly.JavaScript['number'] = function(block) {
    var text_name = block.getFieldValue('NAME');
    // TODO: Assemble JavaScript into code variable.
    var code = text_name;
    // TODO: Change ORDER_NONE to the correct strength.
    return [code, Blockly.JavaScript.ORDER_ATOMIC];
  };

  Blockly.JavaScript['visualizedata'] = function(block) {
    var dropdown_view = block.getFieldValue('view');
    // TODO: Assemble JavaScript into code variable.
    var code = 'Visualize('+value_name+'n,area_'+value_name+',timeFrom_'+value_name+',timeTo_'+value_name+',stats_'+value_name+',fmi_'+value_name+',fma_'+value_name+',"'+dropdown_view+'");\n';
    return code;
  };

  Blockly.JavaScript['vivi'] = function(block) {
    var dropdown_d1 = block.getFieldValue('d1');
    // TODO: Assemble JavaScript into code variable.
    var code = 'Visualize(n'+value_name+',area_'+value_name+',timeFrom_'+value_name+',timeTo_'+value_name+',"'+dropdown_d1+'");\n';
    return code;
  };

  Blockly.JavaScript['visualizedata2'] = function(block) {
    var dropdown_view = block.getFieldValue('view');
    // TODO: Assemble JavaScript into code variable.
    var code = 'postForm("BuGn");\n';
    return code;
  };

  Blockly.JavaScript['hypo'] = function(block) {
    var text_name = block.getFieldValue('NAME');
    // TODO: Assemble JavaScript into code variable.
    var code = '...;\n';
    return code;
  };

  Blockly.JavaScript['hypo2'] = function(block) {
    var dropdown_name = block.getFieldValue('NAME');
    // TODO: Assemble JavaScript into code variable.
    var code = '...;\n';
    return code;
  };
  
  Blockly.JavaScript['conc'] = function(block) {
    var text_name = block.getFieldValue('NAME');
    // TODO: Assemble JavaScript into code variable.
    var code = '...;\n';
    return code;
  };

  Blockly.JavaScript['setodata'] = function(block) {
    var text_name = block.getFieldValue('NAME');
    var value_v1 = Blockly.JavaScript.valueToCode(block, 'v1', Blockly.JavaScript.ORDER_ATOMIC);
    var value_v2 = Blockly.JavaScript.valueToCode(block, 'v2', Blockly.JavaScript.ORDER_ATOMIC);
    var value_v3 = Blockly.JavaScript.valueToCode(block, 'v3', Blockly.JavaScript.ORDER_ATOMIC);
    // TODO: Assemble JavaScript into code variable.
    var code = '...;\n';
    return code;
  };

  Blockly.JavaScript['time'] = function(block) {
    var text_timefrom = block.getFieldValue('timefrom');
    var text_timeto = block.getFieldValue('timeto');
    // TODO: Assemble JavaScript into code variable.
    var code = 'let timeFrom_'+value_name+'='+text_timefrom+';\n'+
                'let timeTo_'+value_name+'='+text_timeto+';\n';
    // TODO: Change ORDER_NONE to the correct strength.
    return [code, Blockly.JavaScript.ORDER_ATOMIC];
  };

  Blockly.JavaScript['setadata'] = function(block) {
    let timestamp=Date.now().toString();
    value_name=timestamp;
    var dropdown_d1 = block.getFieldValue('d1');
    var dropdown_d2 = block.getFieldValue('d2');
    var value_v1 = Blockly.JavaScript.valueToCode(block, 'v1', Blockly.JavaScript.ORDER_ATOMIC);
    // TODO: Assemble JavaScript into code variable.
    var code =  'let n'+value_name+'='+dropdown_d1+';\n'+
    'let area_'+value_name+'='+dropdown_d2+';\n'+
    value_v1+
    'let DD'+value_name+'='+"getData(n"+value_name+",area_"+value_name+",timeFrom_"+value_name+",timeTo_"+value_name+",'$')"+';\n';

    return code;
  };

  Blockly.JavaScript['tv'] = function(block) {
    var statements_name = Blockly.JavaScript.statementToCode(block, 'NAME');
    // TODO: Assemble JavaScript into code variable.
    var code = '...;\n';
    return code;
  };
  
  Blockly.JavaScript['_2t1'] = function(block) {
    var statements_s0 = Blockly.JavaScript.statementToCode(block, 's0');
    var statements_s1 = Blockly.JavaScript.statementToCode(block, 's1');
    var dropdown_flag = block.getFieldValue('flag');
    var statements_s3 = Blockly.JavaScript.statementToCode(block, 's3');
    // TODO: Assemble JavaScript into code variable.
    var code = '...;\n';
    return code;
  };
  
  Blockly.JavaScript['_2t2'] = function(block) {
    var statements_s0 = Blockly.JavaScript.statementToCode(block, 's0');
    var statements_s1 = Blockly.JavaScript.statementToCode(block, 's1');
    var dropdown_name = block.getFieldValue('NAME');
    var statements_s3 = Blockly.JavaScript.statementToCode(block, 's3');
    // TODO: Assemble JavaScript into code variable.
    var code = '...;\n';
    return code;
  };

  Blockly.JavaScript['_2t3'] = function(block) {
    var statements_s0 = Blockly.JavaScript.statementToCode(block, 's0');
    var statements_s1 = Blockly.JavaScript.statementToCode(block, 's1');
    var dropdown_name = block.getFieldValue('NAME');
    var statements_s3 = Blockly.JavaScript.statementToCode(block, 's3');
    // TODO: Assemble JavaScript into code variable.
    var code = '...;\n';
    return code;
  };

  Blockly.JavaScript['_3t1'] = function(block) {
    var statements_s0 = Blockly.JavaScript.statementToCode(block, 's0');
    var statements_s1 = Blockly.JavaScript.statementToCode(block, 's1');
    var dropdown_name = block.getFieldValue('NAME');
    var statements_s3 = Blockly.JavaScript.statementToCode(block, 's3');
    // TODO: Assemble JavaScript into code variable.
    var code = '...;\n';
    return code;
  };

  Blockly.JavaScript['_3t2'] = function(block) {
    var statements_s0 = Blockly.JavaScript.statementToCode(block, 's0');
    var statements_s1 = Blockly.JavaScript.statementToCode(block, 's1');
    var dropdown_name = block.getFieldValue('NAME');
    var statements_s3 = Blockly.JavaScript.statementToCode(block, 's3');
    // TODO: Assemble JavaScript into code variable.
    var code = '...;\n';
    return code;
  };
  
  Blockly.JavaScript['analysis'] = function(block) {
    // TODO: Assemble JavaScript into code variable.
    var code = '...;\n';
    return code;
  };
  
  Blockly.JavaScript['PieChart'] = function(block) {
    // TODO: Assemble JavaScript into code variable.
    var code = '...;\n';
    return code;
  };
  
  Blockly.JavaScript['BarChart'] = function(block) {
    // TODO: Assemble JavaScript into code variable.
    var code = '...;\n';
    return code;
  };
  
  Blockly.JavaScript['ScatterChart'] = function(block) {
    // TODO: Assemble JavaScript into code variable.
    var code = '...;\n';
    return code;
  };
  
  Blockly.JavaScript['data1'] = function(block) {
    // TODO: Assemble JavaScript into code variable.
    var code = '...;\n';
    return code;
  };
  
  Blockly.JavaScript['data2'] = function(block) {
    // TODO: Assemble JavaScript into code variable.
    var code = '...;\n';
    return code;
  };

  Blockly.JavaScript['data3'] = function(block) {
    // TODO: Assemble JavaScript into code variable.
    var code = '...;\n';
    return code;
  };

  Blockly.JavaScript['data4'] = function(block) {
    // TODO: Assemble JavaScript into code variable.
    var code = '...;\n';
    return code;
  };

  Blockly.JavaScript['data5'] = function(block) {
    // TODO: Assemble JavaScript into code variable.
    var code = '...;\n';
    return code;
  };

  Blockly.JavaScript['data6'] = function(block) {
    // TODO: Assemble JavaScript into code variable.
    var code = '...;\n';
    return code;
  };

  Blockly.JavaScript['data7'] = function(block) {
    // TODO: Assemble JavaScript into code variable.
    var code = '...;\n';
    return code;
  };