import React, { useContext, useMemo } from 'react'
import { codeContext } from '../../Context/onlineCodeContext'
import './preview.css'
const Preview = () => {
  const { html, css, js } = useContext(codeContext);
  const document = useMemo(() => {
    if (!html && !css && !js) return;
    return `
    <!DOCTYPE html>
    <html lang="en">
    <head>
      <meta charset="UTF-8">
      <meta http-equiv="X-UA-Compatible" content="IE=edge">
      <meta name="viewport" content="width=device-width, initial-scale=1.0">
    </head>
    <style>${css}</style>
    <body>
    ${html}

    <script>${js}</script>
    </body>
    </html>
    `
  }, [html,css,js])
  return (
    <>
    {document ? <iframe className='preview' title='preview' srcDoc={document}/>:
      <span className='loading'>Your code will display here</span>
    }
    </>
  )
}

export default Preview