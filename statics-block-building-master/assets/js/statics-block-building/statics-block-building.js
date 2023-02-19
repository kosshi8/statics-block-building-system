"use strict";

var StaticsBlockBuilding = StaticsBlockBuilding || {}; // このシステムの名前空間
// このファイルを読み込んで使うときは，「StaticsBlockBuilding.createWorkspace(~~~)」のようにこの変数を使う

(function(global, $, Blockly){
    // クロージャー化（他のプロジェクトとの変数などの名前の衝突を避ける）
    var _ = StaticsBlockBuilding;

    _.block_components = {};
    _.workspace_list = {}; // SBBが表示したワークスペースのリスト
    _.copied_workspace = null;

    _.init = (target_div_id, block_components_data) => {
        // target_div_id: SBBコンポーネントを表示するDivのID
        // block_file_path: ブロック定義をしているファイルのパス
        // block_parts_components_id: ブロックの部品定義部分のXMLのID
        // toolbox_block_id: ツールボックスの部品定義部分のXMLのID
        // block_components_id: 初期表示用のブロック定義部分のXMLのID

        _.block_components = block_components_data; // 読み込んだデータの内的保持
        Blockly.defineBlocksWithJsonArray(_.block_components.blockPartsComponents); // ブロック部品の定義読み込み
        
        _.createWorkspace(target_div_id); // 初期ワークスペースの生成
        
        // 問題文を取得して一番上に貼り付け
        const question_string = _.block_components.question;
        $(`<h2>Q：${question_string}</h2>`).prependTo(`#${target_div_id}`);
        $("<div></div>", { "id": 'sbb_workspace_message_dialog' }).prependTo(`#${target_div_id}`);

    }

    
    /*** ワークスペース操作のユーティリティ ***/ 
    _.createWorkspace = (target_div_id) => {
        // ワークスペースを生成するメソッド
        const new_workspace_id = Object.keys(_.workspace_list).length; // ワークスペース数を計算してID化
        const workspace_dom = $("<div></div>", {
            // ワークスペースのDOMオブジェクト
            "id": _.generateWorkspaceContainerId(new_workspace_id),
            "class": "sbb_workspace",
            "text": `ワークスペース-${new_workspace_id}`,
        });

        const feedback_area = $("<div></div>", {
            "id": "feedback_area_container"}).append($("<div></div>", {
                "id": "feedback_area",
            }));
        
        /*** ここから１つのワークスペースを構成するオブジェクトの生成 ***/
        const title_arrow_button = $("<button></button", {
            // タイトルボタンの設定 
            "id": `sbb_workspace_title_button_${new_workspace_id}`,
            "class": `sbb_workspace_title_button_arrow sbb_workspace_title_button_btn`,
            on: {
                click: (e) => {
                    // タイトルボタンを押したときの処理を書く
                    _.displayBlockExecutionResult(new_workspace_id);
                },
            },
        });

        const workspace_title = $("<div></div>", {
            // タイトル行のオブジェクト生成
            "id": `sbb_workspace_title_${new_workspace_id}`,
            "class": "sbb_workspace_title_area",
        }).append(title_arrow_button, $("<input></input>", {
            // タイトルエリアの文字入力エリアの設定/追加
            "id": `sbb_workspace_title_input_${new_workspace_id}`,
            "class": "sbb_workspace_title_input",
            "type": "text",
            "placeholder": "タイトル",  
        }));

        const sbb_codebox_area = $("<div></div>", {
            // コードエリアの追加
            "id": `sbb_workspace_codebox_area_${new_workspace_id}`,
            "class": "sbb_workspace_codebox_area",
        });

        const sbb_codebox = $("<textarea></textarea", {
            // コードエリアの追加
            "id": `sbb_workspace_codebox_${new_workspace_id}`,
            "class": "sbb_workspace_codebox",
        });

        const sbb_codebox_display = $("<div></div>")
            .append($("<h3></h3>", { 'text': '実行結果' }),
                    $("<div></div>", {
                        // 実行結果表示エリアエリアの追加
                        "id": `sbb_workspace_codebox_display_${new_workspace_id}`,
                        "class": "sbb_workspace_codebox_display",
                    }));
        
        
        const sbb_copy_btn = $("<button></button>", {
            // コピーボタンの設定
            "id": `sbb_workspace_copy_btn_${new_workspace_id}`,
            "class": "sbb_workspace_copy_btn",
            "text": "コピー",
            "on": {
                click: (e) => {
                    // コピーボタンを押したときの処理をここに書く
                    _.copied_workspace = Blockly.Xml.workspaceToDom(_.workspace_list[new_workspace_id]);
                    _.displayFadeWindow(`ワークスペース_${new_workspace_id}のブロックをコピーしました`);
                } 
            },
        });

        const sbb_paste_btn = $("<button></button>", {
            // 貼り付けボタンの設定
            "id": `sbb_workspace_paste_btn_${new_workspace_id}`,
            "class": "sbb_workspace_paste_btn",
            "text": "ペースト",
            on: {
                click: (e) => {
                    // ペーストボタンを押したときの処理をここに書く
                    Blockly.Xml.domToWorkspace(_.copied_workspace, _.workspace_list[new_workspace_id]);
                    _.displayFadeWindow(`ワークスペース_${new_workspace_id}にデータを貼り付けました`);
                } 
            },
        });
        
        const sbb_diagnose_btn = $("<button></button>", {
            // 診断ボタンの設定
            "id": `sbb_workspace_diagnose_btn_${new_workspace_id}`,
            "class": "sbb_workspace_diagnose_btn",
            "text": "診断",
            on: {
                click: (e) => {
                    // 診断ボタンを押したときの処理をここに書く
                    _.diagnoseUserBlocks(new_workspace_id)
                    _.displayFadeWindow(`ワークスペース_${new_workspace_id}の診断ボタンが押されました`);
                } 
            },
        });

        const sbb_add_next_workspace_btn = $("<button></button>", {
            // 次のワークスペースを作成するボタンの設定
            "id": `sbb_workspace_add_new_workspace_btn_${new_workspace_id}`,
            "class": "sbb_workspace_add_new_workspace_btn",
            "text": "下にワークスペースを追加",
            on: {
                click: (e) => {
                    _.createWorkspace(target_div_id);
                    _.displayFadeWindow(`ワークスペース_${new_workspace_id}を新たに追加しました`);
                },
            },
        });

        const sbb_remove_workspace_btn = (new_workspace_id !== 0) ? $("<button></button>", {
            // ワークスペースを削除するボタンの設定
            "id": `sbb_workspace_remove_workspace_btn_${new_workspace_id}`,
            "class": "sbb_workspace_remove_workspace_btn",
            "text": "ワークスペースを削除",
            on: {
                click: (e) => {
                    // 最初のワークスペースは消さない
                    _.removeWorkspace(new_workspace_id);
                    _.displayFadeWindow(`ワークスペース_${new_workspace_id}を削除しました`);
                },
            },
        }) : $("<span></span");

        const toolbox_div = $("<div></div>", {
            // ツールボックス挿入用Div
            "id": `sbb_workspace_toolbox_workspace_${new_workspace_id}`,
            "class": "sbb_workspace_toolbox",
            "style": "display: none",
        });
        /*** ここまで１つのワークスペースを構成するオブジェクトの生成 ***/

        /*** ここからワークスペースのDOM構成開始 ***/
        $(`#${target_div_id}`).append(feedback_area, workspace_dom); // 生成したDOMにワークスペースオブジェクトを挿入

        workspace_dom.append(workspace_title, toolbox_div); // ワークスペースの上側オブジェクト設置
        _.setWorkspace(new_workspace_id); // ここからワークスペース本体の生成・注入
        workspace_dom.append(sbb_codebox_area.append(sbb_copy_btn,
                                                     sbb_paste_btn,
                                                     sbb_diagnose_btn,
                                                     sbb_add_next_workspace_btn,
                                                     sbb_remove_workspace_btn,
                                                     sbb_codebox,
                                                     sbb_codebox_display,
        )); // ワークスペースの下側オブジェクト設置
        /*** ワークスペースのDOM構成終了 ***/
    }

    _.generateWorkspaceContainerId = (workspace_id) => {
        // ワークスペースのコンテナIDを生成するメソッド
        return `sbb_workspace_${workspace_id}`;
    }
    
    _.getWorkspace = (workspace_id) => {
        // ワークスペースオブジェクトのゲッターメソッド
        return _.workspace_list[workspace_id];
    }

    _.getWorkspaceToolbox = (workspace_id) => {
        // ツールボックスを取得
        _.getWorkspace(workspace_id).getToolbox()
    }

    _.getWorkspaceBlockToDom = (workspace_id) => {
        // ワークスペース内のブロックをDOMオブジェクトとして取得
        // コピーなどに使える
        return Blockly.Xml.workspaceToDom(_.workspace_list[workspace_id]);
    }
    
    _.removeWorkspace = (workspace_id) => {
        // 特定のIDのワークスペースを削除
        const ws_container = _.generateWorkspaceContainerId(workspace_id);
        $(`#${ws_container}`).remove(); // DOMからの削除
        delete(_.workspace_list[workspace_id]); // データからの削除
    }

    _.setWorkspace = (workspace_id) => {
        // ワークスペースを生成・挿入

        // ツールボックスデータの取得と設定
        const ws_container_id = _.generateWorkspaceContainerId(workspace_id);
        _.workspace_list[workspace_id] = Blockly.inject(ws_container_id, {
            // ワークスペースの生成と注入
            toolbox: _.block_components.toolboxBlocks,
            theme: _.block_components.theme, // カラーテーマ
            move: { // ワークスペース内の移動方法を全部On
                scrollbars: {
                    horizontal: true,
                    vertical: true,
                }, drag: true, wheel: true,
            },
            trashcan: true, // ゴミ箱マークOn
        });

        /*** ここからブロックの設定 ***/
        _.setBlocks(workspace_id); // ブロックの配置
        /*** ここまでブロックの設定 ***/

        _.workspace_list[workspace_id].registerToolboxCategoryCallback('COMPOSED_BLOCKS', (target_workspaces) => {
            // 使ったブロックの読み込み
            return _.getAllWorkspaceComposedBlocks();
        });
        

        /*** ここからワークスペースへのイベントの設定 ***/
        _.workspace_list[workspace_id].addChangeListener(() => {
            // イベントリスナの設定（ブロックの書き換わりと同時に実行コードも変更）
            $(`#sbb_workspace_codebox_${workspace_id}`).val(Blockly.JavaScript.workspaceToCode(_.workspace_list[workspace_id]));
        });
        /*** ここまでワークスペースのDOM構成 ***/

        $(`#sbb_workspace_codebox_area_${workspace_id}`).appendTo($(`#${ws_container_id}`));
        
        //_.registerCopyOption(workspace_id);
    }

    _.getAllWorkspaceComposedBlocks = () => {
        // すべてのワークスペースで使ったブロック全部を取得して１つのXMLエレメントとしてリターン
        const all_composed_blocks = Object.keys(_.workspace_list).map(ws_id => {
            return Blockly.Xml.workspaceToDom(_.workspace_list[ws_id]);
        });

        // 各ワークスペースのブロックをまとめて返す
        return $("<xml></xml>").append($(all_composed_blocks).children()).get(0);
    }
    
    _.setBlocks = (target_workspace_id) => {
        // データのセット
        const target_workspace = _.getWorkspace(target_workspace_id);
        // 最終的にはデフォルトブロックは設定しないということでいい？
        Blockly.serialization.workspaces.load(_.block_components.defaultDisplayBlocks, target_workspace);
    }

    _.displayBlockExecutionResult = (workspace_id) => {
        try {
            eval(Blockly.JavaScript.workspaceToCode(_.workspace_list[workspace_id]));
            _.displayFadeWindow(`ワークスペース_${new_workspace_id}を実行しました`);
        } catch (error) {
            console.log("エラーです.実行できません．");
            _.displayFadeWindowError("エラーです.実行できません．");
        }
        // ワークスペースの実行結果を表示
        const result_area = $(`#sbb_workspace_codebox_display_${workspace_id}`);
        result_area.append($("<div></div>", {
            'class': 'aaaaa',
            'text': 'aaaaaaaaaaaaaaaaaaaaaaaa',
        }));
        //ワークスペースをコードに変換したもの => Blockly.JavaScript.workspaceToCode(_.workspace_list[workspace_id]);
    }

    _.Visualize = (workspace_id) => {
        google.charts.load('current', {'packages':['corechart']});
        google.charts.setOnLoadCallback(() => {
            const shapedData = google.visualization.arrayToDataTable(data);
            const options = {
                title: 'タイトル',
                width: 400,
                height: 300
            };
            const chart = new google.visualization.LineChart($(`#sbb_workspace_codebox_display_${workspace_id}`));
            chart.draw(shapedData,options)
        });
    }
    
    _.getWorkspaceDataAsJson = (workspace_id) => {
        // ワークスペースで作成・組み立てたブロックをJSONデータとして取得
        const target_workspace = _.getWorkspace(workspace_id);
        const serializer = new Blockly.serialization.blocks.BlockSerializer();
        const state = serializer.save(target_workspace);
        // return serializer.load(state, target_workspace);
        return state;
    }

    
    _.registerCopyOption = (copy_target_workspace_id) => {
        // ワークスペースのコピー機能の登録
        // copy_target_workspace_id: (string) コピーする対象のワークスペースID
        const ws = _.workspace_list[copy_target_workspace_id];
        Blockly.ContextMenuRegistry.registry.register({
            displayText: "copy workspace",
            preconditionFn: function(scope) {
                return 'enabled';
            },
            callback: function(scope) {
                _.copied_workspace = Blockly.Xml.workspaceToDom(ws);
            },
            scopeType: Blockly.ContextMenuRegistry.ScopeType.BLOCK,
            weight: 100,
        });        
    }


    /*** ここからその他のユーティリティ ***/
    _.displayFadeWindow = (display_text) => {
        // フェードつきのコメントエリアの表示メソッド
        const dialog = $('#sbb_workspace_message_dialog');
        dialog.empty();
        dialog.html(display_text);
        dialog.fadeIn("slow", () => {
            dialog.delay(1000).fadeOut("slow");
        });
    }

    _.displayFadeWindowError = (display_text) => {
        // フェードつきのコメントエリアの表示メソッド
        const dialog = $('#sbb_workspace_message_dialog');
        dialog.empty();
        dialog.html(display_text);
        dialog.fadeIn("slow", () => {
            dialog.delay(3000).fadeOut("slow");
        });
    }
    /*** ここまでその他のユーティリティ ***/
    
    /*** ここから診断ユーティリティ ***/
    _.displayFeedback = (content) => {
        // フィードバックエリアにコンテンツを挿入
        $("#feedback_area").text(content);
    }

    _.clearFeedback = () => {
        // フィードバックエリアをクリアする
        $("#feedback_area").empty();
    }
    
    _.diagnoseUserBlocks = (workspace_id) => {
        // 特定ワークスペースに対して診断実行
        console.log(_.getWorkspace(0))

        const learner_blocks = _.getWorkspaceDataAsJson(workspace_id);
        const material_designer_blocks = _.block_components.defaultDisplayBlocks;
        //learner_blocks["blocks"]はブロックの配列
        console.log("learner_blocks")
        console.log(learner_blocks["blocks"])
        console.log("material_designer_blocks")
        console.log(material_designer_blocks["blocks"]["blocks"]["unti"])
        const answer_diffs = _.referIdealComposition(material_designer_blocks["blocks"]["blocks"][0], learner_blocks["blocks"][0]);
        
        _.displayFeedback(answer_diffs);
    }
    const nextCheck = [];
    _.referIdealComposition = (expert_json, novice_json) => {
        // 多分再起しながら構造の同一性チェックする

        if(novice_json === null){
            //学習者のjsonが存在しない
            _.displayFeedback("ok．");
        }
        else{
            //学習者のjsonが存在する
            const keysE = Object.keys(expert_json);
            const keysN = Object.keys(novice_json);
            console.log(novice_json["type"])
            if(expert_json["type"] === novice_json["type"]){
                if("inputs" in novice_json && "next" in novice_json){
                    //inputsO nextO
                    const keys = Object.keys(expert_json["inputs"]);
                    keys.forEach(element => {
                        //穴が存在するか
                        if(element in novice_json["inputs"]){
                            console.log(element)
                             _.referIdealComposition(expert_json["inputs"][element]["block"],novice_json["inputs"][element]["block"]);
                            }
                            else{
                                console.log(expert_json["type"]+"の穴（"+element+"）は空白です．"+expert_json["inputs"][element]["block"]["type"]+"を入れるべきです．")
                            }
                    });
                    _.referIdealComposition(expert_json["next"]["block"],novice_json["next"]["block"]);
                }
                else if("inputs" in novice_json && ("next" in novice_json) == false){
                    const keys = Object.keys(expert_json["inputs"]);
                    keys.forEach(element => {
                        //穴が存在するか
                        if(element in novice_json["inputs"]){
                            console.log(element)
                             _.referIdealComposition(expert_json["inputs"][element]["block"],novice_json["inputs"][element]["block"]);
                            }
                            else{
                                console.log(expert_json["type"]+"の穴（"+element+"）は空白です．"+expert_json["inputs"][element]["block"]["type"]+"を入れるべきです．")
                            }
                    });
                }
                else if(("inputs" in novice_json) == false && "next" in novice_json){
                    if(expert_json["inputs"] == undefined || expert_json["inputs"] == null){
                    }
                    else{
                        const keys = Object.keys(expert_json["inputs"]);
                        keys.forEach(element => {
                            console.log(expert_json["type"]+"の穴（"+element+"）は空白です．"+expert_json["inputs"][element]["block"]["type"]+"を入れるべきです．")
                        });
                    }
                    _.referIdealComposition(expert_json["next"]["block"],novice_json["next"]["block"]);
                }
                else if(("inputs" in novice_json) == false && ("next" in novice_json) == false){
                    if(expert_json["inputs"] == undefined || expert_json["inputs"] == null){
                    }
                    else{
                        const keys = Object.keys(expert_json["inputs"]);
                        keys.forEach(element => {
                            console.log(expert_json["type"]+"の穴（"+element+"）は空白です．"+expert_json["inputs"][element]["block"]["type"]+"を入れるべきです．")
                        });
                    }
                }
            }
            else{
                console.log(novice_json["type"]+"を入れていますが，誤りです．")
                }
            }
    }

    // if("inputs" in novice_json){
    //     //inputsが存在する
    //     const keys = Object.keys(expert_json["inputs"]);
    //     if("next" in novice_json){
    //         //nextが存在する
    //         nexter = 1;
    //         keys.forEach(element => {
    //             //穴が存在するか
    //             if(element in expert_json["inputs"]){
    //                 console.log(element)
    //                 _.referIdealComposition(expert_json["inputs"][element]["block"],novice_json["inputs"][element]["block"]);
    //             }
    //             else{

    //             }
    //         });
    //     }
    //     else{
    //         //nextが存在しない
    //         nexter = 0;
    //         keys.forEach(element => {
    //             //穴が存在するか
    //             if(element in expert_json["inputs"]){
    //                 console.log(element)
    //                 _.referIdealComposition(expert_json["inputs"][element]["block"],novice_json["inputs"][element]["block"]);
    //             }
    //             else{

    //             }                        
    //         });
    //     }
    // }
    // else{
    //     //inputsが存在しない
    //     if("next" in novice_json){
    //         //nextが存在する
    //     }
    //     else{
    //         //nextが存在しない
    //     }
    // }

                        // const keys = Object.keys(expert_json["inputs"]);
                    // keys.forEach(element => {
                    //     const nexter = 0;
                    //     if(element in novice_json["inputs"]){
                    //         console.log(element)
                    //         if("next" in novice_json["inputs"]){
                    //             nexter = 1;
                    //         }
                    //         else{

                    //         }
                    //         // nextCheck.append(nexter);
                    //         _.referIdealComposition(expert_json["inputs"][element]["block"],novice_json["inputs"][element]["block"]);
                    //     }
                    //     else{
                    //         _.referIdealComposition(expert_json["inputs"][element]["block"],novice_json["inputs"][element]["block"]);
                            
                    //     };
                    // });
                    // if(expert_json["inputs"] === novice_json["inputs"]){
                    //     //inputsが同じ
                    //     // _.referIdealComposition(expert_json["inputs"],novice_json["inputs"]);
                    // }
                    // else{
                    //     //inputsが違う
                    //     const keys = Object.keys(expert_json["inputs"]);
                    //     for(let k1 in keys){
                    //         _.referIdealComposition(expert_json["inputs"][keys[k1]]["block"],novice_json["inputs"][keys[k1]]["block"]);
                    //     }
                    // }
    /*** ここまで診断ユーティリティ ***/
    
}(this, window.jQuery, window.Blockly));

if (typeof module !== 'undefined') {
    // システム名のエクスポート
    module.exports = StaticsBlockBuilding;
}

// 画面が読み込まれたあと（）3tatics_block_buildingというIDが付与されたDOMオブジェクトがレンダリングされたあとに実行する
// この3行は，読み込み先のファイルなどで実行しても構わない
// 今はひとまずこのファイルを読み込むだけで動くようにしているだけ
$(window).on('load', () => {
    // init: SBBのInitialization
    // @params
    //  1: ワークスペースを表示するためのDivのID
    //  2: ブロックデータを定義したJSONを格納した変数
    StaticsBlockBuilding.init('statics_block_building', sbb_components_data); // 初期化
});
