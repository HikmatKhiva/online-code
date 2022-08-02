import React, { useContext } from 'react';
import ReactAce from 'react-ace';
import { codeContext } from '../Context/onlineCodeContext';
import 'ace-builds/src-noconflict/mode-html';
import 'ace-builds/src-noconflict/snippets/html';
import 'ace-builds/src-min-noconflict/ext-language_tools';
import 'ace-builds/src-noconflict/theme-monokai'
const HtmlCode = () => {
    const { html, setHtml, autoLive, autoBasic, autoSnippet  } = useContext(codeContext);
    return (
        <ReactAce
            placeholder='Write Your HTML Code'
            mode='html'
            value={html}
            onChange={value => setHtml(value)}
            name='code-html'
            width='100%'
            // theme='monokai'
            style={{background:'#ddd',color:'red'}}
            height='100%'
            fontSize={16}
            scrollMargin={false}
            showGutter={false}
            highlightActiveLine={true}
            showPrintMargin={true}
            setOptions={{
                enableLiveAutocompletion: autoLive,
                enableBasicAutocompletion: autoBasic,
                enableSnippets: autoSnippet,
                showLineNumbers:true,
                tabSize:2
            }}
        />
    )
}

export default HtmlCode;