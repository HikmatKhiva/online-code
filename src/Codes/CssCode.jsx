import React from 'react';
import { useContext } from 'react';
import ReactAce from 'react-ace';
import { codeContext } from '../Context/onlineCodeContext';
import 'ace-builds/src-noconflict/mode-css';
import 'ace-builds/src-noconflict/snippets/css';
import 'ace-builds/src-min-noconflict/ext-language_tools';
const CssCode = () => {
    const { css, setCss, autoLive, autoBasic, autoSnippet } = useContext(codeContext);
    return (
        <ReactAce
            placeholder='Write Your CSS Code'
            mode='css'
            value={css}
            onChange={value => setCss(value)}
            height='100%'
            width='100%'
            style={{background:'#ddd',color:'red'}}
            fontSize={16}
            scrollMargin={false}
            showGutter={false}
            showPrintMargin={false}
            highlightActiveLine={true}
            setOptions={{
                enableBasicAutocompletion: autoBasic,
                enableLiveAutocompletion: autoLive,
                enableSnippets: autoSnippet,
                showLineNumbers:true,
                tabSize:2
            }}
        />
    )
}

export default CssCode