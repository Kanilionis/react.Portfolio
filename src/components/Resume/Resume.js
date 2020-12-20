import React from 'react'
import codingResume from "../../images/Coding Resume.pdf"
import {PDFViewer} from 'pdf-viewer-reactjs'

const resumePDFViewer = () => {
    return (
        <PDFViewer
            document={{
                url: {codingResume},
            }}
        />
    )
}

export default resumePDFViewer