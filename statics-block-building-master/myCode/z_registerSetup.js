let workspace1=null;

// Returns an arry of XML nodes.
var RirekiCallback = function(workspace) {
  // Returns an array of hex colours, e.g. ['#4286f4', '#ef0447']
  var blockList = [];
  for (var i = 1; i < count; i++) {
    copyW(i);
    let q=coppiedBlock.childNodes;
    let qlen=q.length;
    for(let j=0;j<qlen;j++){
      blockList.push(q[j]);
    }
  }
  console.log(blockList);
  return blockList;
};

const start=()=>{
  //右クリック時のオプションを登録
  registerShoutYeahOption();
  registerCopyOption();
  //最初のワークスペース
  Blockly.Themes.Argentina = Blockly.Theme.defineTheme('argentina', {
    'base': Blockly.Themes.Classic,
    'categoryStyles': {
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
  });

  workspace1 = Blockly.inject('blocklyDiv1',
    {
      toolbox: document.getElementById('toolbox'),
      theme: Blockly.Themes.Argentina
    });
    //最初に表示しておくブロック
    Blockly.Xml.domToWorkspace(document.getElementById('startBlocks'),workspace1);
   //ブロックから変換されたJavascriptを表示する
     workspace1.addChangeListener(function() {
     const codebox = document.getElementById("codebox1");
     const code = Blockly.JavaScript.workspaceToCode(workspace1);
     codebox.value = code;
     });

     // Returns an arry of XML nodes.
     var coloursFlyoutCallback = function(workspace) {
      // Returns an array of hex colours, e.g. ['#4286f4', '#ef0447']
      var blockList = [];
      for (var i = 0; i < 3; i++) {
        var block = document.createElement('block');
        block.setAttribute('type', 'colour_picker');
        var field = document.createElement('field');
        field.setAttribute('name', 'COLOUR');
        field.innerText = "aiueo";
        block.appendChild(field);
        console.log(block);
        blockList.push(block);
      }
      return blockList;
    };

// Associates the function with the string 'COLOUR_PALETTE'
workspace1.registerToolboxCategoryCallback(
    'COLOUR_PALETTE', RirekiCallback);
 }



const registerShoutYeahOption=()=> {
  const workspaceItem = {
    displayText: 'Shout yeah！',
    // Use the workspace scope in the precondition function to check for blocks on the workspace.
    preconditionFn: function(scope) {
      return 'enabled';
    },
    // Use the workspace scope in the callback function to add a block to the workspace.
    callback: function(scope) {
      console.log("yeah!");
    },
    scopeType: Blockly.ContextMenuRegistry.ScopeType.WORKSPACE,
    id: 'shoutYeah',
    weight: 100,
  };
  Blockly.ContextMenuRegistry.registry.register(workspaceItem);

  let blockItem = {...workspaceItem}
  // Use block scope and update the id to a nonconflicting value.
  blockItem.scopeType = Blockly.ContextMenuRegistry.ScopeType.BLOCK;
  blockItem.id = 'shoutYeah_block';
  Blockly.ContextMenuRegistry.registry.register(blockItem);
}

const registerCopyOption=()=> {
  const blockItem = {
    displayText: 'Copy',
    // Use the workspace scope in the precondition function to check for blocks on the workspace.
    preconditionFn: function(scope) {
      return 'enabled';
    },
    // Use the workspace scope in the callback function to add a block to the workspace.
    callback: function(scope) {
      let lastBlock=Blockly.Xml.workspaceToDom(workspace1);//Blockly.mainWorkspace
      console.log(lastBlock);
      Blockly.Xml.domToWorkspace(lastBlock,workspace2);
    },
    scopeType: Blockly.ContextMenuRegistry.ScopeType.BLOCK,
    id: 'AddLastBlock',
    weight: 100,
  };
  Blockly.ContextMenuRegistry.registry.register(blockItem);

  // let blockItem = {...workspaceItem}
  // // Use block scope and update the id to a nonconflicting value.
  // blockItem.scopeType = Blockly.ContextMenuRegistry.ScopeType.BLOCK;
  // blockItem.id = 'shoutYeah_block';
  // Blockly.ContextMenuRegistry.registry.register(blockItem);
}

const toi=()=>{
  var blockList = [];
  for (var i = 1; i < count; i++) {
    copyW(i);
    let q=coppiedBlock.childNodes;
    let qlen=q.length;
    for(let j=0;j<qlen;j++){
      blockList.push(q[j]);
    }
  }
  for(var i=0;i<blockList.length;i++){
    console.log(blockList[i]);
    //批判的思考を促す問いの介入ルール
    if(i==0){
      
    }
  }
}
