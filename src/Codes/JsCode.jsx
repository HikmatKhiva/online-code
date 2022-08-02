import React from 'react';
import ReactAce from 'react-ace';
import 'ace-builds/src-noconflict/mode-javascript';
import 'ace-builds/src-noconflict/snippets/javascript';
import 'ace-builds/src-min-noconflict/ext-language_tools';
import { useContext } from 'react';
import { codeContext } from '../Context/onlineCodeContext';
const JsCode = () => {
    const { js, setJs, autoLive, autoBasic, autoSnippet } = useContext(codeContext);
    return (
        <ReactAce
            placeholder='Write Your Javascript Code'
            mode='javascript'
            value={js}
            onChange={value => setJs(value)}
            width='100%'
            height='100%'
            style={{background:'#ddd',color:'red'}}
            fontSize={16}
            showGutter={false}
            showPrintMargin={false}
            highlightActiveLine={true}
            setOptions={{
                enableBasicAutocompletion:autoBasic,
                enableLiveAutocompletion:autoLive,
                enableSnippets:autoSnippet,
                showLineNumbers:true,
                tabSize: 2
            }}
        />
    )
}

export default JsCode